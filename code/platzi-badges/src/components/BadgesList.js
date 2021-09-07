import React from "react";
import "./styles/BadgesList.css";
import Gravatar from './Gravatar'
import { Link } from "react-router-dom";

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="list-unstyled BadgesListItem">
        <Gravatar
          email={this.props.badge.email}
          alt="Avatar"
          className="BadgesListItem__avatar"
        />
        <div>
          <div>
            <strong>
              {this.props.badge.firstName} {this.props.badge.lastName}
            </strong>
          </div>
          <div className="Twitter__name">
            <span className="Twitter__logo"></span>@{this.props.badge.twitter}
          </div>
          <div>{this.props.badge.jobTitle}</div>
        </div>
      </div>
    );
  }
}

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h2>No badges were found</h2>
          <Link className="btn btn-primary" to="/badges/new">
              Create new badge
          </Link>
        </div>
      );
    }

    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map((badge) => {
            return (
              <li key={badge.id}>
                <Link
                  className="text-reset text-decoration-none"
                  to={`/badges/${badge.id}/edit`}
                >
                  <BadgesListItem badge={badge} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesList;
