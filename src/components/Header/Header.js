import "./Header.scss";
import notficationICON from "../../assets/icons/nots.svg";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__button">Create New Project</div>

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
