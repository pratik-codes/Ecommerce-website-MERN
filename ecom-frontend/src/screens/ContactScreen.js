import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import Meta from "../components/Meta";

const ContactScreen = () => {
  return (
    <>
      <Meta title={"Contact"} />
      <Container>
        <p className="head">Contact.</p>
        <br></br>
        <br></br>
        <div className="border-top">
          <br></br>
          <br></br>
          <br></br>
          <p className="head ">
            We are based in Surat, Gujarat. for any queries please contact
            below.
          </p>
          <p className="p-width">
            We are expert in delivering amazing services to our client and great
            deals on products they buy from us. In case of any feedback please
            mail us we would be happy to hear from you.
          </p>
          <br></br>
          <a className="my-2">+91-9898884300 📞</a>
          <br></br>
          <a className="my-2">
            +91-9898884300{" "}
            <img
              src="https://img.icons8.com/office/16/000000/whatsapp--v1.png"
              alt="whatsapp"
            />
          </a>
          <br></br>
          <a className="my-2" href="mailto:rajsolutionsurat@gmail.com">
            rajsolutionsurat@gmail.com 📧
          </a>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </Container>
    </>
  );
};

export default ContactScreen;
