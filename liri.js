var twitterKeys = require("./keys.js");
var Twitter = require('twitter" 1.7.1 ');
var Spotify = require('node-spotify-api');
var request = require('request');

var inputString = process.argv;

var command = inputString[2];
var searchTerm = inputString[3];

var output;

if (command === "my-tweets") {
	output = tweets;

	var params = {screen_name: 'jackhillgard'};
	client.get('statuses/user_timeline',params, function(error, tweets, response) {
		if (!error) {
			console.log(tweets);
		} else {
			throw error
		}
	});
}





else if (command === "spotify-this-song") {
	output = data;

	var spotify = new Spotify({
  id: '53e80b8d271d43359b53ae08047817d4',
  secret: 'ac3648b39b0d45c1b2777ee7f04ad434'
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});
}





else if (command === "movie-this") {
	output = null;

	request("http://www.omdbapi.com/apikey=40e9cece", function(error, response, body) {
		if (!error &&response.statusCode === 200) {
			console.log(JSON.parse(body).title + JSON.parse(body).year + JSON.parse(body).imdbRating + rottenTomatoesRating + JSON.parse(body).plot);
		}
	})
}





else if (command === "do-what-it-says") {
	output = data;

	var spotify = new Spotify({
  id: '53e80b8d271d43359b53ae08047817d4',
  secret: 'ac3648b39b0d45c1b2777ee7f04ad434'
});
 
spotify.search({ type: 'track', query: 'I Want It That Way' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});

}


console.log(output);