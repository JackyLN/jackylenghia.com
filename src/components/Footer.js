import React, { Component, useState } from "react";
import { Container } from "reactstrap";

import "../styles/footer.scss";

const Footer = (props) => {
  return(
    <Container className={props.footerClass}>
      <p className="text-muted">
      &copy;2020 Jacky Le. All Rights Reserved. <br />
      Email: <a href="mailto:lenghia1991@gmail.com">lenghia1991@gmail.com</a>
      </p>
    </Container>
  );
}

export default Footer;