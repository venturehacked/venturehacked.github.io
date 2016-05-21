/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var	isProduction = EmberApp.env() === 'production';

module.exports = function() {
  var options = isProduction ? {
    fingerprint: {
      exclude: ['img/']
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
