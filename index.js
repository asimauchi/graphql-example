'use strict';
/********************************
********* Video 1 ***************
********************************/

// const {graphql, buildSchema} = require('graphql');
//
// const schema = buildSchema(`
//   type Query {
//     foo: String
//   }
//
//   type Schema {
//     query: Query
//   }
// `);
//
// // how graphQL knows how to resolve queries
// const resolvers = {
//   foo: () => 'bar'
// }
//
// const query = `
//   query myFirstQuery {
//     foo
// }
// `;
//
// graphql(schema, query, resolvers)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));
//
// //run node index.js in terminal/commandPrompt to see result

/********************************
********* Video 2 ***************
********************************/

// const {graphql, buildSchema} = require('graphql');
//
// // Added new fields to the Query objectType
// const schema = buildSchema(`
//   type Query {
//     id: ID,
//     title: String,
//     duration: Int,
//     watched: Boolean
//   }
//
//   type Schema {
//     query: Query
//   }
// `);
//
// // Added fields to Query objectType means that the resolvers needs to know how
// // to handle the new fields
// const resolvers = {
//   id: () => '1',
//   title: () => 'bar',
//   duration: () => 180,
//   watched: () => true,
// }
//
// // Added fields to Query objectType means that we should change our query to
// // actually grab these fields
// const query = `
//   query myFirstQuery {
//     id
//     title
//     duration
//     watched
// }
// `;
//
// graphql(schema, query, resolvers)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));
//
// // run node index.js in terminal/commandPrompt to see result

/********************************
********* Video 3 ***************
********************************/

// const {graphql, buildSchema} = require('graphql');
//
// /* Query ObjectType should be able to query a variety of different objectTypes.
// Now the fields belong to a video objectType and the Query objectType will only
// have a notion of querying a video type. */
// const schema = buildSchema(`
//   type Video {
//     id: ID,
//     title: String,
//     duration: Int,
//     watched: Boolean
//   }
//
//   type Query {
//     video: Video
//   }
//
//   type Schema {
//     query: Query
//   }
// `);
//
// // Resolver fields seem to always be functions that return the appropiate stuff
// const resolvers = {
//   video: () => ({
//     id: () => '1',
//     title: () => 'bar',
//     duration: () => 180,
//     watched: () => true,
//   })
//
// }
//
// /* Given the above, we need to update the query below to search for a video with
// the appropiate fields */
//
// const query = `
//   query myFirstQuery {
//     video {
//       id,
//       title,
//       duration,
//       watched
//     }
// }
// `;
//
// graphql(schema, query, resolvers)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));
//
// // run node index.js in terminal/commandPrompt to see result

/********************************
********* Video 4 ***************
********************************/
// const {graphql, buildSchema} = require('graphql');
//
// /* Query ObjectType should be able to query a variety of different objectTypes.
// Now the fields belong to a video objectType and the Query objectType will only
// have a notion of querying a video type. */
// const schema = buildSchema(`
//   type Video {
//     id: ID,
//     title: String,
//     duration: Int,
//     watched: Boolean
//   }
//
//   type Query {
//     video: Video,
//     videos: [Video]
//   }
//
//   type Schema {
//     query: Query
//   }
// `);
//
// // Mocking two video objects
//
// const videoA = {
//   id: 'a',
//   title: 'Create a GraphQL Schema',
//   duration: 120,
//   watched: true
// };
//
// const videoB = {
//   id: 'b',
//   title: 'Ember.js CLI',
//   duration: 240,
//   watched: false
// };
//
// const videos = [videoA, videoB];
//
// // Resolver fields seem to always be functions that return the appropiate stuff
// const resolvers = {
//   video: () => ({
//     id: () => '1',
//     title: () => 'bar',
//     duration: () => 180,
//     watched: () => true,
//   }),
//
//   videos: () => videos,
// }
//
// /* Given the above, we need to update the query below to search for a video with
// the appropiate fields */
//
// const query = `
//   query myFirstQuery {
//     videos {
//       id,
//       title,
//       duration,
//       watched
//     }
// }
// `;
//
// graphql(schema, query, resolvers)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));
//
// // run node index.js in terminal/commandPrompt to see result

/********************************
********* Video 5 ***************
********************************/
// /* Instead of building out our GraphQL schema using this buildSchema() utility
// function, and then executing queries against that schema using the graphql()
// utility function, it's actually very common to serve up our schema as this
// middleware in some kind of web framework or library like Connect or Express.
// */
//
// // require express
// const express = require('express');
//
// // require graphql http server
// const graphqlHTTP = require('express-graphql');
//
// // define port, default to port 3000
// const PORT = process.env.PORT || 3000;
//
// //create server
// const server = express();
//
// const {graphql, buildSchema} = require('graphql');
//
// const schema = buildSchema(`
//   type Video {
//     id: ID,
//     title: String,
//     duration: Int,
//     watched: Boolean
//   }
//
//   type Query {
//     video: Video,
//     videos: [Video]
//   }
//
//   type Schema {
//     query: Query
//   }
// `);
//
// // Mocking two video objects
//
// const videoA = {
//   id: 'a',
//   title: 'Create a GraphQL Schema',
//   duration: 120,
//   watched: true
// };
//
// const videoB = {
//   id: 'b',
//   title: 'Ember.js CLI',
//   duration: 240,
//   watched: false
// };
//
// const videos = [videoA, videoB];
//
// // Resolver fields seem to always be functions that return the appropiate stuff
// const resolvers = {
//   video: () => ({
//     id: () => '1',
//     title: () => 'bar',
//     duration: () => 180,
//     watched: () => true,
//   }),
//
//   videos: () => videos,
// }
//
// /* Do not need the query variable anymore */
//
// /* pass in graphqlHTTP middleware function and pass
// in a configuration object with schema and graphiql (a visual editor for dealing
// with GraphQL schemas) */
//
// server.use('/graphql', graphqlHTTP({
//     schema,
//     graphiql: true,
//     /* without the following cannot resolve queries  */
//     rootValue: resolvers,
// }));
//
// server.listen(PORT, () => { graphqlHTTP
//   console.log(`Listening on http://localhost:${PORT}`);
// });
//
// // run node index.js in terminal/commandPrompt to see result

/********************************
********* Video 6 ***************
********************************/

// /* Instead of building out our GraphQL schema using this buildSchema() utility
// function, and then executing queries against that schema using the graphql()
// utility function, it's actually very common to serve up our schema as this
// middleware in some kind of web framework or library like Connect or Express.
// */
//
// // require express
// const express = require('express');
//
// // require graphql http server
// const graphqlHTTP = require('express-graphql');
//
// // define port, default to port 3000
// const PORT = process.env.PORT || 3000;
//
// //create server
// const server = express();
//
// /* Instead of grabbing graphql and buildSchema we are going to grab functions we
// need to write the schema in JS. See below
// */
// const {
//   GraphQLSchema,
//   GraphQLObjectType,
//   GraphQLID,
//   GraphQLInt,
//   GraphQLString,
//   GraphQLBoolean
// } = require('graphql');
//
// /* Going to build our schema utilizing JavaScript. Below we are just using
// the buildSchema() utility function with a template literal*/
//
// const videoType = new GraphQLObjectType({
//   name: 'VideoType',
//   description: 'A video on my app.',
//   fields: {
//     id: {
//       type: GraphQLID,
//       description: 'The id of the video'
//     },
//     title: {
//       type: GraphQLString,
//       description: 'The title of the video'
//     },
//     duration: {
//       type: GraphQLInt,
//       description: 'The duration of the video (in seconds)'
//     },
//     watched: {
//       type: GraphQLBoolean,
//       description: 'Whether or not the user has watched the video before'
//     }
//   },
// });
//
// const queryType = new GraphQLObjectType({
//   name: 'QueryType',
//   description: 'The root query type.',
//   fields: {
//     video: {
//       type: videoType,
//       /* function returns a promise that resolves with a simple object */
//       resolve: () => new Promise((resolve) => {
//         resolve({
//           id: 'a',
//           title: 'GraphQL',
//           duration: 180,
//           watched: false
//         });
//       }),
//     }
//   }
// });
//
// const schema = new GraphQLSchema({
//   query: queryType,
// });
//
// // Mocking two video objects
// const videoA = {
//   id: 'a',
//   title: 'Create a GraphQL Schema',
//   duration: 120,
//   watched: true
// };
//
// const videoB = {
//   id: 'b',
//   title: 'Ember.js CLI',
//   duration: 240,
//   watched: false
// };
//
// const videos = [videoA, videoB];
//
// /* Do not need the resolver that was here before. Handled by the schema defined
// above, written in JS */
//
// /* Do not need the query variable anymore */
//
// /* pass in graphqlHTTP middleware function and pass
// in a configuration object with schema and graphiql (a visual editor for dealing
// with GraphQL schemas) */
//
// server.use('/graphql', graphqlHTTP({
//     schema,
//     graphiql: true,
//     /* rootValue was removed, I hypothesize because the resolvers are now
//     defined within the schema we are passing in   */
// }));
//
// server.listen(PORT, () => { graphqlHTTP
//   console.log(`Listening on http://localhost:${PORT}`);
// });
//
// /* run node index.js in terminal/commandPrompt to see result at the following
// url: http://localhost:3000/graphql.
// After insert the following query into the graphiql editor and press play:
//         {
//           video {
//             id
//             title
//             duration
//             watched
//           }
//         }
//
// */

/********************************
********* Video 7 ***************
********************************/
// const { getVideoById } = require('./src/data');
//
// // require express
// const express = require('express');
//
// // require graphql http server
// const graphqlHTTP = require('express-graphql');
//
// // define port, default to port 3000
// const PORT = process.env.PORT || 3000;
//
// //create server
// const server = express();
//
// const {
//   GraphQLSchema,
//   GraphQLObjectType,
//   GraphQLID,
//   GraphQLInt,
//   GraphQLString,
//   GraphQLBoolean
// } = require('graphql');
//
// const videoType = new GraphQLObjectType({
//   name: 'VideoType',
//   description: 'A video on my app.',
//   fields: {
//     id: {
//       type: GraphQLID,
//       description: 'The id of the video'
//     },
//     title: {
//       type: GraphQLString,
//       description: 'The title of the video'
//     },
//     duration: {
//       type: GraphQLInt,
//       description: 'The duration of the video (in seconds)'
//     },
//     watched: {
//       type: GraphQLBoolean,
//       description: 'Whether or not the user has watched the video before'
//     }
//   },
// });
//
// /*Now going to add arguments to our fields*/
// const queryType = new GraphQLObjectType({
//   name: 'QueryType',
//   description: 'The root query type.',
//   fields: {
//     video: {
//       type: videoType,
//       args: {
//         id: {
//           type: GraphQLID,
//           description: 'The id of the video'
//         }
//       },
//       /*signature for resolve is (rootObject, args, context) */
//       resolve: (_, args) => {
//         return getVideoById(args.id)
//       },
//     }
//   }
// });
//
// const schema = new GraphQLSchema({
//   query: queryType,
// });
//
// /* Moved the mock data to /src/data/index.js */
//
// /* pass in graphqlHTTP middleware function and pass
// in a configuration object with schema and graphiql (a visual editor for dealing
// with GraphQL schemas) */
//
// server.use('/graphql', graphqlHTTP({
//     schema,
//     graphiql: true,
//     /* rootValue was removed, I hypothesize because the resolvers are now
//     defined within the schema we are passing in   */
// }));
//
// server.listen(PORT, () => { graphqlHTTP
//   console.log(`Listening on http://localhost:${PORT}`);
// });
//
// /* run node index.js in terminal/commandPrompt to see result at the following
// url: http://localhost:3000/graphql.
// After insert the following query into the graphiql editor and press play:
//         {
//           video (id: "a"){
//             id
//             title
//             duration
//             watched
//           }
//         }
// Afterwards you can change the id to fetch different videos
// */

/********************************
********* Video 8 ***************
********************************/

// const { getVideoById } = require('./src/data');
//
// // require express
// const express = require('express');
//
// // require graphql http server
// const graphqlHTTP = require('express-graphql');
//
// // define port, default to port 3000
// const PORT = process.env.PORT || 3000;
//
// //create server
// const server = express();
//
// /* Added GraphQLNonNull in order to make a particular field required */
// const {
//   GraphQLNonNull,
//   GraphQLSchema,
//   GraphQLObjectType,
//   GraphQLID,
//   GraphQLInt,
//   GraphQLString,
//   GraphQLBoolean
// } = require('graphql');
//
// const videoType = new GraphQLObjectType({
//   name: 'VideoType',
//   description: 'A video on my app.',
//   fields: {
//     id: {
//       type: GraphQLID,
//       description: 'The id of the video'
//     },
//     title: {
//       type: GraphQLString,
//       description: 'The title of the video'
//     },
//     duration: {
//       type: GraphQLInt,
//       description: 'The duration of the video (in seconds)'
//     },
//     watched: {
//       type: GraphQLBoolean,
//       description: 'Whether or not the user has watched the video before'
//     }
//   },
// });
//
// const queryType = new GraphQLObjectType({
//   name: 'QueryType',
//   description: 'The root query type.',
//   fields: {
//     video: {
//       type: videoType,
//       args: {
//         id: {
//           /* Make ID a required type, throws error otherwise */
//           type: new GraphQLNonNull(GraphQLID),
//           description: 'The id of the video'
//         }
//       },
//       /*signature for resolve is (rootObject, args, context) */
//       resolve: (_, args) => {
//         return getVideoById(args.id)
//       },
//     }
//   }
// });
//
// const schema = new GraphQLSchema({
//   query: queryType,
// });
//
// /* Moved the mock data to /src/data/index.js */
//
// /* pass in graphqlHTTP middleware function and pass
// in a configuration object with schema and graphiql (a visual editor for dealing
// with GraphQL schemas) */
//
// server.use('/graphql', graphqlHTTP({
//     schema,
//     graphiql: true,
//     /* rootValue was removed, I hypothesize because the resolvers are now
//     defined within the schema we are passing in   */
// }));
//
// server.listen(PORT, () => { graphqlHTTP
//   console.log(`Listening on http://localhost:${PORT}`);
// });
//
// /* run node index.js in terminal/commandPrompt to see results */

/********************************
********* Video 9 ***************
********************************/

// /* add getVideos helper method */
// const { getVideoById, getVideos } = require('./src/data');
// const express = require('express');
// const graphqlHTTP = require('express-graphql');
// const PORT = process.env.PORT || 3000;
// const server = express();
//
// /* Added GraphQLListType */
// const {
//   GraphQLNonNull,
//   GraphQLList,
//   GraphQLSchema,
//   GraphQLObjectType,
//   GraphQLID,
//   GraphQLInt,
//   GraphQLString,
//   GraphQLBoolean
// } = require('graphql');
//
// const videoType = new GraphQLObjectType({
//   name: 'VideoType',
//   description: 'A video on my app.',
//   fields: {
//     id: {
//       type: GraphQLID,
//       description: 'The id of the video'
//     },
//     title: {
//       type: GraphQLString,
//       description: 'The title of the video'
//     },
//     duration: {
//       type: GraphQLInt,
//       description: 'The duration of the video (in seconds)'
//     },
//     watched: {
//       type: GraphQLBoolean,
//       description: 'Whether or not the user has watched the video before'
//     }
//   },
// });
//
// const queryType = new GraphQLObjectType({
//   name: 'QueryType',
//   description: 'The root query type.',
//   fields: {
//     video: {
//       type: videoType,
//       args: {
//         id: {
//           /* Make ID a required type, throws error otherwise */
//           type: new GraphQLNonNull(GraphQLID),
//           description: 'The id of the video'
//         }
//       },
//       /*signature for resolve is (rootObject, args, context) */
//       resolve: (_, args) => {
//         return getVideoById(args.id)
//       },
//     },
//     /* Add videos to the queryType with a new GraphQLListType of videoType */
//     videos: {
//       type: new GraphQLList(videoType),
//       resolve: getVideos
//     }
//   }
// });
//
// const schema = new GraphQLSchema({
//   query: queryType,
// });
//
// server.use('/graphql', graphqlHTTP({
//     schema,
//     graphiql: true,
//     /* rootValue was removed, I hypothesize because the resolvers are now
//     defined within the schema we are passing in   */
// }));
//
// server.listen(PORT, () => { graphqlHTTP
//   console.log(`Listening on http://localhost:${PORT}`);
// });
//
// /* run node index.js in terminal/commandPrompt to see results */

/********************************
********* Video 10 **************
********************************/

// /* add getVideos helper method */
// const { getVideoById, getVideos, createVideo } = require('./src/data');
// const express = require('express');
// const graphqlHTTP = require('express-graphql');
// const PORT = process.env.PORT || 3000;
// const server = express();
//
// /* Added GraphQLListType */
// const {
//   GraphQLNonNull,
//   GraphQLList,
//   GraphQLSchema,
//   GraphQLObjectType,
//   GraphQLID,
//   GraphQLInt,
//   GraphQLString,
//   GraphQLBoolean
// } = require('graphql');
//
// const videoType = new GraphQLObjectType({
//   name: 'VideoType',
//   description: 'A video on my app.',
//   fields: {
//     id: {
//       type: GraphQLID,
//       description: 'The id of the video'
//     },
//     title: {
//       type: GraphQLString,
//       description: 'The title of the video'
//     },
//     duration: {
//       type: GraphQLInt,
//       description: 'The duration of the video (in seconds)'
//     },
//     watched: {
//       type: GraphQLBoolean,
//       description: 'Whether or not the user has watched the video before'
//     }
//   },
// });
//
// const queryType = new GraphQLObjectType({
//   name: 'QueryType',
//   description: 'The root query type.',
//   fields: {
//     video: {
//       type: videoType,
//       args: {
//         id: {
//           /* Make ID a required type, throws error otherwise */
//           type: new GraphQLNonNull(GraphQLID),
//           description: 'The id of the video'
//         }
//       },
//       /*signature for resolve is (rootObject, args, context) */
//       resolve: (_, args) => {
//         return getVideoById(args.id)
//       },
//     },
//     /* Add videos to the queryType with a new GraphQLListType of videoType */
//     videos: {
//       type: new GraphQLList(videoType),
//       resolve: getVideos
//     }
//   }
// });
//
// /* Creating new root mutation */
// const mutationType = new GraphQLObjectType({
//     name: 'Mutation',
//     description: 'The root Mutation type',
//     fields: {
//       createVideo: {
//         type: videoType,
//         args: {
//           title: {
//             type: new GraphQLNonNull(GraphQLString),
//             description: 'The title of the video.',
//           },
//           duration: {
//             type: new GraphQLNonNull(GraphQLInt),
//             description: 'The duration of the video (in seconds).',
//           },
//           released: {
//             type: new GraphQLNonNull(GraphQLBoolean),
//             description: 'Whether or not the video is released.',
//           },
//         },
//         resolve: (_, args) => {
//           return createVideo(args);
//         },
//       },
//     },
// });
//
// const schema = new GraphQLSchema({
//   query: queryType,
//   mutation: mutationType,
// });
//
// server.use('/graphql', graphqlHTTP({
//     schema,
//     graphiql: true,
//     /* rootValue was removed, I hypothesize because the resolvers are now
//     defined within the schema we are passing in   */
// }));
//
// server.listen(PORT, () => { graphqlHTTP
//   console.log(`Listening on http://localhost:${PORT}`);
// });
//
// /* run node index.js in terminal/commandPrompt to see results. Then within the
// GraphiQL editor type the following mutation to create a new video:
//
//       Mutation M {
//         createVideo(title: "Foo", duration: 300, Boolean: false) {
//           id,
//           title
//         }
//       }
//
// You can then later query videos to see the newly created video ---->
//     {
//       videos {
//         title
//       }
//     }
//  */

 /********************************
 ********* Video 11 **************
 ********************************/

 /* add getVideos helper method */
 const { getVideoById, getVideos, createVideo } = require('./src/data');
 const express = require('express');
 const graphqlHTTP = require('express-graphql');
 const PORT = process.env.PORT || 3000;
 const server = express();

 /* Added GraphQLListType */
 const {
   GraphQLNonNull,
   GraphQLInputObjectType,
   GraphQLList,
   GraphQLSchema,
   GraphQLObjectType,
   GraphQLID,
   GraphQLInt,
   GraphQLString,
   GraphQLBoolean
 } = require('graphql');

 const videoType = new GraphQLObjectType({
   name: 'VideoType',
   description: 'A video on my app.',
   fields: {
     id: {
       type: GraphQLID,
       description: 'The id of the video'
     },
     title: {
       type: GraphQLString,
       description: 'The title of the video'
     },
     duration: {
       type: GraphQLInt,
       description: 'The duration of the video (in seconds)'
     },
     watched: {
       type: GraphQLBoolean,
       description: 'Whether or not the user has watched the video before'
     }
   },
 });

 const queryType = new GraphQLObjectType({
   name: 'QueryType',
   description: 'The root query type.',
   fields: {
     video: {
       type: videoType,
       args: {
         id: {
           /* Make ID a required type, throws error otherwise */
           type: new GraphQLNonNull(GraphQLID),
           description: 'The id of the video'
         }
       },
       /*signature for resolve is (rootObject, args, context) */
       resolve: (_, args) => {
         return getVideoById(args.id)
       },
     },
     /* Add videos to the queryType with a new GraphQLListType of videoType */
     videos: {
       type: new GraphQLList(videoType),
       resolve: getVideos
     }
   }
 });

const videoInputType = new GraphQLInputObjectType({
  name: 'VideoInput',
  fields: {
    title: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The title of the video.',
    },
    duration: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The duration of the video (in seconds).',
    },
    released: {
      type: new GraphQLNonNull(GraphQLBoolean),
      description: 'Whether or not the video is released.',
    },
  }
})
 /* Instead of having this mutation field where each of the arguments correspond
 to some field that we want to create, we can use something called an input type
 to capture all of these arguments in a single object type and be able to query
 for these more complex related types.

 What we can do is get rid of all of these arguments and replace them with a
 single one called video and the type of this will be a new GraphQLNonNull and
 we'll call the argument here a videoInputType.*/

 const mutationType = new GraphQLObjectType({
     name: 'Mutation',
     description: 'The root Mutation type',
     fields: {
       createVideo: {
         type: videoType,
         args: {
           video: {
             type: new GraphQLNonNull(videoInputType)
           },
         },
         resolve: (_, args) => {
           return createVideo(args.video);
         },
       },
     },
 });

 const schema = new GraphQLSchema({
   query: queryType,
   mutation: mutationType,
 });

 server.use('/graphql', graphqlHTTP({
     schema,
     graphiql: true,
     /* rootValue was removed, I hypothesize because the resolvers are now
     defined within the schema we are passing in   */
 }));

 server.listen(PORT, () => { graphqlHTTP
   console.log(`Listening on http://localhost:${PORT}`);
 });

 /* run node index.js in terminal/commandPrompt to see results. */
