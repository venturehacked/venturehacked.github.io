import Ember from 'ember';
import articles from 'venture-hacked-site/utils/articles';	
export default Ember.Route.extend({
	model: function(){
	return articles;
	}
});

