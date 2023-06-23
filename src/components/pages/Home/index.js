import { AiOutlineShopping } from 'react-icons/ai';
import { GiArtificialIntelligence, GiTechnoHeart } from 'react-icons/gi';
import { MdOutlineAgriculture, MdOutlineHealthAndSafety } from 'react-icons/md';
import Carousel from "../../Carousel";
import './index.css';
const fields = [
  {
    title: "RETAIL SECTOR",
    description: "Indian Retail sector is now facing a critical time as online players growing a lot and neighbourhood retail stores are dying. Its time to support them.",
    icon: <AiOutlineShopping />
  }, {
    title: "AGRICULTURE SECTOR",
    description: "India is a land of agriculture, and everyone needs to contribute to the agriculture sector with their possible tools like knowledge and experience. We need to work for the empowerment of each farmer.",
    icon: <MdOutlineAgriculture className="" />
  }, {
    title: "HEALTH TECH",
    description: "Still, 90% of our healthcare technology depends on other countries. We have efficient healthcare professionals and technical professionals. They can work together to create indigenous technology.",
    icon: <GiTechnoHeart />
  }, {
    title: "ARTIFICIAL INTELLIGENCE",
    description: "Technology is creating a lot of impact in every sector. We need to adopt AI to improve our efficiency and productivity in daily operations.",
    icon: <GiArtificialIntelligence />
  }, {
    title: "CARE",
    description: "As we are growing, we need to take care of our society and environment. We need to give respect to every natural resource available to us in this world.",
    icon: <MdOutlineHealthAndSafety />
  }
]
const images = [
  {
    id: 1,
    title: "Empowering Local Businesses with Technology and Innovation",
    description:
      "Acintyo Local aims to empower every shopkeeper with technology and innovation. Advanced and innovative digital technology supports shopkeepers to reach more customers and enables them to do a profitable business.",
    imageUrl:
      "https://acintyo.co.in/images/img/sliders/slider-1/slider-item-1.png",
    btn: "Read More",
  },
  {
    id: 2,
    title: "OWNVEG AGRO SOLUTIONS PVT LTD",
    description:
      "Sustainable Organic Urban Farming. We are here to protect the community's health from the toxic effects of conventional farming. Encouraging communities to shift from traditional agriculture to organic farming for a healthy life.",
    imageUrl:
      "https://acintyo.co.in/images/img/sliders/slider-1/slider-item-2.png",
    btn: "Read More",
  },
  {
    id: 3,
    title: "Future of innovation only with collaboration: AAiHC",
    description:
      "AAiHC (Association of Artificial Intelligence in HealthCare) is a platform working to build the gaps for collaboration and facilitate each health care professional and technology professional to collaborate and work in a peaceful environment to create indigenous technology.",
    imageUrl:
      "https://acintyo.co.in/images/img/sliders/slider-1/slider-item-4.png",
    btn: "Read More",
  },
  {
    id: 4,
    title: "How Local Mobile APP Works",
    description:
      "Connecting reliable neighbourhood stores with customers will make shopping more effective and make it easy to get the right products in less time.",
    imageUrl: "https://acintyo.co.in/images/img/portfolio/thumb-1.jpg",
    btn: "",
  },
];
const media = [
  { mediaUrl: "https://acintyo.co.in/images/img/portfolio/thumb-1.jpg" },
  { mediaUrl: "https://acintyo.co.in/images/img/portfolio/thumb-2.jpg" },
  { mediaUrl: "https://acintyo.co.in/images/img/portfolio/thumb-3.jpg" },
  { mediaUrl: "https://acintyo.co.in/images/img/portfolio/thumb-4.jpg" },
  { mediaUrl: "https://acintyo.co.in/images/img/portfolio/thumb-5.jpg" },
  { mediaUrl: "https://acintyo.co.in/images/img/portfolio/thumb-6.jpg" }
]
function Home() {
  return (
    <div className="home-main">
      <div className="home-container">
        <Carousel images={images} />
        <div className="sector-card-container">
          {fields.map(each => (
            <div className="sector-card">
              <button type="button" className="icon">{each.icon}</button>
              <div>
                <h3>{each.title}</h3>
                <p>{each.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="media">
        <h2>Media</h2>
        <div className="media-container">
          {media.map(each => (
            <img src={each.mediaUrl} alt="media" />
          ))}</div>
      </div>
    </div>
  )
}
export default Home;