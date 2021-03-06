import Ember from 'ember';
import config from './config/environment';
import googlePageview from './mixins/google-pageview';

var Router = Ember.Router.extend(googlePageview,{
  location: config.locationType
});

Router.map(function() {
  this.route('articles');
  this.route('article', { path:'article/:id' });
  this.route('sponsors');
  this.route('events');
  this.route('event', { path:'event/:id' });
  this.route('investors');
  this.route('media');
  this.route('volunteers');
});

export default Router;
