import "./ProjectOverview.scss";
const ProjectOverview = ({ projectData }) => {
  const convertDateFormat = (inputDate) => {
    const dateObject = new Date(inputDate);

    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };

    const formattedDate = dateObject.toLocaleString("en-US", options);

    return formattedDate;
  };

  return (
    <>
      <div className="project__view">
        <div className="project-overview">
          <div className="project-overview__desc">
            {projectData.project_description}
          </div>

          <div className="project-overview__priority">
            <p className="project-overview__priority--title">
              Project Priority
            </p>
            <div
              className={`project__priority ${
                projectData.project_priority === "High"
                  ? "project__priority--high"
                  : ""
              } ${
                projectData.project_priority === "Low"
                  ? "project__priority--low"
                  : ""
              } ${
                projectData.project_priority === "Medium"
                  ? "project__priority--medium"
                  : ""
              } `}
            >
              {projectData.project_priority}
            </div>
          </div>

          <div className="project-overview__date">
            <p className="project-overview__date--title">Start Date</p>
            <p className="project-overview__date--time">
              {convertDateFormat(projectData.project_startdate)}{" "}
            </p>
          </div>

          <div className="project-overview__date">
            <p className="project-overview__date--title">End Date</p>
            <p className="project-overview__date--time">
              {convertDateFormat(projectData.project_enddate)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectOverview;
