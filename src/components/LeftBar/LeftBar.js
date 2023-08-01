import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./LeftBar.scss";

// Icons
import profileIMG from "../../assets/images/profile-img.png";
import searchICON from "../../assets/icons/serach.svg";
import settingsIcon from "../../assets/icons/settings.svg";
import logoutIcon from "../../assets/icons/logout.svg";
import SideBarSIngleProject from "../SideBarSIngleProject/SideBarSIngleProject";

const LeftBar = ({ userData }) => {
  const navigate = useNavigate();
  const getRandomColor = () => {
    const maxDarkValue = 128;
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 3; i++) {
      const randomValue = Math.floor(Math.random() * maxDarkValue);
      const hexValue = randomValue.toString(16).padStart(2, "0");
      color += hexValue;
    }

    return color;
  };

  const searchProject = () => {
    console.log("something");
  };

  return (
    <>
      <div className="sidebar">
        <div className="sidebar__profile">
          <img
            className="sidebar__profile-photo"
            src={profileIMG}
            alt="Profile"
          />
          <div>
            <p className="sidebar__name">{userData.user.name}</p>
            <p className="sidebar__position">{userData.user.position}</p>
          </div>
        </div>

        <div className="sidebar__my-projects">
          <p className="sidebar__title">My Projects</p>
          <form className="sidebar__search-area">
            <input
              className="sidebar__search-textarea"
              type="text"
              placeholder="Search Project"
            />
            <div className="sidebar__search-button">
              <img
                onSubmit={searchProject}
                src={searchICON}
                alt="Search Icon"
              />
            </div>
          </form>

          <div className="sidebar__projects-list">
            {userData.projects.length === 0 ? (
              <p>No projects</p>
            ) : (
              <>
                {userData.projects.map((projectItem) => (
                  <div key={projectItem.project_id}>
                    <SideBarSIngleProject projectItem={projectItem} />
                  </div>
                ))}
              </>
            )}
          </div>
        </div>

        <div className="sidebar__bottom">
          <div className="sidebar__menu-container">
            <img
              className="sidebar__menu-container--icon"
              src={settingsIcon}
              alt="Settings Icon"
            />
            <p>Settings</p>
          </div>
          <div className="sidebar__menu-container">
            <img
              className="sidebar__menu-container--icon"
              src={logoutIcon}
              alt="Logout Icon"
            />
            <p>Logout</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftBar;
