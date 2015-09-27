var ghpages = require('gh-pages');
var path = require('path');
 
ghpages.publish(path.join(__dirname, 'www'), function(err) { 
	if (err) {
		console.log(err); 
		process.exit(1);
	}
	
	console.log('Deployed to gh-pages');
	process.exit(0);
});