import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectPage from "../../pages/ProjectPage/ProjectPage";
import ProjectListPage from "../../pages/ProjectListPage/ProjectListPage";
import AddProject from "../../pages/AddProject/AddProject";
import { useState } from "react";
import AddNewTaskPopup from "../AddNewTaskPopup/AddNewTaskPopup";
import LeftBar from "../LeftBar/LeftBar";

const MainApplication = () => {
  const [addTaskPopup, setAddTaskPopup] = useState(false);
  const [taskType, setTaskType] = useState("");
  return (
    <>
      <BrowserRouter>
        <div className="app__divide">
          {addTaskPopup ? (
            <AddNewTaskPopup
              setAddTaskPopup={setAddTaskPopup}
              taskType={taskType}
              setTaskType={setTaskType}
            />
          ) : null}

          <Routes>
            <LeftBar />
            <Routes>
              <Route
                path="projects"
                element={
                  <ProjectPage
                    setAddTaskPopup={setAddTaskPopup}
                    setTaskType={setTaskType}
                  />
                }
              />
              <Route 
              // path="/projecfts" 
              lement={<ProjectListPage />} />
              <Route path="new-project" element={<AddProject />} />
            </Routes>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default MainApplication;
