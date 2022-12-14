import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

import * as RecepcionDistritos from "./RecepcionDistritos";
import Cabezera from "../Visual/Navbar"
import Header from "../Visual/Contenedor"

const Info = () => {

  const redireccion = useNavigate();
  
  const params = useParams();

  console.log("-----------rrrrr-----------------")
  console.log(params)
  console.log("---------------tttt-------------")

  const inicializandodistrito = { id: 0, nombre: "" ,imagen:""};

  const [distr, setDistrito] = useState(inicializandodistrito);

  /*------------------------ Listar empresas segun la Region--------------------------------*/
  const [empresa, setEmpresa] = useState([]);


  const listaempresas = () => {
    axios.get("https://apicombislogin.onrender.com/Empresas/?distrito_id=" + params.id ).then((response) => {
        setEmpresa(response.data);
    });
  };


  useEffect(() => {
    listaempresas();
  }, []);



  console.log("----------------------------")
  console.log(empresa)
  console.log("----------------------------")

  
  const getDistrito = async (distritoId) =>{
    try {
      const x = await RecepcionDistritos.obtener(distritoId);
      //const x = await axios("https://apicombislogin.onrender.com/Distritos/1/");
      console.log(x)
      
      const data =   x 
      const {id , nombre , imagen} = x.data
      setDistrito({ id ,nombre , imagen})   //definimos todos los campos que se quieren mostrar
      
    } catch (error) {
      console.log(error)
    }

  }


  useEffect(()=>{
    if(params.id){
      getDistrito(params.id);
    }

  },[]);

  console.log(distr)

  return (

    <div>
      <Header/>

      <div className="  bg-dark p-2  text-info  fst-italic">
        <h1>{distr.nombre}</h1>
        <h1>{/*params.id*/}</h1> 
        <h1> {/*distr.nombre*/}</h1>
      </div>
      <div className="row  p-4 text-white"> 
        { empresa.map( (x) =>(
          <div className="col-md-4 mb-1   " key={x.id}>
              <div className="card card-body bg-white fondo-blur2   text-info ">
                  <h3 className="card-title"> Empresa :{x.nombre}  </h3> 
                  <h3 className="card-title"> VCantidad de unidades :{x.cantidad}  </h3> 
                  <h3 className="card-title"> distrito ID :{x.distrito_id}  </h3> 
                  <img src={x.imagen}  alt="" width="250px" height="200px" />
                  <h3 className="card-title"> Rutas :{x.rutas_id}  </h3>
                  <button onClick={()=> redireccion(`/inforutas/${x.rutas_id}`)} className=" ms-2 btn btn-sm btn-warning"  > IR </button> 
              </div>
          </div>
        ))}
      </div>
    </div>
  );

  


  

};

export default Info;
