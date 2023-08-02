import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import "./ProjectListPage.scss";

import Header from "../../components/Header/Header";
import gridViewICON from "../../assets/icons/grid.svg";
import listViewICON from "../../assets/icons/list.svg";
import addICON from "../../assets/icons/add.svg";
import timeICON from "../../assets/icons/time.svg";
import favoriteICON from "../../assets/icons/favorite.svg";
import xfavoriteICON from "../../assets/icons/x-favorite.svg";

import optionsICON from "../../assets/icons/options.svg";
import LeftBar from "../../components/LeftBar/LeftBar";

const ProjectListPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [priorityColor, setPriorityColor] = useState("");

  // const [favIcon, setFavIcon] = useState();
  const [timeDifference, setTimeDifference] = useState("");

  // const onChangeFavIcon = () => {
  //   if (favoriteICON) {
  //     setFavIcon(xfavoriteICON);
  //   }
  //   if (xfavoriteICON) {
  //     setFavIcon(favoriteICON);
  //   }
  // };

  const calculateTimeDifference = (startDate, endDate) => {
    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);
    const timeDifference = endDateObj.getTime() - startDateObj.getTime();
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return { days };
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const userId = sessionStorage.getItem("user_id");

    if (!token && !userId) {
      navigate("/login");
    }

    axios
      .get(`http://localhost:8080/api/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Attach the token in the headers for authentication
        },
      })
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user information:", error);
      });
  }, []);

  if (!userData) {
    return (
      <div>
        <p>loading...</p>
      </div>
    );
  }

  return (
    <>
      <LeftBar userData={userData} />
      <div className="projectlist">
        <Header />

        <div className="projectlist__content">
          <div className="projectlist__counter">
            <p className="projectlist__counter--title">
              Total Projects -&nbsp;
            </p>
            <p className="projectlist__counter--number">
              {userData.projects.length}
            </p>
          </div>

          <div className="projectlist__sort">
            <div>
              <img
                className="projectlist__sort-icon"
                src={gridViewICON}
                alt="Grid Icon"
              />
              <img
                className="projectlist__sort-icon"
                src={listViewICON}
                alt="List Icon"
              />
            </div>

            <div className="projectlist__sort-right">
              <p className="projectlist__sort-item">SORT</p>
              <p className="projectlist__sort-item">PRIORITY</p>
              <p className="projectlist__sort-item">DAYS</p>
            </div>
          </div>

          <div className="projectlist__grid">
            <Link to={"/new-project"}>
              <div className="projectlist__grid-item projectlist__grid-item--new">
                <img
                  className="projectlist__grid-item--icon"
                  src={addICON}
                  alt="Add Icon"
                />
                <p>New Project</p>
              </div>
            </Link>

            {userData.projects.length === 0 ? (
              <p></p>
            ) : (
              <>
                {userData.projects.map((projectItem) => (
                  <Link to={`/project/${projectItem.project_id}`}>
                    <div
                      className="projectlist__grid-item"
                      key={projectItem.project_id}
                    >
                      <p className="projectlist__grid-title">
                        {projectItem.project_name}
                      </p>
                      <p className="projectlist__grid-desc">
                        {`${projectItem.project_description.substring(
                          0,
                          110
                        )} ...`}
                      </p>
                      <div
                        className={`projectlist__grid-priority ${
                          projectItem.project_priority === "High"
                            ? "projectlist__grid-priority--high"
                            : ""
                        } ${
                          projectItem.project_priority === "Low"
                            ? "projectlist__grid-priority--low"
                            : ""
                        } ${
                          projectItem.project_priority === "Medium"
                            ? "projectlist__grid-priority--medium"
                            : ""
                        } `}
                      >
                        {projectItem.project_priority}
                      </div>
                      <div className="projectlist__grid-bottom">
                        <div className="projectlist__grid-timecontainer">
                          <img
                            className="projectlist__grid-icon projectlist__grid-icon--space"
                            src={timeICON}
                            alt="Time Icon"
                          />
                          <p className="projectlist__grid-time">
                            {`${
                              calculateTimeDifference(
                                projectItem.project_startdate,
                                projectItem.project_enddate
                              ).days
                            }d left`}
                          </p>
                        </div>

                        <div>
                          <img
                            // onClick={onChangeFavIcon}
                            className="projectlist__grid-icon projectlist__grid-icon--space"
                            src={
                              projectItem.favorite === 1
                                ? favoriteICON
                                : xfavoriteICON
                            }
                            alt="Favorite Icon"
                          />
                          <img
                            className="projectlist__grid-icon"
                            src={optionsICON}
                            alt="Options Icon"
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectListPage;
