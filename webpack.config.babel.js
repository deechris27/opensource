//const join = require('path').join;

import {join} from 'path';

const context = join(__dirname, 'src');

export default {
    context,
    entry:"./index",
    output: {
        path: join(__dirname, 'dist'),
        libraryTarget: 'umd',
        library: 'mytidbit'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {test: /\.js$/, use:{loader: 'babel-loader'}, include: context}
        ]
    }
}