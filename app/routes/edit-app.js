import Ember from 'ember'

export default Ember.Route.extend({
	model: function(app) {
    	return this.store.find('app', app);
  	}
});