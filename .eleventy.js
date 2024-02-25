const Card = require('./src/_includes/components/card');

module.exports = function(eleventyConfig){
	eleventyConfig.addPassthroughCopy("src/assets/");
	eleventyConfig.addPassthroughCopy("src/css/");
	eleventyConfig.addWatchTarget("src/css");
	eleventyConfig.addWatchTarget("src/assets");
	
	eleventyConfig.addShortcode("Card", Card);
	// create a custom filtered collection that only matches a specific tag in `tags`
	eleventyConfig.addCollection("page_preview", function(collectionApi) {
		return collectionApi.getFilteredByTag("page_preview");
	});
	
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