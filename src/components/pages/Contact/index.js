import { MdLocationOn } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

import "./index.css";
import { socialMediaIcons } from "../AboutUs";

function Contact() {
	return (
		<>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.2958856029877!2d78.42852167488554!3d17.493383483411957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb918677d0e5bd%3A0xb78fb63258d6b057!2sAcintyo%20Local%20Private%20Limited!5e0!3m2!1sen!2sin!4v1687412217743!5m2!1sen!2sin"
				width="100%"
				height="400"
				title="map"
				style={{ border: "0" }}
				allowfullscreen=""
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
			<div className="contact-main">
				<div className="contact-sub">
					<form className="contact-form">
						<h3 className="form-heading">Get In Touch</h3>
						<div className="contact-form-details">
							<div className="form-item">
								<label className="form-label">Name *</label>
								<input type="text" className="form-input" />
							</div>
							<div className="form-item">
								<label className="form-label">Email *</label>
								<input type="text" className="form-input" />
							</div>
							<div className="form-item">
								<label className="form-label">Subject *</label>
								<input type="text" className="form-input" />
							</div>
						</div>
						<label className="form-label">Message</label>
						<textarea className="message-input" />
					</form>
					<div className="contact-info">
						<h3 className="contact-info-heading">Contact Info</h3>
						<div className="contact-info-sections">
							<MdLocationOn className="contact-info-icons" />
							<p className="contact-info-texts">
								B-4, IDA Gandhi Nagar
								<br />
								Kukatpally
								<br />
								Hyderabad-500 037.
							</p>
						</div>
						<div className="contact-info-sections">
							<BsTelephoneFill className="contact-info-icons" />
							<p className="contact-info-texts">
								(091) 81210 - 28970
								<br />
								(091) 96525 - 97911
							</p>
						</div>
						<div className="contact-info-sections">
							<FiMail className="contact-info-icons" />
							<p className="contact-info-texts">info@acintyo.co.in</p>
						</div>
						<h3>Social Contact</h3>
						{socialMediaIcons()}
					</div>
				</div>
			</div>
		</>
	);
}

export default Contact;
