import "./Offer.css";

const services = [
  {
    title: "Free Body Checkup",
    icon: "https://www.aversi.ge/uploads/matimg/53df012474d2087d96ec749d37affe3c.png",
    description:
      "Receive a comprehensive body checkup at no cost to help you understand your health status and track your fitness progress.",
  },
  {
    title: "Complimentary Nutritious Breakfast",
    icon: "https://static.vecteezy.com/system/resources/previews/019/857/575/non_2x/watermelon-juice-and-juicy-free-png.png",
    description:
      "Start your day with a delicious and healthy breakfast provided for free to fuel your body with best nutrients.",
  },
  {
    title: "Weight Loss, Gain & Maintain",
    icon: "https://w7.pngwing.com/pngs/943/207/png-transparent-weighing-scale-measurement-illustration-footprints-cartoon-says-miscellaneous-cartoon-character-photography-thumbnail.png",
    description:
      "Achieve your fitness goals with our tailored programs for weight loss, gain, and maintenance, ensuring you stay on the right track. Without leaving your favourite food behind.",
  },
  {
    title: "Variety of Exercises",
    icon: "https://clipart-library.com/2023/flat-hand-drawn-dance-fitness-class-illustration_52683-56671.jpg",
    description:
      "Engage in a wide range of exercises like Zumba, Aerobics, Tabata etc, designed to improve your overall fitness, flexibility, and strength, suitable for all levels.",
  },
  {
    title: "Yoga",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_IYTv-UzIbcLJwnuYcdVmZEX39MQPcGLW7w&s",
    description:
      "Enhance your physical and mental well-being through our yoga sessions, focusing on flexibility, balance, and relaxation.",
  },
  {
    title: "Meditation",
    icon: "https://cdn.policyx.com/images/beginner-yoga-asanas-for-everyday-main-banner.webp",
    description:
      "Find peace and reduce stress with our guided meditation sessions, helping you achieve a calm and focused mind.",
  },
];

const Offer = () => {
  return (
    <section className="services" id="offer">
      <h2>
        Our <span>SERVICES</span>
      </h2>
      <div className="service-cards">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">
              <img src={service.icon} alt="" />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offer;
