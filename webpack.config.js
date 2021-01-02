var path = require('path');

module.exports = {
	entry: './dev/index.ts',
	module: {
		rules: [
			{
				test: /\.ts?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: [ '.tsx', '.ts', '.js' ],
	},
	output: {
		filename: 'script.js',
		path: path.resolve(__dirname, 'public/assets/js')
	}
}