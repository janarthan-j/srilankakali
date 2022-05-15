import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import heart from "../../assets/images/shapes/heart-2-1.png";
import welcomeImage from "../../assets/images/kovil front/02.jpg";
import aboutImage from "../../assets/images/shapes/about-bag-1-2.png";

const AboutTwo = () => {
  return (
    <section className="about-two pt-120 pb-120">
      <Container>
        <Row>
          <Col xl={6}>
            <div className="about-two__image">
              <img src={welcomeImage} alt="" />

            </div>
          </Col>
          <Col xl={6}>
            <div className="about-two__content">
              <div className="block-title">
                <p>
                  History
                </p>
                <h3>ஸ்ரீ பத்திரகாளி ஹனுமன் ஆலய வரலாறும் அதன் சிறப்பும்</h3>
              </div>
              <p className="mb-40 pr-10">
                இலங்கையின் சப்ரகமுவ மாகாணம் கேகாலை மாவட்டத்தில் கண்டி கொழும்பு பிரதான வீதியில்  அமைந்துள்ளது வரக்காப்பொலை ஸ்ரீ பத்திரகாளி ஹனுமன் ஆலயம்.


                இவ்வாலயம் அமைந்துள்ள பிரதேசம்  இலங்கையின் பல பாகங்களுக்குச் செல்லக்கூடிய  போக்குவரத்திற்கான மையபகுதியாகவும் காணப்படுகிறது.
              </p>
              {/* <Row>
                <Col md={6}>
                  <div className="about-two__box">
                    <h3>
                      <i className="azino-icon-confirmation"></i> Become a
                      Volunteer
                    </h3>
                    <p>
                      Lorem ipsum dolor sit ametelit sed consectetur notted.
                    </p>
                  </div>
                  <div className="about-two__box">
                    <h3>
                      <i className="azino-icon-confirmation"></i> Quick
                      Fundraising
                    </h3>
                    <p>
                      Lorem ipsum dolor sit ametelit sed consectetur notted.
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="about-two__box-two">
                    <i className="azino-icon-support"></i>
                    <h3>You can make a big difference in someone’s life.</h3>
                  </div>
                </Col>
              </Row> */}
              <Link href="/about">
                <a className="thm-btn dynamic-radius">Discover More</a>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutTwo;
