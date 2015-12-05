# Website for Softwarehaus Dänen4

This is the small website for www.daenen4.de. It is a fully isomorphic/universal React-JS-App that runs on a NodeJS/Express-Stack
...in other words it's complete overkill for its purpose. It is supposed to be a fun learning experience.

## Dependencies

The singular hard dependency in order to compile, develop and deploy the app is a working NodeJs-Stack (a minimum node version of `5.1.1` is required. If you have none you can install it on OSX using Homebrew:

> brew install node

This will install the NodeJs package currently in homebrew, the `node`- and `npm`-binaries should now be available. If your version is less than `5.1.1` you can install the `n`-version manager:

> npm install -g n

Afterwards execute

> n 5.1.1

to get the this exact version of node. See the `n`-help for more information. You could also use nvm for the same purpose.

If you plan on doing a lot of stuff with node consider using [nvm](https://github.com/creationix/nvm)


# Installation

Install all required dependencies:

> npm install

You can now run the real application server for development:

> npm start

This will start up two concurrent webpack-watchers that constantly compile the frontend-files and the express-application server and a nodemon-watcher that looks for changes on the express-server and reloads it. The development-server should now be available at `http://localhost:3000`.

If you want to take advantage of features webpack-dev-server offers you can also run:

> npm run start-react

This will fire up a webpack dev-server at `http://localhost:8080`, which supports hot-reloading and might be more suitable if you just want to tweak the frontend.

# Updating your profile

The data of your profile is contained in a json-file in `client/javascripts/json`. You can add and change the
data-structures there to quickly update the page.


# Deployment

Deployment is done with `flightplan.js`. It is as simple as running:

> fly production

...but needs to be set up correctly to function:

* Acquire the correct set of ssh-keys (ask)
* Put them in `~/.ssh`
* Add them to ssh-agent: `ssh-add -K /Users/<User>/.ssh/daenen_deploy_rsa`
* Enter password

# Technologies

* react + react-router
* express4
* Stylus + CSS-Modules
* Webpack
* Isomorphic/Universal rendering
