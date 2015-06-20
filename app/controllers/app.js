import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		edit_app: function(app) {
			this.set('isEditing', true);
      app.save();
		},
		accept_changes: function(app) {
			this.set('isEditing', false);
			app.save();
		}
	}
});
