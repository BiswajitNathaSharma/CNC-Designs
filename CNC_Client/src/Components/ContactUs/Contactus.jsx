import React from 'react'
import "./ContactUs.css"
import { contactBg } from '../../assets';

function Contactus() {
    const contactUsBG = {
        backgroundImage: `url(${contactBg})`,
    };
    return (
        <div className='contactUs'>
            <div className="contactUsBG" style={contactUsBG}></div>
            <div className="heading-description">
                <h1>Contact Us</h1>
                <p>Are you a Designer/Design Buyer/CNC Machine Owner/CNC Service Technician/CNC Operator who needs help? <br /> That's why, we are here to lend a hand.</p>
            </div>


            <div className="mail-adderss-call">
                <a href="mailto:info@allcncdesigns.com" className="mail">
                    <i className="fa-solid fa-envelope-open"></i>
                    <h3>Mail Us</h3>
                    <span>info@allcncdesigns.com</span>
                </a>
                <a href='https://maps.app.goo.gl/n92CfNK4LSJfzGR67' className="address">
                    <i className="fa-solid fa-location-dot"></i>
                    <h3>Our Address</h3>
                    <span>B 95 , Lane 1 ,Westend Marg,Near Saket Metro Station, New Delhi 110030</span>
                </a>
                <a href="tel:9999260270" className="call">
                    <i className="fa-solid fa-phone-volume"></i>
                    <h3>Call Us</h3>
                    <span>+91 9999260270</span>
                </a>
            </div>

            <div className="contact-container">
                <div className="contact-form">
                    <form>
                        <input type="text" placeholder="Name" />
                        <input type="number" placeholder="Phone" />
                        <input type="email" placeholder="Email" />
                        <input type="text" placeholder="Subject" /><br />
                        <textarea placeholder="Message" rows={7}></textarea><br />
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d876.4160428427161!2d77.201117!3d28.51975!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1fb3eaa5669%3A0x8a55ca7838341b82!2sUnboxfame%20%7C%20Brand%20Naming%20Agency%20%7C%20Logo%20Creation%20%7C%20Digital%20Marketing%20360%C2%B0!5e0!3m2!1sen!2sin!4v1721740575545!5m2!1sen!2sin" width="100%" height="305px"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contactus
