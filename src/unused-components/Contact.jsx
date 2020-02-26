import React from "react";
import WICS from "../assets/logos/wics.png";
import CS from "../assets/logos/cs-club.png";
import "../scss/Contact.scss"

function Contacts() {
  return (
    <div id="contact" className="row">
      {/* TO DO: MAKE THE SLIDE HAPPEN WHEN THE ORGANIZERS SECTION IS VIEWED */}
      <div className="col-12">
        <h1>Meet the Organizers!</h1>
      </div>
        <div className="col" align="center">
          <img src={CS} alt="Computer Science Club logo" className="logo cs" />
          <p><b>Computer Science Club </b></p>
          {/* <p>Founders of Hack Brooklyn, got together website, sponsors, clubs and everything in the mix.</p> */}
          <a href="https://www.instagram.com/bc_compsci/"><i class="fab fa-instagram"></i></a>
          <a href="https://www.facebook.com/groups/bc.cis.club/"><i class="fab fa-facebook"></i></a>
        </div>
        <div className="col" align="center">
          <img src={WICS} alt="Women in Computer Science logo" className="wics logo" />
          <p><b>Women in Computer Science Club </b></p>
          {/* <p>Founders of Hack Brooklyn, got together website, sponsors, clubs and everything in the mix</p> */}
          <a href="https://www.linkedin.com/in/wics-brooklyn-college-70643b192/"><i class="fab fa-linkedin"></i></a>
          <a href="https://www.instagram.com/bc_wics_/"><i class="fab fa-instagram"></i></a>
          <a href="https://www.facebook.com/BCWomenInCS/"><i class="fab fa-facebook"></i></a>
        </div>
    </div>
  );
}

export default Contacts;