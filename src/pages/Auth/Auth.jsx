// libraries & components
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import { register, login } from "../../redux/actions/auth";
import "./Auth.css";

// default form data
const initialState = {
  fullname: "",
  email: "",
  password: "",
};

const Auth = () => {
  // states
  const [formData, setFormData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // functions
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(register(formData, navigate));
    } else {
      dispatch(login(formData, navigate));
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);
  const handleAuthMode = () => setIsSignup((prevIsSignup) => !prevIsSignup);
  return (
    <div id="auth" className="container-fluid">
      <div className="row auth-row">
        <div className="col-md-6 auth-col">
          {/* Title */}
          <div className="form-title">
            <h3>{isSignup ? "Create an account" : "Welcome Back"}</h3>
            <p onClick={handleAuthMode} className="pointer">
              {isSignup
                ? "Already have an account? Login"
                : "Don't have an account yet? Signup"}
            </p>
          </div>
          <div className="row align-items-center">
            <div className="col-md-10 mx-auto">
              <form onSubmit={handleSubmit}>
                {/* fullname */}
                {isSignup && (
                  <Input
                    name="fullname"
                    type="text"
                    onChange={handleChange}
                    label="Full Name"
                    placeholder="John Doe"
                  />
                )}
                {/* email */}
                <Input
                  name="email"
                  type="email"
                  onChange={handleChange}
                  label="email address"
                  placeholder="johndoe@gmail.com"
                />

                {/* password */}
                <Input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  onChange={handleChange}
                  label="password"
                  handleShowPassword={handleShowPassword}
                />
                {/* buttons */}
                <button className="btn btn-block submit-btn btn-primary">
                  {" "}
                  Submit
                </button>
                <button className="btn btn-block google-btn btn-outline-primary">
                  {" "}
                  Register with Google
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
