import Header from "../../components/Header/Header";
import "./ProjectPage.scss";
import ProjectGridView from "../../components/ProjectGridView/ProjectGridView";
import { useState } from "react";
import ProjectOverview from "../../components/ProjectOverview/ProjectOverview";
import ProjectListView from "../../components/ProjectListView/ProjectListView";
import editICON from "../../assets/icons/edit.svg";

const ProjectPage = () => {
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

  return (
    <>
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

          {menuTab == "gridview" && <ProjectGridView />}

          {menuTab == "listview" && <ProjectListView />}
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
