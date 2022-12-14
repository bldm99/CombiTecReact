import axios from "axios";
import React from "react";


//http://127.0.0.1:8000/api/distritos/
//https://apicombislogin.onrender.com/Distritos/
//https://apicombislogin.onrender.com/717ab3b1503b549a393b14f0740a1312c90c29da/api/distritos/
//const API_DIS = "https://apicombislogin.onrender.com/Distritos/";
const API_DIS = "https://apicombislogin.onrender.com/717ab3b1503b549a393b14f0740a1312c90c29da/api/distritos/";

const API_EMPRESAS = "https://apicombislogin.onrender.com/717ab3b1503b549a393b14f0740a1312c90c29da/api/empresas/";
//const API_DIS = "http://127.0.0.1:8000/api/distritos1/";
/*export const listadoDis = async () =>{
    return await fetch(API_DIS);
}*/


//Liustar todos los datos medianmte axios
export const listadoDis = async () =>{
    return  axios(API_DIS);
    
}


/*--------------------------------OBTENCION DE DATOS ---------------------------- */
export const obtener = async (distritoId) =>{

    const comodin = "/"
    //await axios(`${API_DIS}${distritoId}${comodin}`);
    //await axios("http://127.0.0.1:8000/api/distritos/1/");
    return await axios(`${API_DIS}${distritoId}${comodin}`)
}

export const obtenerempresas = async (rutaId) =>{
    const comodin = "/"
    return await axios(`${API_EMPRESAS}${rutaId}${comodin}`)
}







/*--------------------------------OBTENCION DE DATOS ---------------------------- */

export const registerDistrito = async (newDistrito) =>{
    /*return await fetch(API_DIS, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "nombre": String(newDistrito.nombre),
            "region": String(newDistrito.region),
            
        })
    });*/

    /*axios.post(API_DIS , {
        "nombre": String(newDistrito.nombre),
        "region": String(newDistrito.region),
    })*/

    try {
        axios.post(API_DIS , {
            "nombre": String(newDistrito.nombre),
            "imagen": String(newDistrito.imagen),
            
        });
        console.log("resdsdsd")

    } catch (error) {
        console.log(error);   
    }

}


export const Eliminacion= async (listadistritoId) =>{

    /*return await fetch(  "http://127.0.0.1:8000/api/distritos/"+{listadistritoId}+"/", {
        method: 'DELETE'
    });*/
    const comodin = "/"
    await axios.delete(`${API_DIS}${listadistritoId}${comodin}`)


}

export const ActualizarDistrito = async (distritoId , updateDistrito ) =>{
    try {
        const comodin = "/"
        axios.put(`${API_DIS}${distritoId}${comodin}` , {
            "nombre": String(updateDistrito.nombre),
            "imagen": String(updateDistrito.imagen),
            
        });
       

    } catch (error) {
        console.log(error);   
    }

}

