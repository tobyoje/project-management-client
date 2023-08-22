import { useNavigate } from "react-router-dom";
import "./Header.scss";
import notficationICON from "../../assets/icons/nots.svg";
import logoutICON from "../../assets/icons/logout.svg";
import backICON from "../../assets/icons/back.svg";

import { Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user_id");

    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="header">
        <div>
          <img
            onClick={goBack}
            className="header__icon"
            src={backICON}
            alt="Back Icon"
          />
        </div>

        <div className="header__right">
          <Link to="/new-project">
            <div className="header__button">Create New Project</div>
          </Link>

          <img
            onClick={handleLogout}
            className="header__icon"
            src={logoutICON}
            alt="Logout Icon"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
