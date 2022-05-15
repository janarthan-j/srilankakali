import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import GalleryCard from "./gallery-card";
import galleryDot from "../../assets/images/shapes/gallery-dot-1-1.png";
import image1 from "../../assets/images/perehara/1 (1).jpg";
import image2 from "../../assets/images/perehara/1 (15).jpg";
import image3 from "../../assets/images/perehara/IMG-20180522-WA0000.jpg";
import image4 from "../../assets/images/perehara/IMG-20180522-WA0037.jpg";
import image5 from "../../assets/images/perehara/1 (5).jpg";
import image6 from "../../assets/images/perehara/IMG-20180522-WA0040.jpg";
import image7 from "../../assets/images/perehara/IMG-20180522-WA0045.jpg";
import image8 from "../../assets/images/perehara/IMG-20180522-WA0049.jpg";


SwiperCore.use([Autoplay]);

const GalleryHomeTwo = () => {
  const sliderOptions = {
    spaceBetween: 100,
    slidesPerView: 4,
    autoplay: true,
    breakpoints: {
      0: {
        spaceBetween: 0,
        slidesPerView: 1
      },
      425: {
        spaceBetween: 0,
        slidesPerView: 1
      },
      575: {
        spaceBetween: 30,
        slidesPerView: 2
      },
      767: {
        spaceBetween: 30,
        slidesPerView: 3
      },
      991: {
        spaceBetween: 30,
        slidesPerView: 3
      },
      1199: {
        spaceBetween: 30,
        slidesPerView: 4
      }
    }
  };
  return (
    <section className="gallery-home-two pt-60 pb-60">
      <Container>
        <div className="block-title">

          <h3>Festivals</h3>
        </div>

        <img src={galleryDot} alt="" className="gallery-home-two__dots" />
        <Swiper {...sliderOptions}>
          <SwiperSlide>
            <GalleryCard image={image1} />
          </SwiperSlide>
          <SwiperSlide>
            <GalleryCard image={image2} />
          </SwiperSlide>
          <SwiperSlide>
            <GalleryCard image={image3} />
          </SwiperSlide>
          <SwiperSlide>
            <GalleryCard image={image4} />
          </SwiperSlide>
          <SwiperSlide>
            <GalleryCard image={image5} />
          </SwiperSlide>
          <SwiperSlide>
            <GalleryCard image={image6} />
          </SwiperSlide>
          <SwiperSlide>
            <GalleryCard image={image7} />
          </SwiperSlide>
          <SwiperSlide>
            <GalleryCard image={image8} />
          </SwiperSlide>

        </Swiper>
      </Container>
    </section>
  );
};

export default GalleryHomeTwo;
