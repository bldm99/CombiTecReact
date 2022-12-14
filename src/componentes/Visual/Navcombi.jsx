import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import {MDBDropdown , MDBDropdownMenu ,MDBDropdownToggle , MDBDropdownItem} from  'mdb-react-ui-kit/dist/css/mdb.min.css';

import { Dropdown } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";

import "../cssloggin/nav.css";
import { useParams } from "react-router-dom";

const Navcombi = () => {
  //setUsuario1(usuario)

  //esconder
  
  const redireccion = useNavigate(); //reidrecinar pagina
  //const usuario = valor;            //valor recibido
  const xp = localStorage.getItem("User");



  //Cerando  Sesion
  const logout = async (e) => {
    e.preventDefault();
    try {
      console.log("funcionando todo correcto");
      localStorage.removeItem("User");  //Eliminando local storage
      redireccion(`/`) 
    } catch (error) {
      console.log(error);
    }
  };

  //Ir a pagina iniciar sesion
  const login = async (e) => {
    e.preventDefault();
    try {  
      redireccion(`/`) 
    } catch (error) {
      console.log(error);
    }
  }

 

  var esconder = "valor"
  var esconder2 = "valor"

  if (localStorage.getItem("User") != null) {
    esconder = "none"
  }else{
    esconder2 = "none"

  }

  const ocultarSign =  () => {
    return esconder
  };

  const ocultarLogout=  () => {
    return esconder2
  };


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-4">
      <div className="container">
        <Link className="navbar-brand  fs-3 text-info fw-bold " to="/todo">
          CombiTec
          <img
            id="MDB-logo"
            src="https://mdbcdn.b-cdn.net/wp-content/uploads/2018/06/logo-mdb-jquery-small.png"
            alt="MDB Logo"
            draggable="false"
            height="30"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-3">
            <li className="nav-item">
              <a
                className="nav-link active d-flex align-items-center"
                aria-current="page"
                href="#"
              >
                <i className="fas fa-bars pe-2"></i>Rutas
              </a>
            </li>
          </ul>

          <form className="d-flex align-items-center w-100 form-search">
            <div className="input-group">
              <input
                type="search"
                className="form-control"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </form>

          <Dropdown className="">
            <DropdownToggle>Menu</DropdownToggle>
            <DropdownMenu>
              <DropdownItem link childTag="button">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/admin"
                >
                  Distritos
                </Link>
              </DropdownItem>
              <DropdownItem link childTag="button">
                Registar mi Empresa
              </DropdownItem>
              <DropdownItem link childTag="button">
                Something else here
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <ul className="navbar-nav ms-3">
            <li className="nav-item me-3">
              <a className="nav-link d-flex align-items-center" href="#!">
                Noticias
              </a>
            </li>
            <li className="nav-item">
              {localStorage.getItem("User") ? (
                <a
                  className="nav-link d-flex align-items-center me-3 text-warning"
                  href="#!"
                >
                  <i className="fas fa-bookmark pe-2 "></i>
                  Usuario {xp}
                </a>
              ) : (
                <a
                  className="nav-link d-flex align-items-center me-3 text-info"
                  href="#!"
                >
                  <i className="fas fa-bookmark pe-2 "></i>
                  Invitado
                </a>
              )}
            </li>



            <li className="nav-item" style={{ width: "65px" , display:ocultarSign() }}  >
              <form onSubmit={login}>
              <button
                    className="btn btn-light  shadow-0"
                    type="submit"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                    style={{
                      padding: "0.4rem",
                      textAlign: "left",
                      background: "#f7df1e",
                      color: "#3c3a2d",
                    }}
                  >
                    Sign In
                  </button>
              </form>
            </li>

            <li>
              <form
                className="d-flex align-items-center w-100 form-search"
                onSubmit={logout}
              >
                <div className="input-group" style={{display:ocultarLogout() }}  >
                  <button
                    className="btn btn-light  shadow-0"
                    type="submit"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                    style={{
                      padding: "0.4rem",
                      textAlign: "left",
                      background: "#f7df1e",
                      color: "#3c3a2d",
                    }}
                  >
                    Logout
                  </button>
                </div>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navcombi;
