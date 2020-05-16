import React, { Component, useState } from "react";
import {
  Button,
  Col,
  Container,
  Row
} from 'reactstrap';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Portpolio = (props) => {
  return(
    <div class="container">
      
      <NavBar nav="Portpolio" />
      <Footer />
    </div>
  );
}

export default Portpolio;