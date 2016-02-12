import Ember from 'ember';
import refinedEvents from 'venture-hacked-site/utils/refinedEvents';

export default Ember.Route.extend({
	model(params) {
		return refinedEvents.findBy('id', params.id);
	}
});
