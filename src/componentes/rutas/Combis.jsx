
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cabezera from "../Visual/Navbar";

import Contactos  from "../principal/Contactos"

const Combis = ()=>{

    const [rutas, setRutas] = useState([]);

    const ver = async (e) => {
        //https://apicombislogin.onrender.com/Distritos/
        //axios.get("https://apicombislogin.onrender.com/api/distritos/").then((response) => {
        axios.get("https://apicombislogin.onrender.com/717ab3b1503b549a393b14f0740a1312c90c29da/api/empresas/").then((response) => {
        setRutas(response.data);
        });
    };

    useEffect(() => {
        ver();
    }, []);


    return(
        <div>
            <Cabezera />
            <div className="">
                <div className="text-white-50  " >

                    
                    <div className="row mt-3 fondo-blur4 text-white">
                        <h1 className="d-flex justify-content-center  fst-italic fs-1" > EMPRESAS AREQUIPA </h1>
                        { rutas.map( (x) =>(
                            <div className="col-md-4 mb-1 text-warning" key={x.id}>
                                <div className="card card-body bg-transparent ">
                                    <div className="card-title p1 m-1 d-flex justify-content-center  p-2">
                                        <img className="" src={x.imagen}  alt="" width="300px" height="200px" onClick={()=> navegacion(`/info/${x.id}`)} />                                                                               
                                    </div>
                                    <h3 className="d-flex justify-content-center text-info  "> {x.nombre} </h3>
                                    
                                </div>
                            </div>
                        ))}
                    </div>                 
                </div>

              


                <table className="table table-striped table-hover mt-5 shadow-lg">
                    <thead>
                        <tr className="bg-">
                            <th>ID</th>
                            <th>NOMBRE</th>
                        </tr>
                    </thead>
                    <tbody>
                        { rutas.map( (x) =>(
                            <tr key={x.id}>
                                <td>{x.id}</td>
                                <td>{x.nombre}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
                <Contactos/>

            </div>
        </div>
        
    );

};

export default Combis;