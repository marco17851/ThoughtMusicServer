'use strict';
module.exports = function(app) {
  var controller = require('../controllers/musicController');

  app.route('/api/1/category/tag/:tag_id')
  	.get(controller.get_all_from_tag)
  	.post(controller.post_new_category);

  // app.route('/api/1/category/tag/:tag_id/:genre_id')
  // 	.get(controller.get_song_ids)
  // 	.put(controller.update_song_ids);

  app.route('/api/1/songs/multi')
    .get(controller.get_songs);

  // app.route('/api/1/songs/multi/new')
  // 	.post(controller.post_new_song);
};