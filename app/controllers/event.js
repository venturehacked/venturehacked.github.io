import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    eventbriteLink(event) {
      window.open(event.eventbritePage, '_blank');
    }
	}
})
