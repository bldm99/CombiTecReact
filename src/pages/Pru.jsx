import React from "react";
import AuthService from "../services/auth.service";
import { createBrowserHistory } from "@remix-run/router";
import { useEffect, useState } from "react";

import * as Datos from "../services/Datosapi";
import { useNavigate } from "react-router-dom";
import Navcombi from "../componentes/Visual/Navcombi"
const Pru = () => {

    const redireccion = useNavigate();
    const initu = { usuario: ""};
    const initp= {password: ""};
    const initmessage = {message: ""};
    const initloading= {loading: true};

    const [u, setU] = useState(initu);
    const [p, setP] = useState(initp);

    const [me, setMessage] = useState(initmessage);
    const [lo, setLoadind] = useState(initloading);




    const onChangeUsuario = (e) => {   
        setU({  ...u, [e.target.name]: e.target.value });
    };

    const onChangePassword = (e) => {   
        setP({  ...p, [e.target.name]: e.target.value });
    };


    const handlerLogin = async (e) => {
        e.preventDefault();
        console.log("usuario : " + u.usuario);
        console.log("password : " + p.password);
        try { 
            const x = await Datos.iniciar(u.usuario, p.password)//.then((response) => {
                //const history = createBrowserHistory();
                //redireccion(`/todo/${u.usuario}`)
                //redireccion(`/todo`)  
                //history.push("/todo/");
                //window.location.reload();
            //});
            localStorage.setItem("User", u.usuario); //
            const xp = localStorage.getItem("User")
            console.log(xp)
            //redireccion(`/todo`) 
            console.log("estye es el token?",x)
            if(xp !=null){
              redireccion(`/todo`) 
            }
               
        } catch (error) {
            const mensajeError = "datos no validos";
            setLoadind({loading: false})
            setMessage({message: mensajeError})     
        }  
    };

    /*const getDistrito = async () => {
      try {
        const x = await Datos.obtener(1);
        console.log(x);
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      
        getDistrito()
      
    }, []);*/

    
    
    

    
  
  //login------------------------------------------

  

  
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
                <form onSubmit={handlerLogin}>
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
                      name="usuario"
                      id="form3Example3"
                      className="form-control form-control-lg"
                      placeholder="Enter a valid email address"
                      value={u.usuario}
                      onChange={onChangeUsuario}
                    />

                    <label className="form-label" htmlFor="form3Example3">
                      Usuario
                    </label>
                  </div>

                  <div className="form-outline mb-3">
                    <input
                      type="password"
                      id="form3Example4"
                      name="password"
                      className="form-control form-control-lg"
                      placeholder="Enter password"
                      value={p.password}
                      onChange={onChangePassword}
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
                      <a href="#!" className="link-danger">
                        Registrate
                      </a>
                    </p>
                
                    <p className="small fw-bold mt-2 pt-1 mb-0">
                      <a href="#!" className="link-danger">
                        Ingresar como invitado 
                      </a>
                    </p>
                  </div>
                  
                </form>

                {me.message && (
                  <div className="form-group">
                    <div className="alert alert-danger">
                      {me.message}
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
export default Pru;
