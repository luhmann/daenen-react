import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import '../stylesheets/base/reset.styl';

main()

function main() {
  const app = document.createElement('div');
  app.style.height = "100%"
  document.body.appendChild(app);
  ReactDOM.render(<App />, app);
}
