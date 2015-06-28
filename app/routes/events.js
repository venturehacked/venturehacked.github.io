import Ember from 'ember';
import investors from 'venture-hacked-site/utils/investors';
export default Ember.Route.extend({
	model: function() {
		return investors.filterBy('current', true);
	}
});
