import React from "react";

class BadgeForm extends React.Component {
  // events
  // handleChange = (e) => {
  //   // console.log({
  //   // - - - imprime el nombre y el valor de lo que escribimos en el input - - -
  //   //   name: e.target.name,
  //   //   value: e.target.value,
  //   // });
  //   //this.setState sirve para guardar la informacion
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // };

  handleClick = (e) => {
    console.log("Button was clicked");
  };

  // handleSubmit = (e) => {
  //   e.preventDefault(); // evita que se envie el formulario
  //   console.log("Form was submited");
  //   console.log(this.state);
  // };

  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <h3>First Name</h3>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              size="22"
              // value lo implementamos para que el input sea controlado
              // value={this.state.firstName}
              value={this.props.formValues.firstName}
            />
          </div>

          <div className="form-group">
            <h3>Last Name</h3>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              size="22"
              // value={this.state.lastName}
              value={this.props.formValues.lastName}
            />
          </div>

          <div className="form-group">
            <h3>Email</h3>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              size="22"
              // value={this.state.email}
              value={this.props.formValues.email}
              required
            />
          </div>

          <div className="form-group">
            <h3>Job Title</h3>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              size="22"
              // value={this.state.jobTitle}
              value={this.props.formValues.jobTitle}
              required
            />
          </div>

          <div className="form-group">
            <h3>Twitter</h3>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              size="22"
              // value={this.state.twitter}
              value={this.props.formValues.twitter}
              required
            />
          </div>

          <br />
          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>

          {this.props.error && <p className="text-danger">{this.props.error.message}</p>}

        </form>
      </div>
    );
  }
}

export default BadgeForm;
