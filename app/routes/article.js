import Ember from 'ember';
import articles from 'venture-hacked-site/utils/articles';	
export default Ember.Route.extend({
	model: function(params){
	return articles.findBy('id', params.id);
	}
});
