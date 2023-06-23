import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { BiArrowFromTop, BiArrowToTop } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import "./index.css";

function Header() {
	const location = window.location.pathname.slice(1);

	const [activeTab, setActiveTab] = useState(location);
	const [isTopHeaderShowing, setIsTopHeaderShowing] = useState(false);
	const [isSmallNavShowing, setIsSmallNavShowing] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 768) {
				setIsSmallNavShowing(false);
				setIsTopHeaderShowing(false);
			}
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const handleLinkClick = (item) => {
		setActiveTab(item.path);
	};

	const handleTopHeaderChangeClick = () => {
		setIsTopHeaderShowing(!isTopHeaderShowing);
	};

	const handleSmallNavBarClick = () => {
		setIsSmallNavShowing(!isSmallNavShowing);
	};

	const navItems = [
		{ path: "home", navItem: "HOME" },
		{ path: "aboutus", navItem: "ABOUT US" },
		{ path: "portfolio", navItem: "PORTFOLIO" },
		{ path: "careers", navItem: "CAREERS" },
		{ path: "contact", navItem: "CONTACT" },
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

	const smallNavContent = navItems.map((navItem) => {
		return (
			<li className="small-nav-list-item">
				<Link to={`/${navItem.path}`} className="small-nav-item-link">
					{navItem.navItem}
				</Link>
			</li>
		);
	});

	const pageHeading = navItems.filter((navItem) => navItem.path === activeTab);

	let isHome;
	if (pageHeading.length === 0) {
		isHome = true;
	} else {
		isHome = pageHeading[0].path === "home";
	}

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
			<div className="top-header-section-small">
				<div
					className={`top-header-main-small ${
						!isTopHeaderShowing && "is-top-header-showing"
					}`}
				>
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
				<div className="top-header-show-button">
					<button
						className="header-changing-button"
						onClick={handleTopHeaderChangeClick}
					>
						{isTopHeaderShowing ? <BiArrowToTop /> : <BiArrowFromTop />}
					</button>
				</div>
				<div className="header-sub-main">
					<img
						src="https://acintyo.co.in/images/logo.png"
						width={170}
						alt="acintyo logo"
					/>
					<ul className="header-nav-list">{content}</ul>
					<button onClick={handleSmallNavBarClick} className="small-nav-icon">
						<GiHamburgerMenu />
						<ul className="small-nav-list">
							{isSmallNavShowing && smallNavContent}
						</ul>
					</button>
				</div>
				{/* <ul className="small-nav-list">
          {isSmallNavShowing && smallNavContent}
        </ul> */}
			</div>
			<div className={`page-heading-section ${isHome && "is-home"}`}>
				<div className="page-heading-sub">
					{!isHome && (
						<h1 className="page-main-heading">{pageHeading[0].navItem}</h1>
					)}
				</div>
			</div>
		</div>
	);
}

export default Header;
