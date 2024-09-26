import { useContext, useEffect, useState } from "react";
import "./Results.css";
import { StoreContext } from "../../context/context";

const Results = () => {
  const { url, results } = useContext(StoreContext);

  const newUrl = url + "/result-img/";
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleVideoClick = () => {
    setIsFullScreen(true);
  };

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="video-container">
      <div className={`video-section ${isFullScreen ? "blur-background" : ""}`}>
        <h2>What Our Customers Are Saying</h2>
        <div className="video-content">
          <div className="video-wrapper">
            <video onClick={handleVideoClick} controls>
              <source src="./Uma.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="video-text">
            <p>
              Uma has achieved a remarkable milestone, losing 21 kilograms on
              her journey with us. Inspired by her own transformation, she is
              now dedicated to helping others improve their health and
              well-being. As a certified wellness coach, Uma leads by example,
              living a vibrant and healthy life while motivating others to
              embrace a similar path.
            </p>
            <div className="customer-info">
              <h4>Uma Maheshwari, Delhi</h4>
              <p>Fit Fusion Wellness- Member</p>
            </div>
          </div>
        </div>
        <div className="video-content">
          <div className="video-wrapper">
            <video onClick={handleVideoClick} controls>
              <source src="./mamta.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="video-text">
            <p>
              Viji has successfully lost 10 kilograms and significantly improved
              her overall health on her journey with us. Thrilled with her
              results, she feels more energetic and lighter than ever. After
              achieving her weight loss goal, Viji has learned the skills to
              maintain and balance her weight. She is now living a healthy life,
              armed with the knowledge to prevent future weight gain.
            </p>
            <div className="customer-info">
              <h4>Viji Krishnan, Vijayawada</h4>
              <p>Fit Fusion Wellness- Member</p>
            </div>
          </div>
        </div>
      </div>
      <div className="result-info">
        <h1>Transformation Stories</h1>
        <div className="results-container">
          {results.map((el, index) => {
            return (
              <div key={index} className="customer-infoBox">
                <div className="avatar">
                  <img src={`${newUrl}${el.imageUrl}`} alt="" />
                </div>

                <div className="customer-info">
                  <p className="customer-name">{el.name}</p>
                  <p>{el.age} yrs </p>
                  <p>{el.location}</p>
                  <p className="customer-result">{el.result}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Results;
