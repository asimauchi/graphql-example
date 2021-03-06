/********************************
********* Video 7 ***************
********************************/
// var _ = require('lodash');
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
// /* helper function to get video by ID*/
// const getVideoById = (id) => new Promise((resolve) => {
//   const [video] = _.filter(videos, function(video){
//     return video.id === id;
//   });
//
//   resolve(video);
// });
//
// exports.getVideoById = getVideoById;

/********************************
********* Video 9 ***************
********************************/

// var _ = require('lodash');
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
// /* helper function to get video by ID*/
// const getVideoById = (id) => new Promise((resolve) => {
//   const [video] = _.filter(videos, function(video){
//     return video.id === id;
//   });
//
//   resolve(video);
// });
//
// /* helper function to get multiple videos */
// const getVideos = () => new Promise((resolve) => resolve(videos));
//
// exports.getVideoById = getVideoById;
// exports.getVideos    = getVideos;

/********************************
********* Video 10 **************
********************************/

// var _ = require('lodash');
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
// /* helper function to get video by ID*/
// const getVideoById = (id) => new Promise((resolve) => {
//   const [video] = _.filter(videos, function(video){
//     return video.id === id;
//   });
//
//   resolve(video);
// });
//
// /* helper function to get multiple videos */
// const getVideos = () => new Promise((resolve) => resolve(videos));
//
// /* add another helper function for mutation */
// const createVideo = ({ title, duration, released}) => {
//   const video = {
//     id: (new Buffer(title, 'utf8')).toString('base64'),
//     title,
//     duration,
//     released,
//   };
//
//   videos.push(video);
//   return video;
// };
//
// exports.getVideoById = getVideoById;
// exports.getVideos    = getVideos;
// exports.createVideo = createVideo;

/********************************
********* Video 11 **************
********************************/

// var _ = require('lodash');
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
// /* helper function to get video by ID*/
// const getVideoById = (id) => new Promise((resolve) => {
//   const [video] = _.filter(videos, function(video){
//     return video.id === id;
//   });
//
//   resolve(video);
// });
//
// /* helper function to get multiple videos */
// const getVideos = () => new Promise((resolve) => resolve(videos));
//
// /* add another helper function for mutation */
// const createVideo = ({ title, duration, released}) => {
//   const video = {
//     id: (new Buffer(title, 'utf8')).toString('base64'),
//     title,
//     duration,
//     released,
//   };
//
//   videos.push(video);
//   return video;
// };
//
// exports.getVideoById = getVideoById;
// exports.getVideos    = getVideos;
// exports.createVideo = createVideo;

/********************************
********* Video 12 **************
********************************/

// var _ = require('lodash');
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
// /* helper function to get video by ID*/
// const getVideoById = (id) => new Promise((resolve) => {
//   const [video] = _.filter(videos, function(video){
//     return video.id === id;
//   });
//
//   resolve(video);
// });
//
// /* helper function to get multiple videos */
// const getVideos = () => new Promise((resolve) => resolve(videos));
//
// /* add another helper function for mutation */
// const createVideo = ({ title, duration, released}) => {
//   const video = {
//     id: (new Buffer(title, 'utf8')).toString('base64'),
//     title,
//     duration,
//     released,
//   };
//
//   videos.push(video);
//   return video;
// };
//
// exports.getVideoById = getVideoById;
// exports.getVideos    = getVideos;
// exports.createVideo = createVideo;

/********************************
********* Video 13 **************
********************************/

// var _ = require('lodash');
//
// const videoA = {
//   id: 'a',
//   title: 'Create a GraphQL Schema',
//   duration: 120,
//   released: true,
// };
// const videoB = {
//   id: 'b',
//   title: 'Ember.js CLI',
//   duration: 240,
//   released: false,
// };
// const videos = [videoA, videoB];
// const getVideoById = (id) => new Promise((resolve) => {
//   const [video] = videos.filter((video) => {
//     return video.id === id;
//   });
//
//   resolve(video);
// });
// const getVideos = () => new Promise((resolve) => resolve(videos));
// const createVideo = ({ title, duration, released }) => {
//   const video = {
//     id: (new Buffer(title, 'utf8')).toString('base64'),
//     title,
//     duration,
//     released,
//   };
//
//   videos.push(video);
//
//   return video;
// };
// const getObjectById = (type, id) => {
//   const types = {
//     video: getVideoById,
//   };
//
//   return types[type](id);
// };
//
// exports.getVideoById = getVideoById;
// exports.getVideos = getVideos;
// exports.createVideo = createVideo;
// exports.getObjectById = getObjectById;

/********************************
********* Video 14 **************
********************************/

// var _ = require('lodash');
//
// const videoA = {
//   id: 'a',
//   title: 'Create a GraphQL Schema',
//   duration: 120,
//   released: true,
// };
// const videoB = {
//   id: 'b',
//   title: 'Ember.js CLI',
//   duration: 240,
//   released: false,
// };
// const videos = [videoA, videoB];
// const getVideoById = (id) => new Promise((resolve) => {
//   const [video] = videos.filter((video) => {
//     return video.id === id;
//   });
//
//   resolve(video);
// });
// const getVideos = () => new Promise((resolve) => resolve(videos));
// const createVideo = ({ title, duration, released }) => {
//   const video = {
//     id: (new Buffer(title, 'utf8')).toString('base64'),
//     title,
//     duration,
//     released,
//   };
//
//   videos.push(video);
//
//   return video;
// };
// const getObjectById = (type, id) => {
//   const types = {
//     video: getVideoById,
//   };
//
//   return types[type](id);
// };
//
// exports.getVideoById = getVideoById;
// exports.getVideos = getVideos;
// exports.createVideo = createVideo;
// exports.getObjectById = getObjectById;

/********************************
********* Video 15 **************
********************************/

var _ = require('lodash');

const videoA = {
  id: 'a',
  title: 'Create a GraphQL Schema',
  duration: 120,
  released: true,
};
const videoB = {
  id: 'b',
  title: 'Ember.js CLI',
  duration: 240,
  released: false,
};
const videos = [videoA, videoB];
const getVideoById = (id) => new Promise((resolve) => {
  const [video] = videos.filter((video) => {
    return video.id === id;
  });

  resolve(video);
});
const getVideos = () => new Promise((resolve) => resolve(videos));
const createVideo = ({ title, duration, released }) => {
  const video = {
    id: (new Buffer(title, 'utf8')).toString('base64'),
    title,
    duration,
    released,
  };

  videos.push(video);

  return video;
};
const getObjectById = (type, id) => {
  const types = {
    video: getVideoById,
  };

  return types[type](id);
};

exports.getVideoById = getVideoById;
exports.getVideos = getVideos;
exports.createVideo = createVideo;
exports.getObjectById = getObjectById;
