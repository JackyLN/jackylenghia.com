import React, { Component, useState, useEffect} from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Row
} from 'reactstrap';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import "../styles/main.scss";


const Contact = (props) => {
  useEffect(() => {
    FB.XFBML.parse();
  });

  return(
    <Container>
      <NavBar nav="Contact" />
      <Container>
        <div className="page-header">
            <h1>How To Reach Me</h1>
        </div>
        <Row>
          <Col md="9">
            <p>Find me on any channel below</p>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Alert color="primary">Leave comment</Alert>
          </Col>
          <Col>
            <div className="fb-comments" data-href="https://jackylenghia.com/#/Contact" data-numposts="5" data-width=""></div>
          </Col>
        </Row>  
        <Row>
          <Col md="12">
            <Alert color="warning">Or how about private coversation</Alert>
          </Col>
          <Col lg="4" sm="6" className="row-text-center">
            <a href="https://stackexchange.com/users/3771455">
              <img src="https://stackexchange.com/users/flair/3771455.png" width="208" height="58" alt="profile for Jacky on Stack Exchange, a network of free, community-driven Q&amp;A sites" title="profile for Jacky on Stack Exchange, a network of free, community-driven Q&amp;A sites" />
            </a>
          </Col>

        </Row>
      </Container>
      
      <Footer footerClass="footer" />
    </Container>
  );
}

export default Contact;