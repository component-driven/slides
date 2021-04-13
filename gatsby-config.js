module.exports = {
	plugins: [
		{
			resolve: 'gatsby-theme-mdx-deck',
			options: {
				// source directory
				contentPath: './src',
				// base path for routes generate by this theme
				basePath: '/',
			},
		},
		{
			resolve: 'gatsby-plugin-compile-es6-packages',
			options: {
				modules: [
					'mdx-deck',
					'gatsby-theme-mdx-deck',
					'@mdx-deck/themes',
					'@mdx-deck/gatsby-plugin',
				],
			},
		},
	],
};
