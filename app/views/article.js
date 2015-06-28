import Ember from 'ember';

export default Ember.View.extend({
	didInsertElement() {
		this._super(...arguments);
		this.$('.materialboxed').materialbox();
		window.scrollTo(0, 0);
	}
});