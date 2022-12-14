import React, { useEffect, useState } from "react";
import '../cssloggin/Login.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie"


import AuthService from "../../services/auth.service";
import { createBrowserHistory } from "@remix-run/router";

class Login extends React.Component{


  render(){

    return (
      <div className=" card container h-100 mt-4 bg-dark p-5" >
  
        <h1 className="d-flex justify-content-center h-100 text-info p-5 "  >CombiTec</h1>
  
      
        <div className="d-flex justify-content-center h-100 ">
          <div className="user_card p-5">
            <div className="d-flex justify-content-center ">
              <h3 id="form-title">LOGIN</h3>
            </div>
            <div className="">
          
                <div className="input-group mb-3">
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    name="email"
                    value={user.email}
                    onChange={waiting}
                    placeholder="Username..."
                    className="form-control"
                  />
                </div>
                <div className="input-group mb-2">
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="fas fa-key"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={waiting}
                    placeholder="Password..."
                    className="form-control"
                  />
                </div>
  
                <div className="d-flex justify-content-center mt-3 login_container">
                  <input className="btn login_btn" onClick={()=>user.email    && ver(user.email , user.password)  }  type="submit" value="Login" />
                </div>
              
            </div>
  
            <div className="mt-4">
              <div className="d-flex justify-content-center links">
                Don't have an account?{" "}
                <a href="" className="ml-2">
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  }

};
export default Login;
