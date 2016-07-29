import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return [{
    	cardTitle: 'Cherisa Williams',
    	team: 'Team Triangle',
    	image: 'img/volunteers/cherisa-williams.jpg',
    },{
    	cardTitle: 'Kim Chung',
    	team: 'Team Silicon Valley',
    	image: 'img/volunteers/kim-chung.jpg',
    },{
    	cardTitle: 'Shannon Cook',
    	team: 'Team Triangle',
    	image: 'img/volunteers/shannon-cook.jpg',
    },{
    	cardTitle: 'Linh Nguyen',
    	team: 'Team Silicon Valley',
    	image: 'img/volunteers/linh-nguyen.jpg',
    },{
    	cardTitle: 'Manindra Majmudar',
    	team: 'Team Silicon Valley',
    	image: 'img/volunteers/manindra-majmudar.jpg',
    }];
	}
});
