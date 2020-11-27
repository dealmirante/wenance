import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { obtenerPersonajesAccion, siguientePersonajes } from '../redux/apiDucks';
import {PersonajesCard} from './PersonajesCard';
import { Search } from './Search';

export const Personajes = () => {    

    const [loading, setloading] = useState(true);
    
    const dispatch = useDispatch();

    const personajes = useSelector(store => store.Personajes.array);        
    
    const handleNext = () => {
        dispatch(siguientePersonajes());
    };

    useEffect(() => {        
        
        dispatch(obtenerPersonajesAccion()); 
        setloading(false);

    }, [dispatch]);

    

    return (
        <>
            <div>
                <Search/>
                <hr />
            </div>
           
            {loading &&
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
               </div>            
            }

            
            <div className='card-columns'>                  
                
                {
                    personajes.map( item => (
                        <PersonajesCard 
                            key={ item.name }
                            { ...item }
                        />
                    ))                    
                }   

            </div>

            
            <div>
                <hr />
                <button 
                    className='btn btn-primary'
                    onClick={handleNext}> Siguiente               
                </button>
            </div>
        </>
    )
}
