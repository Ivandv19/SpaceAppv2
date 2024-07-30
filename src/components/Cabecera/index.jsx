import styled from "styled-components";
import CampoTexto from "../CampoTexto";

// Estilo para el encabezado
const HeaderEstilizado = styled.header`
    width: 100%;
    padding: 30px 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    top: 0;
    box-sizing: border-box;
    background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
    img {
        width: 212px; /* Estilo específico para la imagen del logo */
    }

    @media (max-width: 599px) {
        flex-direction: column;
        align-items: center;
        padding: 10px 20px 20px 20px;
    
  }

  /* Media query para tabletas */
  @media (min-width: 600px) and (max-width: 1199px) {

    justify-content: space-between;
    gap: 50px;
 
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