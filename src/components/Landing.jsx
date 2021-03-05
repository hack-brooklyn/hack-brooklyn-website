import React from "react";

import "../scss/Landing.scss";
import Zoom from "react-reveal/Zoom";
import Countdown from "react-countdown";

function Landing() {
  return (
    <div id="landing" className="row">
      <div className="col-12">
        <p className="intro disable-user-select">
          <Zoom cascade duration={3000}>
            Where Your Fantasies Come Alive
          </Zoom>
        </p>
        <h1 className="disable-user-select">
          HACK<span className="brooklyn">BROOKLYN</span>
        </h1>

        <p className="date-and-time">April 23rd - April 25th</p>
        <p>Virtual hackathon hosted by Brooklyn College</p>

        <Countdown
          date={new Date("Feb 19, 2021 00:00:00 EST")}
          renderer={({ days, hours, minutes, seconds, completed }) => {
            if (!completed) {
              return (
                <div className="countdown-clock">
                  <p>Priority applications open in</p>
                  <p>
                    {String(days) +
                      " days, " +
                      String(hours) +
                      " hours, " +
                      String(minutes) +
                      " minutes, and " +
                      String(seconds) +
                      " seconds"}
                  </p>
                </div>
              );
            } else {
              return (
                <>
                  <p>Applications are now open to the public!</p>
                  <a
                    href="https://plaza.hackbrooklyn.org/apply"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button type="button" className="btn register">
                      Apply Now
                    </button>
                  </a>
                </>
              );
            }
          }}
        />
      </div>
    </div>
  );
}

export default Landing;
