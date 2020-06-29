var path = require("path")

module.exports = {
	// Change to your "entry-point".
	mode: "development",
	entry: "./src/index",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "app.bundle.js",
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".json"],
	},
	module: {
		rules: [
			{
				// Include ts, tsx, js, and jsx files.
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				options: {
					presets: [
						"@babel/preset-react",
						[
							"@babel/preset-env",
							{
								targets: {
									node: true,
								},
							},
						],
					],
					plugins: [
						"@babel/proposal-class-properties",
						"@babel/proposal-object-rest-spread",
					],
				},
			},
		],
	},
}
