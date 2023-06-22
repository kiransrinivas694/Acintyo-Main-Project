import { useState } from "react";
import { AiFillPlusSquare } from "react-icons/ai";
import { AiFillMinusSquare } from "react-icons/ai";
import { BsTwitter, BsDribbble } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { TfiGoogle } from "react-icons/tfi";

import "./index.css";

const believeDetails = [
  {
    title: "Our Clients",
    data: [
      "In Retail industry started supporting neighbourhood stores by providing digital technology and end-mile connectivity. Now every retailer can compete with online players and do better business.",
      "In the agriculture sector, empowering formers by creating FPOs and providing them branding, marketing, market linkage and digital support. Now FPO can be able to do business not only in the domestic market but also in the International market.",
      "In the healthcare sector, with our AAiHC platform, healthcare professionals and technical professionals can collaborate and work to create indigenous technology in healthcare.",
    ],
  },
  {
    title: "Management",
    data: [
      "In Acintyo Group, we will give equal opportunities to both the younger and older generation. In each sector, there are multiple industry experts and enthusiastic young people to create business strategies and implement them in a planned manner.",
    ],
  },
];

const teamDetails = [
  {
    imageUrl: "https://acintyo.co.in/images/img/team/member-1.jpg",
    name: "K Anantha Krishna Sarma",
    role: "Chairman",
  },
  {
    imageUrl: "https://acintyo.co.in/images/img/team/member-2.jpg",
    name: "Dr B J Rajesh Ms.M Ch",
    role: "Director",
  },
  {
    imageUrl: "https://acintyo.co.in/images/img/team/member-3.jpg",
    name: "K Viswanath Gowtham",
    role: "Director and CEO",
  },
];

const socialMediaIcons = () => {
  return (
    <ul className="social-media-icons-list">
      <li className="teams-social-media-icon">
        <BsTwitter />
      </li>
      <li className="teams-social-media-icon">
        <FaFacebookF />
      </li>
      <li className="teams-social-media-icon">
        <BsDribbble />
      </li>
      <li className="teams-social-media-icon">
        <TfiGoogle />
      </li>
      <li className="teams-social-media-icon">
        <FaLinkedinIn />
      </li>
    </ul>
  );
};

function AboutUs() {
  const [activeAccordion, setActiveAccordion] = useState(
    believeDetails[0].title
  );

  const handleAccordionClick = () => {
    if (activeAccordion === "Our Clients") {
      setActiveAccordion("Management");
    } else {
      setActiveAccordion("Our Clients");
    }
  };

  const accordionContent = believeDetails.map((detail) => {
    const renderText = detail.data.map((text, index) => {
      return (
        <div key={index}>
          <p className="accordion-text">{text}</p>
          <hr className="horizontal-line" />
        </div>
      );
    });

    return (
      <div className="aboutus-accordion" key={detail.title}>
        <div className="accordion-click">
          {activeAccordion === detail.title ? (
            <AiFillMinusSquare className="accordion-icons" />
          ) : (
            <AiFillPlusSquare
              className="accordion-icons"
              onClick={handleAccordionClick}
            />
          )}
          <p>{detail.title}</p>
        </div>
        <div className="accordion-values">
          {activeAccordion === detail.title ? (
            renderText
          ) : (
            <hr className="horizontal-line" />
          )}
        </div>
      </div>
    );
  });

  const teamContent = teamDetails.map((teamMember) => {
    return (
      <li className="team-member-list-item">
        <img
          className="team-member-image"
          src={teamMember.imageUrl}
          alt={teamMember.name}
        />
        <h3 className="team-member-name">{teamMember.name}</h3>
        <p className="team-member-role">- {teamMember.role}</p>
        {socialMediaIcons()}
      </li>
    );
  });

  return (
    <div className="aboutus-main">
      <div className="aboutus-sub-main">
        <div className="aboutus-details-section">
          <h3 className="aboutus-title">Who We Are ?</h3>
          <p className="aboutus-details">
            Acintyo, we are working to empower society by providing technology
            and support. With the grand vision of beloved chairman Sri Anantha
            Krishna Sarma Garu, Journey started in 2018. Launched Acintyo Group
            to work with various industries like Agriculture, Retail,
            Pharmaceuticals, Health Care, Technology and Retail. Bringing
            advanced technology closer to society and working for indigenous
            technologies. Intense research and involvement at every level to
            make things perfect is the company's core strength. Created impact
            in many industries like Retail, Agriculture and snowballing with
            double-digit growth. Acintyo group not just doing business, But
            empowering and creating impact in every sector with all the
            stakeholders.
          </p>
        </div>
        <hr className="horizontal-line" />
        <div className="aboutus-section2">
          <div className="aboutus-accordion-section">
            <h3 className="aboutus-title">What we believe</h3>
            {accordionContent}
          </div>
          <div className="chairman-message-section">
            <h3 className="aboutus-title">Chairman Message</h3>
            <div className="chairman-message-container">
              <p>
                Message from the Chairmen
                <br /> India is a country of knowledge, and all over the world,
                every country treats India as a "Viswa Guru". We need to feel
                proud to have this pride. With ancient work culture, we can
                drive the country to become the best place to live by adding
                technology. As a farmer, continuously contributing to the
                agriculture sector is the responsibility of every person who has
                food. Everyone must contribute to the agriculture sector with
                knowledge and experience.
              </p>
            </div>
            <h3 className="chairman-message-name">
              <span className="chairman-name-span">
                K Anantha Krishna Sarma
              </span>
              ,Chairmen
            </h3>
          </div>
        </div>
        <hr className="horizontal-line" />
        <div className="aboutus-team-section">
          <h3 className="our-team-heading">Our Team</h3>
          <ul className="team-section-list">{teamContent}</ul>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
export { socialMediaIcons };
