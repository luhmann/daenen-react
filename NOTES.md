## Notes (no need to do this)


#### How to set correct sudo-rights for deployment user (on server)

Change /etc/sudoers
> sudo visudo

Add near the end of statements
> deploy  ALL=(root) NOPASSWD: /sbin/start daenen, /sbin/stop daenen

#### Configuring the upstart job

* `vim /etc/init/daenen.conf`

```shell
author          "Jan Florian Dietrich"
description     "daenen-react"
setuid          "www-data"

start on (local-filesystems and net-device-up IFACE=venet0:0)
stop on shutdown

respawn
console log
env NODE_ENV=production

exec
exec /usr/local/bin/node --harmony /srv/www/daenen-react/current/dist/server.js
```
#### Log Messages

Log Messages on success and failure can be found at `/var/log/upstart/daenen.log`

## PM2 Config

```json
{
  "name"             : "daenen4-config",
  "cwd"              : "/srv/www/daenen-react/current",
  "script"           : "/srv/www/daenen-react/current/dist/server.js",
  "node_args"        : [],
  "log_date_format"  : "YYYY-MM-DD HH:mm Z",
  "instances"        : 1, //or 0 => 'max'
  "min_uptime"       : "1000s", // 200 seconds, defaults to 1000
  "max_restarts"     : 15, // defaults to 15
  "cron_restart"     : "1 0 * * *",
  "watch"            : false,
  "ignore_watch"      : ["[\\/\\\\]\\./", "node_modules"],
  "merge_logs"       : true,
  "exec_interpreter" : "node",
  "exec_mode"        : "fork",
  "autorestart"      : true, // enable/disable automatic restart when an app crashes or exits
  "vizion"           : false, // enable/disable vizion features (versioning control)
  "env": {
    "NODE_ENV": "production",
    "APP_ROOT": "__dirname"
  }
}
```
