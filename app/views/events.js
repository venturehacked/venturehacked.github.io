import Ember from 'ember';

export default Ember.View.extend({

	didInsertElement() {
		this._super(...arguments);
		Ember.$('body').addClass('events-page-background');
	},

	willDestroyElement(){
		this._super(...arguments);
		Ember.$('body').removeClass('events-page-background');
	}
});
