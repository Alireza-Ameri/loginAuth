import React from "react";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div>
      <div className="card">
        <div className="form-title-sign">
          <span>Sign Up</span>
        </div>
        <form>
          <div class="form-control-sign">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input"
              required
            />
          </div>
          <div class="form-control-sign">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input"
              required
            />
          </div>

          <div class="form-control-sign">
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input"
              required
            />
          </div>
          <input type="submit" value="Sign up" class="btn " />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
