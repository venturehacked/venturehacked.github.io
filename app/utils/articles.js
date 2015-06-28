export default [{
		cardTitle:"How Smart Startups Think About Growth",
		image:"img/articles/startup-growth.jpg",
		cardContent:"An Interview with Josh Breinlinger, Sigma West VC",
		bodyPartial: 'articles/josh-breinlinger',
		author: 'Tracy Lee'
	},{
		cardTitle:"5 Things One VC Looks for in a Seed-Stage Startup",
		image:"img/articles/seed-stage.jpg",
		cardContent:"An Interview with Joel Yarmon, Draper Associates",
		bodyPartial: 'articles/joel-yarmon',
		author: 'Paiman Vahdati'
	},{
		cardTitle:"What the Ex-CEO of Sega has to Say About Startups",
		image:"img/articles/sonic.jpg",
		cardContent:"An Interview with Tom Kalinske",
		bodyPartial: 'articles/tom-kalinske',
		author: 'Tracy Lee'
	},{
		cardTitle:"How a Successful Corporation Invests in Startups",
		image:"img/articles/high-five.jpg",
		cardContent: "An Interview with Miki Yasuda, DeNa",
		bodyPartial: 'articles/miki-yasuda',
		author: 'Tracy Lee'
	},{
		cardTitle:"8 Years and 3 Exits - Secrets to Startup Success",
		image:"img/articles/startup-success.jpg",
		cardContent: "An Interview with Rafat Alvi, FunnelBeam",
		bodyPartial: 'articles/rafat-alvi',
		author: 'Tracy Lee'
	},{
		cardTitle:"7 Myths About Startup Sales Debunked by This Expert",
		image:"img/articles/truth.jpg",
		cardContent: "An Interview with Hendrik van der Meer, Vilynx",
		bodyPartial: 'articles/hendrik-van-der-meer',
		author: 'Tracy Lee'
	},{
		cardTitle:"Venture Hacked Event Photos",
		image:"img/articles/paiman-event.jpg",
		cardContent: "Curious about what a Venture Hacked Event looks like?",
		bodyPartial: 'articles/event-photos-20150429',
		author: 'Venture Hacked'
	},{
		cardTitle:"VC Fundraising 101 with Lisa Wu of Norwest VP",
		image:"img/articles/fundraising-piggy.jpg",
		cardContent: "An Interview with Lisa Wu, Norwest Venture Partners",
		bodyPartial: 'articles/lisa-wu',
		author: 'Tracy Lee'
	},{
		cardTitle:"4 Things About the Startup and VC Relationship",
		image:"img/articles/fist-bump.jpg",
		cardContent: "Interview with Tyler Peterson, Triangle Peak Partners",
		bodyPartial: 'articles/tyler-peterson',
		author: 'Tracy Lee'
	},{
		cardTitle:"5 Truths From an Investor on Building Businesses",
		image:"img/articles/sandcastle.jpg",
		cardContent: "An Interview with Rob Majteles, Treehouse Capital",
		bodyPartial: 'articles/rob-majteles',
		author: 'Tracy Lee'
	},{
		cardTitle:"The Best Advice from a Refreshingly Helpful Investor",
		image:"img/articles/advice.jpg",
		cardContent: "An Interview with Dave Lambert, Rightside Capital",
		bodyPartial: 'articles/dave-lambert',
		author: 'Tracy Lee'
	},{
		cardTitle:"Communication with Investors When Things Are F-ed",
		image:"img/articles/communication.jpg",
		cardContent: "An Interview with Stephen Pieraldi, Serial Entrepreneur",
		bodyPartial: 'articles/stephen-pieraldi',
		author: 'Tracy Lee'
	},{
		cardTitle:"Your Startup's Exit Strategy is Overrated",
		image:"img/articles/exit-sign.jpg",
		cardContent: "An Interview with Peter Brack, Mucker Capital",
		bodyPartial: 'articles/peter-brack',
		author: 'Tracy Lee'
	}].map(article => {
		article.id = article.cardTitle.classify().dasherize();
		if (article.id.length > 40) {
			article.id = article.id.substring(0, 40);
		}
		return article;
	});