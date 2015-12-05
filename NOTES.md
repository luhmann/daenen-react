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
