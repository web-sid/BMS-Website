import { assets } from "../../assets";
import "./Hero.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div id="hero">
      <Slider {...settings}>
        <div className="slide">
          <div className="img-container">
            <img src={assets.Hero3} alt="" />
          </div>
        </div>
        <div className="slide">
          <div className="img-container">
            <img src={assets.Hero2} alt="" />
          </div>
        </div>
        <div className="slide">
          <div className="img-container">
            <img src={assets.Hero1} alt="" />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
