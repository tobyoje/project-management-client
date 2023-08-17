import "./AddProject.scss";
import Header from "../../components/Header/Header";
import LeftBar from "../../components/LeftBar/LeftBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";

const AddProject = () => {
  const navigate = useNavigate();
  const [newData, setNewData] = useState([]);

  const [userData, setUserData] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (event) => {
    const { name, value, type } = event.target;

    if (type === "radio" && name === "projectPriority") {
      setNewData({
        ...newData,
        [name]: event.target.id,
      });
    } else {
      setNewData({
        ...newData,
        [name]: value,
      });
    }
  };

  const handleAddProject = (event) => {
    event.preventDefault();
    setFormErrors({});

    let formIsValid = true;

    const errors = {};

    if (
      !newData.projectTitle &
      !newData.projectDescription &
      !newData.projectPriority &
      !newData.projectStartDate &
      !newData.projectEndDate
    ) {
      formIsValid = false;
      errors["error_required"] = true;
    }

    if (!newData.projectTitle) {
      formIsValid = false;
      errors["error_required"] = true;
    }

    if (!newData.projectDescription) {
      formIsValid = false;
      errors["error_required"] = true;
    }

    if (!newData.projectPriority) {
      formIsValid = false;
      errors["error_required"] = true;
    }

    if (!newData.projectStartDate) {
      formIsValid = false;
      errors["error_required"] = true;
    }

    if (!newData.projectEndDate) {
      formIsValid = false;
      errors["error_required"] = true;
    }

    if (!formIsValid) {
      return setFormErrors(errors);
    }

    const newProjectInfo = {
      project_name: newData.projectTitle,
      project_description: newData.projectDescription,
      project_priority: newData.projectPriority,
      project_startdate: newData.projectStartDate,
      project_enddate: newData.projectEndDate,
    };

    console.log(newProjectInfo);
    const token = sessionStorage.getItem("token");

    axios
      .post(`http://localhost:8080/api/user/add-project`, newProjectInfo, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        navigate("/projects");
      })
      .catch((error) => {
        console.log(error);
      });
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
      <div className="project">
        <Header />
        <div className="project__content">
          <div className="project-add">
            <p className="project-add__title">Create New Project</p>

            <form className="project-add__form">
              <div className="project-add__form--leftcol">
                <label>Project Title</label>
                <input
                  type="text"
                  name="projectTitle"
                  onChange={(event) => handleChange(event)}
                />

                <label>Project Description</label>

                <textarea
                  name="projectDescription"
                  onChange={(event) => handleChange(event)}
                ></textarea>
                {formErrors.error_required && (
                  <p className="form-error">All fields are required</p>
                )}

                <div
                  onClick={handleAddProject}
                  className="project-add__form--submit"
                >
                  Create
                </div>
                <p className="project-add__form--note">
                  After you create project, add tasks on the project page and
                  set priorities to them.
                </p>
              </div>

              <div className="project-add__form--rightcol">
                <label>Start Date</label>
                <input
                  type="datetime-local"
                  name="projectStartDate"
                  onChange={(event) => handleChange(event)}
                />

                <label>Due Date</label>
                <input
                  type="datetime-local"
                  name="projectEndDate"
                  onChange={(event) => handleChange(event)}
                />

                <label>Project Priority</label>

                <div className="project-add__pr-label">
                  <div>
                    <input
                      type="radio"
                      name="projectPriority"
                      onChange={(event) => handleChange(event)}
                      id="High"
                    />
                    <label className="priority-high" htmlFor="High">
                      High
                    </label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      name="projectPriority"
                      onChange={(event) => handleChange(event)}
                      id="Medium"
                    />
                    <label className="priority-medium" htmlFor="Medium">
                      Medium
                    </label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      name="projectPriority"
                      onChange={(event) => handleChange(event)}
                      id="Low"
                    />
                    <label className="priority-low" htmlFor="Low">
                      Low
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProject;
