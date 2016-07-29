import Ember from 'ember';
import volunteers from 'venture-hacked-site/utils/volunteers';

export default Ember.Route.extend({
	model () {
		return {
			volunteers
		};
	}
});
