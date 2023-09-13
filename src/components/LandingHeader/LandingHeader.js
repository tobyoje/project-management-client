import "./LandingHeader.scss";
import menuICON from "../../assets/icons/menu.svg";
import { useState } from "react";

const LandingHeader = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    if (mobileMenu) {
      setMobileMenu(false);
    } else setMobileMenu(true);
  };

  return (
    <>
      <div className="landing-header">
        <div className="landing-header__container">
          <h1 className="logo-here">
            PROJECT <span style={{ color: "#006cff" }}>NEST</span>
          </h1>
          <img
            onClick={handleMobileMenu}
            className="landing-header__mobile-icon"
            src={menuICON}
            alt="Mobile Navigation"
          />
          <div className="landing-header__nav">
            <ul>
              <li>
                <a
                  className="landing__button landing__left-button"
                  href="/login"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  className="landing__button landing__right-button"
                  href="/register"
                >
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={
            mobileMenu
              ? "landing-header__mobile-nav "
              : "landing-header__mobile-nav--x"
          }
        >
          <ul>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/register">Register</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LandingHeader;
