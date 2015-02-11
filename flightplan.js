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

var config = {
    tmpDir: ('deploy-' + new Date().getTime()),
    serverBasePath:  '/srv/www/daenen-react/',
    keepReleases: 5
};


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
    local.transfer(filesToCopy, '/tmp/' + config.tmpDir);
    local.transfer(buildDir, '/tmp/' + config.tmpDir);
});

// run commands on the target's remote hosts
plan.remote(function(remote) {
    remote.log('Move folder to web root');
    remote.exec('cp -R /tmp/' + config.tmpDir + ' ' + config.serverBasePath);
    remote.rm('-rf /tmp/' + config.tmpDir);

    remote.log('Install dependencies');
    remote.exec('npm --production --prefix ' + config.serverBasePath + config.tmpDir
    + ' install ' + config.serverBasePath + config.tmpDir);

    remote.log('Reload application');
    remote.exec('ln -snf ' + config.serverBasePath + config.tmpDir + ' ' + config.serverBasePath + 'current');
    remote.exec('sudo stop daenen');
    remote.exec('sudo start daenen');

    remote.log('Checking for stale releases');
    var releases = getReleases(remote);

    if (releases.length > config.keepReleases) {
        var removeCount = releases.length - config.keepReleases;
        remote.log('Removing ' + removeCount + ' stale release(s)');

        releases = releases.slice(0, removeCount);
        releases = releases.map(function (item) {
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

