import React from "react";
import "./styles/Badge.css";
import confLogo from "../images/badge-header.svg";

// Los componentes son clases
class Badge extends React.Component {
  // render define el resultado que vamos a ver en pantalla
  render() {
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
            Joel <br /> Acosta
          </h1>
        </div>

        <div className="badge_section-info">
          <h4>Front-end Developer</h4>
          <div>@AcJoell</div>
        </div>

        <div className="badge_footer">#platziConf</div>
      </div>
    );
  }
}

export default Badge;
