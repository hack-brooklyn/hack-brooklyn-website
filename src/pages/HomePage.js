import React, { useEffect, useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

import "typeface-luckiest-guy";
import "typeface-nunito";
import "typeface-quicksand";
import "typeface-delius";


import "../styles/scss/Sponsors.module.scss";

import Landing from "../components/Landing";
import About from "../components/About";
// import SocialGood from "../components/SocialGood";
// import Schedule from "../components/Schedule";
import FAQ from "../components/FAQ";
import Sponsors from "../components/Sponsors";
import Team from "../components/Team";
import Ground from "../components/Ground";

function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop) {
        setScrolled(false);
      } else {
        setScrolled(true);
      }
    });
  }, []);

  return (
    <Container className="homepage" fluid>
      <div id="content">
        <Navbar expand="lg" fixed="top" className={scrolled ? "scrolled" : ""}>
          <Navbar.Brand href="/">
            <img
              src="logo192.png"
              alt="Logo"
              className="navbar-logo img-responsive d-inline-block align-middle"
            />
            &nbsp;HACK BROOKLYN
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbar-content"
            className="navbar-menu ml-auto"
          />
          <Navbar.Collapse id="navbar-content">
            <Nav className="ml-auto">
              <Nav.Link href="#landing">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#faq">FAQ</Nav.Link>
              <Nav.Link href="#sponsors">Sponsors</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Landing />
        <About />
        {/* <SocialGood /> */}
        {/* <Schedule /> */}
        <FAQ />
        <Team />
        <Sponsors />
        <Ground />
      </div>
    </Container>
  );
}

export default HomePage;
