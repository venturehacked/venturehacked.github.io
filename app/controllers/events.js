import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
		viewEvent(event) {
			this.transitionTo('event', event);
		},
    eventbriteLink(event) {
      window.open(event.eventbritePage, '_blank');
    }
	}
})
