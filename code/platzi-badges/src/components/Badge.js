import React from "react";
import "./styles/Badge.css";
import confLogo from "../images/badge-header.svg";

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
          <img
            className="badge_avatar"
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            alt="Avatar"
          ></img>
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
