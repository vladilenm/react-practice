const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify('production')
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings:       false,
                drop_console:   true,
                unsafe:         true
            }
        })
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
