import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		edit_app: function(app) {
			this.set('isEditing', true);
		},
		acceptChanges: function() {
			this.set('isEditing', false);
			//this.sendAction('action', this.get("app"));
		}
	}
});