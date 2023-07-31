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

function App() {
  const [addTaskPopup, setAddTaskPopup] = useState(false);
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

          <Routes>
            <Route
              path="/*"
              element={
                <React.Fragment>
                  {/* <LeftBar /> */}
                  <Routes>
                    <Route
                      path="/"
                      element={
                        <ProjectPage
                          setAddTaskPopup={setAddTaskPopup}
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
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
