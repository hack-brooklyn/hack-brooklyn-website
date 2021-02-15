import React, { useState } from "react";

import {
  Organizers2021,
  Organizers2020,
  Contributors2020,
} from "../data/Contributor_Info";
import "../scss/Team.scss";
import defaultPic from "../assets/web-dev-pics/test_avatar.png";

function Team() {
  return (
    <div id="team" className="row">
      <div>
        <div className="col-12">
          <h2 className="col-12 text-center">Meet the Organizers!</h2>
          <h3 className="col-12 text-center organizers-year-heading">
            Hack Brooklyn 2021
          </h3>
          <div id="organizers-listings" className="row listings">
            {Organizers2021.map((person) => (
              <div
                className={window.screen.width < 500 ? "col-6" : "col-4"}
                align="center"
              >
                <ProfileView person={person} />
              </div>
            ))}
          </div>

          <h3 className="col-12 text-center organizers-year-heading">
            Hack Brooklyn 2020
          </h3>
          <div id="organizers-listings" className="row listings">
            {Organizers2020.map((person) => (
              <div
                className={window.screen.width < 500 ? "col-6" : "col-3"}
                align="center"
              >
                <ProfileView person={person} />
              </div>
            ))}
          </div>

          <h2 className="col-12 text-center">Meet the Contributors!</h2>
          <h3 className="col-12 text-center organizers-year-heading">
            Hack Brooklyn 2020
          </h3>
          <div id="contributors-listings" className="row listings">
            {Contributors2020.map((person) => (
              <div
                className={window.screen.width < 500 ? "col-6" : "col-3"}
                align="center"
              >
                <ProfileView person={person} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileView(props) {
  const { first, last, link, pic } = props.person;
  return (
    <div className="avatar">
      <a href={link || "#"} target="_blank" rel="noopener noreferrer">
        <img
          src={pic || defaultPic}
          alt={`${first} ${last}`}
          className="avatar-logo"
        />

        <p className="avatar-name">
          {first} {last}
          <br />
        </p>
      </a>
    </div>
  );
}

export default Team;
