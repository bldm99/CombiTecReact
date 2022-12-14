import React from "react";
import { Link } from "react-router-dom";

import Aspectodis from "../rutas/Aspectodis";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";


const Cabezera = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-4 fs-3">
      <div className="container-fluid">
        <Link className="navbar-brand  fs-3 text-info fw-bold "   to="/todo">
          CombiTec
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/admin">
                Distritos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/registroDis">
                Registrar
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/combis">
                Empresas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled">Disabled</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Cabezera;
