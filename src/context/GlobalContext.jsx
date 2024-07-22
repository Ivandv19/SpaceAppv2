import { createContext, useEffect, useReducer } from "react";

// Creación del contexto global
export const GlobalContext = createContext();

// Estado inicial del contexto
const initialState = {
    consulta: '',               // Consulta para filtrar fotos
    fotosDeGaleria: [],         // Lista de fotos de la galería
    fotoSeleccionada: null,     // Foto seleccionada para mostrar en modal
    modalAbierto: false,        // Estado del modal (abierto/cerrado)
};

// Reductor para manejar cambios de estado
const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_CONSULTA':
            return { ...state, consulta: action.payload };
        case 'SET_FOTOS_DE_GALERIA':
            return { ...state, fotosDeGaleria: action.payload };
        case 'SET_FOTO_SELECCIONADA':
            return {
                ...state,
                fotoSeleccionada: action.payload,
                modalAbierto: action.payload !== null  // Modal abierto si hay una foto seleccionada
            };
        case 'ALTERNAR_FAVORITO':
            const fotosDeGaleria = state.fotosDeGaleria.map(fotoDeGaleria => {
                return {
                    ...fotoDeGaleria,
                    favorita: fotoDeGaleria.id === action.payload.id ? !action.payload.favorita : fotoDeGaleria.favorita
                };
            });
            if (action.payload.id === state.fotoSeleccionada?.id) {
                return {
                    ...state,
                    fotosDeGaleria: fotosDeGaleria,
                    fotoSeleccionada: {
                        ...state.fotoSeleccionada,
                        favorita: !state.fotoSeleccionada.favorita
                    }
                };
            } else {
                return {
                    ...state,
                    fotosDeGaleria: fotosDeGaleria
                };
            }
        default:
            return state;
    }
};

// Proveedor del contexto global
const GlobalContextProvider = ({ children }) => {
    // Uso del useReducer para gestionar el estado global con el reductor definido
    const [state, dispatch] = useReducer(reducer, initialState);

    // Efecto para cargar datos iniciales de la galería desde una API simulada
    useEffect(() => {
        const getData = async () => {
            const res = await fetch('http://localhost:3000/fotos');
            const data = await res.json();
            dispatch({ type: 'SET_FOTOS_DE_GALERIA', payload: data });
        };

        setTimeout(() => getData(), 3000); // Simulación de carga de datos con delay de 1 segundos
    }, []); // Se ejecuta solo al montar el componente inicialmente

    // Renderizado del proveedor del contexto global con el estado y funciones de dispatch disponibles
    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContextProvider;