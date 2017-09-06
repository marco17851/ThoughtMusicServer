'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AlbumSchema = new Schema({
  name: {
    type: String
  },
  id: {
    type: String
  },
  song_ids: [{
    type: Number
  }],
  cover_url: {
    type: String
  }
});

var ArtistSchema = new Schema({
  name: {
    type: String
  },
  id: {
    type: String
  },
  song_ids: [{
    type: Number
  }],
  cover_url: {
    type: String
  }
});

var GenreSchema = new Schema({
  name: {
    type: String
  },
  id: {
    type: String
  },
  song_ids: [{
    type: Number
  }]
});

var SongSchema = new Schema({
  name: {
    type: String
  },
  id: {
    type: Number
  },
  type: {
    type: [{
      type: String,
      enum: ['basic', 'artist', 'stream']
    }],
    default: ['basic']
  },
  description: {
    type: String
  },
  cover_url: {
    type: String
  }
});

module.exports = mongoose.model('Albums', AlbumSchema);
module.exports = mongoose.model('Artists', ArtistSchema);
module.exports = mongoose.model('Genres', GenreSchema);
module.exports = mongoose.model('Songs', SongSchema);