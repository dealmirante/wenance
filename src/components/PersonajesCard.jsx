import React from 'react';
import { useDispatch } from 'react-redux';

import { borrarPersonaje } from '../redux/apiDucks';


export const PersonajesCard = ({    
    name,
    gender,
    height,
    
}) => {

    const dispatch = useDispatch()

    const handleDelete = () => {
        //console.log(name);
        
        dispatch(borrarPersonaje(name));
    }    

    return (    
               

        <div className="card ms-3" style={{maxWidth:540}}>                        
            <div className="row no-gutters"> 
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title"> {name} </h5>
                        <p className="card-text">Gender: {gender}</p>
                        <p className="card-text">Height: {height}</p>    

                        <button  
                            className="btn btn-danger"
                            onClick = {handleDelete}> Eliminar
                        </button>  
                    </div>
                </div>         
            </div>
        </div>
        
    )

}
