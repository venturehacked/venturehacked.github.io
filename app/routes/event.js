import Ember from 'ember';
import refinedEvents from 'venture-hacked-site/utils/refinedEvents';
import investors from 'venture-hacked-site/utils/investors';

export default Ember.Route.extend({
	model: function(params) {
		const event = refinedEvents.findBy('id', params.id);
		return refined;
	}
});
