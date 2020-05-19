import React, { Component, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  Row 
} from 'reactstrap';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import "../styles/main.scss";

import jackyimg from "../assets/img/jacky.jpg";

import facebooklogo from "../assets/img/facebooklogo.png";
import reactlogo from "../assets/img/reactlogo.png";
import nodejslogo from "../assets/img/nodejslogo.png";
import aspnetlogo from "../assets/img/aspnetlogo.png";
import androidlogo from "../assets/img/androidlogo.png";
import gitlogo from "../assets/img/gitlogo.png";


const About = (props) => {

  return (
    <Container>
      <NavBar nav="About"/>
      <Container>
        <div className="page-header">
            <h1> About Me </h1>
        </div>

        <Row>
          <Col md="9">
            <br/>
            <p>I am a self-motivated passionate Developer, cat lover, continuous learner. My coding manifesto
                is to write code readable and organised, reduce code redundency and increase efficiency, test and
                investigate every scenario possible.</p>
            <br />
          </Col>
          <Col md="3">
            <img src={jackyimg} alt="Jacky" className="avatar" />
          </Col>
        </Row>
        
        <Row>
          <Col lg="12">
            <h2 className="page-header">Skils</h2>
          </Col>
          <Col lg="4" sm="6" className="row-text-center">
            <Card className="border-0">
              <CardImg top className="card-img" src={facebooklogo} alt="Git" />
              <CardBody>
                <CardTitle className="card-title">Facebook Developer</CardTitle>
                <CardSubtitle className="card-subtitle">Facebook API, Instagram API, Messenger API</CardSubtitle>
                <CardText className="card-text">Develop and support for Facebook Bussiness using Facebook API</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4" sm="6" className="row-text-center">
            <Card className="border-0">
              <CardImg top className="card-img" src={reactlogo} alt="Git" />
              <CardBody>
                <CardTitle className="card-title">Website Design</CardTitle>
                <CardSubtitle className="card-subtitle">React</CardSubtitle>
                <CardText className="card-text">Website User Interface design using React Javascript library</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4" sm="6" className="row-text-center">
            <Card className="border-0">
              <CardImg top className="card-img" src={nodejslogo} alt="Git" />
              <CardBody>
                <CardTitle className="card-title">Backend Stack</CardTitle>
                <CardSubtitle className="card-subtitle">Node.js, Express.js, MongoDB, Nginx</CardSubtitle>
                <CardText className="card-text">Develop Backend website and API Services</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg="4" sm="6" className="row-text-center">
            <Card className="border-0">
              <CardImg top className="card-img" src={aspnetlogo} alt="Git" />
              <CardBody>
                <CardTitle className="card-title">ASP.NET</CardTitle>
                <CardSubtitle className="card-subtitle">asp.net MVC, API services, Microsoft SQL</CardSubtitle>
                <CardText className="card-text">Design and support enterprise system using Microsoft technology</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4" sm="6" className="row-text-center">
            <Card className="border-0">
              <CardImg top className="card-img" src={androidlogo} alt="Git" />
              <CardBody>
                <CardTitle className="card-title">Android</CardTitle>
                <CardSubtitle className="card-subtitle">Android mobile development</CardSubtitle>
                <CardText className="card-text">Build Android mobile application with latest UX</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4" sm="6" className="row-text-center">
            <Card className="border-0">
              <CardImg top className="card-img" src={gitlogo} alt="Git" />
              <CardBody>
                <CardTitle className="card-title">Version Control</CardTitle>
                <CardSubtitle className="card-subtitle">GIthub, Bitbucket</CardSubtitle>
                <CardText className="card-text">Manage and keep tracking projects and source code for software development</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row> 
      </Container>
      <Footer footerClass="footer" />
    </Container>
  );
}

export default About;