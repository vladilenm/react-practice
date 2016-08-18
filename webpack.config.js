const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/dev-server',
        './src/index.js'
    ],
    output: {
        publicPath: 'http://localhost:3000/',
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    watch: NODE_ENV == 'development',
    watchOptions: {
        aggregateTimeout: 100
    },
    devtool: NODE_ENV == 'development' ? 'cheap-inline-module-source-map' : null,
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('bundle.css'),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        modulesDirectories: ['node_modules', 'bower_components'],
        moduleTemplates: ['*', 'index'],
        extensions: ['', '.js'],
        root: __dirname + '/src'
    },
    resolveLoader: {
        modulesDirectories: ['node_modules', 'bower_components'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ['', '.js']
    },
    devServer: {
        host: 'localhost',
        port: 3000,
        contentBase: __dirname + '/public',
        inline: true,
        hot: true,
        historyApiFallback: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel-loader'],
                include: [
                    path.resolve(__dirname, 'src')
                ],
                plugins: ['transform-runtime']
            },
            {
                test: /\.less$/,
                loader: 'style' +
                '!css?sourceMap' +
                '!autoprefixer-loader?browsers=last 2 version' +
                '!less?sourceMap=source-map-less-inline'
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                loader: 'file?name=img/[path][name].[ext]'
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]'
            },
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file?name=fonts/[name].[ext]'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml&name=fonts/[name].[ext]'
            }
        ]
    }
};


if (NODE_ENV == 'production') {
    console.log('WTF');
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings:       false,
                drop_console:   true,
                unsafe:         true
            }
        })
    );
}
