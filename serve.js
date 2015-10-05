#!/usr/bin/env node

var Metalsmith 		= require('metalsmith'),
	markdown 		= require('metalsmith-markdown-remarkable'),
	layouts 		= require('metalsmith-layouts'),
	sass 			= require('metalsmith-sass'),
	collections 	= require('metalsmith-collections'),
	permalinks 		= require('metalsmith-permalinks'),
	metadata		= require('metalsmith-metadata'),
	fingerprint		= require('metalsmith-fingerprint'),
	minify			= require('metalsmith-html-minifier'),
	browserSync 	= require('metalsmith-browser-sync'),
	rename			= require('metalsmith-rename'),
	helpers			= require('metalsmith-register-helpers');


Metalsmith(__dirname)

	// Process CSS
	.use(sass({
		outputStyle: 'compressed',
    	includePaths: ['bower_components/']
	}))
	.use(fingerprint({
		pattern: ['styles/style.css']
	}))

	// Process Metadata
	.use(metadata({
		endorsements: "content/endorsements.json"
	}))
	.use(collections({
		pages: {
			pattern: 'content/pages/*.md'
		}
	}))

	// Process Markdown
	.use(markdown({
		html: true,
      	typographer: true,
	}))
	.use(permalinks({
		pattern: ':menu'
	}))
	
	// Process Templates
	.use(helpers())
	.use(layouts({
		engine: 'handlebars',
		default: 'default-layout.hbs',
		partials: 'partials',
		pattern: '**/*.html'
	}))
	
	// .use(rename([[/\.hbs$/, '.html']]))

    .destination('.tmp')

    // Serve and watch for changes
  	.use(browserSync({
    	server : '.tmp',
    	files : ['src/**/*', 'layouts/**/*', 'partials/**/*']
  	}))
    .build(err => { if (err) console.log(err) });