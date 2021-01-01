import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <div className="hero-span">
      <Row>
        <Col className="hero" md={7}>
          <br></br>
          <br></br>
          <br></br>
          <span>
            We are delivering quality sales and repair services in the
            electronics sector for 15 years. We are based in Surat, your local
            trusted business now went online.
          </span>

          <p>
            For quality sales and service pelase contact us. We not only sell
            products but also reapair device and have been successfully
            repairing products by our customer for 15 year now. We are
            delivering all over india and for repair it is only limited to
            Surat, Gujarat. If you have any queries related to any services
            please contact us from the contact session or the contact links
            below.{" "}
          </p>
        </Col>
        <Col md={5} className="my-4">
          <img class="img" src="/images/shopping.svg" alt="something" />
        </Col>
      </Row>
      <br></br>
      <br></br>
    </div>
  );
};

export default Hero;
