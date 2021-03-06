const path    = require('path');
const webpack = require('webpack');
const project = require('./project.config')
module.exports = {
    entry: {
        vendor: project.vendor
    },
    mode: 'production',
    output: {
        path: path.resolve(project.basePath, 'dll'),
        filename: '[name].dll.[hash:5].js',
        library: '[name]_library'
    },
    performance: {
        hints: false
    },
    plugins: [
        new webpack.DllPlugin({
            name: '[name]_library',
            path: path.resolve(project.basePath, 'dll', 'manifest.json'),
            context: project.basePath
        })
    ]
};
