import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		addApp: function() {
			this.get('model').save();
			this.transitionTo('apps');
		}
	}
});