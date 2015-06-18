import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		edit_app: function(app) {
			this.set('isEditing', true);
		},
		accept_changes: function() {
			this.set('isEditing', false);
			this.sendAction('action', this.get("app"));
		}
	}
});