var plan = require('flightplan');

plan.target('production', [
    {
        host: 'www.daenen4.de',
        username: 'deploy',
        privateKey: '/Users/jfd/.ssh/daenen_deploy_rsa',
        passphrase: '2a97CTdUckfELTQX?bPDCW(mFX}robtcxbM9jnDMsbzkdtTWvg',
        agent: process.env.SSH_AUTH_SOCK
    }
]);

var tmpDir = 'deploy-' + new Date().getTime();
var serverBasePath = '/srv/www/daenen-react/'

// run commands on localhost
plan.local(function(local) {
    local.log('Run build');
    local.exec('npm run build');

    if(plan.runtime.target === 'production') {
        var input = local.prompt('Ready for deploying to production? [yes]');
        if (input.indexOf('yes') === -1) {
            local.abort('user canceled flight'); // this will stop the flightplan right away.
        }
    }

    local.log('Copy files to remote hosts');
    var filesToCopy = local.exec('git ls-files', {silent: true});
    var buildDir = local.exec('find public -print', {silent: true});

    // rsync files to all the target's remote hosts
    local.transfer(filesToCopy, '/tmp/' + tmpDir);
    local.transfer(buildDir, '/tmp/' + tmpDir);
});

// run commands on the target's remote hosts
plan.remote(function(remote) {
    remote.log('Move folder to web root');
    remote.exec('cp -R /tmp/' + tmpDir + ' ' + serverBasePath);
    remote.rm('-rf /tmp/' + tmpDir);

    remote.log('Install dependencies');
    remote.exec('npm --production --prefix ' + serverBasePath + tmpDir
    + ' install ' + serverBasePath + tmpDir);

    remote.log('Reload application');
    remote.exec('ln -snf ' + serverBasePath + tmpDir + ' /srv/www/daenen-react/current');
    remote.exec('sudo stop daenen');
    remote.exec('sudo start daenen');
});

