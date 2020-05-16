import React, { useState } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
} from 'reactstrap';

import "../styles/main.scss";
import "../styles/navbar.scss";


const NavBar = (props) => {

  const handleActive = (e) => {
    return props.nav === e ? "nav-active" : "";
  }

  return(
    <Container fluid className="main-nav">
      <div className="text-center">
       <h2>Jacky Le Nghia</h2>
      <Nav className="main-nav-navbar">
        <NavItem>
        <NavLink tag={RRNavLink} to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/About" className={`${handleActive("About")}`}>About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/Portpolio" className={`${handleActive("Portpolio")}`}>Portpolio</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/Contact" className={`${handleActive("Contact")}`}>Contact</NavLink>
        </NavItem>
      </Nav>
      </div>
    </Container>
  );
}

export default NavBar;