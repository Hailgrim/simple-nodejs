var path = require('path');

module.exports = {
	mode: 'production',
	target: 'web',
	//watch: true,
	entry: './dev/index.tsx',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
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