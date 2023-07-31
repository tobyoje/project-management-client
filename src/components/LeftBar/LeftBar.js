import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./LeftBar.scss";

// Icons
import profileIMG from "../../assets/images/profile-img.png";
import searchICON from "../../assets/icons/serach.svg";
import arrowDown from "../../assets/icons/arrow-down.svg";
import arrowUp from "../../assets/icons/arrow-up.svg";
import settingsIcon from "../../assets/icons/settings.svg";
import logoutIcon from "../../assets/icons/logout.svg";

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
  console.log(userData);
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
                    <div className="sidebar__project-container">
                      <div
                        className="sidebar__project-container--namebox"
                        style={{
                          backgroundColor: getRandomColor(),
                        }}
                      >
                        {projectItem.project_name[0]}
                      </div>
                      <div className="sidebar__project-container--info">
                        <p> {projectItem.project_name}</p>
                        <p className="sidebar__project-container--tasks">{`${projectItem.tasks.length} Tasks`}</p>
                      </div>
                      <div>
                        <img
                          onSubmit={searchProject}
                          src={arrowDown}
                          alt="Search Icon"
                        />
                      </div>
                    </div>{" "}
                  </div>
                ))}
              </>
            )}

          

            <div className="sidebar__project-container sidebar__project-container--dropdown">
              <div className="sidebar__project-container2">
                <div
                  className="sidebar__project-container--namebox"
                  style={{ backgroundColor: "#a3a847" }}
                >
                  B
                </div>
                <div className="sidebar__project-container--info">
                  <p>Brixton App Project</p>
                  <p className="sidebar__project-container--tasks">8 Tasks</p>
                </div>
                <div>
                  <img
                    onSubmit={searchProject}
                    src={arrowUp}
                    alt="Search Icon"
                  />
                </div>
              </div>
              <div className="line-box">
                <div className="sidebar-line1 sidebar-line1--short"></div>
                <div className="sidebar-boxline2">
                  <div className="sidebar-line2"></div>
                  <p className="sideline-text sideline-text--cancel">
                    Make Wireframes
                  </p>
                </div>
                <div className="sidebar-line1"></div>
                <div className="sidebar-boxline2">
                  <div className="sidebar-line2"></div>
                  <p className="sideline-text ">Create HF Designs for app</p>
                </div>
                <div className="sidebar-line1"></div>
                <div className="sidebar-boxline2">
                  <div className="sidebar-line2"></div>
                  <p className="sideline-text ">Review with designers</p>
                </div>
                <div className="sidebar-line1"></div>
                <div className="sidebar-boxline2">
                  <div className="sidebar-line2"></div>
                  <p className="sideline-text ">
                    <a href=""> View All</a>
                  </p>
                </div>
              </div>
            </div>

         

         
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
