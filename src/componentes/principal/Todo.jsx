import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cabezera from "../Visual/Navbar";
import Navcombi from "../Visual/Navcombi"

import Contactos from "./Contactos";

const Todo = () => {
  const navegacion = useNavigate();

  const [distri, setDistritos] = useState([]);

  /* Busqueads de distritos */
  const [bus, setBus] = useState("");


  const ver = async (e) => {
    //https://apicombislogin.onrender.com/Distritos/
    //axios.get("https://apicombislogin.onrender.com/api/distritos/").then((response) => {
    axios
      .get(
        "https://apicombislogin.onrender.com/717ab3b1503b549a393b14f0740a1312c90c29da/api/distritos/"
      )
      .then((response) => {
        setDistritos(response.data);
      });
  };

  const escritura = (e) => {
    setBus(e.target.value);
    console.log(e.target.value);
  };


  const y = !bus
    ? distri
    : distri.filter((dato) =>
        dato.nombre.toLowerCase().includes(bus.toLowerCase())
      );

  useEffect(() => {
    ver();
  }, []);

  

  console.log(distri);


  

  return (
    <div>
      <Navcombi/>

      <div className="p-4">
        <div className="text-50   p-1">
          <div className="fondo-blur p-5 text-white">
            <h1 className=" d-flex justify-content-center  fst-italic fs-1  p-5">
              Bienvenido
            </h1>
            <h3 className=" d-flex justify-content-center   p-5">
              INGRESE SU UBICACION ACTUAL O DISTRITO DONDE SE ENCUENTRA{" "}
            </h3>
            <input
              value={bus}
              onChange={escritura}
              type="text"
              placeholder="Ingresa una distrito"
              className="form-control"
            />
          </div>

          <div className="row m-1">
            <h1 className="d-flex justify-content-center  fst-italic fs-1"> Distritos</h1>
            {y.map((x) => (
                <div className="col-md-3 mt-4">
                    <div className="card card-body rounded-0">
                    <h3 className="card-title d-flex justify-content-center bg-dark text-warning p-2"> {x.nombre} </h3>
                    <img className="" src={x.imagen} width="300px" height="200px" onClick={() => navegacion(`/info/${x.id}`)}/>
                    
                    <button onClick={() => navegacion(`/info/${x.id}`)} className="btn btn-outline-secondary rounded-0"  > IR </button>
                    </div>
                </div>
            ))}
            
          </div>
        </div>

      </div>
      <Contactos />
    </div>
  );
};

export default Todo;
