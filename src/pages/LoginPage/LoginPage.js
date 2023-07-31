import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginPage.scss";

const LoginPage = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState([]);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const userId = sessionStorage.getItem("user_id");
    if (token && userId) {
      navigate("/projects");
    }
  }, []);

  const handleChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();

    setFormErrors({});

    let formIsValid = true;

    const errors = {};

    if (!loginData.email) {
      formIsValid = false;
      errors["error_email"] = true;
    }

    if (!loginData.password) {
      formIsValid = false;
      errors["error_password"] = true;
    }

    if (!loginData.email || !loginData.password) {
      formIsValid = false;
      errors["error_noEntry"] = true;
    }

    if (!formIsValid) {
      return setFormErrors(errors);
    }

    const newLogin = {
      email: loginData.email,
      password: loginData.password,
    };

    axios
      .post(`http://localhost:8080/api/user/login`, newLogin)
      .then((response) => {
        console.log(response.data);
        navigate("/projects");
        sessionStorage.setItem("token", response.data.token);
        sessionStorage.setItem("user_id", response.data.user_id);
      })
      .catch((error) => {
        setFormErrors(error.response.data);
      });
  };

  return (
    <>
      <div className="login">
        <div>
          <h2 className="login__title">Login Page</h2>
          <p>Login to access your account</p>

          <form className="login__form">
            <div className="login__form--field">
              <label>Email</label>
              <input
                type="text"
                name="email"
                onChange={(event) => handleChange(event)}
                className={`input ${
                  formErrors.error_email ? "input--error" : ""
                }`}
              />
              {formErrors.error_email && (
                <p className="form-error">This field is required</p>
              )}
              {formErrors.error_emailFormat && (
                <p className="form-error">Email does not exist</p>
              )}
            </div>

            <div className="login__form--field">
              <label>Password</label>
              <input
                type="password"
                name="password"
                onChange={(event) => handleChange(event)}
                className={`input ${
                  formErrors.error_password ? "input--error" : ""
                }`}
              />
              {formErrors.error_password && (
                <p className="form-error">This field is required</p>
              )}
            </div>
            <div onClick={handleLogin} className="login__form--submit">
              Login
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
