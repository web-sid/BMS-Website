import "./Contact.css";
import emailjs from "emailjs-com";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleButtonClick = () => {
    // Redirect to WhatsApp
    window.location.href = "https://wa.me/7683005609";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f54u7rw",
        "template_w7p6dwn",
        e.target,
        "zHwb59tYtUQ6d9V5u"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message. Please try again later.");
        }
      );
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            Let us know what is your health goal and We will help you achieve
            it.
          </p>
          <div className="contact-buttons">
            <Link to={"/results"}>
              <button className="contact-button">Our Results</button>
            </Link>

            <button onClick={handleButtonClick} className="whatsapp-button">
              <FaWhatsapp className="whatsapp-icon" />
              Chat with us on WhatsApp
            </button>
          </div>
        </div>
        <div className="contact-form">
          <h3>Lets Talk</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                placeholder="First Name*"
                required
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                placeholder="Last Name*"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Email Address*"
                required
                onChange={handleChange}
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                placeholder="Phone Number*"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="What is your Health Goal?*"
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Book a Free Session
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
