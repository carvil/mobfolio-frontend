import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		deleteApp: function(app) {
			this.sendAction('deleteApp', app);
		},
		editApp: function(app) {
			this.sendAction('editApp', app);
		}
	}
});