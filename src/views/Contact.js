import React, { Component, useState } from "react";
import {
  Button,
  Col,
  Container,
  Row
} from 'reactstrap';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Contact = (props) => {
  return(
    <div class="container"> 
      <NavBar nav="Contact" />
      <Footer />
    </div>
  );
}

export default Contact;