export default [{
		cardTitle:"How Smart Startups Think About Growth: Advice from a VC",
		image:"img/articles/startup-growth.jpg",
		cardContent:"Interview with Josh Breinlinger, Sigma West VC",
		bodyPartial: 'articles/josh-breinlinger'
	},{
		cardTitle:"5 Things One VC Looks for in a Seed-Stage Startup: Investing in the Dream",
		image:"img/articles/seed-stage.jpg",
		cardContent:"Interview with Joel Yarmon, Draper Associates",
		bodyPartial: 'articles/joel-yarmon'
	},{
		cardTitle:"What the Ex-CEO of Sega has to Say About Startups",
		image:"img/articles/sonic.jpg",
		cardContent:"Interview with Tom Kalinske",
		bodyPartial: 'articles/tom-kalinske'
	},{
		cardTitle:"How a Successful Corporation Invests in Startups and Helps Them Launch in Asia",
		image:"img/articles/high-five.jpg",
		cardContent: "Interview with Miki Yasuda, DeNa",
		bodyPartial: 'articles/miki-yasuda'
	},{
		cardTitle:"8 Years and 3 Exists - This Guy's Secret to Startup Success",
		image:"img/articles/startup-success.jpg",
		cardContent: "Interview with Rafat Alvi, FunnelBeam",
		bodyPartial: 'articles/rafat-alvi'
	},{
		cardTitle:"7 Myths About Startup Sales Debunked by This Expert",
		image:"img/articles/truth.jpg",
		cardContent: "Interview with Hendrik van der Meer, Vilynx",
		bodyPartial: 'articles/hendrik-van-der-meer'
	},{
		cardTitle:"Venture Hacked Event Photos",
		image:"img/articles/paiman-event.jpg",
		cardContent: "Curious about what a Venture Hacked Event looks like?",
		bodyPartial: 'articles/event-photos-20150429'
	},{
		cardTitle:"VC Fundraising 101 with Lisa Wu of Norwest VP",
		image:"img/articles/fundraising-piggy.jpg",
		cardContent: "Interview with Lisa Wu, Norwest Venture Partners",
		bodyPartial: 'articles/lisa-wu'
	},{
		cardTitle:"4 Things You Need to Know About the Startup/VC Relationship",
		image:"img/articles/fist-bump.jpg",
		cardContent: "Interview with Tyler Peterson, Triangle Peak Partners",
		bodyPartial: 'articles/tyler-peterson'
	},{
		cardTitle:"5 Truths From An Experienced Entrepreneur and Investor on Building Your Business",
		image:"img/articles/checkin.jpg",
		cardContent: "Interview with Rob Majteles, Treehouse Capital",
		bodyPartial: 'articles/rob-majteles'
	},{
		cardTitle:"The Best Advice from a Refreshingly Helpful Investor",
		image:"img/sponsor/checkin.jpg",
		cardContent: "Interview with Dave Lambert, Rightside Capital",
		bodyPartial: 'articles/dave-lambert'
	},{
		cardTitle:"How to Communicate with Investors When Things Are Going Horribly Wrong",
		image:"img/sponsor/checkin.jpg",
		cardContent: "Interview with Stephen Pieraldi, Serial Entrepreneur",
		bodyPartial: 'articles/stephen-pieraldi'
	},{
		cardTitle:"Reasons Why Your Startup's Exit Strategy is Overrated",
		image:"img/sponsor/checkin.jpg",
		cardContent: "Interview with Peter Brack, Mucker Capital",
		bodyPartial: 'articles/peter-brack'
	}].map(article => {
		article.id = article.cardTitle.classify().dasherize();
		if (article.id.length > 40) {
			article.id = article.id.substring(0, 40);
		}
		return article;
	});