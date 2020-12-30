import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const footer = () => {
  return (
    <Container>
      <footer>
        <Row>
          <Col className="text-center py-3">copyright &copy; Rajsolutions</Col>
        </Row>
      </footer>
    </Container>
  );
};

export default footer;
