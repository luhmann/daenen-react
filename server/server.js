import Hapi from 'hapi';
import { renderToString } = 'react-dom/server'
import { match, RoutingContext } from 'react-router'
import routes from '../client/javascripts/routes.jsx'


var server = new Hapi.Server();
server.connection({ port: 3000 });

server.route({
    method: 'GET',
    path: '/{p*}',
    handler: function (request, reply) {
      console.log(request.path);
      match({ routes, location: request.path }, (error, redirectLocation, renderProps) => {
          if (error) {
            reply(500, error.message);
          } else if (redirectLocation) {
            reply(302, redirectLocation.pathname + redirectLocation.search);
          } else if (renderProps) {
            reply(renderToString(<RoutingContext {...renderProps} />));
          } else {
            reply(404, 'Not found');
          }
        })
      }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});
