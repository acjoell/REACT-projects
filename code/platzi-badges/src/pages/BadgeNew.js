import React from "react";
import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";
import Navbar from "../components/Navbar.js";
import Badge from "../components/Badge.js";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />

        <div className="BadgeNew_hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName="Joel"
                lastName="Acosta"
                twitter="AcJoell"
                jobTitle="Front-end Developer"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;