import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		addApp: function() {
			debugger;
			alert(this.get('model.name'));
			this.get('model').save();

			var app1 = this.store.createRecord('app', {
                name: 'AppName'
            });
            app1.save();
			debugger;
		}
	}
});