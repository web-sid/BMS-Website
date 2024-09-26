import { useContext, useState } from "react";
import "./Testimony.css";
import { StoreContext } from "../../context/context";
import { Link } from "react-router-dom";

const Testimony = () => {
  const { testimony, url } = useContext(StoreContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  const newImageUrl = url + `/testimony-img/`;

  const nextTestimonial = () => {
    if (currentIndex < testimony.length - 2) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevTestimonial = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="testimonials-carousel-section" id="testimony">
      <h2>Hear From Our Happy Customers</h2>
      <div className="carousel-wrapper">
        <button className="carousel-control prev" onClick={prevTestimonial}>
          &lt;
        </button>
        <div className="testimonials-carousel">
          <div
            className="carousel-inner"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {testimony.map((testimonial, index) => (
              <div className="testimonial-card" key={index}>
                <img
                  src={`${newImageUrl}${testimonial.imageUrl}`}
                  alt={testimonial.name}
                  className="testimonial-img"
                />
                <p className="testimonial-text">"{testimonial.description}"</p>
                <h3 className="testimonial-author">
                  {testimonial.name} <span>,{testimonial.location}</span>
                </h3>
              </div>
            ))}
          </div>
        </div>
        <button className="carousel-control next" onClick={nextTestimonial}>
          &gt;
        </button>
      </div>

      <Link to={"/results"}>
        <button className="btn">
          See More life Transformation Stories {">>"}
        </button>
      </Link>
    </div>
  );
};

export default Testimony;
