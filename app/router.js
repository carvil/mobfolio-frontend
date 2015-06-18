import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('signup');
  this.route('protected');
  this.route('apps');
  this.route('app', { path: '/app/:app_id' });
  this.route('edit-app');
  this.route('add-app');
});

export default Router;
