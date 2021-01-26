const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = {
	mode: 'development',
	context: path.resolve(__dirname, 'src'),
	target: 'web',
	//watch: true,
	devtool: 'source-map',
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
				test: /\.s[ac]ss?$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			},
			/*{
				test: /\.ico?$/,
				use: 'file-loader',
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
					//filename: 'assets/js/[name].[contenthash].js'
					filename: 'assets/js/[name].js'
				}
			}
		},
		minimizer: [
			new TerserWebpackPlugin(),
			new CssMinimizerPlugin()
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	output: {
		//filename: '[name].[contenthash].js',
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'assets/css/style.css'
		}),
		/*new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'src/css/style.css'),
					to: path.resolve(__dirname, 'dist/assets/css')
				}
			]
		}),*/
		new HTMLWebpackPlugin({
			template: './index.html',
			scriptLoading: 'defer',
			favicon: './favicon.ico',
			hash: true,
			publicPath: '/',
			minify: true
		}),
		new CleanWebpackPlugin()
	]
}