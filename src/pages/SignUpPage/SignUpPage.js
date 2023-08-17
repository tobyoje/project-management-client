import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignUpPage.scss";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [signUpData, setSignUpData] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [accountExists, setAccountExists] = useState("");

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const userId = sessionStorage.getItem("user_id");
    if (token && userId) {
      navigate("/projects");
    }
  }, []);

  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSignUp = (event) => {
    event.preventDefault();

    setFormErrors({});

    let formIsValid = true;

    const errors = {};

    if (!signUpData.fullName) {
      formIsValid = false;
      errors["error_fullName"] = true;
    }

    // will call api to check if username exists later
    if (signUpData.fullName === "fullName") {
      formIsValid = false;
      errors["error_fullNameExists"] = true;
    }

    if (!signUpData.position) {
      formIsValid = false;
      errors["error_position"] = true;
    }

    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!signUpData.email) {
      formIsValid = false;
      errors["error_email"] = true;
    } else if (!signUpData.email.match(mailformat)) {
      formIsValid = false;
      errors["error_emailFormat"] = true;
    }

    if (!signUpData.password) {
      formIsValid = false;
      errors["error_password"] = true;
    }

    if (!signUpData.confirmPassword) {
      formIsValid = false;
      errors["error_confirmpassword"] = true;
    }

    if (signUpData.password != signUpData.confirmPassword) {
      formIsValid = false;
      errors["error_passNotMatch"] = true;
    }

    if (
      !signUpData.fullName ||
      !signUpData.email ||
      !signUpData.position ||
      !signUpData.confirmPassword ||
      !signUpData.password
    ) {
      formIsValid = false;
      errors["error_noEntry"] = true;
    }

    if (
      !signUpData.fullName ||
      !signUpData.email ||
      !signUpData.password ||
      !signUpData.confirmPassword
    ) {
      formIsValid = false;
      errors["error_noEntry"] = true;
    }

    if (!formIsValid) {
      return setFormErrors(errors);
    }

    const newAccount = {
      name: signUpData.fullName,
      email: signUpData.email,
      position: signUpData.position,
      password: signUpData.password,
    };

    console.log(newAccount);

    axios
      .post(`http://localhost:8080/api/user/register`, newAccount)
      .then((response) => {
        console.log(response.data);
        navigate("/login");
      })
      .catch((error) => {
        if (error.response.status === 409) {
          setAccountExists({
            email:
              error.response.data === "Email already exists"
                ? "Email already exists"
                : "",
          });
        } else {
          console.error(error);
          setAccountExists({
            generic: "Something went wrong. Please try again later.",
          });
        }
      });
  };

  return (
    <>
      <div className="register">
        <div>
          <h2 className="register__title">Registration Page</h2>
          <p>Sign up to own an account</p>

          <form className="register__form">
            <div className="register__form--field">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                onChange={(event) => handleChange(event)}
                className={`input ${
                  formErrors.error_fullName ? "input-error" : ""
                }`}
              />
              {formErrors.error_fullName && (
                <p className="form-error">Input your name</p>
              )}

              {formErrors.error_fullNameExists && (
                <p className="form-error">fullName already exist</p>
              )}
            </div>

            <div className="register__form--field">
              <label>Position</label>
              <input
                type="text"
                name="position"
                onChange={(event) => handleChange(event)}
                className={`input ${
                  formErrors.error_position ? "input-error" : ""
                }`}
              />
              {formErrors.error_position && (
                <p className="form-error">Select a position</p>
              )}
            </div>

            <div className="register__form--field">
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
                <p className="form-error">Enter your email</p>
              )}
              {formErrors.error_emailFormat && (
                <p className="form-error">Enter a valid email</p>
              )}
              {accountExists.email && (
                <p className="form-error">{accountExists.email}</p>
              )}
            </div>

            <div className="register__form--field">
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
                <p className="form-error">Enter a password</p>
              )}
            </div>

            <div className="register__form--field">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                onChange={(event) => handleChange(event)}
                className={`input ${
                  formErrors.error_password ? "input--error" : ""
                }`}
              />
              {formErrors.error_password && (
                <p className="form-error">Confirm your password</p>
              )}
              {formErrors.error_passNotMatch && (
                <p className="form-error">Password does not match</p>
              )}
            </div>

            <div onClick={handleSignUp} className="register__form--submit">
              Create Account
            </div>
          </form>
          <div className="login__register-container">
            <p>
              Dont have an account?
              <a className="login__register-link" href="/login">
                &nbsp; Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
