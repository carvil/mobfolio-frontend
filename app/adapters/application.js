import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  headers: function() {
    var session = this.container.lookup('simple-auth-session:main');
    return {
      "Authorization": "Token token=" + session.content.secure.token
    };
  }.property("session.token")
});
