import "./index.css";

const portfollioObjs = [
	{
		imgUrl: "https://acintyo.co.in/images/Acintyo%20Local-01.png",
		title: "LOCAL MOBILE APP",
		description:
			"Empowering every neighbourhood retailer with technology and end-mile connectivity.",
		hoverText: `"LOCAL" A most efficient digital marketplace to connect customers with neighbourhood shopkeepers and suppliers to get products in a quick, reliable, and easy way. It's a super effective and advanced digital platform to fulfil every retailer's need.
		The word "Innovative Disruption", to quote from Mr Clayton Christensen, the Author of "Innovator's Dilemma", refers to an organization or entrepreneur anticipating the Customer's needs, passionately falling in love with the Customer and creating a market where none existed.
		The rapid pace of such disruptions mostly shakes up established traditional business models. It makes the earlier known Rules of Success or Growth redundant in today's "Phygital" connected world, especially Retail. Technology is getting intertwined and becoming seamless in both B2B as well as B2C experiences.`,
	},
	{
		imgUrl: "https://acintyo.co.in/images/AcintyoExim.png",
		title: "ACINTYO EXIM",
		description:
			"The unique and first-of-its-kind platform for complete export and import operations.",
		hoverText: `ACINTYO EXIM provides a unique platform to handle end-to-end export and import operations. Creating a safe and hassle-free platform for smooth export and import transaction. This platform provides all necessary support starting from identifying proper buyers, procurement, logistics, Insurance, ECGC, CHA, Clearance and Bank integration.`,
	},
	{
		imgUrl: "https://acintyo.co.in/images/AcintyoOwnveg.png",
		title: "OWNVEG AGRO SOLUTIONS",
		description:
			"Empowering farmers by creating a sustainable FPO business model and globalizing Indian agriculture.",
		hoverText: `We are "OWNVEG AGRO SOLUTIONS" , established in 2018 and founded by "Koduru Gowtham Viswanathan". Our primary "motto" is to protect the community's health from the toxic effects of conventional farming through Organic farming.
		The company runs with the concept of "Cultivating own vegetable", ornamentals, flowering and fruit gardens for the communities through terrace gardening and micro-farming, which are grown totally by organic methods with zero usage of pesticides, insecticides, and synthetic fertilizers. Our vision is to take you on a journey that allows you to experience the essence of natural agriculture. Connecting children and younger generations to nature.`,
	},
	{
		imgUrl: "https://acintyo.co.in/images/Acintyo%20AAIHC-01.png",
		title: "AAIHC",
		description:
			"A unique platform for collaboration to create indigenous health tech.",
		hoverText: `AAIHC
		The Association of Artificial Intelligence in HealthCare is a platform which is working to build the gaps for collaboration and facilitate each health care professional and technology professional to collaborate and work in a peaceful environment to create indigenous technology.`,
	},
];

const Portfollio = () => {
	const webSitesInfos = (obj) => {
		const { imgUrl, title, description, hoverText } = obj;
		return (
			<li className="prtf-info-item">
				<img src={imgUrl} alt={title} className="prt-image" />
				<div>
					<hr className="card-hr-line" />
					<h1 className="prtf-item-title">{title}</h1>
					<p className="prtf-item-description">{description}</p>
				</div>
				<div className="prtf-hover-item">
					<p className="prtf-item-more-description">{hoverText}</p>
				</div>
			</li>
		);
	};

	return (
		<div className="portfollio-bg-contianer">
			<div className="portfollio-container">
				<ul className="prtf-info-list-container">
					{portfollioObjs.map((item) => webSitesInfos(item))}
				</ul>
			</div>
		</div>
	);
};

export default Portfollio;
