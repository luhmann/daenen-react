var plan = require('flightplan');
var _ = require('lodash');
var deploySettings = require('./config/deploy.js');

plan.target('production', [
    {
      host: deploySettings.host,
      username: deploySettings.username,
      privateKey: deploySettings.privateKey,
      passphrase: deploySettings.passphrase,
      agent: process.env.SSH_AUTH_SOCK,
    },
]);

var config = {
  tmpDir: ('deploy-' + new Date().getTime()),
  serverBasePath:  deploySettings.baseFolder,
  keepReleases: 5,
};

// run commands on localhost
plan.local(function(local) {
  local.log('Execute tests');
  local.exec('npm test');

  local.log('Run build');
  local.exec('npm run build');

  if (plan.runtime.target === 'production') {
    var input = local.prompt('Ready for deploying to production? [yes]');
    if (input.indexOf('yes') === -1) {
      plan.abort('user canceled flight'); // this will stop the flightplan right away.
    }
  }

  local.log('Copy files to remote hosts');
  local.log('Found these files in "dist"-folder');
  var filesToCopy = local.find('dist -type f').stdout.split('\n');
  local.log('Adding package.json');
  filesToCopy.push('package.json');

  // rsync files to all the target's remote hosts
  local.transfer(filesToCopy, '/tmp/' + config.tmpDir);
});

// run commands on the target's remote hosts
plan.remote(function(remote) {
  remote.log('Move folder to web root');
  remote.exec('cp -R /tmp/' + config.tmpDir + ' ' + config.serverBasePath);
  remote.rm('-rf /tmp/' + config.tmpDir);

  remote.log('Install dependencies');
  remote.exec('node -v');
  remote.exec('cd ' + config.serverBasePath + config.tmpDir +  ' && npm --production install');

  remote.log('Reload application');
  remote.exec('ln -snf ' + config.serverBasePath + config.tmpDir + ' ' + config.serverBasePath + 'current');
  remote.exec('pm2 restart daenen4-config');

  remote.log('Checking for stale releases');
  var releases = getReleases(remote);

  if (releases.length > config.keepReleases) {
    var removeCount = releases.length - config.keepReleases;
    remote.log('Removing ' + removeCount + ' stale release(s)');

    // TODO: remove current
    releases = _.filter(releases, function(item) {
      return item !== 'current';
    });

    // take the two most top ones
    releases = releases.slice(0, removeCount);
    releases = releases.map(function(item) {
      return config.serverBasePath  + item;
    });

    remote.exec('rm -rf ' + releases.join(' '));
  }
});

function getReleases(remote) {
  var releases = remote.exec('ls ' + config.serverBasePath, {silent: true});

  if (releases.code === 0) {
    releases = releases.stdout.trim().split('\n');
    return releases;
  }

  return [];
}
