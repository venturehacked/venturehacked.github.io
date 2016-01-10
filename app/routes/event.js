import Ember from 'ember';
import events from 'venture-hacked-site/utils/events';

export default Ember.Route.extend({
	model: function(params) {
		return events.findBy('id', params.id);
	}
});
