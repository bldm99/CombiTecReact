import React from "react";
import ReactDOM from "react-dom/client";
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import "leaflet/dist/leaflet.css";

//Componentes exportados

import Distritos from "./componentes/rutas/Distritos";
import Listar from "./Listar";
import Api from "./Api";

import Contenedor from "./componentes/Visual/Contenedor";

import Products from "./componentes/rutas/useProducts";

import Todo from "./componentes/principal/Todo"

import Cabezera from "./componentes/Visual/Navbar";
import Registros from "./componentes/rutas/Registros";
import Combis from "./componentes/rutas/Combis"

import Info from "./componentes/rutas/Info"
import InfoRutas from "./componentes/rutas/detallerutas/InfoRutas"

import Login from "./componentes/principal/Login"
import Arduino from "./componentes/principal/Arduino"
import Markers from "./componentes/rutas/detallerutas/Markers"


import Auth from "./pages/Auth"
import P from "./pages/Pru"
import Navcombi from "./componentes/Visual/Navcombi";

import MediaDemo from "./Sigma";
import Header from "./componentes/Visual/Navcombi"
import Rutas from "./componentes/rutas/Rutas"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter> 
    <div >
      <Routes>

      <Route path="/sigma" element={<MediaDemo/>}    />

        <Route path="/" element={<P/>}    />
        <Route path="/ard" element={<Arduino/>}    />
        <Route path="/marcador" element={<Markers/>}    />

        <Route path="/rutas" element={<Rutas/>}    />
        <Route path="/todo/" element={<Todo/>}    />
        <Route path="/admin" element={<Distritos/>}    />
        <Route path="/registroDis" element={<Registros/>}    />
        <Route path="/actualizacion/:id" element={<Registros/>}    />
        <Route path="/combis" element={<Combis/>}    />
        <Route path="/info/:id" element={<Info/>}    />
        <Route path="/inforutas/:id" element={<InfoRutas/>}    />
        
      </Routes>
    </div>
  </BrowserRouter>

  //<Products/>

  //<Cabezera/>

  /*<React.StrictMode>
    <Listar/>
  </React.StrictMode>*/
);
