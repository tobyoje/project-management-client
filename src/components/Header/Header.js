import "./Header.scss";
import notficationICON from "../../assets/icons/nots.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <Link to="/new-project">
          <div className="header__button">Create New Project</div>
        </Link>

        <img
          className="header__icon"
          src={notficationICON}
          alt="Notifications Icon"
        />
      </div>
    </>
  );
};

export default Header;
