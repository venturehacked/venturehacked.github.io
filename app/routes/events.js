import Ember from 'ember';
import events from 'venture-hacked-site/utils/events';
import investors from 'venture-hacked-site/utils/investors';
import refined from 'venture-hacked-site/utils/refinedEvents';

export default Ember.Route.extend({
	model () {
		return {
			events,
			refined,
			current: investors.filterBy('current', true),
			past: investors.filterBy('current', false)
		};
	}
});
