

import React from 'react';

class Listar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            valores:false,
            a:[ ]
         }
    }
  
    /*mode: 'no-cors',
            method: 'POST', */
    cargarDatos(){
        fetch("http://127.0.0.1:8000/api/distritos/")
        .then(respuesta => respuesta.json())

        .then((datosRespuesta)=> {
            console.log(datosRespuesta);
            this.setState({valores:true ,a: datosRespuesta})
            console.log(a)
        })
    
        .catch(console.log(React.version))

    }

   componentDidMount(){
        this.cargarDatos();

    }

    render() { 
        const {valores ,a }= this.state

        return (<table className="table">
                <thead>
                    <tr>
                        <th>IdDistrito</th>
                        <th>Nombre</th>
                        
                    </tr>
                </thead>
                <tbody>

                    {a.map(
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

    
}
 
export default Listar;