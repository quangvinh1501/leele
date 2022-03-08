import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { userActions } from "../../store/auth/actions";
import { connect } from "react-redux";
import { history } from "../../helpers/history";
const LoginPage = (props) => {
  const [status, setStatus] = useState("Submit");
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
    // Check and see if errors exist, and remove them from the error object:
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };
  const findFormErrors = () => {
    const { username, password } = form;
    const newErrors = {};
    // username errors
    if (!username || username === "") newErrors.username = "cannot be blank!";
    else if (username.length > 100)
      newErrors.username = "username is too long!";
    // password errors
    if (!password || password === "") newErrors.password = "cannot be blank!";
    else if (password.length > 100)
      newErrors.password = "password is too long!";

    return newErrors;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = findFormErrors();
    // Conditional logic:
    if (Object.keys(newErrors).length > 0) {
      // We got errors!
      setLoading(false);
      setErrors(newErrors);
    } else {
      const { username, password } = form;
      setLoading(true);
      setStatus("Sending...");
      await dispatch(userActions.login(username, password));
      setTimeout(() => {
        if (props.loggedIn) {
          history.push("/admin");
        } else {
          setStatus("Submit");
          setLoading(false);
        }
      }, 5000);
    }
  };

  if (props.loggedIn) {
    return <Redirect to="/admin" />;
  }
  return (
    <main className="form-signin">
      <div className="card">
        <div style={{ textAlign: "center" }}>
          <img className="mb-4" src="../../../logo/logo.png" alt="" />
        </div>
        <div className="card-header">
          <h3>Sign In</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "10px" }}>
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-user"></i>
                </span>
                <input
                  defaultValue=""
                  id="username"
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="username"
                  onChange={(e) => setField("username", e.target.value)}
                />
                <div className="invalid-feedback" style={{ color: "red" }}>
                  {" "}
                  {errors.username}
                </div>
              </div>
            </div>
            <div style={{ marginBottom: "10px" }}>
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-lock"></i>
                </span>
                <input
                  defaultValue=""
                  id="password"
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => setField("password", e.target.value)}
                />
                <div className="invalid-feedback" style={{ color: "red" }}>
                  {" "}
                  {errors.password}
                </div>
              </div>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block">
                <span>{status}</span>
              </button>
            </div>
          </form>
          {loading && <div className="loading"></div>}
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-center links">
            Don't have an account?<a href="#">Sign Up</a>
          </div>
          <div className="d-flex justify-content-center">
            <a href="#">Forgot your password?</a>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </main>
  );
};
function mapStateToProps(state) {
  const { loggedIn } = state.authentication;
  return {
    loggedIn,
  };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage };