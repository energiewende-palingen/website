module.exports = function(eleventyConfig){
	eleventyConfig.addPassthroughCopy("src/assets/");
	return {
		dir : {
			input: 'src',
			includes: 'includes',
			output: '_site',
		},
		templateFormats: ['md', 'njk', 'html'],
		markdownTemplateEngine : 'njk',
		htmlTemplateEngine: 'njk',
		dataTemplateEngine: 'njk',
	};
}