import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../actions/auth";
import { connect } from 'react-redux';
const LoginPage = (props) => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [status, setStatus] = useState("Submit");
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
 // const { isLoggedIn } = useSelector((state) => state.auth);
 // const { message } = useSelector((state) => state.message);
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
    setUser(username);
    setPass(password);
    const newErrors = {};
    // username errors
    if (!username || username === "") newErrors.username = "cannot be blank!";
    else if (username.length > 100)
      newErrors.username = "username is too long!";
    // password errors
    if (!password || password === "") newErrors.password = "cannot be blank!";
    else if (password.length > 100)
      newErrors.password = "firstName is too long!";

    return newErrors;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (props.message) {
      toast.error(props.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    const newErrors = findFormErrors();
    // Conditional logic:
    if (Object.keys(newErrors).length > 0) {
      // We got errors!
      setLoading(false);
      setErrors(newErrors);
    } else {
      setLoading(true);
      setStatus("Sending....");
      dispatch(login(user, pass))
        .then((response) => response.json())
        .then((data) => {
          props.history.push("/admin");
          window.location.reload();
        })
        .catch((error) => {
          setLoading(false);
          setStatus("Submit");
          toast.error(error, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    }
  };
  const handleforgotPassword = () => {};
  if (props.isLoggedIn) {
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
              <button
                type="submit"
                className="btn btn-primary btn-block"
                disabled={loading}
              >
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>{status}</span>
              </button>
            </div>
          </form>
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
  const { isLoggedIn } = state.auth;
  const { message } = state.message;
  return {
    isLoggedIn,
    message
  };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage }; 