import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return [{
		scardTitle: "Wingman",
		sponsorImage: "img/wingman-logo.jpg",
		sponsorUrl: "http://wingman.events",
		sponsorContent: "Add Sponsor Content Here"
	},{ 
		cardTitle: "Navisocial",
		sponsorImage: "img/navisocial-logo.png",
		sponsorUrl: "http://navisocial.com",
		sponsorContent: "Add Sponsor Content Here"
	},{ 
		cardTitle: "Card Title",
		sponsorImage: "img/flickflyer-logo.png",
		sponsorUrl: "http://flickflyer.com",
		sponsorContent: "Add Sponsor Content Here"
	}];
	}
});
