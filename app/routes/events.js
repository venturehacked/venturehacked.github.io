import Ember from 'ember';
import events from 'venture-hacked-site/utils/events';
import investors from 'venture-hacked-site/utils/investors';
export default Ember.Route.extend({
	model() {
		return events;
	},
	setupController(controller) {
		this._super(...arguments);
		controller.set("investors",investors);
	}
});
