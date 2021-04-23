import React from "react";

import Cisco from "../assets/company-logos/cisco.png";
import Cuny2x from "../assets/company-logos/cuny-2x.png";
import echoAr from "../assets/company-logos/echo-ar.png";
import "../scss/Sponsors.scss";

function Sponsors() {
  return (
    <div id="sponsors" className="text-center row">
      <div className="col-12">
        <h2 className="col-12 text-center">Sponsors & Friends</h2>
        <p className="thanks">
          Huge thanks to all of our sponsors and partners for their amazing
          support!
        </p>

        <div className="sponsor-container">
          {/* Gold Tier */}
          <div className="sponsor-tier">
            <p className="sponsor-tier-text">Gold Sponsors</p>

            <div className="sponsor-images">
              <Sponsor
                sponsor="Cisco"
                tier="gold"
                logo={Cisco}
                link="https://www.cisco.com"
              />
            </div>
          </div>

          {/* Bronze Tier and Friends */}
          <div className="sponsor-tier">
            <p className="sponsor-tier-text">Bronze Sponsors</p>

            <div className="sponsor-images">
              <Sponsor
                sponsor="CUNY 2X"
                tier="bronze"
                logo={Cuny2x}
                link="https://www.techtalentpipeline.nyc/cs-doubling"
              />

              <Sponsor
                sponsor="echoAR"
                tier="bronze"
                logo={echoAr}
                link="https://www.echoar.xyz"
              />
            </div>
          </div>
        </div>

        <p className="sponsor">
          Care about empowering diverse students to tackle large-scale issues
          around the world? Get in touch with us to support the cause.
        </p>

        <a href="mailto:sponsor@hackbrooklyn.org">
          <button type="button" className="btn contact">
            Become a Sponsor
          </button>
        </a>
      </div>
    </div>
  );
}

const Sponsor = (props) => {
  const tier = props.tier;

  const SponsorSpacing = () => {
    if (tier === "silver" || tier === "gold") {
      return <br />;
    } else {
      return <span />;
    }
  };

  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <img
        className={`${props.tier} rounded`}
        src={props.logo}
        alt={`${props.sponsor} Logo`}
      />
      <SponsorSpacing />
    </a>
  );
};

export default Sponsors;
