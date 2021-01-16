const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
	mode: 'production',
	context: path.resolve(__dirname, 'src'),
	target: 'web',
	//watch: true,
	entry: {
		'assets/js/script': './tsx/index.tsx'
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css?$/,
				use: ['style-loader', 'css-loader'],
				exclude: /node_modules/
			},
			/*{
				test: /\.ico?$/,
				use: ['file-loader'],
				exclude: /node_modules/,
				type: 'asset/resource',
				generator: {
					filename: '[name].ico'
				}
			}*/
		]
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
			cacheGroups: {
				defaultVendors: {
					filename: 'assets/js/[name].[contenthash].js'
				}
			}
		}
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './index.html',
			scriptLoading: 'defer',
			favicon: './favicon.ico',
			hash: true,
			publicPath: '/'
		}),
		new CleanWebpackPlugin()
	]
}