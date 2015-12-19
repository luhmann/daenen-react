import hook from 'css-modules-require-hook';
import stylus from 'stylus';

// Do not load svg-files in tests
require.extensions['.svg'] = function() {
  return;
};

hook({
  // reduce class-names to the one in the stylesheets for tests
  generateScopedName: '[local]',
  extensions: ['.styl'],
  preprocessCss: (css, filename) => {
    return stylus(css)
      .set('filename', filename)
      .render();
  },
});

import jsdom from 'jsdom';

// setup the simplest document possible
var doc = jsdom.jsdom('<!doctype html><html><body></body></html>');

// get the window object out of the document
var win = doc.defaultView;

// set globals for mocha that make access to document and window feel
// natural in the test environment
global.document = doc;
global.window = win;

// take all properties of the window object and also attach it to the
// mocha global object
propagateToGlobal(win);

// from mocha-jsdom https://github.com/rstacruz/mocha-jsdom/blob/master/index.js#L80
function propagateToGlobal(window) {
  for (let key in window) {
    if (!window.hasOwnProperty(key)) continue;
    if (key in global) continue;

    global[key] = window[key];
  }
}
