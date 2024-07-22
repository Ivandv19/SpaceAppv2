import styled from "styled-components";
import CampoTexto from "../CampoTexto";

// Estilo para el encabezado
const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    
    img {
        width: 212px; /* Estilo específico para la imagen del logo */
    }
`;

const Cabecera = () => {
    return (
        <HeaderEstilizado>
            {/* Imagen del logo */}
            <img src="img/logo.png" alt="Logo de Space App" />
            {/* Componente del campo de texto para búsqueda */}
            <CampoTexto />
        </HeaderEstilizado>
    );
};

export default Cabecera;