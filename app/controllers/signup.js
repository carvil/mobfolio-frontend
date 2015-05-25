import Ember from 'ember';

export default Ember.Controller.extend({
  serverEndpoint: '/users',

  makeRequest: function(data) {
    return Ember.$.ajax({
      url:        this.serverEndpoint,
      type:       'POST',
      data:       { 'user': data },
      dataType:   'json',
      beforeSend: function(xhr, settings) {
        xhr.setRequestHeader('Accept', settings.accepts.json);
      }
    });
  },

  setSession: function(promise) {
    var session = this.get('session');

    promise.then(function(data) {
      console.log(data);
      var newData = {};
      newData['email'] = data.email;
      newData['token'] = data.authentication_token;
      session.setup('simple-auth-authenticator:devise', newData, true);
    });
  },

  actions: {
    register: function() {
      var data = this.getProperties('email', 'password', 'password_confirmation');

      var success = this.makeRequest(data).then(function(response) {
        return response;
      });

      this.setSession(success);
    }
  }
});
