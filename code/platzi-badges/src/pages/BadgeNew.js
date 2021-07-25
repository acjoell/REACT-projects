import React from "react";
import "./styles/BadgeNew.css";

import header from "../images/platziconf-logo.svg";

import Badge from "../components/Badge.js";
import BadgeForm from "../components/BadgeForm.js";
import PageLoading from "../components/PageLoading.js"
import api from "../api";

class BadgeNew extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({loading: true, error: null})

    try {
      await api.badges.create(this.state.form);
      this.setState({loading: false})

      this.props.history.push('/badges')

    } catch (error) {
      this.setState({loading: false, error: error})
    }

  };

  render() {

    if(this.state.loading) {
      return <PageLoading />
    }

    return (
      <>
        <div className="BadgeNew_hero">
          <img
            className="img-fluid BadgeNew_hero-image"
            src={header}
            alt="Logo"
          />
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={this.state.form.firstName || "FIRST_NAME"}
                lastName={this.state.form.lastName || "LAST_NAME"}
                twitter={this.state.form.twitter || "TWITTER"}
                email={this.state.form.email || "EMAIL"}
                jobTitle={this.state.form.jobTitle || "JOBTITLE"}
                avatarUrl=""
              />
            </div>
            <div className="col">
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BadgeNew;
