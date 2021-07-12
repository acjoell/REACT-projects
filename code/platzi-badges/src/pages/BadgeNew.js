import React from "react";
import "./styles/BadgeNew.css";

import Navbar from "../components/Navbar.js";

import header from "../images/badge-header.svg";

import Badge from "../components/Badge.js";
import BadgeForm from "../components/BadgeForm.js";

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
            <div className="col">
              <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
