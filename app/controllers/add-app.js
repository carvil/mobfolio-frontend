import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		addApp: function() {
			var savePromise = this.get('model').save();
      var context = this;
      savePromise.then(
        function() { context.transitionTo('apps'); },
        function(errors) {
          console.log(errors);
        });
		}
	}
});
