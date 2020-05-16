import React, { Component, useState } from "react";
import {
  Button,
  Col,
  Container,
  Row
} from 'reactstrap';
import Footer from "../components/Footer";

import "../styles/homepage.scss";

import cat from "../assets/img/cat.jpg";

const HomePage = (props) => {

  return (
    <Container fluid="true" className="full">
      <Row>
        <Col md={{ size: 6, offset: 3}} className="panel">
          <div className="text-vertical-center">
            <h2>Jacky Le Nghia</h2>
            <p>
                <br/>
            </p>
            <h4 className="text-introduce">
                Hi, it is great to meet you. 
                <br/>I'm Jacky Le, a Developer, <br/> Welcome to my website.
            </h4>
            <br/>
            <Button color="secondary">Click here</Button>
          </div>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}

export default HomePage;

