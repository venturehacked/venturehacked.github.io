/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var	isProduction = EmberApp.env() === 'production';

module.exports = function() {
  var options = isProduction ? {
    fingerprint: {
      exclude: ['img/album-7-22', 'img/album-10-21', 'img/album-02-24']
    }
  } : {};

   options.sassOptions = {
      includePaths: ['bower_components/materialize/sass']
    };

  var app = new EmberApp(options);

  app.import('bower_components/add-to-homescreen/src/addtohomescreen.js');
  app.import('bower_components/add-to-homescreen/style/addtohomescreen.css');

  return app.toTree();
};
