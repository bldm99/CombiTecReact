import axios from 'axios';
import { useMemo } from 'react';
import { useCallback } from 'react';

import { createContext, useState } from 'react';
import PropTypes from 'prop-types'

const API_URL = 'http://localhost:8000'
const MY_AUTH_APP = "MY_AUTH_APP_1"


export const iniciar = async (usuario,password) => {

    return  axios.post(API_URL + "/login/",{
            username:usuario,   //campo : valor recibido
            password:password  //campo : valor recibido
        })
        .then(res=>{
            if(res.data){
                localStorage.setItem('token',JSON.stringify(res.data))
            }
            return res.data;
        })
}

export const obtener = async (distritoId) =>{

    const comodin = "/"
    //await axios(`${API_DIS}${distritoId}${comodin}`);
    const d = "http://127.0.0.1:8000/api/rutas/"
    return await axios(`${d}${distritoId}${comodin}`)
}


//export const AuthContext = createContext()

/*export function AuthContextProvider({children}){
    const [isAuthtentificated ,setIsAuthtentificated  ] = useState(window.localStorage.getItem(MY_AUTH_APP)) ?? false

    const login = useCallback(function(){
        window.localStorage.setItem(MY_AUTH_APP , true);
        setIsAuthtentificated(true)
    },[])
    

    const logout = useCallback(function(){
        window.localStorage.removeItem(MY_AUTH_APP , true);
        setIsAuthtentificated(false)
    },[])

    const value =useMemo(
        ()=>({
            login,
            logout,
            isAuthtentificated
        }),
        [login, logout,isAuthtentificated]
    );
    return<AuthContext.Provider value={value}></AuthContext.Provider>
}

AuthContextProvider.prototype = {
    children:PropTypes.object
}*/

