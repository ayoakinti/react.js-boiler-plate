import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { login } from "../../actions/auth";
import { useDispatch } from "react-redux";
import Loader from "../../components/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Login() {
  const history = useHistory();
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const dispatch = useDispatch();

  interface LoginInput {
    email: string;
    password: string;
  }

  const [loginInput, setLoginInput] = useState<LoginInput>({
    email: "",
    password: "",
  });

  const handleEmailChange = (e: any) => {
    setLoginInput({
      ...loginInput,
      email: e.target.value,
    });
  };

  const handlePasswordChange = (e: any) => {
    setLoginInput({
      ...loginInput,
      password: e.target.value,
    });
  };

  const closeToast = () => {
    setMessage("");
  };

  const handleLogin = async (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await dispatch(login(loginInput));
      history.push("/");
    } catch (error) {
      // console.error(error.response.data.message);
      setMessage(error.response.data.message);
      setLoading(false);
      // setTimeout(() => {
      //   setMessage("");
      // }, 4000);
    }
  };

  return (
    <div className="auth-container">
      {loading && <Loader />}
      {message && (
        <div className="toast">
          {message}
          <FontAwesomeIcon
            onClick={closeToast}
            className="ml-2 cursor-pointer"
            icon={faTimes}
          />
        </div>
      )}
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6">
            <div className="auth-content">
              <div className="auth-header">
                <div>
                  <img src={logo} alt="logo" />
                </div>
                <p>Login to your account</p>
              </div>
              <div className="auth-form">
                <form onSubmit={handleLogin}>
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="Email"
                      value={loginInput.email}
                      onChange={handleEmailChange}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      placeholder="******"
                      value={loginInput.password}
                      onChange={handlePasswordChange}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="auth-checkbox">
                    <div className="d-flex align-items-center">
                      <input
                        type="checkbox"
                        name="isLoggedIn"
                        id="isLoggedIn"
                        className="mr-1"
                      />
                      <label htmlFor="isLoggedIn">Keep me logged in</label>
                    </div>
                    <div>
                      <Link to="/forgotpassword">Forgot Password</Link>
                    </div>
                  </div>
                  <div className="form-group">
                    <button className="auth-btn" type="submit">
                      Log in
                    </button>
                  </div>
                </form>
              </div>
              <div className="auth-footer">
                Don't have an account? <Link to="/register">Register</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
