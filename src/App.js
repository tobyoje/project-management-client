import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import LeftBar from "./components/LeftBar/LeftBar";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import ProjectListPage from "./pages/ProjectListPage/ProjectListPage";
import AddProject from "./pages/AddProject/AddProject";
import React, { useEffect, useState } from "react";
import AddNewTaskPopup from "./components/AddNewTaskPopup/AddNewTaskPopup";
import axios from "axios";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import EditTaskPopup from "./components/EditTaskPopup/EditTaskPopup";


function App() {
  const [addTaskPopup, setAddTaskPopup] = useState(false);
  const [editTaskPopup, setEditTaskPopup] = useState(false);
  const [taskType, setTaskType] = useState("");

  return (
    <div className="app">
      <BrowserRouter>
        <div className="app__divide">
          {addTaskPopup ? (
            <AddNewTaskPopup
              setAddTaskPopup={setAddTaskPopup}
              taskType={taskType}
              setTaskType={setTaskType}
            />
          ) : null}


{editTaskPopup ? (
            <EditTaskPopup
            setEditTaskPopup={setEditTaskPopup}
              taskType={taskType}
              setTaskType={setTaskType}
            />
          ) : null}

          <Routes>
            <Route
              path="/*"
              element={
                <React.Fragment>
                  <Routes>
                    <Route
                      path="/project/:projectId"
                      element={
                        <ProjectPage
                          setAddTaskPopup={setAddTaskPopup}
                          addTaskPopup={addTaskPopup}
                          setEditTaskPopup={setEditTaskPopup}
                          editTaskPopup={editTaskPopup}
                          setTaskType={setTaskType}
                        />
                      }
                    />
                    <Route path="projects" element={<ProjectListPage />} />
                    <Route path="new-project" element={<AddProject />} />
                  </Routes>
                </React.Fragment>
              }
            />

            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<SignUpPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
