import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="card">
      <div className="form-title">
        <span>Login</span>
      </div>
      <form>
        <div class="form-control">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input"
            required
          />
        </div>

        <div class="form-control">
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input"
            required
          />
        </div>
        <input type="submit" value="Login" class="btn " />
      </form>
    </div>
  );
};

export default Login;
