import React, { Component, useState } from "react";

import "../styles/footer.scss";

const Footer = (props) => {
  return(
    <div class="footer">
      <p class="text-muted">
      &copy;2020 Jacky Le. All Rights Reserved. <br />
      Email: <a href="mailto:lenghia1991@gmail.com">lenghia1991@gmail.com</a>
      </p>
    </div>
  );
}

export default Footer;