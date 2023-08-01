import Header from "../../components/Header/Header";
import "./ProjectPage.scss";
import ProjectGridView from "../../components/ProjectGridView/ProjectGridView";
import { useEffect, useState } from "react";
import ProjectOverview from "../../components/ProjectOverview/ProjectOverview";
import ProjectListView from "../../components/ProjectListView/ProjectListView";
import editICON from "../../assets/icons/edit.svg";
import axios from "axios";
import LeftBar from "../../components/LeftBar/LeftBar";
import { useNavigate, useParams } from "react-router-dom";

const ProjectPage = ({ setAddTaskPopup, setTaskType }) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [projectData, setProjectData] = useState(null);

  const [menuTab, setMenuTab] = useState("overview");
  const { projectId } = useParams();

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
    const fetchData = async () => {
      try {
        const token = sessionStorage.getItem("token");
        const userId = sessionStorage.getItem("user_id");

        if (!token || !userId) {
          navigate("/login");
        } else {
          const response = await axios.get(
            `http://localhost:8080/api/user/${userId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setUserData(response.data);
        }
      } catch (error) {
        console.error("Error fetching user information:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const findProjectById = async () => {
      if (userData) {
        const foundProject = userData.projects.find(
          (project) => project.project_id === parseInt(projectId)
        );

        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (foundProject) {
          setProjectData(foundProject);
        } else {
          setProjectData(null);
        }
      }
    };

    findProjectById();
  }, [userData, projectId]);

  if (!userData) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (!projectData) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  console.log(userData);
  console.log(projectData);

  return (
    <>
      <LeftBar userData={userData} />

      <div className="project">
        <Header />
        <div className="project__content">
          <div className="project__title-container">
            <div className="project__name-avatar">
              {projectData.project_name[0]}
            </div>
            <p className="project__name">{projectData.project_name}</p>
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
                Tasks Card View
              </li>
              <li
                onClick={onChangeToList}
                className={
                  menuTab === "listview" ? "project__menubar--active" : ""
                }
              >
                Tasks List View
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
          {menuTab == "overview" && (
            <ProjectOverview projectData={projectData} />
          )}

          {menuTab == "gridview" && (
            <ProjectGridView
              setAddTaskPopup={setAddTaskPopup}
              setTaskType={setTaskType}
              projectData={projectData}
            />
          )}

          {menuTab == "listview" && <ProjectListView />}
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
