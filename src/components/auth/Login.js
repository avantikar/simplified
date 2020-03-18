import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <div className="hold-transition login-page">
        <div className="login-box">
          <div className="login-logo">
            <a href="../../index2.html">
              <b>Admin</b>LTE
            </a>
          </div>
          {/* /.login-logo */}
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Sign in to start your session</p>
              <form action="../../index3.html" method="post">
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember">Remember Me</label>
                    </div>
                  </div>
                  {/* /.col */}
                  <div className="col-4">
                    <button type="submit" className="btn btn-primary btn-block">
                      Sign In
                    </button>
                  </div>
                  {/* /.col */}
                </div>
              </form>
              <div className="social-auth-links text-center mb-3">
                <p>- OR -</p>
                <a href="dummylink" className="btn btn-block btn-primary">
                  <i className="fab fa-facebook mr-2" /> Sign in using Facebook
                </a>
                <a
                  href="https://accounts.google.com/signin/oauth/oauthchooseaccount?client_id=1032199425885-oq9scukspijc682n7k2erv386nc58que.apps.googleusercontent.com&as=W7C--lDv7cWyh6xAWN1iPQ&destination=https%3A%2F%2Fapp.asana.com&approval_state=!ChRaaHpJbmhrMjlCTWFYQlMzSURDSxIfazloYTd0djBLZDRma013TWpqbVNUV1ZTTWlhT0RoYw%E2%88%99AF-3PDcAAAAAXnIvS6krNhmcpiIIHn6mssDNqEKWlLnU&oauthgdpr=1&xsrfsig=ChkAeAh8T7jPVccVnwZKvNCdo2O5CRUMEvZpEg5hcHByb3ZhbF9zdGF0ZRILZGVzdGluYXRpb24SBXNvYWN1Eg9vYXV0aHJpc2t5c2NvcGU&flowName=GeneralOAuthFlow"
                  className="btn btn-block btn-danger"
                >
                  <i className="fab fa-google-plus mr-2" /> Sign in using Google
                </a>
              </div>
              {/* /.social-auth-links */}
              <p className="mb-1">
                <Link to="/forgot-password">I forgot my password</Link>
              </p>
              <p className="mb-0">
                <Link to="/register" className="text-center">
                  Register a new membership
                </Link>
              </p>
            </div>
            {/* /.login-card-body */}
          </div>
        </div>
      </div>
    );
  }
}
