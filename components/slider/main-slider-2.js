import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, EffectFade } from "swiper";
import banner1 from "../../assets/images/kovil front/01.jpg";
import banner2 from "../../assets/images/kovil front/02.jpg";
import Link from "next/link";

SwiperCore.use([Autoplay, Pagination, EffectFade]);

const MainSliderTwo = () => {
  const mainSlideOptions = {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    pagination: {
      el: "#main-slider-pagination",
      type: "bullets",
      clickable: true
    },
    autoplay: {
      delay: 5000
    }
  };

  return (
    <section className="main-slider main-slider__two">
      <Swiper {...mainSlideOptions}>
        <SwiperSlide>
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${banner1})` }}
          ></div>

          <Container>
            <Row className=" justify-content-start">
              <Col xl={6} lg={12} className="text-left">
                <h2>
                  Sri Maha Badrakali Amman Kovil
                </h2>
                <p></p>
                <Link href="#">
                  <a


                    className="scroll-to-target thm-btn dynamic-radius"
                  >
                    Check Pooja Time
                  </a>
                </Link>
              </Col>
            </Row>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${banner2})` }}
          ></div>

          <Container>
            <Row className=" justify-content-start">
              <Col xl={6} lg={12} className="text-left">
                <h2>
                  Sri Maha Badrakali Amman Kovil
                </h2>
                <p></p>
                <Link href="#">
                  <a


                    className="scroll-to-target thm-btn dynamic-radius"
                  >
                    Check Pooja Time
                  </a>
                </Link>
              </Col>
            </Row>
          </Container>
        </SwiperSlide>

        <div className="swiper-pagination" id="main-slider-pagination"></div>
      </Swiper>
    </section>
  );
};

export default MainSliderTwo;
