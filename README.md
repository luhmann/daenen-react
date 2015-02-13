# Website for Softwarehaus Dänen4

This is the small website for www.daenen4.de. It is a fully isomorphic React-JS-App that runs on a NodeJS/Koa-Stack 
...in other words it's complete overkill for its purpose. It is supposed to be a fun learning experience.

## Depenencies

The singular hard dependency in order to compile, develop and deploy the app is a working NodeJs-Stack (a minimum
node Version of 0.12.0 is required. If you have none you can install it on a Mac by executing:

> brew install node

This will install the current nodejs package, the `node`- and `npm`-binaries should now be available. If your
version is less than `0.12.0` you can install the `n`-version manager:

> npm install -g n

Afterwards execute

> n latest

to get the latest and finest version of node. You can also install a specific version of node, see the `n`-help for
more information.


# Installation

Install all required dependencies:

> npm install

You can then run a local web server for your development needs:

> npm run server:dev

This server includes a file-watcher which reinitializes the server on any file changes.

In order to see changes within the content, you need to run the frontend files watcher:

> npm run watch

# Updating your profile

The data contained in your profiles comes from a json-file in `client/javascripts/json`. You can add and change the
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
How to set correct sudo-rights for deployment user (on server)

Change /etc/sudoers
> sudo visudo

Add near the end of statements
> deploy  ALL=(root) NOPASSWD: /sbin/start daenen, /sbin/stop daenen


