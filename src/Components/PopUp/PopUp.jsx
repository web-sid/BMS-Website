import { useState, useEffect } from "react";
import "./PopUp.css";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    // Show the popup when the component mounts
    setShowPopup(true);
  }, []);

  const handleButtonClick = () => {
    // Redirect to WhatsApp
    window.location.href = "https://wa.me/7683005609";
  };

  const handleClose = () => {
    // Close the popup
    setShowPopup(false);
  };

  return (
    showPopup && (
      <div className="popup-overlay">
        <div className="popup-content">
          <h2>Welcome to Our Wellness Center!</h2>
          <p>Let us help you achieve your health goals.</p>
          <button onClick={handleButtonClick} className="popup-button">
            Chat with us on WhatsApp
          </button>
          <button onClick={handleClose} className="close-button">
            Close
          </button>
        </div>
      </div>
    )
  );
};

export default Popup;
