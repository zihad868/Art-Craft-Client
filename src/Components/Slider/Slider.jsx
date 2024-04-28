import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../../assets/Slider/art-craft-1.jpg";
import image2 from "../../assets/Slider/art-craft-4.jpg";
import image3 from "../../assets/Slider/art-craft-3.jpg";
import image4 from "../../assets/Slider/art-craft-2.jpg";

// Import Swiper styles
import "swiper/css";

const Slider = () => {
  return (
    <div className="mt-8">
      <div>
        <h3 className="text-4xl font-bold text-center">Jute & wooden Crafts </h3>
        <p className="text-center w-10/12 mx-auto mb-5">Explore our exquisite collection of handcrafted jute and wooden crafts, meticulously crafted with sustainable materials, offering eco-friendly decor and accessories that exude rustic charm and timeless elegance for your home.</p>
      </div>
      <div className="m-2">
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
