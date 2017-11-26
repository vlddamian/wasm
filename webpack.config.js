const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    devServer: {
        contentBase: "./dist"
    },

    module: {
        rules: [
            {
                test: /\.(c|cpp)$/,
                use: {
                    loader: 'cpp-wasm-loader',
                    options: {
                        // Path to your 'build' or 'dist' directory relative to project root
                        buildPath: './dist',
                        emccPath: '/Users/vladdamian/wrk/_wasm/emsdk-portable/emscripten/1.37.22/emcc',
                        emccFlags: ['-O3']
                    }
                }
            }
        ]
    },
    externals: {
        'fs': true
    }

};