import path from 'path';
import express from 'express';
import compression from 'compression';
import favicon from 'serve-favicon';
import robots from 'express-robots';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RoutingContext } from 'react-router';
import routes from '../client/javascripts/config/routes.jsx';

import template from '../dist/public/index.html';

const app = express();
const staticDir = path.resolve('dist', 'public');
const favIconPath = path.resolve(staticDir, 'favicon.ico');
const port = process.env.APP_PORT || 3000;

app.use(compression());
app.use(favicon(favIconPath));
app.use(robots({ UserAgent: '*', Disallow: '' }))
app.use('/static', express.static(staticDir));

app.use((req, res) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send(error.message)
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search)
      } else if (renderProps) {
        const componentHTML = renderToString(<RoutingContext { ...renderProps } />);
        const HTML = template({html: componentHTML });
        res.status(200).send(HTML)
      } else {
        res.status(404).send('Not found')
      }
    })
});

app.listen(port, 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://localhost:${ port }`);
});
