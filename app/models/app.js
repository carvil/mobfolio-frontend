import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string')//,
/*	icon: DS.attr('string'),
	smallDescription: DS.attr('string'),
	longDescription: DS.attr('string'),
	screenshots: DS.hasMany('screenshot'),
	startProjectDate: DS.attr('date'),
	endProjectDate: DS.attr('date'),
	storeLaunchDate: DS.attr('date'),
	availableInAppStore: DS.attr('boolean') */
});