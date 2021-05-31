import React from "react";

class BadgeForm extends React.Component {
  handleChange = (e) => {
    console.log({
      name: e.target.name,
      value: e.target.value,
    });
  };

  handleClick = (e) => {
    console.log("Button was clicked");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form was submited");
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          
          <div className="form-group">
            <h3>First Name</h3>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="firstname"
              size="22"
              required
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>

        </form>
      </div>
    );
  }
}

export default BadgeForm;
