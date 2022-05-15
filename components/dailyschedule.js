import React, { useContext } from "react";
import { Accordion, Container, Row, Col, Card } from "react-bootstrap";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import AccordionContext from "react-bootstrap/AccordionContext";
import heart from "../assets/images/shapes/heart-2-1.png";
import heart1 from "../assets/images/shapes/about-count-heart-1-1.png";
import faqImage from "../assets/images/kali/kali.jpg";

const ContextAwareToggle = ({ children, eventKey, callback }) => {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <h2
      className="para-title"
      style={{ color: `${isCurrentEventKey ? "var(--thm-secondary)" : ""}` }}
    >
      <span onClick={decoratedOnClick}>
        <i
          style={{
            color: `${isCurrentEventKey ? "var(--thm-secondary)" : ""}`
          }}
          className={`far ${isCurrentEventKey ? "fa-minus" : "fa-plus"}`}
        ></i>
        {children}
      </span>
    </h2>
  );
};
const DailySchedule = () => {
  return (
    <section className="faq-one pt-120 pb-60">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="faq-one__content">
              <div className="block-title">

                <h3>
                  Daily Schedule

                </h3>
              </div>

              <Row className="about-two__content mt-20">
                <Col  >
                  <p className="text-sentence font-weight-bold pr-10"> GATE OPEN</p>
                  <p className=" text-sentence pr-10"> ABISHEKA POOJA</p>
                  <p className="text-sentence pr-10">AARTHI</p>
                  <p className="text-sentence pr-10">KALASANTHI POOJA</p>
                  <p className="text-sentence pr-10">ARCHANA</p>
                  <p className="text-sentence pr-10">UCHIKALA POOJA</p>
                  <p className="text-sentence font-weight-bold pr-10">GATE CLOSED</p>
                  <p className="text-sentence font-weight-bold pr-10">GATE OPEN</p>
                  <p className="text-sentence  pr-10">ARCHANA</p>
                  <p className="text-sentence pr-10">ARDAJAMA POOJA</p>
                  <p className=" text-sentence font-weight-bold pr-10">GATE CLOSE</p>

                </Col>
                <Col >
                  <p className=" pr-10">06:00 AM</p>
                  <p className=" pr-10">06:20 AM TO 06:40 AM</p>
                  <p className=" pr-10"> 06:55 AM</p>
                  <p className=" pr-10"> 07:00 AM</p>
                  <p className=" pr-10"> 07:00 AM TO 12:10 PM</p>
                  <p className=" pr-10"> 12:15 PM</p>
                  <p className=" pr-10"> 12:30 PM</p>
                  <p className=" pr-10"> 03:00 PM</p>
                  <p className=" pr-10"> 03:15 PM TO 7:15 PM</p>
                  <p className=" pr-10"> 07:30 PM</p>
                  <p className=" pr-10"> 08:00 PM</p>
                </Col>
              </Row>
              <p className="font-weight-bold text-sentence">THE POOJA TIMINGS MAY BE CHANGED DURING THE FESTIVAL TIMES.</p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="about-counter__image clearfix">
              {/* <div className="about-counter__image-content">
                <img src={heart1} alt="" />
                <p>We’re here to support you every step of the way.</p>
              </div> */}
              <img src={faqImage} alt="kali image" className="float-left" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DailySchedule;
