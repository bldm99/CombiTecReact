import React from "react";
import AuthService from "../services/auth.service";
import { createBrowserHistory } from "@remix-run/router";

import * as Datos from "../services/Datosapi";
import { useNavigate } from "react-router-dom";

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: "",
      password: "",
      loading: false,
      message: "",
    };
    this.onChangeUsuario = this.onChangeUsuario.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.handlerLogin = this.handlerLogin.bind(this);
  }

  onChangeUsuario(e) {
    this.setState({
      usuario: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  //login------------------------------------------

  handlerLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true,
    });

    console.log("usuario : " + this.state.usuario);
    console.log("password : " + this.state.password);
    const redireccion = useNavigate();

    const x = Datos.iniciar(this.state.usuario, this.state.password).then(
      () => {
        
        const history = createBrowserHistory();
       
        //history.push("/todo/");
        console.log(x.state)
        //window.location.reload();
      },
      (error) => {
        const mensajeError = "datos no validos";
        this.setState({
          loading: false,
          message: mensajeError,
        });
      }
    );
  }

  render() {
    return (
      <div className="mt-4 d-flex justify-content-center ">
        <section className="vh-100 ">
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  className="img-fluid"
                  alt="Sample image"
                />
              </div>
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form onSubmit={this.handlerLogin}>
                  <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                    <h1 className="navbar-brand  fs-3 text-info fw-bold p-2 ">
                      CombiTec
                    </h1>
                  </div>

                  <div className="divider d-flex align-items-center my-4">
                    <p className="text-center fw-bold mx-3 mb-0">
                      Comienza ya !
                    </p>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="form3Example3"
                      className="form-control form-control-lg"
                      placeholder="Enter a valid email address"
                      value={this.state.usuario}
                      onChange={this.onChangeUsuario}
                    />

                    <label className="form-label" htmlFor="form3Example3">
                      Usuario
                    </label>
                  </div>

                  <div className="form-outline mb-3">
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control form-control-lg"
                      placeholder="Enter password"
                      value={this.state.password}
                      onChange={this.onChangePassword}
                    />
                    <label className="form-label" htmlFor="form3Example4">
                      Password
                    </label>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="form2Example3"
                      >
                        Remember me
                      </label>
                    </div>
                    <a href="#!" className="text-body">
                      Olvidaste tu contraseña?
                    </a>
                  </div>

                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button type="submit" className="btn btn-primary btn-lg">
                      Login
                    </button>
                
                    <p className="small fw-bold mt-2 pt-1 mb-0">
                      Ingresar como invitado o
                      <a href="#!" className="link-danger">
                        Registrate
                      </a>
                    </p>
                  </div>
                  
                </form>

                {this.state.message && (
                  <div className="form-group">
                    <div className="alert alert-danger">
                      {this.state.message}
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Auth;
