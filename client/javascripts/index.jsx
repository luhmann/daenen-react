import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import '../stylesheets/base/reset.styl';

main();

function main() {
  const app = document.querySelector('.base');
  app.innerHTML = '';

  ReactDOM.render(<App/>, app);
}
