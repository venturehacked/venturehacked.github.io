/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'venture-hacked-site',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    contentSecurityPolicy: {
      'default-src': "'unsafe-inline' https://player.vimeo.com",
      'script-src': "'self' 'unsafe-eval' 'unsafe-inline'",
      'style-src': "'self' 'unsafe-inline'",
      'connect-src': "'self' ",
      'img-src': "'self' data:",
      'media-src': "'self'",
      'frame-src': 'http://eventbrite.com http://www.eventbrite.com https://player.vimeo.com'
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    sassOptions: {
      includePaths: ['bower_components/materialize/sass']
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.locationType = 'hash';
    ENV.googleAnalytics = {
      webPropertyId: 'UA-65303961-1'
    };
  }
  return ENV;
};