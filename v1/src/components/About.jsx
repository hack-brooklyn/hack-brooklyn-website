import React from "react";

import "../scss/About.scss";
import witch from "../assets/side-art.svg";
// import Slide from 'react-reveal/Slide';
// import Fade from 'react-reveal/Fade';
// import Typical from 'react-typical';

function About() {
  /*   const steps = [
    'educational disparity.', 1000,
    'accessibility.', 1000,
    'diversity.', 1000,
    'climate change.', 1000,
    'social good.', 1000,
    'housing inequality.', 1000,
    'mental health.', 1000,
    'sustainability.', 1000
  ]; */

  return (
    <div id="about" className="row">
      <div className="col-12">
        <h2 className="about-header text-center">
          Welcome to <strong className="bold">Hack Brooklyn!</strong>
        </h2>
      </div>
      <div className="col about-text">
        <div className="about-summary">
          <p>
            Hack Brooklyn is where your quest begins. Step into a world of magic
            on
            <strong className="bold"> April 23rd </strong>where over 500 of the
            brightest students across the world will come together to build
            innovative solutions for causes ranging from homelessness to the
            lack of diversity.
          </p>
          <br />
          <p>
            Over the course of 48 hours, teams of up to four students will
            collaborate to use the technology of today to solve present-day
            problems and create the world of tomorrow. Create a project, acquire
            new skills, and network with other hackers and companies as you
            learn and grow in the heart of Brooklyn. Whether this is the first
            time you’ve ever seen a line of code or the hundredth time you’ve
            published an app, Hack Brooklyn has something for everyone. With a
            multitude of interactive workshops and events ranging from the
            basics of programming to the hottest and latest technologies, you’ll
            leave Hack Brooklyn with something new.
          </p>
        </div>
      </div>
      <div className="col-3 about-image">
        <img className="witch" src={witch} alt="witch" />
      </div>
    </div>
  );
}

export default About;
