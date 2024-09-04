import styled from "styled-components";
import Titulo from "../Titulo";
import Populares from "./Populares";
import Tag from "./Tags";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import Cargando from "../Cargando";
import MostrarFotos from "./mostrarfotos";

// Contenedor principal de la galería con estilos
const GaleriaContainer = styled.div`
    width: 100%;
    display: flex;
    box-sizing: border-box;

    @media (max-width: 599px){
        flex-direction: column;
    }
`;

// Sección fluida que ocupa todo el espacio restante
const SeccionFluida = styled.section`
width: 100%;

`;

// Contenedor de imágenes con estilos
const ImagenesContainer = styled.section`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    box-sizing: border-box;

`;

// Componente funcional Galeria
const Galeria = () => {

    const { state } = useContext(GlobalContext);

    return (
        // Muestra un componente de carga si no hay fotos disponibles
        state.fotosDeGaleria.length === 0 ? (
            <Cargando />
        ) : (
            <>
                {/* Componente Tag para mostrar etiquetas */}
                <Tag />
                {/* Contenedor principal de la galería */}
                <GaleriaContainer>
                    {/* Sección fluida que ocupa el espacio restante */}
                    <SeccionFluida>
                        {/* Título de la galería */}
                        <Titulo>Navegue por la galería</Titulo>
                        {/* Contenedor de imágenes */}
                        <ImagenesContainer>
                            <MostrarFotos />
                        </ImagenesContainer>
                    </SeccionFluida>
                    {/* Componente Populares para mostrar las fotos más populares */}
                    <Populares />
                </GaleriaContainer>
            </>
        )
    );
};

export default Galeria;