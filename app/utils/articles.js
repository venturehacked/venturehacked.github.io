function range(start, end) {
	const arr = [];
	for (let i = start; i <= end; i++) {
		arr.push(i);
	}
	return arr;
}
function numberPad(number, width, padChar) {
	padChar = padChar || '0'; // Set the character to fill in
	number = number + ''; // Convert to string

	// Ternary operator!
	return number.length >= width ?
			number 
			: new Array(width - number.length + 1).join(padChar) + number;
}

export default [{
		cardTitle: 'Venture Hacked Event Photos 10-21',
		image:"img/articles/10-21.jpg",
		cardContent: "Curious about what a Venture Hacked Event looks like?",
		bodyPartial: 'articles/event-photos-20151021',
		author: 'Venture Hacked',
		images: range(1,118).map(i => `img/album-10-21/venturehacked-${numberPad(i,3)}.jpg`)
	}, {
		cardTitle: 'Meet Ramneek Gupta of Citi Ventures',
		image:"img/articles/grow-money.jpg",
		cardContent: "An Interview with Ramneek Gupta, Citi Ventures",
		bodyPartial: 'articles/ramneek-gupta',
		author: 'Tracy Lee'
	}, {
		cardTitle: 'Five Minutes of Startup Advice From an External Perspective',
		image:"img/articles/magnifying-glass.jpg",
		cardContent: "An Interview with Jules Walker, KPMG",
		bodyPartial: 'articles/jules-walker',
		author: 'Tracy Lee'
	}, {
		cardTitle: 'How Every Experience In Your Life Helps Prepare You For Startup',
		image:"img/articles/desert-experience.jpg",
		cardContent: "An Interview with Deekron Krikorian, Motion Traxx",
		bodyPartial: 'articles/deekron-krikorian',
		author: 'Tracy Lee'
	}, {
		cardTitle: "Venture Capitalism and Social Responsibility - Meet Fenox Venture Capital",
		image:"img/articles/developing-nations.jpg",
		cardContent: "An Interview with Pierre Berlan, Fenox Venture Capital",
		bodyPartial: 'articles/pierre-berlan',
		author: 'Tracy Lee'
	}, {
		cardTitle: 'Six Legal Mistakes Startups Make',
		image:"img/articles/mistakes.jpg",
		cardContent: "An Interview with Daphne Higgs, Perkins Coie",
		bodyPartial: 'articles/daphne-higgs',
		author: 'Tracy Lee'
	}, {
		cardTitle: 'Venture Hacked Event Photos 7-22',
		image:"img/album-7-22/venturehacked-16.jpg",
		cardContent: "Curious about what a Venture Hacked Event looks like?",
		bodyPartial: 'articles/event-photos-20150722',
		author: 'Venture Hacked',
		images: range(1,46).map(i => `img/album-7-22/venturehacked-${i}.jpg`)
	},{
		cardTitle:"What Type of Startup Fundraising is Best - A Legal Perspective",
		image:"img/articles/cash-money.jpg",
		cardContent:"An Interview with Jim Jensen, Perkins Coie",
		bodyPartial: 'articles/jim-jensen',
		author: 'Tracy Lee'
	}, {
		cardTitle:"Intel Capital - Representing the Underrepresented",
		image:"img/articles/marlon-speaking.jpg",
		cardContent:"An Interview with Marlon Nichols, Intel Capital",
		bodyPartial: 'articles/marlon-nichols',
		author: 'Tracy Lee'
	}, {
		cardTitle:"How Early-Stage Startups Should Be Spending Their Time",
		image:"img/articles/time.jpg",
		cardContent:"An Interview with Sara Thomas, Maven Ventures",
		bodyPartial: 'articles/sara-thomas',
		author: 'Tracy Lee'
	}, {
		cardTitle:"Comcast Ventures: Leading Innovation",
		image:"img/articles/lightbulb.jpg",
		cardContent:"An Interview with Lo Toney, Comcast Ventures",
		bodyPartial: 'articles/lo-toney',
		author: 'Tracy Lee'
	}, {
		cardTitle:"International Startup Acceleration in Silicon Valley",
		image:"img/articles/international-flag.jpg",
		cardContent:"An Interview with Marco Marinucci, MTS Fund",
		bodyPartial: 'articles/marco-marinucci',
		author: 'Tracy Lee'
	}, {
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
		cardTitle:"7 Myths About Startup Sales",
		image:"img/articles/truth.jpg",
		cardContent: "An Interview with Hendrik van der Meer, Vilynx",
		bodyPartial: 'articles/hendrik-van-der-meer',
		author: 'Tracy Lee'
	},{
		cardTitle:"Venture Hacked Event Photos",
		image:"img/articles/paiman-event.jpg",
		cardContent: "Curious about what a Venture Hacked Event looks like?",
		bodyPartial: 'articles/event-photos-20150429',
		author: 'Venture Hacked',
		images: ["img/album/venture-hacked100.jpg",
				"img/album/venture-hacked101.jpg",
				"img/album/venture-hacked102.jpg",
				"img/album/venture-hacked106.jpg",
				"img/album/venture-hacked108.jpg",
				"img/album/venture-hacked109.jpg",
				"img/album/venture-hacked110.jpg",
				"img/album/venture-hacked113.jpg",
				"img/album/venture-hacked116.jpg",
				"img/album/venture-hacked118.jpg",
				"img/album/venture-hacked12.jpg",
				"img/album/venture-hacked121.jpg",
				"img/album/venture-hacked123.jpg",
				"img/album/venture-hacked124.jpg",
				"img/album/venture-hacked125.jpg",
				"img/album/venture-hacked126.jpg",
				"img/album/venture-hacked127.jpg",
				"img/album/venture-hacked129.jpg",
				"img/album/venture-hacked13.jpg",
				"img/album/venture-hacked130.jpg",
				"img/album/venture-hacked131.jpg",
				"img/album/venture-hacked132.jpg",
				"img/album/venture-hacked133.jpg",
				"img/album/venture-hacked134.jpg",
				"img/album/venture-hacked135.jpg",
				"img/album/venture-hacked140.jpg",
				"img/album/venture-hacked141.jpg",
				"img/album/venture-hacked142.jpg",
				"img/album/venture-hacked143.jpg",
				"img/album/venture-hacked16.jpg",
				"img/album/venture-hacked17.jpg",
				"img/album/venture-hacked18.jpg",
				"img/album/venture-hacked19.jpg",
				"img/album/venture-hacked2.jpg",
				"img/album/venture-hacked26.jpg",
				"img/album/venture-hacked29.jpg",
				"img/album/venture-hacked30.jpg",
				"img/album/venture-hacked34.jpg",
				"img/album/venture-hacked37.jpg",
				"img/album/venture-hacked38.jpg",
				"img/album/venture-hacked41.jpg",
				"img/album/venture-hacked45.jpg",
				"img/album/venture-hacked47.jpg",
				"img/album/venture-hacked52.jpg",
				"img/album/venture-hacked58.jpg",
				"img/album/venture-hacked65.jpg",
				"img/album/venture-hacked66.jpg",
				"img/album/venture-hacked67.jpg",
				"img/album/venture-hacked68.jpg",
				"img/album/venture-hacked69.jpg",
				"img/album/venture-hacked7.jpg",
				"img/album/venture-hacked70.jpg",
				"img/album/venture-hacked73.jpg",
				"img/album/venture-hacked74.jpg",
				"img/album/venture-hacked77.jpg",
				"img/album/venture-hacked79.jpg",
				"img/album/venture-hacked8.jpg",
				"img/album/venture-hacked91.jpg",
				"img/album/venture-hacked92.jpg",
				"img/album/venture-hacked94.jpg",
				"img/album/venture-hacked95.jpg",
				"img/album/venture-hacked96.jpg",
				"img/album/venture-hacked99.jpg"]
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
		image:"img/articles/exit-sign.JPG",
		cardContent: "An Interview with Peter Brack, Mucker Capital",
		bodyPartial: 'articles/peter-brack',
		author: 'Tracy Lee'
	}].map(article => {
		article.id = article.cardTitle.classify().dasherize();
		// if (article.id.length > 40) {
		// 	article.id = article.id.substring(0, 40);
		// }
		return article;
	});