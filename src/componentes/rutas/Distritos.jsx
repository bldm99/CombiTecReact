import { useEffect, useState } from "react";
import axios from "axios";
import * as RecepcionDistritos from "./RecepcionDistritos";
import Aspectodis from "./Aspectodis";
import Cabezera from "../Visual/Navbar";
import Navcombi from "../Visual/Navcombi"

const Distritos = () => {
  const [distri, setDistritos] = useState([]);

  /*const listadistritos1 = async () => {
    axios.get("http://127.0.0.1:8000/api/distritos/").then((response) => {
      setDistritos(response.data);
    });
  };*/

  const listadistritos = () => {
    
    RecepcionDistritos.listadoDis().then((response) => {
      setDistritos(response.data);
    });
  };

  useEffect(() => {
    listadistritos();
  }, []);
  console.log(distri)

  //console.log(React.version);

  return (
    <div >
      
      <Cabezera />
      <h1> Distritos y Rutas de Arequipa</h1>

      <div className="row">
        {distri.map((listadistrito) => (
          <Aspectodis
            key={listadistrito.id}  listadistrito={listadistrito}  listadistritos={listadistritos}
          />
        ))}
      </div>
    </div>
  );
};

export default Distritos;
