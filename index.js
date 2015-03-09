require('babel/register')({
  ignore:  /node_modules\/(?!paradigm.*)|(paradigm-gulp-watch)/
})
require('babel/polyfill')

var Server = require('paradigm-server-express')

var server = new Server({
  paths: { routes: require('path').join(__dirname, 'server', 'routes') },
  port: 6060
})
