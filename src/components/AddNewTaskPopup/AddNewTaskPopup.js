import "./AddNewTaskPopup.scss";
import cancelICON from "../../assets/icons/cancel.svg";

const AddNewTaskPopup = ({ setAddTaskPopup, taskType }) => {
  const closePopup = () => {
    setAddTaskPopup(false);
  };

  return (
    <>
      <div className="popup-container">
        <div className="popup-container__content">
          <div className="popup-container__content-top">
            <p className="popup-container__title">
              {`Add New Task in ${taskType}`}
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
              <input type="text" />

              <label>Task Description</label>

              <textarea></textarea>
            </div>

            <div className="popup-container__form--other-info">
              <label>Task Priority</label>

              <div class="popup-container__pr-label">
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

              <div className="popup-container__date">
                <div className="popup-container__date--col">
                  <label>Start Date</label>
                  <input type="datetime-local" />
                </div>

                <div className="popup-container__date--col">
                  <label>Due Date</label>
                  <input type="datetime-local" />
                </div>
              </div>
            </div>
            <div className="popup-container__form--submit">Create</div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddNewTaskPopup;
