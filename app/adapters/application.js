import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  ajaxError: function(jqXHR){
    var error = this._super(jqXHR);

    if (jqXHR.status === 400) {
      var response = Ember.$.parseJSON(jqXHR.responseText);
      var errors = {};

      if (typeof response.errors !== 'undefined') {
        var jsonErrors = response.errors;
        Ember.keys(jsonErrors).forEach(function(key) {
          errors[Ember.String.camelize(key)] = jsonErrors[key];
        });
      }
      if (typeof response.message !== 'undefined') {
        errors['Message'] = response.message;
      }
      return new DS.InvalidError(errors);
    } else {
      return error;
    }
  },
  headers: function() {
    var session = this.container.lookup('simple-auth-session:main');
    return {
      "Authorization": "Token token=" + session.content.secure.token
    };
  }.property("session.token")
});
