'use strict';


var mongoose = require('mongoose'),
  Albums = mongoose.model('Albums'),
  Artists = mongoose.model('Artists'),
  Genres = mongoose.model('Genres'),
  Songs = mongoose.model('Songs');

exports.get_all_from_tag = function(req, res) {
	if (req.params.tag_id == 0){
		Albums.find({}).sort('name').exec(function(err, album) {
	    if (err)
	      res.send(err);
	    res.json(album);
		});
	} else if (req.params.tag_id == 1){
		Artists.find({}).sort('name').exec(function(err, artist) {
	    if (err)
	      res.send(err);
	    res.json(artist);
		});
	} else if (req.params.tag_id == 2){
		Genres.find({}).sort('name').exec(function(err, genre) {
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

exports.update_song_ids = function(req, res){
	if (req.params.tag_id == 0){
		Albums.findOneAndUpdate({id: req.params.id}, req.body, {new:true}, function(err, album){
		if (err)
	      res.send(err);
	    res.json(album);
		});
	} else if (req.params.tag_id == 1){
		Artists.findOneAndUpdate({id: req.params.genre_id}, req.body, {new:true}, function(err, genre){
		if (err)
	      res.send(err);
	    res.json(genre);
		});
	}
};

exports.update_song_info = function(req, res){
	Songs.findOneAndUpdate({id: req.params.id}, req.body, {new:true}, function(err, song){
		if (err)
			res.send(err);
		res.json(song);
	});
}

exports.delete_artist = function(req, res){
	if (req.params.tag_id == 1){
		Artists.remove({id: req.params.genre_id}, function(err, genre){
		if (err)
	      res.send(err);
	    res.json(genre);
		});
	}
};

exports.post_new_category = function(req, res) {
	if (req.params.tag_id == 0){
		var new_album = new Albums(req.body);
		new_album.save(function(err, album){
			if (err)
				res.send(err);
			res.json(album);
		});
	} else if (req.params.tag_id == 1){
		var new_artist = new Artists(req.body);
		new_artist.save(function(err, artist){
			if (err)
				res.send(err);
			res.json(artist);
		});
	} else if (req.params.tag_id == 2){
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
  		Songs.find({id: song_id}).sort('name').exec(function(err, song){
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