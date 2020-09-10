import React, { Component, useState } from "react";
import { useHistory } from 'react-router-dom';
import {
  Button,
  Col,
  Container,
  Row
} from 'reactstrap';
import Footer from "../components/Footer";

import "../styles/main.scss";

const HomePage = (props) => {

  const history = useHistory();

  const handleClick = () => {
    history.push("/About");
  }

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
            <Button color="secondary" onClick={handleClick}>Click here</Button>
          </div>
        </Col>
      </Row>
      <Footer footerClass="footer-home"/>
    </Container>
  );
}

export default HomePage;