const Card = require('./src/_includes/components/card');
const ChartComponent = require('./src/_includes/components/chart');

const markdownIt = require('markdown-it')
const markdownItAttrs = require('markdown-it-attrs')



module.exports = function(eleventyConfig){
	eleventyConfig.addPassthroughCopy("src/assets/");
	eleventyConfig.addPassthroughCopy("src/css/");
	eleventyConfig.addPassthroughCopy("src/scripts/");
	
	eleventyConfig.addWatchTarget("src/scripts/");
	eleventyConfig.addWatchTarget("src/css");
	eleventyConfig.addWatchTarget("src/assets");
	
	eleventyConfig.addShortcode("Card", Card);
	eleventyConfig.addShortcode("Chart", ChartComponent);
	// create a custom filtered collection that only matches a specific tag in `tags`
	eleventyConfig.addCollection("topics", function(collectionApi) {
		return collectionApi.getFilteredByGlob("src/topics/**/*.md");
	});

	eleventyConfig.addCollection("heatingNetworks", function(collectionApi) {
		return collectionApi.getFilteredByGlob("src/heating_networks/**/*.md");
	});

	eleventyConfig.addCollection("eventPages", function(collectionApi) {
		return collectionApi.getFilteredByGlob("src/eventPages/**/*.md");
	});

	const markdownItOptions = {
		html: true,
		breaks: true,
		linkify: true
	}
	  
	const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs)
	eleventyConfig.setLibrary('md', markdownLib)
	
	return {
		dir : {
			input: 'src',
			includes: '_includes',
			output: '_site',
		},
		templateFormats: ['md', 'njk', 'html'],
		markdownTemplateEngine : 'njk',
		htmlTemplateEngine: 'njk',
		dataTemplateEngine: 'njk',
	};
}