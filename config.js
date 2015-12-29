var path = require('path');

var taskConfig = {

  component: {
    name: 'ReactIcheck'
  },

  alias: {
    'react-icheck': path.resolve(__dirname, './src')
  },

  example: {
    src: './examples/src',
    dist: './examples/dist',
    entry: './examples/src/js/app.js',
    html: './examples/src/index.html'
  }

};

module.exports = taskConfig;
