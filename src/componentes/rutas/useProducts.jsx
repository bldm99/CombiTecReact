
import React, { useEffect } from "react";
import { useState } from "react";

import axios, { Axios } from "axios";



const useProducts =()=>{


    const [datos ,setDatos]= useState([])

    

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/distritos/")
        .then(response => {
          setDatos(response.data)
        })

    })

    return (<table className="table">
    <thead>
        <tr>
            <th>IdDistrito</th>
            <th>Nombre</th>
            
        </tr>
    </thead>
    <tbody>

        {datos.map(
            (x)=>(

                <tr key = {x.id} >
                <td >{x.id}</td>
                <td>{x.nombre}</td>
                <td>{x.region}</td>
                
                <td>
                    <button>eliminar</button>
                    <button>Actualizar</button>
                  
                </td>
            </tr>

            )
        )}

            
        
    </tbody>
</table>);

}
export default useProducts;

