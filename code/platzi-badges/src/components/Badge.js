import React from "react";
import confLogo from "../images/badge-header.svg"

// Los componentes son clases
class Badge extends React.Component {
  // render define el resultado que vamos a ver en pantalla
  render() {
    return (
        <div>
            <div>
                <img src={confLogo} alt="Logo de la conferencia"></img> 
            </div>
            
            <div>
            <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar"></img> 
                <h1>Joel <br/> Acosta</h1>
            </div>

            <div>
                <p>Front-end Developer</p>
                <p>@AcJoell</p>
            </div>

            <div>
                #platziConf
            </div>
        </div>
    )
  }
}

export default Badge;
