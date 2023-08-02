import "./EditTaskPopup.scss";
import cancelICON from "../../assets/icons/cancel.svg";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditTaskPopup = ({ setEditTaskPopup, taskType }) => {
  const navigate = useNavigate();

  // Get the current URL path
  const path = window.location.pathname;

  // Extract the projectId from the URL path
  const projectId = path.split("/").pop();

  // Now you have the projectId, and you can use it as needed.

  const closePopup = () => {
    setEditTaskPopup(false);
  };

  const [newData, setNewData] = useState([]);

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (event) => {
    const { name, value, type } = event.target;

    if (type === "radio" && name === "taskPriority") {
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

  const handleAddTask = (event) => {
    event.preventDefault();
    // setFormErrors({});

    // let formIsValid = true;

    // const errors = {};

    // if (
    //   !newData.taskTitle &
    //   !newData.taskPriority &
    //   !newData.taskStartDate &
    //   !newData.taskEndDate
    // ) {
    //   formIsValid = false;
    //   errors["error_required"] = true;
    // }

    // if (!formIsValid) {
    //   return setFormErrors(errors);
    // }

    const newTaskInfo = {
      task_name: newData.taskTitle,
      task_category: taskType,
      task_priority: newData.taskPriority,
      task_startdate: newData.taskStartDate,
      task_enddate: newData.taskEndDate,
      project_id: projectId,
    };

    console.log(newTaskInfo);
    const token = sessionStorage.getItem("token");

    axios
      .post(`http://localhost:8080/api/user/add-task`, newTaskInfo, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setEditTaskPopup(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // console.log(projectId);

  return (
    <>
      <div className="popup-container">
        <div className="popup-container__content">
          <div className="popup-container__content-top">
            <p className="popup-container__title">
              {`Edit Task in "${taskType}"`}
            </p>
            <img
              onClick={closePopup}
              className="popup-container__content-top--icon"
              src={cancelICON}
              alt="Cancel Icon"
            />
          </div>

          <form className="popup-container__form">
            <div className="popup-container__form--textinfo">
              <label>Task Title</label>
              <input
                type="text"
                name="taskTitle"
                onChange={(event) => handleChange(event)}
              />

              {/* <label>Task Description</label>

              <textarea name="taskDescription"></textarea> */}
            </div>

            <div className="popup-container__form--other-info">
              <label>Task Priority</label>

              <div className="popup-container__pr-label">
                <div>
                  <input
                    type="radio"
                    name="taskPriority"
                    id="High"
                    onChange={(event) => handleChange(event)}
                  />
                  <label className="priority-high" htmlFor="High">
                    High
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    name="taskPriority"
                    id="Medium"
                    onChange={(event) => handleChange(event)}
                  />
                  <label className="priority-medium" htmlFor="Medium">
                    Medium
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    name="taskPriority"
                    id="Low"
                    onChange={(event) => handleChange(event)}
                  />
                  <label className="priority-low" htmlFor="Low">
                    Low
                  </label>
                </div>
              </div>

              <div className="popup-container__date">
                <div className="popup-container__date--col">
                  <label>Start Date</label>
                  <input
                    type="datetime-local"
                    name="taskStartDate"
                    onChange={(event) => handleChange(event)}
                  />
                </div>

                <div className="popup-container__date--col">
                  <label>Due Date</label>
                  <input
                    type="datetime-local"
                    name="taskEndDate"
                    onChange={(event) => handleChange(event)}
                  />
                </div>
              </div>
            </div>
            <div
              onClick={handleAddTask}
              className="popup-container__form--submit"
            >
              Create
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditTaskPopup;
