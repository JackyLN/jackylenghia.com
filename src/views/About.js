import React, { Component, useState } from "react";
import {
  Button,
  Col,
  Container,
  Row
} from 'reactstrap';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import "../styles/main.scss";

const About = (props) => {

  return (
    <Container>
      <NavBar nav="About"/>
      <Container fluid>
        <div class="page-header">
            <h1> About HaeYeon </h1>
        </div>

        <Row>
          <Col md="9">
            <br/>
            <p>I am a self-motivated passionate Computer Programmer, yoga lover, continuous learner. My coding manifesto
                is to write code readable and organised, reduce code redundency and increase efficiency, test and
                investigate every scenario possible.</p>
            <p>Currently looking for an opportunity to be a part of a development team for my Fall(September - December)
                2016 Co-op position and after graduation from January.</p>
            <br />
            <small><i>*for more information about co-op program and its benefit, please <a href="employer_guide.pdf" download="Employer's Guide">click here</a> to download 'Employer's Guide' document.</i></small>
          </Col>
          <Col md="3">
            <img src="../images/lucy.png" alt="Lucy" />
          </Col>
        </Row>
        
        <Row>
          <Col lg="12">
            <h2 class="page-header">Qualifications</h2>
          </Col>
          <Col lg="4" sm="6" className="row-text-center">
            <img class="img-center" src="../images/responsive_web_development.png" height="200" alt="Responsive Web Design" />
            <h3>Responsive Design<br/><small>CSS, Bootstrap</small></h3>
            <p>Website that is responsive to the scale of any devices.</p>
          </Col>
          <Col lg="4" sm="6" className="row-text-center">
            <img class="img-center" src="../images/cms.png" height="200" alt="Contents Management System" />
            <h3>CMS<br/><small>PHP, MySQL</small></h3>
            <p>Contents Management System that gives flexibility to manage website contents by yourself.</p>
          </Col>
          <Col lg="4" sm="6" className="row-text-center">
            <img class="img-center" src="../images/mean.png" height="200" alt="MEAN stack" />
            <h3>MEAN stack<br/><small>MongoDB, Express.js, Angular.js, and Node.js</small></h3>
            <p>Building a Dynamic Web Application</p>
          </Col>
        </Row>

        <Row>
          <Col lg="4" sm="6" className="row-text-center">
            <img class="img-center" src="../images/java-logo.png" height="200" alt="Java" />
            <h3>OOP<br/><small>Java</small></h3>
            <p>Object-Oriented Programming</p>
          </Col>
          <Col lg="4" sm="6" className="row-text-center">
            <img class="img-center" src="../images/Octocat.png" height="200" alt="GitHub" />
            <h3>Version Control<br/><small>GitHub</small> </h3>
            <p>Continuous version control to manage projects timely manner.</p>
          </Col>
          <Col lg="4" sm="6" className="row-text-center">
            <img class="img-center" src="" height="200" alt="" />
            <h3>Some skill<br/><small>related info</small></h3>
            <p>related info</p>
          </Col>
        </Row> 
      </Container>
      <Footer />
    </Container>
  );
}

export default About;