import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { obtenerPersonajesAccion, siguientePersonajes } from '../redux/apiDucks';
import {PersonajesCard} from './PersonajesCard';

export const Personajes = () => {    

    const dispatch = useDispatch();

    const personajes = useSelector(store => store.Personajes.array);        
    
    const handleNext = () => {
        dispatch(siguientePersonajes());
    };

    useEffect(() => {
        dispatch(obtenerPersonajesAccion());          
    }, [dispatch])

    return (
        <div className='container'>
            <h3> Listado de Personajes  </h3>           
            {
                personajes.map( item => (
                    <PersonajesCard 
                        key={ item.name }
                        { ...item }
                    />
                ))                    
            }            
            <button 
                className='btn btn-primary'
                onClick={handleNext}> Siguiente               
            </button>

        </div>
    )
}
