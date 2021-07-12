import React from "react";
import NavBar from "../components/Navbar";
import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";
import BadgesList from "../components/BadgesList";

class Badges extends React.Component {
    state = {
        data: [
            {
                "id": "c5f4a4ec-8cc0-4c09-a8f2-a3780d740084",
                "firstName": "Helena",
                "lastName": "Kilback",
                "email": "Eryn2@gmail.com",
                "jobTitle": "Dynamic Directives Orchestrator",
                "twitter": "HelenaKilback49886-1693",
                "avatarUrl": "https://api.multiavatar.com/Helena.png"
              },
              {
                "id": "ea5640b9-3177-47bb-8fe4-25338c43e66c",
                "firstName": "Arno",
                "lastName": "Murphy",
                "email": "Raegan_Morar59@hotmail.com",
                "jobTitle": "Lead Intranet Architect",
                "twitter": "ArnoMurphy78604-9408",
                "avatarUrl": "https://api.multiavatar.com/Arno.png"
              },
              {
                "id": "058d574c-4b67-4607-aae5-d00cfe257182",
                "firstName": "Emile",
                "lastName": "Paucek",
                "email": "Titus_Cremin15@yahoo.com",
                "jobTitle": "Internal Marketing Manager",
                "twitter": "EmilePaucek04688",
                "avatarUrl": "https://api.multiavatar.com/Emile.png"
              },
              {
                "id": "3c7c327f-1aca-41eb-8592-9257eafef4a8",
                "firstName": "Rowan",
                "lastName": "Boehm",
                "email": "Jules_Mohr@hotmail.com",
                "jobTitle": "Central Applications Supervisor",
                "twitter": "RowanBoehm01351",
                "avatarUrl": "https://api.multiavatar.com/Rowan.png"
              },
              {
                "id": "231b5e7e-da6e-406b-9048-5431009038c4",
                "firstName": "Conrad",
                "lastName": "Ernser",
                "email": "Carey.Schamberger@hotmail.com",
                "jobTitle": "Chief Solutions Consultant",
                "twitter": "ConradErnser80604-5459",
                "avatarUrl": "https://api.multiavatar.com/Conrad.png"
              },
              {
                "id": "3f118941-b1be-44d8-83c2-c83aadef9ca6",
                "firstName": "Kailee",
                "lastName": "Jast",
                "email": "Clement_Mills@hotmail.com",
                "jobTitle": "Dynamic Implementation Engineer",
                "twitter": "KaileeJast49404-0773",
                "avatarUrl": "https://api.multiavatar.com/Kailee.png"
              }
        ]
    }
  render() {
    return (
      <div>
        <NavBar />

        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>
        
        <div className="Badge__container">
            <div className="Badges__buttons">
                <a href="/badges/new" className="btn btn-primary">
                    New Badge
                </a>
            </div>
        </div>

        <div className="Badges__list">
            <div className="Badges__container">
                <BadgesList badges={this.state.data} />
            </div>
        </div>

      </div>
    );
  }
}
export default Badges;
