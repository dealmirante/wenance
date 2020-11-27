import axios from 'axios'

// constantes
const InitialState = {
    array: [],
    page: 1
}

//types
const OBTENER_PERSONAJES = 'OBTENER_PERSONAJES';
const SIGUIENTE_PERSONAJES = 'SIGUIENTE_PERSONAJES';
const BORRAR_PERSONAJES = 'BORRAR_PERSONAJES';
const BUSCAR_PERSONAJES = 'BUSCAR_PERSONAJES';

// reducer
export default function apiReducer(state = InitialState, action) {
    switch (action.type) {
        case OBTENER_PERSONAJES:
            
            return {...state, 
                array: action.payload
            }

        case SIGUIENTE_PERSONAJES:

            return {...state, 
                array: action.payload.array, 
                page: action.payload.page
            }
    
        case BORRAR_PERSONAJES:

            return {
                ...state,                  
                array: action.payload.array
                
            }
        case BUSCAR_PERSONAJES:
            
            return {
                ...state,
                array: action.payload.array
            }
            
        
        default:
            return state;
    }
}


// acciones
export const obtenerPersonajesAccion = () => async (dispatch, getState) => {

    const page = getState().Personajes.page;

    try {
        const res = await axios.get(`https://swapi.dev/api/people/?page=${page}`);
        dispatch({
            type: OBTENER_PERSONAJES,
            payload: res.data.results
        })

    } catch(error) {
        console.log(error);
    }

}

export const siguientePersonajes = () => async (dispatch, getState) => {
    
    const page = getState().Personajes.page;
    const siguiente = page + 1;

    try {

        const res = await axios.get(`https://swapi.dev/api/people/?page=${siguiente}`);
        dispatch({
            type: SIGUIENTE_PERSONAJES,
            payload : {
                array: res.data.results,
                page: siguiente
            }
        })
        
    } catch (error) {
        console.log(error);
        
    }

}

export const borrarPersonaje = (name) => async(dispatch, getState) => {

    const array1 = getState().Personajes.array;    
    const array2= array1.filter(item => item.name !== name);    

    try {
            
        dispatch({
            type: BORRAR_PERSONAJES,
            payload: {
               array: array2               
            }
        })
        
    } catch (error) {
        console.log(error)
        
    }

}

export const buscarPersonaje = (name) => async(dispatch, getState) => {

    
    //console.log('name parametro', name);
    const array1 = getState().Personajes.array;    
    //console.log('array1', array1);
    //console.log('apiDucks',name);
    //const array2= array1.filter (item => item.name.toLowerCase() === name.toLowerCase()); 

    const array2 = array1.filter(element => element.name.toLowerCase().includes(name));
    

    //console.log('array2', array2);

    try {
            
        dispatch({
            type: BUSCAR_PERSONAJES,
            payload: {
               array: array2               
            }
        })
        
    } catch (error) {
        console.log(error)
        
    }

}