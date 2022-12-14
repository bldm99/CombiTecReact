import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

import * as RecepcionDistritos from "./RecepcionDistritos";
import Cabezera from "../Visual/Navbar";

const Registros = () => {
  const redireccion = useNavigate();

  const params = useParams();
  console.log(params);
  const inicializando = { id: 0, nombre: "", imagen: "" };

  const [distr, setDistrito] = useState(inicializando);

  const handleInputChange = (e) => {
    //console.log(e.target.nombre)
    //console.log(e.target.value)
    setDistrito({ ...distr, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(distr);
    try {
      /*RecepcionDistritos.registerDistrito(distr);
        setDistrito(inicializando);
        redireccion("/");*/

      if (!params.id) {
        RecepcionDistritos.registerDistrito(distr);
        setDistrito(inicializando);
      } else {
        RecepcionDistritos.ActualizarDistrito(params.id, distr);
      }

      redireccion("/todo");
    } catch (error) {
      console.log(error);
    }
  };

  const getDistrito = async (distritoId) => {
    try {
      const x = await RecepcionDistritos.obtener(distritoId);
      //const x = await axios("http://127.0.0.1:8000/api/distritos/1/");
      console.log(x);

      const data = x;
      const { nombre, imagen } = x.data;
      setDistrito({ nombre, imagen });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params.id) {
      getDistrito(params.id);
    }
  }, []);

  return (
    <div>
      <Cabezera />
      <div className="col-md-3 mx-auto">
        
        <h2 className="mb-3 text-center">Distritos</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              name="nombre"
              value={distr.nombre}
              onChange={handleInputChange}
              className="form-control"
              minLength="2"
              maxLength="50"
              required
            />

            <input
              type="text"
              name="imagen"
              value={distr.imagen}
              onChange={handleInputChange}
              className="form-control"
              minLength="2"
              maxLength="200"
              required
            />
          </div>

          <div className="d-grid gap-2">
            {params.id ? (
              <button type="submit" className="btn btn-block btn-primary">
                Actualizar
              </button>
            ) : (
              <button type="submit" className="btn btn-block btn-success">
                Registrar
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registros;
