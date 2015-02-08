/* this is a bootstrap file to install node-jsx which needs to be required before loading any file
 * that contains jsx-code */
require('node-jsx').install({harmony: true});
require('./server');
