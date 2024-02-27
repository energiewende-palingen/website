const Card = require('./src/_includes/components/card');
const ChartComponent = require('./src/_includes/components/chart');

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
	eleventyConfig.addCollection("pages", function(collectionApi) {
		return collectionApi.getFilteredByGlob("src/pages/**/*.md");
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