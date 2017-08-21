'use strict';


var mongoose = require('mongoose'),
  Genres = mongoose.model('Genres'),
  Songs = mongoose.model('Songs');

exports.get_all_from_tag = function(req, res) {
	if (req.params.tag_id == 2){
		Genres.find({}, function(err, genre) {
	    if (err)
	      res.send(err);
	    res.json(genre);
		});
	} else {
		res.send(req.params);
	}
  
};

// exports.get_song_ids = function(req, res) {
// 	if (req.params.tag_id == 2){
// 		Genres.find({id: req.params.genre_id}, function(err, genre) {
// 	    if (err)
// 	      res.send(err);
// 	    res.json(genre);
// 		});
// 	} else {
// 		res.send(req.params);
// 	}
  
// };

// exports.update_song_ids = function(req, res){
// 	if (req.params.tag_id == 2){
// 		Genres.findOneAndUpdate({id: req.params.genre_id}, req.body, {new:true}, function(err, genre){
// 		if (err)
// 	      res.send(err);
// 	    res.json(genre);
// 		});
// 	}
// };

exports.post_new_category = function(req, res) {
	if (req.params.tag_id == 2){
		var new_genre = new Genres(req.body);
		new_genre.save(function(err, genre){
			if (err)
				res.send(err);
			res.json(genre);
		});
	} else {
		res.send(req.params);
	}
};

exports.get_songs = function(req, res){
	var song_id = req.query.id;
  	console.log("id:" + song_id);

  	if (song_id != null){
  		Songs.find({id: song_id}, function(err, song){
			res.json(song);
  		});
  	} else {
  		Songs.find({}, function(err, song){
			if (err)
				res.send(err);
			res.json(song);
		});
  	}
	
};

// exports.post_new_song = function(req, res){
// 	var new_song = new Songs(req.body);
// 	new_song.save(function(err, song){
// 		if (err)
// 			res.send(err);
// 		res.json(song);
// 	});
// };