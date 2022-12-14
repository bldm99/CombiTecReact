
import React from "react";

import * as RecepcionDistritos from "./RecepcionDistritos";
import axios from "axios";

import { useNavigate } from "react-router-dom";   //equivalente a use Hystory de V. React anteriores

                                    /* = */
const Aspectodis=({listadistrito , listadistritos })=>{

    const navegacion = useNavigate();

    const handleDelete =  async (listadistritoId)=>{

        //await axios.delete("http://127.0.0.1:8000/api/distritos/" + listadistritoId + "/") ;
        
        await RecepcionDistritos.Eliminacion(listadistritoId);
            /* = */
        listadistritos();
    }

    //<img src={listadistrito.imagen} />





    return(
        
        

        <div className="col-md-4 mb-4">

            <div className="card card-body">

                <img src={listadistrito.imagen} alt="" />
                <h3 className="card-title"> {listadistrito.nombre} 
                 <button onClick={()=> navegacion(`/actualizacion/${listadistrito.id}`)} className=" ms-2 btn btn-sm btn-info"  > Actualizar  </button> 
                </h3>
                
                <button   onClick={()=>listadistrito.id && handleDelete(listadistrito.id)  }  className="btn btn-danger my-2"  >Eliminar</button>
            </div>

        </div>

    );
};

export default Aspectodis;