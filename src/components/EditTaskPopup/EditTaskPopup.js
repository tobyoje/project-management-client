import "./EditTaskPopup.scss";
import cancelICON from "../../assets/icons/cancel.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditTaskPopup = ({
  setEditTaskPopup,
  taskType,
  findProjectById,
  setProjectData,
}) => {
  const navigate = useNavigate();

  const [taskInfo, setTaskInfo] = useState(null);

  const hash = window.location.hash;

  const taskId = hash.slice(1); 
  const path = window.location.pathname;

  const projectId = path.match(/\/project\/(\d+)/)[1];

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

  const token = sessionStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/api/user/task/${taskId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setTaskInfo(response.data.task);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!taskInfo) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  const handleEditTask = (event) => {
    event.preventDefault();

    // if (
    //   !newData.taskTitle &
    //   !newData.taskPriority &
    //   !newData.taskStartDate &
    //   !newData.taskEndDate
    // ) {
    //   formIsValid = false;
    //   errors["error_required"] = true;
    // }

    const removeTimeZoneSuffix = (dateString) => {
      return dateString.substring(0, dateString.length - 5);
    };

    const updatedTaskInfo = {
      task_name: newData.taskTitle || taskInfo.task_name,
      task_category: newData.taskCategory || taskType,
      task_priority: newData.taskPriority || taskInfo.task_priority,
      task_startdate:
        newData.taskStartDate || removeTimeZoneSuffix(taskInfo.task_startdate),
      task_enddate:
        newData.taskEndDate || removeTimeZoneSuffix(taskInfo.task_enddate),
      task_id: taskId,
    };
    setFormErrors({});

    let formIsValid = true;

    const errors = {};

    if (!updatedTaskInfo) {
      errors["error_required"] = true;
    }

    if (!formIsValid) {
      return setFormErrors(errors);
    }

    console.log(updatedTaskInfo);

    axios
      .put(`${process.env.REACT_APP_API_BASE_URL}/api/user/edit-task/`, updatedTaskInfo, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setProjectData(response.data);
        const currentPathname = window.location.pathname;

        const newPathname = currentPathname.substring(
          0,
          currentPathname.lastIndexOf("/")
        );

        window.history.replaceState(null, "", newPathname);
        setEditTaskPopup(false);
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
                defaultValue={taskInfo.task_name}
                onChange={(event) => handleChange(event)}
              />

              {/* <label>Task Description</label>

              <textarea name="taskDescription"></textarea> */}
            </div>

            <div>
              <label>Task Category</label>

              <div className="popup-container__form--category">
                <label htmlFor="task1">
                  <input
                    onChange={(event) => handleChange(event)}
                    type="radio"
                    id="task1"
                    name="taskCategory"
                    value="To Do"
                    defaultChecked={taskInfo.task_category === "To Do"}
                  />
                  To Do
                </label>
                <br />

                <label htmlFor="task2">
                  <input
                    onChange={(event) => handleChange(event)}
                    type="radio"
                    id="task2"
                    name="taskCategory"
                    value="In Progress"
                    defaultChecked={taskInfo.task_category === "In Progress"}
                  />
                  In Progress
                </label>
                <br />

                <label htmlFor="task3">
                  <input
                    onChange={(event) => handleChange(event)}
                    type="radio"
                    id="task3"
                    name="taskCategory"
                    value="Completed"
                    defaultChecked={taskInfo.task_category === "Completed"}
                  />
                  Completed
                </label>
                <br />
              </div>
            </div>
            <div className="popup-container__form--other-info">
              <label>Task Priority</label>

              <div className="popup-container__pr1-label">
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
                    defaultValue={formatDatetime(taskInfo.task_startdate)}
                    onChange={(event) => handleChange(event)}
                  />
                </div>

                <div className="popup-container__date--col">
                  <label>Due Date</label>
                  <input
                    type="datetime-local"
                    name="taskEndDate"
                    defaultValue={formatDatetime(taskInfo.task_enddate)}
                    onChange={(event) => handleChange(event)}
                  />
                </div>
              </div>
            </div>
            {formErrors.error_required && (
              <p className="form-error">All fields are required</p>
            )}
            <div
              onClick={handleEditTask}
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

export default EditTaskPopup;
