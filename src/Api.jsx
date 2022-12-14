

import React from 'react';

class Api extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            valores:false,
            distritosare:[ ]
         }
    }
  
    /*mode: 'no-cors',
            method: 'POST', */
    cargarDatos(){
        fetch("https://rickandmortyapi.com/api/character/471")
        .then(respuesta => respuesta.json())

        .then((datosRespuesta)=> {
            console.log(datosRespuesta);
            this.setState({valores:true ,distritosare: datosRespuesta})
            console.log(distritosare)
        })
    
        .catch(console.log(React.version))

    }

   componentDidMount(){
        this.cargarDatos();

    }

    render() { 

        const{valores , distritosare}= this.state
        if(!valores){ return (<div>Cargando...</div>);}
        else{
       
            return (<table className="table">
                <thead>
                    <tr>
                        <th>IdDistrito</th>
                        <th>Nombre</th>
                        
                    </tr>
                </thead>
                <tbody>

                    {distritosare.map(
                        (x)=>(

                            <tr key = {x._id} >
                            <td >{x._id}</td>
                            <td>{x.name}</td>
                            
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
        }

    
}
 
export default Api;