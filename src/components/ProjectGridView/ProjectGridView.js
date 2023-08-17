import plusICON from "../../assets/icons/plus.svg";
import timeICON from "../../assets/icons/time.svg";
import optionsICON from "../../assets/icons/options.svg";
import editICON from "../../assets/icons/edit.svg";
import { useEffect, useState } from "react";
const ProjectGridView = ({
  projectData,
  addTaskPopup,
  setAddTaskPopup,
  editTaskPopup,
  setEditTaskPopup,
  setTaskType,
  findProjectById,
}) => {
  const [taskId, setTaskId] = useState("");

  const openAddTaskTodo = (taskId) => {
    setAddTaskPopup(true);
    setTaskType("To Do");
    setTaskId(taskId);
  };

  const openAddTaskProgress = (taskId) => {
    setAddTaskPopup(true);
    setTaskType("In Progress");
    setTaskId(taskId);
  };

  const openAddTaskCompleted = (taskId) => {
    setAddTaskPopup(true);
    setTaskType("Completed");
    setTaskId(taskId);
  };

  const calculateTimeDifference = (startDate, endDate) => {
    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);
    const timeDifference = endDateObj.getTime() - startDateObj.getTime();
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return { days };
  };

  projectData.tasks.sort((a, b) => {
    if (a.task_id !== b.task_id) {
      return a.task_id - b.task_id;
    } else {
      return a.task_category.localeCompare(b.task_category);
    }
  });

  let completedTasks = [];
  let todoTasks = [];
  let inProgressTasks = [];

  for (const task of projectData.tasks) {
    switch (task.task_category) {
      case "Completed":
        completedTasks.push(task);
        break;
      case "To Do":
        todoTasks.push(task);
        break;
      case "In Progress":
        inProgressTasks.push(task);
        break;
      default:
        break;
    }
  }

  const openEditTaskTodo = (taskId) => {
    setEditTaskPopup(true);
    setTaskType("To Do");
    setTaskId(taskId);

    const newPath = `/project/${projectData.project_id}/#${taskId}`;
    window.history.pushState(null, "", newPath);
  };

  const openEditTaskProgress = (taskId) => {
    setEditTaskPopup(true);
    setTaskType("In Progress");
    setTaskId(taskId);

    const newPath = `/project/${projectData.project_id}/#${taskId}`;
    window.history.pushState(null, "", newPath);
  };

  const openEditTaskCompleted = (taskId) => {
    setEditTaskPopup(true);
    setTaskType("Completed");
    setTaskId(taskId);

    const newPath = `/project/${projectData.project_id}/#${taskId}`;
    window.history.pushState(null, "", newPath);
  };

  return (
    <>
      <div className="project__view">
        {/* Todo tab */}

        <div className="project__card">
          <div className="project__card-top">
            <div className="project__card-label project__card-label--todo">
              <p>To Do</p>
              <div className="project__card-counter project__card-counter--todo">
                {todoTasks.length}
              </div>
            </div>
            <div onClick={openAddTaskTodo}>
              <img
                className="project__card-label--icon"
                src={plusICON}
                alt="Plus Icon"
              />
            </div>
          </div>
          {todoTasks.map((todoTask) => (
            <div className="project__task-container" key={todoTask.task_id}>
              <div
                className={`project__priority ${
                  todoTask.task_priority === "High"
                    ? "project__priority--high"
                    : ""
                } ${
                  todoTask.task_priority === "Low"
                    ? "project__priority--low"
                    : ""
                } ${
                  todoTask.task_priority === "Medium"
                    ? "project__priority--medium"
                    : ""
                } `}
              >
                {todoTask.task_priority}
              </div>

              <div className="project__task-title">{todoTask.task_name}</div>

              <div className="project__grid-bottom">
                <div className="project__grid-timecontainer">
                  <img
                    className="project__grid-icon project__grid-icon--space"
                    src={timeICON}
                    alt="Time Icon"
                  />
                  <p className="project__grid-time">{`${
                    calculateTimeDifference(
                      todoTask.task_startdate,
                      todoTask.task_enddate
                    ).days
                  }d left`}</p>
                </div>

                <div onClick={() => openEditTaskTodo(todoTask.task_id)}>
                  <img
                    className="project__grid-icon"
                    src={editICON}
                    alt="Edit Icon"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Inprogress here */}

        <div className="project__card">
          <div className="project__card-top">
            <div className="project__card-label project__card-label--progress ">
              <p>In Progress</p>
              <div className="project__card-counter project__card-counter--progress">
                {inProgressTasks.length}
              </div>
            </div>
            <div onClick={openAddTaskProgress}>
              <img
                className="project__card-label--icon"
                src={plusICON}
                alt="Plus Icon"
              />
            </div>
          </div>
          {inProgressTasks.map((inProgressTask) => (
            <div
              className="project__task-container"
              key={inProgressTask.task_id}
            >
              <div
                className={`project__priority ${
                  inProgressTask.task_priority === "High"
                    ? "project__priority--high"
                    : ""
                } ${
                  inProgressTask.task_priority === "Low"
                    ? "project__priority--low"
                    : ""
                } ${
                  inProgressTask.task_priority === "Medium"
                    ? "project__priority--medium"
                    : ""
                } `}
              >
                {inProgressTask.task_priority}
              </div>

              <div className="project__task-title">
                {inProgressTask.task_name}
              </div>

              <div className="project__grid-bottom">
                <div className="project__grid-timecontainer">
                  <img
                    className="project__grid-icon project__grid-icon--space"
                    src={timeICON}
                    alt="Time Icon"
                  />
                  <p className="project__grid-time">{`${
                    calculateTimeDifference(
                      inProgressTask.task_startdate,
                      inProgressTask.task_enddate
                    ).days
                  }d left`}</p>
                </div>

                <div
                  onClick={() => openEditTaskProgress(inProgressTask.task_id)}
                >
                  <img
                    className="project__grid-icon"
                    src={editICON}
                    alt="Edit Icon"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Completed tab */}
        <div className="project__card">
          <div className="project__card-top">
            <div className="project__card-label project__card-label--completed">
              <p>Completed</p>
              <div className="project__card-counter project__card-counter--completed">
                {completedTasks.length}
              </div>
            </div>
            <div onClick={openAddTaskCompleted}>
              <img
                className="project__card-label--icon"
                src={plusICON}
                alt="Plus Icon"
              />
            </div>
          </div>

          {completedTasks.map((completedTask) => (
            <div
              className="project__task-container"
              key={completedTask.task_id}
            >
              <div
                className={`project__priority ${
                  completedTask.task_priority === "High"
                    ? "project__priority--high"
                    : ""
                } ${
                  completedTask.task_priority === "Low"
                    ? "project__priority--low"
                    : ""
                } ${
                  completedTask.task_priority === "Medium"
                    ? "project__priority--medium"
                    : ""
                } `}
              >
                {completedTask.task_priority}
              </div>

              <div className="project__task-title project__task-title--done">
                {completedTask.task_name}
              </div>

              <div className="project__grid-bottom">
                <div className="project__grid-timecontainer">
                  <img
                    className="project__grid-icon project__grid-icon--space"
                    src={timeICON}
                    alt="Time Icon"
                  />
                  <p className="project__grid-time">
                    {" "}
                    {`${
                      calculateTimeDifference(
                        completedTask.task_startdate,
                        completedTask.task_enddate
                      ).days
                    }d left`}
                  </p>
                </div>

                <div
                  onClick={() => openEditTaskCompleted(completedTask.task_id)}
                >
                  <img
                    className="project__grid-icon"
                    src={editICON}
                    alt="Edit Icon"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectGridView;
