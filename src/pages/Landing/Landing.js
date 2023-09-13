import LandingHeader from "../../components/LandingHeader/LandingHeader";
import heroIMG from "../../assets/images/transparent-shot.png";
import featuresIMG from "../../assets/images/project-management.jpg";

import "./Landing.scss";

const Landing = () => {
  return (
    <>
      <div>
        <LandingHeader />
        <div className="landing">
          <div className="landing__hero">
            <div className="landing__left">
              <h1 className="landing__title">
                Elevate your Project Management Experience with
                <span style={{ color: "#006cff" }}> ProjectNest</span>
              </h1>
              <p className="landing__description">
                Streamline your projects with our intuitive project management
                app. From organizing tasks to tracking project progress, our
                tool helps you stay in control and manage your projects with
                ease.
              </p>
              <div className="landing__button-area">
                <a
                  className="landing__button landing__hero-button"
                  href="/login"
                >
                  Get Started
                </a>
              </div>
            </div>

            <div className="landing__right">
              <img
                className="landing__hero-image"
                src={heroIMG}
                alt="Hero Image"
              />
            </div>
          </div>

          <div className="landing__features">
            <div>
              <img
                className="landing__features--image"
                src={featuresIMG}
                alt="Features Image"
              />
            </div>
            <div className="landing__features-text">
              <ul>
                <li>Add Projects</li>
                <li>Add Tasks</li>
                <li>Assign Priorities</li>
                <li>Edit tasks</li>
                <li>Set task category</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
