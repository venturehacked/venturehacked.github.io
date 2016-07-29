import Ember from 'ember';
import investors from 'venture-hacked-site/utils/investors';
export default Ember.Route.extend({
	model: function() {
		return {
			current: investors.filterBy('current', true),
			past: investors.filterBy('current', false)
		};
	}
});
