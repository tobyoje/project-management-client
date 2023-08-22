import "./EditProjectPopup.scss";
import { useEffect, useState } from "react";
import cancelICON from "../../assets/icons/cancel.svg";
import axios from "axios";

const EditProjectPopup = ({
  setEditProjectPopup,
  projectData,
  setProjectData,
}) => {
  const formatDatetime = (datetime) => {
    const date = new Date(datetime);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  const closePopup = () => {
    const currentPathname = window.location.pathname;

    const newPathname = currentPathname.substring(
      0,
      currentPathname.lastIndexOf("/")
    );

    window.history.replaceState(null, "", newPathname);

    setEditProjectPopup(false);
  };

  const [newData, setNewData] = useState([]);

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

  console.log(projectData);

  const token = sessionStorage.getItem("token");

  const handleAddTask = (event) => {
    event.preventDefault();
    setFormErrors({});
    let formIsValid = true;
    const errors = {};

    // if (
    //   !newData.projectTitle &
    //   !newData.projectDescription &
    //   !newData.project_priority &
    //   !newData.project_startdate &
    //   !newData.projectEndDate
    // ) {
    //   formIsValid = false;
    //   errors["error_required"] = true;
    // }

    const removeTimeZoneSuffix = (dateString) => {
      return dateString.substring(0, dateString.length - 5);
    };

    const updatedProjectInfo = {
      project_name: newData.projectTitle || projectData.project_name,
      project_description:
        newData.projectDescription || projectData.project_description,
      project_priority: newData.projectPriority || projectData.project_priority,
      project_startdate:
        newData.project_priority ||
        removeTimeZoneSuffix(projectData.project_startdate),
      project_enddate:
        newData.projectEndDate ||
        removeTimeZoneSuffix(projectData.project_enddate),
      project_id: projectData.project_id,
    };

    if (!updatedProjectInfo) {
      errors["error_required"] = true;
    }

    if (!formIsValid) {
      return setFormErrors(errors);
    }

    axios
      .put(`${process.env.REACT_APP_API_BASE_URL}/api/user/edit-project/`, updatedProjectInfo, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setProjectData(response.data);
        setEditProjectPopup(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="popup-container">
        <div className="popup-container__content">
          <div className="popup-container__content-top">
            <p className="popup-container__title">Edit Project</p>
            <img
              onClick={closePopup}
              className="popup-container__content-top--icon"
              src={cancelICON}
              alt="Cancel Icon"
            />
          </div>

          <form className="popup-container__form">
            <div className="popup-container__form--textinfo">
              <label>Project Title</label>
              <input
                type="text"
                name="projectTitle"
                defaultValue={projectData.project_name}
                onChange={(event) => handleChange(event)}
              />
            </div>

            <div className="popup-container__form--textinfo">
              <label>Project Description</label>

              <textarea
                name="projectDescription"
                defaultValue={projectData.project_description}
                onChange={(event) => handleChange(event)}
              ></textarea>
            </div>
            <div className="popup-container__form--other-info">
              <label>Project Priority</label>

              <div className="popup-container__pr-label">
                <div>
                  <input
                    type="radio"
                    name="projectPriority"
                    id="High"
                    // checked={projectData.project_priority === "High" }
                    onChange={(event) => handleChange(event)}
                  />
                  <label className="priority priority-high" htmlFor="High">
                    High
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    name="projectPriority"
                    id="Medium"
                    // checked={projectData.project_priority === "Medium"}
                    onChange={(event) => handleChange(event)}
                  />
                  <label className="priority priority-medium" htmlFor="Medium">
                    Medium
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    name="projectPriority"
                    id="Low"
                    // checked={projectData.project_priority === "Low"}
                    onChange={(event) => handleChange(event)}
                  />
                  <label className="priority priority-low" htmlFor="Low">
                    Low
                  </label>
                </div>
              </div>

              <div className="popup-container__date">
                <div className="popup-container__date--col">
                  <label>Start Date</label>
                  <input
                    type="datetime-local"
                    name="projectStartDate"
                    defaultValue={formatDatetime(projectData.project_startdate)}
                    onChange={(event) => handleChange(event)}
                  />
                </div>

                <div className="popup-container__date--col">
                  <label>Due Date</label>
                  <input
                    type="datetime-local"
                    name="projectEndDate"
                    defaultValue={formatDatetime(projectData.project_startdate)}
                    onChange={(event) => handleChange(event)}
                  />
                </div>
              </div>
            </div>
            {formErrors.error_required && (
              <p className="form-error">All fields are required</p>
            )}
            <div
              onClick={handleAddTask}
              className="popup-container__form--submit"
            >
              Update
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProjectPopup;
