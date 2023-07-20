import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import LeftBar from "./components/LeftBar/LeftBar";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import ProjectListPage from "./pages/ProjectListPage/ProjectListPage";
import AddProject from "./pages/AddProject/AddProject";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <div className="app__divide">
          <LeftBar />
          <Routes>
            <Route path="/" element={<ProjectPage />} />
            <Route path="projects" element={<ProjectListPage />} />
            <Route path="new-project" element={<AddProject />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
