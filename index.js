var Metalsmith 		= require('metalsmith'),
	markdown 		= require('metalsmith-markdown-remarkable'),
	layouts 		= require('metalsmith-layouts'),
	sass 			= require('metalsmith-sass'),
	collections 	= require('metalsmith-collections'),
	permalinks 		= require('metalsmith-permalinks');


Metalsmith(__dirname)
	.use(sass({
		outputStyle: 'compressed',
    	includePaths: ['bower_components/']
	}))
	.use(markdown({
		html: true,
      	typographer: true,
      	quotes: "«»‘’"
	}))
	.use(collections({
		pages: {
			pattern: 'content/pages/*.md'
		}
	}))
	.use(permalinks({
		pattern: ':menu'
	}))
	.use(layouts({
		engine: 'handlebars',
		default: 'default-layout.hbs',
		partials: 'partials'
	}))
    .destination('./www')
    .build(err => { if (err) console.log(err) });