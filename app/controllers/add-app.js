import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		addApp: function() {
			alert(this.get('model.name'));
		}
	}
});