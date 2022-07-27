import react, { useState } from "react";
const Login = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container">
      {/* <h1>From Login</h1> */}
      <div className="forms-container">
        <div className="signin-singup">
          <form action="" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user">
                <input
                  type="text"
                  value={user}
                  onChange={(e) => {
                    setUser(e.target.value);
                  }}
                  placeholder="Username"
                />
              </i>
            </div>
            <div className="input-field">
              <i className="fas fa-lock">
                <input
                  type="text"
                  value={pass}
                  onChange={(e) => {
                    setPass(e.target.value);
                  }}
                  placeholder="Password"
                />
              </i>
            </div>
            <input
              type="submit"
              value="Login"
              className="btn solid"
              onClick={handleSubmit}
            />
            <p className="social-text">Or Signin with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
