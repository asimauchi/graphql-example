'use strict';

//import two vital pieces of the graphQL package
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean,
} = require('graphql');

// require express and graphQL HTTP Server
const express = require('express');
const graphqlHTTP = require('express-graphql');

//define port variable
const PORT = process.env.PORT || 3000;

//set up server
const server = express();

//build schema, which is a description of the capabilities of our graphQL server. Definitions of queries, mutations, and subscriptions
const queryType = new GraphQLObjectType({
    name: 'QueryType',
    description: 'The root query type.',
    fields: {
        video: {
            type: videoType,
            resolve: () => new Promise((resolve) => {
                resolve({
                    id: 'a',
                    title: 'GraphQL',
                    duration: 180,
                    watched: false,
                });
            });
        }
    }
});

const schema = new GraphQLSchema({
    query: queryType,
});
const schema = buildSchema(`

    type Video {
        id: ID,
        title: String,
        duration: Int,
        watched: Boolean,
    }

    type Query {
        video: Video
        videos: [Video]
    }

    type Schema {
        query: Query
    }
`);

const videoA = {
    id: 'a',
    title: 'Create GraphQL Schema',
    duration: 120,
    watched: true
}

const videoB = {
    id: 'b',
    title: 'Ember.js CLI',
    duration: 240,
    watched: false
}

const videos = [videoA, videoB]

//how GraphQL knows what to return is through resolvers

const resolvers = {
    video: () => ({
        id: '1',
        title: 'foo',
        duration: 180,
        watched: true,
    }),
    videos: () => videos,
};


server.use('/graphql', graphqlHTTP({
        schema,
        graphiql: true,
        rootValue: resolvers,
    })
);

server.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});
