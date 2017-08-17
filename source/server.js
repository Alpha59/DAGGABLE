// Bundle the client assets with Webpack
//var StartWebpack = require('./webpack');
//StartWebpack();

// Create a basic Hapi.js server
const Hapi = require('hapi');
const Vision = require('vision');
const HapiReactViews = require('hapi-react-views');
const dateFormat = require('dateformat');
const format = "dd mmm HH:MM:ss";

const { graphqlHapi, graphiqlHapi } = require('graphql-server-hapi');
const { makeExecutableSchema } = require('graphql-tools');
const graphqlSchema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

// Basic Hapi.js connection stuff
const server = new Hapi.Server();
server.connection({
  host: '0.0.0.0',
  port: 8000
});

const executableSchema = makeExecutableSchema({
  typeDefs: [graphqlSchema],
  resolvers: resolvers
});

/*
// Add the React-rendering view engine
server.register(Vision, function(err){

    if (err){
        console.log(err);
    }

    server.views({
        engines: {
            jsx: HapiReactViews
        },
        relativeTo: __dirname,
        path: 'views'
    });

});

server.register({
    register: graphqlHapi,
    options: {
      path: '/graphql',
      graphqlOptions: {
        schema: executableSchema
      },
      route: {
        cors: true
      }
    },
}, (err) => err ? console.log(err) : undefined);
server.register({
  register: graphiqlHapi,
  options: {
    path: '/graphiql',
    graphiqlOptions: {
      endpointURL: '/graphql',
    }
  }
}, (err) => err ? console.log(err) : undefined);
*/

server.views({
    engines: {
        jsx: HapiReactViews
    },
    relativeTo: __dirname,
    path: 'views'
});

// Add main app route
server.route({
  method: 'GET',
  path: '/',
  handler: { //function(req, reply){
    view: 'Default'
    //return reply("hello world");
  }
});

// Add a route to serve static assets (CSS, JS, IMG)
server.route({
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: 'assets',
      index: ['index.html']
    }
  }
});

server.start(function() {
  console.log(dateFormat(new Date(), format) + ' - Server started at: ' + server.info.uri);
  console.log("yay.");
  console.log("yay-2.");
});

