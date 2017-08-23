import webpack from "webpack"
import {
    resolve,
    join
} from "path"
import Dashboard from 'webpack-dashboard'
import DashboardPlugin from 'webpack-dashboard/plugin'
import HtmlWebpackPlugin from "html-webpack-plugin"

const dashboard = new Dashboard();

export default {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, "dist")
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    },
    plugins: [
        new DashboardPlugin(dashboard.setData),
        new HtmlWebpackPlugin({
            template:'src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: join(__dirname, "dist"),
        compress: true,
        quiet: true,
        hot: true,
        port: 9000
    }
}