import "./Landing.scss";

const Landing = () => {
  return (
    <>
      <div className="landing">
        <h1 className="landing__title"> A simple Project Management App</h1>
        <p className="landing__description">
          Elevate your project management experience with our user-friendly app.
          From organizing tasks to tracking project progress, our tool helps you
          stay in control and manage your projects with ease.
        </p>
        <div className="landing__button-area">
          <a href="/login">
            <button className="landing__left-button">Login</button>
          </a>
          <a href="/register">
            <button className="landing__right-button">Register</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Landing;
