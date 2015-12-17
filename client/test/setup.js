import hook from 'css-modules-require-hook';
import stylus from 'stylus';

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
