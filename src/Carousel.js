import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"
import hike1 from "./resurse-statice/images/hike1.jpg"
import hike2 from "./resurse-statice/images/hike2.jpg"
import hike3 from "./resurse-statice/images/hike3.jpg"

export default function SimpleSlider() {
    var settings = {
      arrows: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div className="carousel">
          <img src={hike1} alt="poza1" />
        </div>
        <div className="carousel">
            <img src={hike2} alt="poza2" />
        </div>
        <div className="carousel">
            <img src={hike3} alt="poza3" />
        </div>
        
      </Slider>
    );
  }