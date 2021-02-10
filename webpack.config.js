import path from 'path';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import TerserWebpackPlugin from 'terser-webpack-plugin';

const __dirname = path.resolve();

export default {
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