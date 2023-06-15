import { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import "./index.css";

function Header() {
  const location = window.location.pathname.slice(1);

  const [activeTab, setActiveTab] = useState(location);

  const handleLinkClick = (item) => {
    setActiveTab(item.path);
  };

  const navItems = [
    { path: "home", navItem: "Home" },
    { path: "aboutus", navItem: "About Us" },
    { path: "portfolio", navItem: "Portfolio" },
    { path: "careers", navItem: "Careers" },
    { path: "contact", navItem: "Contact" },
  ];

  const content = navItems.map((navItem) => {
    const isActive = activeTab === navItem.path;

    return (
      <li
        className={`header-nav-item ${isActive && "active-tab"}`}
        key={navItem.path}
      >
        <Link
          to={`/${navItem.path}`}
          onClick={() => handleLinkClick(navItem)}
          className="header-link"
        >
          {navItem.navItem}
        </Link>
      </li>
    );
  });

  return (
    <div className="header">
      <div className="top-header-section">
        <div className="top-header-main">
          <div className="top-header-item">
            <BsFillTelephoneFill className="header-icons" />
            <p>Phone : +91 96525 97911</p>
          </div>
          <div className="top-header-item">
            <FiMail className="header-icons" />
            <p>
              Mail : info@acintyo{activeTab === "Careers" ? ".com" : ".co.in"}
            </p>
          </div>
        </div>
      </div>
      <div className="header-main">
        <img
          src="https://acintyo.co.in/images/logo.png"
          width={200}
          alt="acintyo logo"
        />
        <ul className="header-nav-list">{content}</ul>
      </div>
    </div>
  );
}

export default Header;
