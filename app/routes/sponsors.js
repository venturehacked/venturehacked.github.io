import Ember from 'ember';
import sponsors from 'venture-hacked-site/utils/sponsors';

export default Ember.Route.extend({
	model() {
		return sponsors;
	}
});
