var path = require('path');

var taskConfig = {

  component: {
    name: 'react-icheck',
    lib: './lib',
    scripts: {
      entry: './src/index.js',
      output: {
        library: 'ReactICheck'
      },
      externals: {
        react: {
          root: 'React',
          commonjs2: 'react',
          commonjs: 'react',
          amd: 'react'
        }
      }
    },
    less: {
      entry: ''
    }
  },

  example: {
    src: './examples/src',
    dist: './examples/dist',
    index: 'index.html',
    script: 'js/app.js',
    alias: {
      'react-icheck': path.resolve(__dirname, './src')
    },
    files: []
  }

};

module.exports = taskConfig;
