import { createContext, useContext, useEffect, useReducer, useState } from "react";

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
        // Acción para actualizar la consulta
        case 'SET_CONSULTA':
            return { ...state, consulta: action.payload };

        // Acción para actualizar las fotos de la galería
        case 'SET_FOTOS_DE_GALERIA':
            return { ...state, fotosDeGaleria: action.payload };

        // Acción para actualizar la foto seleccionada y el estado del modal
        case 'SET_FOTO_SELECCIONADA':
            return {
                ...state,
                fotoSeleccionada: action.payload,  // Actualiza la foto seleccionada
                modalAbierto: action.payload !== null  // Abre el modal si hay una foto seleccionada
            };

        // Acción para alternar el estado de favorito de una foto
        case 'ALTERNAR_FAVORITO':
            const fotosDeGaleria = state.fotosDeGaleria.map(fotoDeGaleria => {
                return {
                    ...fotoDeGaleria, // Copia todas las propiedades de la foto de la galería.
                    favorita: fotoDeGaleria.id === action.payload.id
                        ? !action.payload.favorita // Si el ID de la foto coincide con el ID que se pasa en la acción, alterna el estado "favorita".
                        : fotoDeGaleria.favorita // Si no coincide, mantiene el estado de "favorita" tal como está.
                };
            });

            // Si la foto seleccionada es la misma que la foto que se marcó como favorita, también se actualiza
            if (action.payload.id === state.fotoSeleccionada?.id) {
                return {
                    ...state, // Copia todo el estado actual
                    fotosDeGaleria: fotosDeGaleria, // Actualiza las fotos de la galería (ya modificadas por la lógica anterior)
                    fotoSeleccionada: {
                        ...state.fotoSeleccionada, // Copia la foto seleccionada actual
                        favorita: !state.fotoSeleccionada.favorita  // Alterna el estado de "favorita"
                    }
                };
            } else {
                return {
                    ...state, // Copia todo el estado actual
                    fotosDeGaleria: fotosDeGaleria  // Solo actualiza las fotos de la galería
                };
            }

        // Si no coincide con ningún tipo de acción, devuelve el estado sin cambios
        default:
            return state;
    }
};

// Proveedor del contexto global
const GlobalContextProvider = ({ children }) => {

    // Estado para gestionar la sección de navegación activa
    const [activo, setActivo] = useState("inicio");

    // Función para manejar el clic en un ítem de navegación
    const handleClick = (itemId) => {
        setActivo(itemId); // Actualiza el estado con el ID del item clickeado
    };

    // Estado para el tag seleccionado
    const [tagSeleccionado, setTagSeleccionado] = useState(0);

    // Estado para almacenar todos los tags obtenidos de la API
    const [tags, setTags] = useState([]);

    // Función para obtener los tags desde la API
    const obtenerTags = async () => {
        // Hacemos una petición a la API para obtener los tags
        const response = await fetch('https://my-json-server.typicode.com/IvandevI9/api_tags_spaceappv2/Tags');
        const data = await response.json(); // Convertimos la respuesta a JSON
        setTags(data); // Actualizamos el estado con los tags obtenidos
    };

    // Este useEffect se ejecuta solo una vez al montar el componente
    useEffect(() => {
        obtenerTags(); // Llamamos a la función para obtener los tags
    }, []); // La lista de dependencias está vacía, por lo que solo se ejecuta al montar el componente

    // Función para manejar el clic en un tag
    const handleClickTag = async (id) => {
        // Si el id del tag clickeado es el mismo que el tagSeleccionado, lo deselecciona (pone en null)
        // Si no, lo selecciona
        setTagSeleccionado(prevId => (prevId === id ? null : id));
    };

    // Estado para los videos que corresponden al tag seleccionado
    const [videosEnTag, setVideosEnTag] = useState([]);

    // Función para filtrar los videos que corresponden al tag seleccionado
    const filtrarVideosPorTag = () => {
        const videosFiltrados = state.fotosDeGaleria.filter((foto) => foto.tagId === tagSeleccionado);
        setVideosEnTag(videosFiltrados); // Actualizamos el estado con los videos filtrados
    };

    // Este useEffect se ejecuta cada vez que cambia el tag seleccionado
    useEffect(() => {
        filtrarVideosPorTag(); // Filtra los videos según el tag seleccionado
    }, [tagSeleccionado]); // Dependencia de tagSeleccionado para ejecutar esta función cuando cambie


    // Uso del useReducer para gestionar el estado global con el reductor definido
    const [state, dispatch] = useReducer(reducer, initialState);

    // Efecto para cargar datos iniciales de la galería desde una API simulada
    useEffect(() => {
        const getData = async () => {
            const res = await fetch('https://my-json-server.typicode.com/Ivanmx19/api_fotos_spaceapp2/fotos');
            const data = await res.json();
            dispatch({ type: 'SET_FOTOS_DE_GALERIA', payload: data });
        };

        setTimeout(() => getData(), 1000); // Simulación de carga de datos con delay de 1 segundos
    }, []); // Se ejecuta solo al montar el componente inicialmente

    // Renderizado del proveedor del contexto global con el estado y funciones de dispatch disponibles
    return (
        <GlobalContext.Provider value={{ state, dispatch, activo, handleClick, tags, handleClickTag, tagSeleccionado, videosEnTag }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContextProvider;

// Hook personalizado para consumir el contexto global
export const useGlobalContext = () => {
    return useContext(GlobalContext);
};