import { HiLocationMarker } from "react-icons/hi";
import { BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

import "./index.css";
import { renderIcons } from "../AboutUs";

function Contact() {
  return (
    <div className="contact-main">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1905.4401417331194!2d78.43109638351119!3d17.49211990705875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb918677d0e5bd%3A0xb78fb63258d6b057!2sAcintyo%20Local%20Private%20Limited!5e0!3m2!1sen!2sin!4v1687324366282!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="contact-page">
        <div className="contact-content">
          <form className="contact-form">
            <h3 className="form-heading">Get In Touch</h3>
            <div className="form-inputs">
              <label className="form-label">Name *</label>
              <input type="text" className="input" />
            </div>
            <div className="form-inputs">
              <label className="form-label">E-mail *</label>
              <input type="text" className="input" />
            </div>
            <div className="form-inputs">
              <label className="form-label">Subject</label>
              <input type="text" className="input" />
            </div>
            <div className="form-message">
              <label className="form-label">Message *</label>
              <textarea type="text" className="input message-input" />
            </div>
            <button className="form-button" type="button">
              Send Message
            </button>
          </form>
          <div className="contact-info-section">
            <h2>Contact Info</h2>
            <div className="each-contact-info-div">
              <HiLocationMarker className="contact-info-icons" />
              <p className="contact-address-text">
                B-4, IDA Gandhi Nagar
                <br />
                Kukatpally
                <br />
                Hyderabad-500 037.
              </p>
            </div>
            <div className="each-contact-info-div">
              <BsTelephoneFill className="contact-info-icons" />
              <p className="contact-address-text">
                (091) 81210 - 28970
                <br />
                (091) 96525 - 97911
              </p>
            </div>
            <div className="each-contact-info-div">
              <GrMail className="contact-info-icons" />
              <p>info@acintyo.co.in</p>
            </div>
            <h2 className="contact-info-heading">Social Contact</h2>
            {renderIcons()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
