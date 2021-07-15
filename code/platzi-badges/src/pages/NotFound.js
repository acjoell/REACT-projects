import React from "react";
import image from "../images/NotFound.svg";
import "./styles/NotFound.css";

class NotFound extends React.Component {
  render() {
    return (
      <>
        <div className="container-body">
        <h1 className="title">Lo sentimos, esta pagina no existe.</h1>
        <img className="NotFound-img" src={image} alt="NofFound" />
        </div>
      </>
    );
  }
}

export default NotFound;
