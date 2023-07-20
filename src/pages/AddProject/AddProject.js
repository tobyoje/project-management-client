import "./AddProject.scss";
import Header from "../../components/Header/Header";

const AddProject = () => {
  return (
    <>
      <div className="project">
        <Header />
        <div className="project__content">
          <div className="project-add">
            <p className="project-add__title">Create New Project</p>

            <form className="project-add__form">
              <div className="project-add__form--leftcol">
                <label>Task Title</label>
                <input type="text" />

                <label>Task Description</label>

                <textarea></textarea>
                <div className="project-add__form--submit">Create</div>
                <p className="project-add__form--note">
                  After you create project, add tasks on the project page and
                  set priorities to them.
                </p>
              </div>

              <div className="project-add__form--rightcol">
                <label>Start Date</label>
                <input type="datetime-local" />

                <label>Due Date</label>
                <input type="datetime-local" />

                <label>Project Priority</label>

                <div class="project-add__pr-label">
                  <div>
                    <input type="radio" name="priority" id="high" />
                    <label className="priority-high" for="high">
                      High
                    </label>
                  </div>

                  <div>
                    <input type="radio" name="priority" id="medium" />
                    <label className="priority-medium" for="medium">
                      Medium
                    </label>
                  </div>

                  <div>
                    <input type="radio" name="priority" id="low" />
                    <label className="priority-low" for="low">
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
