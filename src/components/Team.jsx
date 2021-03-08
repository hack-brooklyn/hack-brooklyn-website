import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import {
  Organizers2021,
  Organizers2020,
  Contributors2020,
} from "../data/Contributor_Info";
import styles from "../styles/scss/Team.module.scss";
// import defaultPic from "assets/web-dev-pics/test_avatar.png";

function Team() {
  const [width, setWidth] = useState(null);
  useEffect(() => {
    setWidth(window.screen.width);
  }, []);
  return (
    <Row className={styles.team} className="row">
      <div>
        <Col className="col-12">
          <Col className="col-12 text-center"><h2>Meet the Organizers!</h2></Col>
          <Col className={styles.organizers_year_heading}>
            <h3>Hack Brooklyn 2021</h3>
          </Col>
          <Row id="organizers-listings" className={styles.listings}>
            {Organizers2021.map((person) => (
              <Col
                className={width < 500 ? "col-6" : "col-4"}
                align="center"
              >
                <ProfileView person={person} />
              </Col>
            ))}
          </Row>
          <Col>
            <h3 className={styles.organizers_year_heading}>
              Hack Brooklyn 2020
          </h3></Col>
          <Row id="organizers-listings" className={styles.listings}>
            {Organizers2020.map((person) => (
              <div
                className={width < 500 ? "col-6" : "col-3"}
                align="center"
              >
                <ProfileView person={person} />
              </div>
            ))}
          </Row>
          <Col>
            <h2 className="col-12 text-center">Meet the Contributors!</h2></Col>
          <Col>
            <h3 className={styles.organizers_year_heading}>
              Hack Brooklyn 2020
          </h3></Col>
          <Row id="contributors-listings" className={styles.listings}>
            {Contributors2020.map((person) => (
              <div
                className={width < 500 ? "col-6" : "col-3"}
                align="center"
              >
                <ProfileView person={person} />
              </div>
            ))}
          </Row>
        </Col>
      </div>
    </Row >
  );
}

function ProfileView(props) {
  const { first, last, link, pic } = props.person;
  return (
    <div className={styles.avatar}>
      <a href={link || "#"} target="_blank" rel="noopener noreferrer">
        <img
          src={pic || "assets/web-dev-pics/test_avatar.png"}
          alt={`${first} ${last}`}
          className={styles.avatar_logo}
        />

        <p className={styles.avatar_name}>
          {first} {last}
          <br />
        </p>
      </a>
    </div>
  );
}

export default Team;
