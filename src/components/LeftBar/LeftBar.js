import "./LeftBar.scss";
import profileIMG from "../../assets/images/profile-img.png";
import searchICON from "../../assets/icons/serach.svg";
import arrowDown from "../../assets/icons/arrow-down.svg";
import arrowUp from "../../assets/icons/arrow-up.svg";
import settingsIcon from "../../assets/icons/settings.svg";
import logoutIcon from "../../assets/icons/logout.svg";

const LeftBar = () => {
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
            <p className="sidebar__name">Cynthia Jones</p>
            <p className="sidebar__position">Project Manager</p>
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
            <div className="sidebar__project-container">
              <div className="sidebar__project-container--namebox">M</div>
              <div className="sidebar__project-container--info">
                <p> Music Website Project</p>
                <p className="sidebar__project-container--tasks">5 Tasks</p>
              </div>
              <div>
                <img
                  onSubmit={searchProject}
                  src={arrowDown}
                  alt="Search Icon"
                />
              </div>
            </div>

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

            <div className="sidebar__project-container">
              <div
                className="sidebar__project-container--namebox"
                style={{ backgroundColor: "#4C5FB1" }}
              >
                O
              </div>
              <div className="sidebar__project-container--info">
                <p> Oslo Project</p>
                <p className="sidebar__project-container--tasks">5 Tasks</p>
              </div>
              <div>
                <img
                  onSubmit={searchProject}
                  src={arrowDown}
                  alt="Search Icon"
                />
              </div>
            </div>

            <div className="sidebar__project-container">
              <div
                className="sidebar__project-container--namebox"
                style={{ backgroundColor: "#00918E" }}
              >
                C
              </div>
              <div className="sidebar__project-container--info">
                <p> Community Project</p>
                <p className="sidebar__project-container--tasks">5 Tasks</p>
              </div>
              <div>
                <img
                  onSubmit={searchProject}
                  src={arrowDown}
                  alt="Search Icon"
                />
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
