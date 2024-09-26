import { assets } from "../../assets";
import "./ResultAndExperience.css";

const ResultAndExperience = () => {
  return (
    <div className="result-container" id="resultAndExperience">
      <h1>Your Wellness, Our Mission</h1>
      <p>Proven Results & Decades of Experience</p>

      <div className="info-containers">
        <div className="customer">
          <div className="img">
            <img src={assets.customer} alt="" />
          </div>
          <h4>Total Customers</h4>
          <span>700+</span>
        </div>

        <div className="experience">
          <div className="img">
            <img src={assets.experience} alt="" />
          </div>
          <h4>Experience(yr)</h4>
          <span>15+</span>
        </div>
      </div>
    </div>
  );
};

export default ResultAndExperience;
