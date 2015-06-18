import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
    	return this.store.findAll('app');
  	},
	actions: {
		deleteApp: function(app) {
			app.deleteRecord();
		},
		editApp: function(app) {
			this.transitionTo('edit-app');
		},
		acceptChanges: function(app) {
        	if (Ember.isEmpty(todo.get('app_name'))) {
        		this.send('deleteApp', app);
        	}
        	else {
        		app.save();
        	}
        }
	}
});