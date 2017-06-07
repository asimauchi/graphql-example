'use strict';

/********************************
********* Video 12 **************
********************************/
// const {videoType} = require('../');
// const {
//   GraphQLInterfaceType,
//   GraphQLID,
//   GraphQLNonNull
// } = require('graphql');
//
// const nodeInterface = new GraphQLInterfaceType({
//   name: 'Node',
//   fields: {
//     id: {
//       type: new GraphQLNonNull(GraphQLID),
//     },
//   },
//   resolveType: (obj) => {
//     if (obj.title){
//       return videoType;
//     }
//
//     return null;
//   }
// });
//
// module.exports = nodeInterface;

/********************************
********* Video 13 **************
********************************/
// const {
//   nodeDefinitions,
//   fromGlobalId,
// } = require('graphql-relay');
// const { getObjectById } = require('./data');
//
// const { nodeInterface, nodeField } = nodeDefinitions(
//   (globalId) => {
//     const { type, id } = fromGlobalId(globalId);
//
//     return getObjectById(type.toLowerCase(), id);
//   },
//   (object) => {
//     const { videoType } = require('../');
//
//     if (object.title) {
//       return videoType;
//     }
//
//     return null;
//   }
// );
//
// exports.nodeInterface = nodeInterface;
// exports.nodeField = nodeField;

/********************************
********* Video 14 **************
********************************/
// const {
//   nodeDefinitions,
//   fromGlobalId,
// } = require('graphql-relay');
// const { getObjectById } = require('./data');
//
// const { nodeInterface, nodeField } = nodeDefinitions(
//   (globalId) => {
//     const { type, id } = fromGlobalId(globalId);
//
//     return getObjectById(type.toLowerCase(), id);
//   },
//   (object) => {
//     const { videoType } = require('../');
//
//     if (object.title) {
//       return videoType;
//     }
//
//     return null;
//   }
// );
//
// exports.nodeInterface = nodeInterface;
// exports.nodeField = nodeField;

/********************************
********* Video 15 **************
********************************/
const {
  nodeDefinitions,
  fromGlobalId,
} = require('graphql-relay');
const { getObjectById } = require('./data');

const { nodeInterface, nodeField } = nodeDefinitions(
  (globalId) => {
    const { type, id } = fromGlobalId(globalId);

    return getObjectById(type.toLowerCase(), id);
  },
  (object) => {
    const { videoType } = require('../');

    if (object.title) {
      return videoType;
    }

    return null;
  }
);

exports.nodeInterface = nodeInterface;
exports.nodeField = nodeField;
