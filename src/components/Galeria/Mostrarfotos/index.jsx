import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import Imagen from "../Imagen";
import styled from "styled-components";



const P = styled.p`
    font-size: 16px;
    color: red;
    margin: 50px auto;
`



const MostrarFotos = () => {

    // Accede al estado global utilizando el contexto
    const { state, tagSeleccionado, videosEnTag } = useContext(GlobalContext);

    // Función para filtrar fotos según la consulta de búsqueda
    const filtrarFotos = (fotos) => {
        const normalizedConsulta = state.consulta
            .toLocaleLowerCase()
            .normalize("NFD")
            .replace(/\p{Diacritic}/gu, "");

        return fotos.filter(foto => {
            const normalizedTitulo = foto.titulo
                .toLocaleLowerCase()
                .normalize("NFD")
                .replace(/\p{Diacritic}/gu, "");
            return state.consulta === "" || normalizedTitulo.includes(normalizedConsulta);
        });
    };

    // Determina qué fotos mostrar según si hay un tag seleccionado o no
    const fotosAmostrar = tagSeleccionado ? videosEnTag : state.fotosDeGaleria;
    // Filtra las fotos a mostrar
    const fotosFiltradas = filtrarFotos(fotosAmostrar);

    return (
        <>
            {fotosFiltradas.length > 0 ? (
                fotosFiltradas.map((foto) => (
                    <Imagen key={foto.id} foto={foto} />
                ))
            ) : (
                <P>No se encontraron fotos.</P>
            )}
        </>
    );
}

export default MostrarFotos;