import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../../assets/Slider/art-craft-1.jpg";
import image2 from "../../assets/Slider/art-craft-4.jpg";
import image3 from "../../assets/Slider/art-craft-3.jpg";
import image4 from "../../assets/Slider/art-craft-2.jpg";

// Import Swiper styles
import "swiper/css";

const Slider = () => {
  return (
    <div>
      <div>
        
      </div>
      <div>
        <Swiper
          spaceBetween={50}
          slidesPerView={2}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div>
              <img src={image1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={image2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={image3} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={image4} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
