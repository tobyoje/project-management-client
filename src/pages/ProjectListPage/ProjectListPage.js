import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import "./ProjectListPage.scss";

import Header from "../../components/Header/Header";
import gridViewICON from "../../assets/icons/grid.svg";
import listViewICON from "../../assets/icons/list.svg";
import addICON from "../../assets/icons/add.svg";
import timeICON from "../../assets/icons/time.svg";
import favoriteICON from "../../assets/icons/favorite.svg";
import xfavoriteICON from "../../assets/icons/x-favorite.svg";

import optionsICON from "../../assets/icons/options.svg";
import LeftBar from "../../components/LeftBar/LeftBar";

const ProjectListPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [favIcon, setFavIcon] = useState(favoriteICON);

  const onChnageFavIcon = () => {
    if (favIcon == favoriteICON) {
      setFavIcon(xfavoriteICON);
    }
    if (favIcon == xfavoriteICON) {
      setFavIcon(favoriteICON);
    }
  };

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
  // console.log(userData);

  return (
    <>
                <LeftBar userData={userData}/>
      <div className="projectlist">
        <Header />

        <div className="projectlist__content">
          <div className="projectlist__counter">
            <p className="projectlist__counter--title">
              Total Projects -&nbsp;
            </p>
            <p className="projectlist__counter--number">54</p>
          </div>

          <div className="projectlist__sort">
            <div>
              <img
                className="projectlist__sort-icon"
                src={gridViewICON}
                alt="Grid Icon"
              />
              <img
                className="projectlist__sort-icon"
                src={listViewICON}
                alt="List Icon"
              />
            </div>

            <div className="projectlist__sort-right">
              <p className="projectlist__sort-item">SORT</p>
              <p className="projectlist__sort-item">PRIORITY</p>
              <p className="projectlist__sort-item">DAYS</p>
            </div>
          </div>

          <div className="projectlist__grid">
            <div className="projectlist__grid-item projectlist__grid-item--new">
              <img
                className="projectlist__grid-item--icon"
                src={addICON}
                alt="Add Icon"
              />
              <p>New Project</p>
            </div>

            <div className="projectlist__grid-item">
              <p className="projectlist__grid-title">Oslo Project</p>
              <p className="projectlist__grid-desc">
                Our community project seeks to revitalize local parks by
                organizing regular clean-up and beautification events ...
              </p>
              <div className="projectlist__grid-priority">High</div>
              <div className="projectlist__grid-bottom">
                <div className="projectlist__grid-timecontainer">
                  <img
                    className="projectlist__grid-icon projectlist__grid-icon--space"
                    src={timeICON}
                    alt="Time Icon"
                  />
                  <p className="projectlist__grid-time">10d</p>
                </div>

                <div>
                  <img
                    onClick={onChnageFavIcon}
                    className="projectlist__grid-icon projectlist__grid-icon--space"
                    src={favIcon}
                    alt="Favorite Icon"
                  />
                  <img
                    className="projectlist__grid-icon"
                    src={optionsICON}
                    alt="Options Icon"
                  />
                </div>
              </div>
            </div>

            <div className="projectlist__grid-item">
              <p className="projectlist__grid-title">Oslo Project</p>
              <p className="projectlist__grid-desc">
                Our community project seeks to revitalize local parks by
                organizing regular clean-up and beautification events ...
              </p>
              <div className="projectlist__grid-priority">High</div>
              <div className="projectlist__grid-bottom">
                <div className="projectlist__grid-timecontainer">
                  <img
                    className="projectlist__grid-icon projectlist__grid-icon--space"
                    src={timeICON}
                    alt="Time Icon"
                  />
                  <p className="projectlist__grid-time">10d</p>
                </div>

                <div>
                  <img
                    onClick={onChnageFavIcon}
                    className="projectlist__grid-icon projectlist__grid-icon--space"
                    src={favIcon}
                    alt="Favorite Icon"
                  />
                  <img
                    className="projectlist__grid-icon"
                    src={optionsICON}
                    alt="Options Icon"
                  />
                </div>
              </div>
            </div>

            <div className="projectlist__grid-item">
              <p className="projectlist__grid-title">Oslo Project</p>
              <p className="projectlist__grid-desc">
                Our community project seeks to revitalize local parks by
                organizing regular clean-up and beautification events ...
              </p>
              <div className="projectlist__grid-priority">High</div>
              <div className="projectlist__grid-bottom">
                <div className="projectlist__grid-timecontainer">
                  <img
                    className="projectlist__grid-icon projectlist__grid-icon--space"
                    src={timeICON}
                    alt="Time Icon"
                  />
                  <p className="projectlist__grid-time">10d</p>
                </div>

                <div>
                  <img
                    onClick={onChnageFavIcon}
                    className="projectlist__grid-icon projectlist__grid-icon--space"
                    src={favIcon}
                    alt="Favorite Icon"
                  />
                  <img
                    className="projectlist__grid-icon"
                    src={optionsICON}
                    alt="Options Icon"
                  />
                </div>
              </div>
            </div>

            <div className="projectlist__grid-item">
              <p className="projectlist__grid-title">Oslo Project</p>
              <p className="projectlist__grid-desc">
                Our community project seeks to revitalize local parks by
                organizing regular clean-up and beautification events ...
              </p>
              <div className="projectlist__grid-priority">High</div>
              <div className="projectlist__grid-bottom">
                <div className="projectlist__grid-timecontainer">
                  <img
                    className="projectlist__grid-icon projectlist__grid-icon--space"
                    src={timeICON}
                    alt="Time Icon"
                  />
                  <p className="projectlist__grid-time">10d</p>
                </div>

                <div>
                  <img
                    onClick={onChnageFavIcon}
                    className="projectlist__grid-icon projectlist__grid-icon--space"
                    src={favIcon}
                    alt="Favorite Icon"
                  />
                  <img
                    className="projectlist__grid-icon"
                    src={optionsICON}
                    alt="Options Icon"
                  />
                </div>
              </div>
            </div>

            <div className="projectlist__grid-item">
              <p className="projectlist__grid-title">Oslo Project</p>
              <p className="projectlist__grid-desc">
                Our community project seeks to revitalize local parks by
                organizing regular clean-up and beautification events ...
              </p>
              <div className="projectlist__grid-priority">High</div>
              <div className="projectlist__grid-bottom">
                <div className="projectlist__grid-timecontainer">
                  <img
                    className="projectlist__grid-icon projectlist__grid-icon--space"
                    src={timeICON}
                    alt="Time Icon"
                  />
                  <p className="projectlist__grid-time">10d</p>
                </div>

                <div>
                  <img
                    onClick={onChnageFavIcon}
                    className="projectlist__grid-icon projectlist__grid-icon--space"
                    src={favIcon}
                    alt="Favorite Icon"
                  />
                  <img
                    className="projectlist__grid-icon"
                    src={optionsICON}
                    alt="Options Icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectListPage;
