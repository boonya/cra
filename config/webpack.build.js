const common = require('./webpack.common');
const TerserPlugin = require('terser-webpack-plugin');
const {merge} = require('webpack-merge');

module.exports = merge(common, {
	mode: 'production',
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin()],
	},
});
