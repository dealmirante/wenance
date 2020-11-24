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