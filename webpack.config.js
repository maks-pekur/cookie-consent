const path = require('path')

module.exports = {
	entry: './src/cookie-consent.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'cookie-consent.min.js',
		library: 'CookieConsent',
		libraryTarget: 'umd',
		umdNamedDefine: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
		],
	},
}
