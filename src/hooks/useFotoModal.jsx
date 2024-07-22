import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

// Hook personalizado para manejar la lógica del modal de imagen
function useFotoModal() {
    // Obtener el estado y el dispatch del contexto global
    const { state, dispatch } = useContext(GlobalContext);

    // Función para abrir el modal con una foto específica
    const abrirModal = (foto) => {
        dispatch({ type: 'SET_FOTO_SELECCIONADA', payload: foto });
    };

    // Función para cerrar el modal
    const cerrarModal = () => {
        dispatch({ type: 'SET_FOTO_SELECCIONADA', payload: null });
    };

    // Obtener la foto seleccionada del estado global
    const fotoSeleccionada = state.fotoSeleccionada;

    // Determinar si el modal está abierto
    const estaAbiertoModal = !!state.fotoSeleccionada;

    // Retornar objetos y funciones necesarias para manejar el modal
    return { fotoSeleccionada, estaAbiertoModal, abrirModal, cerrarModal };
}

export default useFotoModal;