import "./ProjectOverview.scss";
const ProjectOverview = () => {
  return (
    <>
      <div className="project__view">
        <div className="project-overview">
          <div className="project-overview__desc">
            Our community project seeks to revitalize local parks by organizing
            regular clean-up and beautification events, fostering a sense of
            ownership and pride among residents. By bringing together
            volunteers, businesses, and city officials, we aim to create a
            greener, more inviting environment for everyone to enjoy and promote
            a stronger sense of community togetherness.
          </div>

          <div className="project-overview__priority">
            <p className="project-overview__priority--title">
              Project Priority
            </p>
            <div className="project__priority project__priority--high">
              High
            </div>
          </div>

          <div className="project-overview__date">
            <p className="project-overview__date--title">Start Date</p>
            <p className="project-overview__date--time">July 17, 2023 @ 11:00 AM</p>
          </div>

          <div className="project-overview__date">
            <p className="project-overview__date--title">End Date</p>
            <p className="project-overview__date--time">July 30, 2023 @ 4:00 PM</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectOverview;
