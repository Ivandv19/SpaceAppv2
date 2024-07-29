import styled from "styled-components";

// Componente estilizado para el título
const Titulo = styled.h2`
    font-size: 32px;                // Tamaño de fuente
    color: #7B78E5;                 // Color del texto
    text-align: ${props => props.$align ? props.$align : "left"};  // Alineación del texto (izquierda por defecto)
    text-align: center;
`;

export default Titulo;