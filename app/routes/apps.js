import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
    	return this.store.findAll('app');
  	},
	actions: {
		deleteApp: function(app) {
			app.deleteRecord();
      app.save();
		}
	}
});
