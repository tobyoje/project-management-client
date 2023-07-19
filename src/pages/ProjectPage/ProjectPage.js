import Header from "../../components/Header/Header";
import "./ProjectPage.scss";
import editICON from "../../assets/icons/edit.svg";
import plusICON from "../../assets/icons/plus.svg";
import timeICON from "../../assets/icons/time.svg";
import favoriteICON from "../../assets/icons/favorite.svg";
import xfavoriteICON from "../../assets/icons/x-favorite.svg";

import optionsICON from "../../assets/icons/options.svg";

const ProjectPage = () => {
  return (
    <>
      <div className="project">
        <Header />
        <div className="project__content">
          <div className="project__title-container">
            <div className="project__name-avatar">B</div>
            <p className="project__name">Brixton App Project</p>
          </div>

          <div className="project__menubar">
            <ul>
              <li>Project Overview</li>
              <li>List View</li>
              <li className="project__menubar--active"> Card View</li>
            </ul>

            <div className="project__edit-button">
              <div>
                <img
                  className="project__edit-icon"
                  src={editICON}
                  alt="Edit Icon"
                />
              </div>
              <div>Edit Project</div>
            </div>
          </div>

          <div className="project__cardview">


{/* Todo tab */}

            <div className="project__card">
              <div className="project__card-top">
                <div className="project__card-label project__card-label--todo">
                  <p>To Do</p>
                  <div className="project__card-counter project__card-counter--todo">
                    3
                  </div>
                </div>
                <div>
                  <img
                    className="project__card-label--icon"
                    src={plusICON}
                    alt="Plus Icon"
                  />
                </div>
              </div>

              <div className="project__task-container">
                <div className="project__priority project__priority--medium">Medium</div>

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
                <div className="project__priority project__priority--high">High</div>

                <div className="project__task-title">Meeting with frontend developers</div>

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
                <div>
                  <img
                    className="project__card-label--icon"
                    src={plusICON}
                    alt="Plus Icon"
                  />
                </div>
              </div>

              <div className="project__task-container">
                <div className="project__priority project__priority--high">High</div>

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
                <div>
                  <img
                    className="project__card-label--icon"
                    src={plusICON}
                    alt="Plus Icon"
                  />
                </div>
              </div>

              <div className="project__task-container">
                <div className="project__priority project__priority--low ">Low</div>

                <div className="project__task-title project__task-title--done">Meeting about colors</div>

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
                <div className="project__priority project__priority--medium">Medium</div>

                <div className="project__task-title project__task-title--done">Make wireframes</div>

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
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
