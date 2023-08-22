import { useNavigate } from "react-router-dom";
import "./Header.scss";
import notficationICON from "../../assets/icons/nots.svg";
import logoutICON from "../../assets/icons/logout.svg";

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
  return (
    <>
      <div className="header">
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
    </>
  );
};

export default Header;
