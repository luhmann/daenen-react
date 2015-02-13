# Website for Softwarehaus Dänen4

This is the small website for www.daenen4.de. It is a fully isomorphic React-JS-App that runs on a NodeJS/Koa-Stack 
...in other words it's complete overkill for its purpose. It is supposed to be a fun learning experience.

## Dependencies

The singular hard dependency in order to compile, develop and deploy the app is a working NodeJs-Stack (a minimum
node version of `0.12.0` is required. If you have none you can install it on OSX using Homebrew: 

> brew install node

This will install the NodeJs package currently in homebrew, the `node`- and `npm`-binaries should now be available. If your
version is less than `0.12.0` you can install the `n`-version manager:

> npm install -g n

Afterwards execute

> n latest

to get the latest and finest version of node. You can also install a specific version of node, see the `n`-help for
more information. You could also use nvm for the same purpose.


# Installation

Install all required dependencies:

> npm install

You can now run a local web server for your development needs:

> npm run server:dev

The development-server should now be available at `http://localhost:3000`. This server includes a file-watcher which 
re-initializes the server on any file changes.

In order to see changes within the content, you need to run the frontend files watcher:

> npm run watch

It will build all frontend-dependencies and update them once you change anything.

# Updating your profile

The data of your profile is contained in a json-file in `client/javascripts/json`. You can add and change the
data-structures there to quickly update the page.


# Deployment

Deployment is done with `flightplan.js`. It is as simple as running:

> fly production 

...but needs to be set up correctly to function:
 
* Acquire the correct set of ssh-identity files (ask)
* Put them in `~/.ssh`
* Add them to ssh-agent: `ssh-add -K /Users/<User>/.ssh/daenen_deploy_rsa` 
* Enter password
   

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
  
exec /usr/local/bin/node --harmony /srv/www/daenen-react/current/app.js
``` 
