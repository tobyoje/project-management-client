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
import Landing from "./pages/Landing/Landing";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            </Routes>
            <div className="app__divide">


            <Routes>

            <Route path="/project/:projectId" element={<ProjectPage />} />
            <Route path="projects" element={<ProjectListPage />} />
            <Route path="new-project" element={<AddProject />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<SignUpPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
