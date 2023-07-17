import "./LeftBar.scss";
import profileIMG from "../../assets/images/profile-img.png";
import searchICON from "../../assets/icons/serach.svg";

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
        </div>
      </div>
    </>
  );
};

export default LeftBar;
