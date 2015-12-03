import path from 'path';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { match, RoutingContext } from 'react-router';
import getRoutes from '../client/javascripts/config/routes.jsx';
const routes = getRoutes();

const app = express();
const port = process.env.APP_PORT || 3000;

app.use((req, res) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send(error.message)
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search)
      } else if (renderProps) {
        res.status(200).send(renderToString(<RoutingContext {...renderProps} />))
      } else {
        res.status(404).send('Not found')
      }
    })
});


// import Hapi from 'hapi';
// import { renderToString } from 'react-dom/server';
// import { match, RoutingContext } from 'react-router';
// import getRoutes from '../client/javascripts/config/routes.jsx';
// const routes = getRoutes();
//
// module.exports = function() {
//   var server = new Hapi.Server();
//   server.connection({ port: 3000 });
//
//   server.route({
//       method: 'GET',
//       path: '/{p*}',
//       handler: function (request, reply) {
//         console.log(request.path, routes);
//         match({ routes, location: request.path }, (error, redirectLocation, renderProps) => {
//           console.log(error, redirectLocation, renderProps);
//             if (error) {
//               reply(500, error.message);
//             } else if (redirectLocation) {
//               reply(302, redirectLocation.pathname + redirectLocation.search);
//             } else if (renderProps) {
//               reply(renderToString(<RoutingContext {...renderProps} />));
//             } else {
//               reply(404, 'Not found');
//             }
//           })
//         }
//   });
//
//   server.start(function () {
//       console.log('Server running at:', server.info.uri);
//   });
// }
