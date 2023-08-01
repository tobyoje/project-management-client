import "./AddProject.scss";
import Header from "../../components/Header/Header";
import LeftBar from "../../components/LeftBar/LeftBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";

const AddProject = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const userId = sessionStorage.getItem("user_id");

    if (!token && !userId) {
      navigate("/login");
    }

    axios
      .get(`http://localhost:8080/api/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Attach the token in the headers for authentication
        },
      })
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user information:", error);
      });
  }, []);
  if (!userData) {
    return (
      <div>
        <p>loading...</p>
      </div>
    );
  }

  return (
    <>
      <LeftBar userData={userData} />
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

                <div className="project-add__pr-label">
                  <div>
                    <input type="radio" name="priority" id="high" />
                    <label className="priority-high" htmlFor="high">
                      High
                    </label>
                  </div>

                  <div>
                    <input type="radio" name="priority" id="medium" />
                    <label className="priority-medium" htmlFor="medium">
                      Medium
                    </label>
                  </div>

                  <div>
                    <input type="radio" name="priority" id="low" />
                    <label className="priority-low" htmlFor="low">
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
