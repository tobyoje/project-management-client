import plusICON from "../../assets/icons/plus.svg";
import timeICON from "../../assets/icons/time.svg";
import optionsICON from "../../assets/icons/options.svg";
import { useState } from "react";
import AddNewTaskPopup from "../AddNewTaskPopup/AddNewTaskPopup";
const ProjectGridView = ({ setAddTaskPopup, setTaskType }) => {
  const openAddTaskTodo = () => {
    setAddTaskPopup(true);
    setTaskType('"To Do"');
  };

  const openAddTaskProgress = () => {
    setAddTaskPopup(true);
    setTaskType('"In Progress"');
  };

  const openAddTaskCompleted = () => {
    setAddTaskPopup(true);
    setTaskType('"Completed"');
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
                3
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

          <div className="project__task-container">
            <div className="project__priority project__priority--medium">
              Medium
            </div>

            <div className="project__task-title">Review with designers</div>

            <div className="project__grid-bottom">
              <div className="project__grid-timecontainer">
                <img
                  className="project__grid-icon project__grid-icon--space"
                  src={timeICON}
                  alt="Time Icon"
                />
                <p className="project__grid-time">10d</p>
              </div>

              <div>
                <img
                  className="project__grid-icon"
                  src={optionsICON}
                  alt="Options Icon"
                />
              </div>
            </div>
          </div>

          <div className="project__task-container">
            <div className="project__priority project__priority--high">
              High
            </div>

            <div className="project__task-title">
              Meeting with frontend developers
            </div>

            <div className="project__grid-bottom">
              <div className="project__grid-timecontainer">
                <img
                  className="project__grid-icon project__grid-icon--space"
                  src={timeICON}
                  alt="Time Icon"
                />
                <p className="project__grid-time">10d</p>
              </div>

              <div>
                <img
                  className="project__grid-icon"
                  src={optionsICON}
                  alt="Options Icon"
                />
              </div>
            </div>
          </div>

          <div className="project__task-container">
            <div className="project__priority project__priority--low">Low</div>

            <div className="project__task-title">Setup user database</div>

            <div className="project__grid-bottom">
              <div className="project__grid-timecontainer">
                <img
                  className="project__grid-icon project__grid-icon--space"
                  src={timeICON}
                  alt="Time Icon"
                />
                <p className="project__grid-time">10d</p>
              </div>

              <div>
                <img
                  className="project__grid-icon"
                  src={optionsICON}
                  alt="Options Icon"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Inprogress here */}

        <div className="project__card">
          <div className="project__card-top">
            <div className="project__card-label project__card-label--progress ">
              <p>In Progress</p>
              <div className="project__card-counter project__card-counter--progress">
                1
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

          <div className="project__task-container">
            <div className="project__priority project__priority--high">
              High
            </div>

            <div className="project__task-title">Create HF Designs for app</div>

            <div className="project__grid-bottom">
              <div className="project__grid-timecontainer">
                <img
                  className="project__grid-icon project__grid-icon--space"
                  src={timeICON}
                  alt="Time Icon"
                />
                <p className="project__grid-time">10d</p>
              </div>

              <div>
                <img
                  className="project__grid-icon"
                  src={optionsICON}
                  alt="Options Icon"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Completed tab */}
        <div className="project__card">
          <div className="project__card-top">
            <div className="project__card-label project__card-label--completed">
              <p>Completed</p>
              <div className="project__card-counter project__card-counter--completed">
                2
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

          <div className="project__task-container">
            <div className="project__priority project__priority--low ">Low</div>

            <div className="project__task-title project__task-title--done">
              Meeting about colors
            </div>

            <div className="project__grid-bottom">
              <div className="project__grid-timecontainer">
                <img
                  className="project__grid-icon project__grid-icon--space"
                  src={timeICON}
                  alt="Time Icon"
                />
                <p className="project__grid-time">10d</p>
              </div>

              <div>
                <img
                  className="project__grid-icon"
                  src={optionsICON}
                  alt="Options Icon"
                />
              </div>
            </div>
          </div>

          <div className="project__task-container">
            <div className="project__priority project__priority--medium">
              Medium
            </div>

            <div className="project__task-title project__task-title--done">
              Make wireframes
            </div>

            <div className="project__grid-bottom">
              <div className="project__grid-timecontainer">
                <img
                  className="project__grid-icon project__grid-icon--space"
                  src={timeICON}
                  alt="Time Icon"
                />
                <p className="project__grid-time">10d</p>
              </div>

              <div>
                <img
                  className="project__grid-icon"
                  src={optionsICON}
                  alt="Options Icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectGridView;
