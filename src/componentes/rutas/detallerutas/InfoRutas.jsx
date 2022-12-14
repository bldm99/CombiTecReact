import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

import * as RecepcionDistritos from "../RecepcionDistritos";

import * as Paradas from "./Paradas"
import * as MarcadorParada from "./MarcadorParada"

import {
  TileLayer,
  MapContainer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
//import "leaflet/dist/leaflet.css";

import MarkersParametro from "./Markers";

import Cabezera from "../../Visual/Navbar";
import Navcombi from "../../Visual/Navcombi";

import { IconLocation } from "./IconLocation";

import Contactos from "./../../principal/Contactos";

const InfoRutas = () => {
  /*const [state, setState] = useState({
    longitude: 0,
    latitude: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setState({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
      },
      function (error) {
        console.log(error);
      },
      {
        enableHighAccuracy: true,
      }
    );
  });*/

  /*--------------------Señal de arduino---------------------------------------*/
  /*const [val, setVal] = useState([]);

  const valores = () => {
    axios.get("http://127.0.0.1:8000/").then((response) => {
      setVal(response.data);
      console.log("response.data");
    });
  };

  useEffect(() => {
    valores();
  }, []);*/

  /*--------------------Señal de arduino---------------------------------------*/

  //console.log(val);

  const redireccion = useNavigate();
  const params = useParams();

  const inicializandoempresa = { id: 0, nombre: "" }; // solo sera necesario mostrar el nombre de la empresa
  const [emp, setEmpresa] = useState(inicializandoempresa);

  const [ruta, setRuta] = useState([]);
  const listarutas = () => {
    axios
      .get(
        "https://apicombislogin.onrender.com/717ab3b1503b549a393b14f0740a1312c90c29da/api/rutas/?id=" +
          params.id
      )
      .then((response) => {
        setRuta(response.data);
      });
  };

  useEffect(() => {
    listarutas();
  }, []);

  console.log(ruta);



  const getEmpresa = async (rutaId) => {
    try {
      const x = await RecepcionDistritos.obtenerempresas(rutaId);
      //console.log(x);

      const data = x;
      const { id, nombre } = x.data;
      setEmpresa({ id, nombre }); //definimos todos los campos que se quieren mostrar
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params.id) {
      getEmpresa(params.id); // params id es el parametro ruta_id recibido
    }
  }, []);

  var la = -0;
  var lo = -0;
  var marcarRuta = []
  var marcarParada = {}


  if (params.id == 1) {
    la = -16.428424;
    lo = -71.5271051 ;
    marcarRuta = Paradas.multiPolyline7()
    marcarParada = MarcadorParada.marcadores7()
  }
  if (params.id == 2) {
    la = -16.428424;
    lo = -71.5271051 ;
    marcarRuta = Paradas.multiPolyline7()
    marcarParada = MarcadorParada.marcadores7()
  }
  if (params.id == 3) {
    la = -16.409994;
    lo = -71.505333 ;
    marcarRuta = Paradas.multiPolyline8()
    marcarParada = MarcadorParada.marcadores8()
  }

  if (params.id == 4) {
    la = -16.409994;
    lo = -71.505333 ;
    marcarRuta = Paradas.multiPolyline8()
    marcarParada = MarcadorParada.marcadores8()
  }
  if (params.id == 5) {
    la = -16.409994;
    lo = -71.505333 ;
    marcarRuta = Paradas.multiPolyline8()
    marcarParada = MarcadorParada.marcadores8()
  }

  if (params.id == 6) {
    la = -16.409994;
    lo = -71.505333 ;
    marcarRuta = Paradas.multiPolyline8()
    marcarParada = MarcadorParada.marcadores8()
  }

  if (params.id == 7) {
    la = -16.428424;
    lo = -71.5271051 ;
    marcarRuta = Paradas.multiPolyline7()
    marcarParada = MarcadorParada.marcadores7()
  }

  if (params.id == 8) {
    la = -16.409994;
    lo = -71.505333 ;
    marcarRuta = Paradas.multiPolyline8()
    marcarParada = MarcadorParada.marcadores8()
    
  }



  const limeOptions = { color: "red" };


  return (
    <div>
      <Navcombi />

      <div className="card card-body bg-white fondo-blur3">
        <h1 className="text-info  fst-italic">{emp.nombre}</h1>
      </div>

      <div className="mt-0">
        {ruta.map((x) => (
          <div className="row" key={x.id}>
            <div className="card card-body bg-white fondo-blur3 p-5  text-warning">
              <h3 className="card-title"> Ruta:{x.nombre} </h3>
              <h3 className="card-title"> Inicio :{x.inicio} </h3>
              <h3 className="card-title"> Final :{x.final} </h3>
            </div>
          </div>  
        ))}
      </div>

      <div className=" container  bg-dark p-4 mt-2" >
          <div className="   row "   >
            <MapContainer
              center={{ lat: la, lng: lo }}
              zoom={15}

              className="col" height="200px"
              
            >
              <TileLayer
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributorso'
              />

              <div>
                {marcarParada.map((m) => (
                  <Marker
                    position={{ lat: m.lati, lng: m.longi }}
                    icon={IconLocation}
                    height="500px"
                    width="500px"
                  >
                    <Popup>
                      {m.name} <br />
                      <img src={m.imagen} height="50px" width="50px" />'
                    </Popup>
                  </Marker>
                ))}
                <Polyline pathOptions={limeOptions} positions={marcarRuta} />
              </div>
            </MapContainer>

            <div className=" ">
            {ruta.map((x) => (
              <div className="mt-2" >
              <p className=" text-warning d-flex justify-content-center fst-italic fs-3  p-2 " >{x.descripcion}</p>
            </div>
            ))}
            </div>



          </div>
      
      </div>

      <Contactos />
    </div>
  );
};

export default InfoRutas;
