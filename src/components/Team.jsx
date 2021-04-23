import React from "react";

import {
  Organizers2021,
  Organizers2020,
  Contributors2020,
  Contributors2021,
  SoftwareEngineersPlaza2021,
  SoftwareEngineersWebsite2021,
  SoftwareEngineersWebsite2020,
} from "../data/Contributor_Info";
import "../scss/Team.scss";

import defaultPic from "../assets/person.svg";

function Team() {
  return (
    <div id="team">
      {/* Organizers */}
      <section>
        <h2>Meet the Organizers!</h2>

        <div className="organizing-year">
          <h3 className="organizers-year-heading">Hack Brooklyn 2021</h3>
          <ProfileListings people={Organizers2021} />
        </div>

        <div className="organizing-year">
          <h3 className="organizers-year-heading">Hack Brooklyn 2020</h3>
          <ProfileListings people={Organizers2020} />
        </div>
      </section>

      {/* Contributors */}
      <section>
        <h2>Meet the Contributors!</h2>

        <div className="organizing-year">
          <h3 className="organizers-year-heading">Hack Brooklyn 2021</h3>
          <ProfileListings people={Contributors2021} />
        </div>

        <div className="organizing-year">
          <h3 className="organizers-year-heading">Hack Brooklyn 2020</h3>
          <ProfileListings people={Contributors2020} />
        </div>
      </section>

      {/* Software Engineers */}
      <section>
        <h2>Meet the Software Engineers!</h2>

        <div className="organizing-year">
          <h3 className="organizers-year-heading">Hack Brooklyn 2021</h3>
          <h3 className="organizers-duration-heading">
            (December 2020 ⁠– May 2021)
          </h3>

          {/* Project: Hack Brooklyn Plaza */}
          <div>
            <h4 className="organizers-project-heading">
              <a
                href="https://github.com/hack-brooklyn/hack-brooklyn-plaza"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hack Brooklyn Plaza
              </a>
            </h4>
            <ProfileListings people={SoftwareEngineersPlaza2021} />
          </div>

          {/* Project: Hack Brooklyn Website */}
          <div>
            <h4 className="organizers-project-heading">
              <a
                href="https://github.com/hack-brooklyn/hackbrooklyn.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hack Brooklyn Website
              </a>
            </h4>
            <ProfileListings people={SoftwareEngineersWebsite2021} />
          </div>
        </div>

        <div className="organizing-year">
          <h3 className="organizers-year-heading">Hack Brooklyn 2020</h3>
          <h3 className="organizers-duration-heading">
            (December 2019 ⁠– April 2020)
          </h3>

          {/* Project: Hack Brooklyn Website */}
          <div>
            <h4 className="organizers-project-heading">
              <a
                href="https://github.com/hack-brooklyn/hackbrooklyn.org/tree/2020"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hack Brooklyn Website
              </a>
            </h4>
            <ProfileListings people={SoftwareEngineersWebsite2020} />
          </div>
        </div>
      </section>
    </div>
  );
}

function ProfileListings(props) {
  const { people } = props;

  return (
    <div className="row listings">
      {people.map((person) => (
        <div className={window.screen.width < 992 ? "col-6" : "col-md-3"}>
          <ProfileView person={person} />
        </div>
      ))}
    </div>
  );
}

function ProfileView(props) {
  const { first, last, link, pic } = props.person;

  return (
    <article className="avatar">
      <a href={link || "#"} target="_blank" rel="noopener noreferrer">
        <img
          src={pic || defaultPic}
          alt={`${first} ${last}`}
          className="avatar-logo"
        />

        <p className="avatar-name">
          {first} {last}
        </p>
      </a>
    </article>
  );
}

export default Team;
