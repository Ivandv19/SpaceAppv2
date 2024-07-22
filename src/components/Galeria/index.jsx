import styled from "styled-components";
import Titulo from "../Titulo";
import Populares from "./Populares";
import Tag from "./Tags";
import Imagen from "./Imagen";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import Cargando from "../Cargando";

// Contenedor principal de la galería con estilos
const GaleriaContainer = styled.div`
    display: flex;
    gap: 24px;
`;

// Sección fluida que ocupa todo el espacio restante
const SeccionFluida = styled.section`
    flex-grow: 1;
`;

// Contenedor de imágenes con estilos
const ImagenesContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`;

// Componente funcional Galeria
const Galeria = () => {
    // Accede al estado global utilizando el contexto
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
                            {/* Filtra y mapea las fotos según la consulta de búsqueda */}
                            {state.fotosDeGaleria
                                .filter((foto) => {
                                    // Filtra las fotos según la consulta de búsqueda
                                    // Normaliza y elimina diacríticos para una búsqueda insensible a mayúsculas y minúsculas
                                    const normalizedConsulta = state.consulta
                                        .toLocaleLowerCase()
                                        .normalize("NFD")
                                        .replace(/\p{Diacritic}/gu, "");

                                    const normalizedTitulo = foto.titulo
                                        .toLocaleLowerCase()
                                        .normalize("NFD")
                                        .replace(/\p{Diacritic}/gu, "");

                                    return (
                                        state.consulta === "" ||
                                        normalizedTitulo.includes(normalizedConsulta)
                                    );
                                })
                                .map((foto) => (
                                    // Componente Imagen que muestra cada foto
                                    <Imagen key={foto.id} foto={foto} />
                                ))}
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