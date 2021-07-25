import React from "react";
import "./styles/Badge.css";
import confLogo from "../images/badge-header.svg";
import Gravatar from "./Gravatar";

class Badge extends React.Component {
  render() {
    // props
    const { firstName, lastName, twitter, jobTitle } = this.props;

    // const empty = "otra manera de hacer un prop";

    return (
      <div className="badge">
        <div className="badge_header">
          <img src={confLogo} alt="Logo de la conferencia"></img>
        </div>

        <div className="badge_section-name">
          <Gravatar
            className="badge_avatar"
            email={this.props.email}
            alt="Avatar"
          />
          <h1>
            {/* le llamamos a this.props.name en caso de que le demos valor en nuestro index.js */}
            {firstName} <br /> {lastName}
          </h1>
        </div>

        <div className="badge_section-info">
          <h4>{jobTitle}</h4>
          <div>@{twitter}</div>
        </div>

        <div className="badge_footer">#platziConf</div>
      </div>
    );
  }
}

export default Badge;
