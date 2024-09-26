import { useContext, useEffect } from "react";
import "./About.css";
import { StoreContext } from "../../context/context";
import { assets } from "../../assets";

const About = () => {
  const { url, coaches } = useContext(StoreContext);

  const newUrl = url + "/coaches-img/";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-us-container">
      <h1 className="about-us-title">About Us</h1>
      <p className="about-us-subtitle">
        We love improving people's lives and when you love what you do, you want
        to share it.
      </p>
      <div className="about-us-content">
        <div className="about-us-text">
          <h2>We Help You Live a Healthier Life</h2>

          <p>
            Welcome to our world of wellness! As proud Herbalife Independent
            Associates, we are passionate about improving lives through the
            power of nutrition and a healthy lifestyle. When you love what you
            do, it shows, and we can't wait to share our passion with you.
          </p>
          <p>
            We believe that everyone deserves the chance to live a healthy,
            vibrant life. That's why we tailor our approach to meet the unique
            nutritional and fitness needs of each individual. Think of us as
            your personal matchmakers, connecting you with the perfect blend of
            nutrition and exercise for a lifetime of health and happiness.
          </p>
          <p>
            With over 15 years of experience, we have had the privilege of
            helping thousands of people transform their lives. We take pride in
            our ability to guide others toward healthier, happier lifestyles and
            are especially proud of the many complete transformations we've
            witnessed.
          </p>
          <p>
            Are you ready to embrace a more active and healthy way of living?
            Are you tired of relying on medications to get through your day?
            Join us, and let’s embark on this journey together to achieve a life
            of vitality and wellness. Your healthiest, happiest self is just
            around the corner.
          </p>
        </div>
        <div className="about-us-image">
          <img src={assets.aboutImage} />
        </div>
      </div>

      <div className="team-container">
        <h1 className="team-title">Meet Our Team</h1>
        <div className="team-members">
          {coaches.map((member, index) => (
            <div className="team-member" key={index}>
              <div className="team-member-image">
                <img src={`${newUrl}${member.imageUrl}`} alt={member.name} />
              </div>
              <h2 className="team-member-role">{member.name}</h2>
              <h3 className="team-member-exp">in business since</h3>
              <h3 className="team-member-name">{member.experience}</h3>
              <p className="team-member-description">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
