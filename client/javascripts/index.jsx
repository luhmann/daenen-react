import React from 'react';
import ReactDOM from 'react-dom';
import getRoutes from './config/routes.jsx';
import '../stylesheets/base/reset.styl';

main()

function main() {
  const app = document.createElement('div');
  app.style.height = "100%"
  document.body.appendChild(app);

  ReactDOM.render(getRoutes(), app);
}
