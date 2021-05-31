import React from "react";
import "./styles/Badge.css";
import confLogo from "../images/badge-header.svg";

// Los componentes son clases
class Badge extends React.Component {
  // render define el resultado que vamos a ver en pantalla
  render() {
    
    // props
    const {
      firstName, lastName
    } = this.props
    const twitter = "AcJoell";
    const jobTitle = "Front-end Developer";

    return (
      <div className="badge">
        <div className="badge_header">
          <img src={confLogo} alt="Logo de la conferencia"></img>
        </div>

        <div className="badge_section-name">
          <img
            className="badge_avatar"
            src="https://www.gravatar.com/avatar?d=identicon"
            alt="Avatar"
          ></img>
          <h1>
            {/* le llamamos a this.props.name en caso de que le demos valor en nuestro index.js */}
            {firstName} <br /> {lastName} {/* O si quieres hacerlo de manera larga this.props.name pero no es muy leible */}
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
