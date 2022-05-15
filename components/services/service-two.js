import React from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../../assets/images/poojas/01.jpg";
import image2 from "../../assets/images/poojas/02.jpg";
import image3 from "../../assets/images/poojas/03.jpg";
import image4 from "../../assets/images/poojas/04.jpg";
import image5 from "../../assets/images/poojas/01.jpg";
import heart from "../../assets/images/shapes/heart-2-2.png";
const SERVICE_TWO_DATA = [
  {
    extraClassName: "background-overlay",
    image: image1,
    title: "ARCHANA",
    text: "PRAISE OR HONOUR THE LORD",
    link: "#"
  },
  {
    extraClassName: "background-overlay",
    image: image2,
    title: "ABISHEKA POOJA",
    text: "AN ARCHANA IS A RITUAL DONE IN PRAISE OF A DEITY",
    link: "#"
  },
  {
    extraClassName: "background-overlay",
    image: image3,
    title: "NAVAGRAHA POOJA ",
    text: "THE CEREMONIAL WORSHIP DONE TO THE 9 PLANETS",
    link: "#"
  },
  {
    extraClassName: "background-overlay",
    image: image4,
    title: "RAHU KALA POOJA",
    text: "THIS POOJA IS DONE TO INCUR THE FAVOR OF THE SNAKE GOD",
    link: "#"
  },
  {
    extraClassName: "background-overlay",
    image: image5,
    title: "ASHTA LAKSMI PUJA",
    text: "GODDESS LAKSHMI IS WORSHIPPED IN SEVERAL FORMS",
    link: "#"
  }
];
const ServiceTwo = () => {
  const sliderOptions = {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      375: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      575: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1199: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  };
  return (
    <section className="service-two">
      <Container>
        <Swiper {...sliderOptions}>
          {SERVICE_TWO_DATA.map(
            ({ extraClassName, image, title, text, link }, index) => (
              <SwiperSlide key={`service-two-key-${index}`}>
                <div
                  className={`service-two__box ${extraClassName}`}
                  style={{ backgroundImage: `url(${image})` }}
                >
                  <div className="service-two__box-inner">

                    <p className="text-sentence">{text}</p>
                    <h3 className="text-sentence">
                      <Link href={link}>
                        <a>{title}</a>
                      </Link>
                    </h3>
                    <Link href={link}>
                      <a className="service-two__box-link">
                        <i className="far fa-angle-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </Container>
    </section>
  );
};

export default ServiceTwo;
