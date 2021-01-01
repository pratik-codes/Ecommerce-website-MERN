import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const FormContainer = ({ children }) => {
  return (
    <div>
      <Container className="color">
        <br></br>
        <Row className="justify-content-md-center">
          <Col xs={12} md={7}>
            {children}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FormContainer;
