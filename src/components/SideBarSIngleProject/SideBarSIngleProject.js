import { useState } from "react";
import arrowDown from "../../assets/icons/arrow-down.svg";
import arrowUp from "../../assets/icons/arrow-up.svg";

const SideBarSIngleProject = ({ projectItem }) => {
  const [arrowIcon, setArrowIcon] = useState(arrowDown);
  const [viewTasks, setViewTasks] = useState("line-box--disable");

  const projectQuickView = () => {
    if (arrowIcon === arrowDown) {
      setArrowIcon(arrowUp);
    }

    if (arrowIcon === arrowUp) {
      setArrowIcon(arrowDown);
    }

    if (viewTasks == "line-box--disable") {
      setViewTasks("");
    }
    if (viewTasks == "") {
      setViewTasks("line-box--disable");
    }
  };


  return (
    <>
      <div className="sidebar__project-container sidebar__project-container--dropdown">
        <div className="sidebar__project-container2" onClick={projectQuickView}>
          <div
            className="sidebar__project-container--namebox"
            style={{ backgroundColor: "red" }}
          >
            {projectItem.project_name[0]}
          </div>
          <div className="sidebar__project-container--info">
            <p> {projectItem.project_name}</p>
            <p className="sidebar__project-container--tasks">{`${projectItem.tasks.length} Tasks`}</p>
          </div>
          <div>
            <img
              key={projectItem.project_id}
              onClick={projectQuickView}
              src={arrowIcon}
              alt="Arrow"
            />
          </div>
        </div>

        {!projectItem.tasks.length == 0 ? (
          <>
            <div className={`line-box ${viewTasks}`}>
              <div className="sidebar-line1 sidebar-line1--short"></div>
              <div className="sidebar-boxline2">
                <div className="sidebar-line2"></div>
                <p
                  className={`sideline-text ${
                    projectItem.tasks[0]?.task_category === "Completed"
                      ? "sideline-text--cancel"
                      : ""
                  }`}
                >
                  {projectItem.tasks[0]?.task_name
                    ? projectItem.tasks[0].task_name
                    : ""}
                </p>
              </div>
              <div className="sidebar-line1"></div>
              <div className="sidebar-boxline2">
                <div className="sidebar-line2"></div>
                <p className="sideline-text ">
                  {projectItem.tasks[1]?.task_name
                    ? projectItem.tasks[1].task_name
                    : ""}
                </p>
              </div>
              <div className="sidebar-line1"></div>
              <div className="sidebar-boxline2">
                <div className="sidebar-line2"></div>
                <p className="sideline-text ">
                  {projectItem.tasks[3]?.task_name
                    ? projectItem.tasks[3].task_name
                    : ""}
                </p>
              </div>
              <div className="sidebar-line1"></div>
              <div className="sidebar-boxline2">
                <div className="sidebar-line2"></div>
                <p className="sideline-text ">
                  <a href=""> View All</a>
                </p>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default SideBarSIngleProject;
