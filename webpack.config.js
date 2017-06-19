const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");

module.exports = {
    devtool: "source-map",
    entry: "./index.js",
    output: {path: path.resolve(__dirname, "build"), publicPath: "build/", filename: "bundle.js"},
    target: "node",
    module: {
        rules: [
            {
                test: /global-styles\/.+\.scss$/,
                loader: ExtractTextPlugin.extract({
                    loader: "css-loader!autoprefixer-loader?browsers=last 2 version!resolve-url-loader!sass-loader?sourceMap"
                })
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallbackLoader: "style-loader",
                    loader: {
                        loader: "css-loader", options: {
                            modules: true,
                            localIdentName: '[local]'
                        }
                    }
                })
            },
            {
                test: /\.scss$/,
                exclude: /node_modules|global-styles/,
                use: ExtractTextPlugin.extract({
                    fallbackLoader: "style-loader",

                    loader: [
                        {
                            loader: "css-loader", options: {
                            modules: true,
                            localIdentName: '[path][name]-[local]-[hash:5]'
                        }
                        }, "autoprefixer-loader?browsers=last 2 version", "resolve-url-loader", "sass-loader?sourceMap"]
                })
            },
            {
                test: /\.jpg$/,
                use: [{loader: "url-loader", options: {limit: 5000}}]
            }
        ]
    },
    plugins: [new ExtractTextPlugin({filename: "style.css", allChunks: true})]
};
