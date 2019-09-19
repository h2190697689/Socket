const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: {
        min: "./client/min.js",
        other: "./client/other.js"
    },
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"]
                }
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./html/template.html",
            title: "min的聊天室",
            filename: "min.html",
            chunks: ["min"],   // 指定引入的js代码
            minify:{
                collapseWhitespace:true //折叠空白区域 也就是压缩代码
            }
            // hash:true   // 消除js引入缓存,自动添加一段hash值
        }),
        new HtmlWebpackPlugin({
            template: "./html/template.html",
            title: "other的聊天室",
            filename: "other.html",
            chunks: ["other"],  // 指定引入的js代码
            minify:{
                collapseWhitespace:true //折叠空白区域 也就是压缩代码
            }
            // hash:true  // 消除js引入缓存,自动添加一段hash值
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        open: true,
        port: 8080,
        hot: true,
        hotOnly: true
    }
}