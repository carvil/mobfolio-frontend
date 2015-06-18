import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		editApp: function(app) {
			this.set('isEditing', true);
		},
		acceptChanges: function() {
			this.set('isEditing', false);
			this.sendAction('action', this.get("app"));
		}
	}
});