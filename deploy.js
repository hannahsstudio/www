#!/usr/bin/env node

var ghpages = require('gh-pages');
var path = require('path');
 
ghpages.publish(path.join(__dirname, 'www'), {
	repo: 'https://' + process.env.GH_TOKEN + '@github.com/hannahsstudio/www.git',
	user: {
	    name: 'Travis-CI',
	    email: 'travis@hannahsstudio.com'
	},
	logger: function(message) {
	    console.log(message);
	  }
},function(err) { 
	if (err) {
		console.log(err); 
		process.exit(1);
	}
	
	console.log('Deployed to gh-pages');
	process.exit(0);
});