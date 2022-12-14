import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

import Navcombi from "../Visual/Navcombi";

const Rutas = () => {
  const [ruta, setRuta] = useState([]);

  const verRutas = () => {
    axios
      .get(
        "https://apicombislogin.onrender.com/717ab3b1503b549a393b14f0740a1312c90c29da/api/rutas/"
      )
      .then((response) => {
        setRuta(response.data);
      });
  };

  useEffect(() => {
    verRutas();
  }, []);

  console.log(ruta);

  return(

    <div>
      <Navcombi></Navcombi>
      <div className="row m-1">
          <h1 className="d-flex justify-content-center  fst-italic fs-1 "> Distritos</h1>
          {ruta.map((x) => (
              <div className="col-md-3 mt-4 bg-dark p-3">
                  <div className="card card-body rounded-0">
                  <h3 className="card-title d-flex justify-content-center "> {x.nombre} </h3>
                  <img className="" src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/91/5c/a3.jpg" width="300px" height="200px" onClick={() => navegacion(`/info/${x.id}`)}/>
                  <h3 className="card-title d-flex justify-content-center "> {x.inicio} </h3>
                          <h3 className="card-title d-flex justify-content-center "> {x.final} </h3>
                          <h3 className="card-title d-flex justify-content-center "> {x.descripcion} </h3>                 
                  <button onClick={() => navegacion(`/info/${x.id}`)} className="btn btn-outline-secondary rounded-0"  > IR </button>
                  </div>
              </div>
          ))}          
      </div>
    </div>

    
    

  ) 
};

export default Rutas;
