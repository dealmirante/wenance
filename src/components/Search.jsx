import React from 'react';
import { useDispatch } from 'react-redux';
import {useForm} from '../Hooks/useForm';  
import { buscarPersonaje } from '../redux/apiDucks';

export const Search = () => {

    const [formValues, handleInputChange] = useForm({
        texto:''
        
    });
    
    const dispatch = useDispatch();
    
    const {texto} = formValues;

    const handleRegister = (e) => {
        e.preventDefault();  
        //console.log(texto)      

        if ( isFormValid() ) {
            dispatch(buscarPersonaje(texto));
        }

    }

    const isFormValid = () => {
        
        if ( texto.trim().length === 0 ) {            
            return false;
        } 
       return true;
    }

    return (
        <>
            
            <h3> Listado de Personajes </h3>

            <div className="col-4">

                <form onSubmit={handleRegister}>

                    <input 
                            type="text"
                            placeholder="Buscar"
                            name="texto"
                            className="form-control"
                            autoComplete="off"                    
                            value={ texto }
                            onChange={ handleInputChange }
                        />

                        <button
                            type="submit"       
                            className="btn m-1 btn-block btn-outline-primary"                         
                        >
                            Search
                        </button>

                </form>


            </div>
            
        </>
    )
}
