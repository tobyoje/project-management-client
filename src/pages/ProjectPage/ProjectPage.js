import Header from "../../components/Header/Header";
import "./ProjectPage.scss";
import ProjectGridView from "../../components/ProjectGridView/ProjectGridView";
import { useEffect, useState } from "react";
import ProjectOverview from "../../components/ProjectOverview/ProjectOverview";
import ProjectListView from "../../components/ProjectListView/ProjectListView";
import editICON from "../../assets/icons/edit.svg";
import axios from "axios";
import LeftBar from "../../components/LeftBar/LeftBar";
import { useNavigate } from "react-router-dom";

const ProjectPage = ({ setAddTaskPopup, setTaskType }) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [menuTab, setMenuTab] = useState("overview");

  const onChangeToOverview = () => {
    setMenuTab("overview");
  };
  const onChangeToGrid = () => {
    setMenuTab("gridview");
  };

  const onChangeToList = () => {
    setMenuTab("listview");
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
  console.log(userData);

  return (
    <>
      <LeftBar userData={userData} />

      <div className="project">
        <Header />
        <div className="project__content">
          <div className="project__title-container">
            <div className="project__name-avatar">B</div>
            <p className="project__name">Brixton App Project</p>
          </div>

          <div className="project__menubar">
            <ul>
              <li
                onClick={onChangeToOverview}
                className={
                  menuTab === "overview" ? "project__menubar--active" : ""
                }
              >
                Project Overview
              </li>
              <li
                onClick={onChangeToGrid}
                className={
                  menuTab === "gridview" ? "project__menubar--active" : ""
                }
              >
                Card View
              </li>
              <li
                onClick={onChangeToList}
                className={
                  menuTab === "listview" ? "project__menubar--active" : ""
                }
              >
                List View
              </li>
            </ul>

            <div className="project__edit-button">
              <div>
                <img
                  className="project__edit-icon"
                  src={editICON}
                  alt="Edit Icon"
                />
              </div>
              <div>Edit Project</div>
            </div>
          </div>
          {menuTab == "overview" && <ProjectOverview />}

          {menuTab == "gridview" && (
            <ProjectGridView
              setAddTaskPopup={setAddTaskPopup}
              setTaskType={setTaskType}
            />
          )}

          {menuTab == "listview" && <ProjectListView />}
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
