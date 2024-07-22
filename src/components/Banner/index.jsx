import { styled } from "styled-components";

// Estilo para el contenedor de la figura del banner
const FigureEstilizada = styled.figure`
    background-image: ${props => `url(${props.$backgroundImage})`}; /* Imagen de fondo del banner */
    flex-grow: 1; /* Permitir que crezca dentro de su contenedor */
    background-repeat: no-repeat; /* No repetir la imagen de fondo */
    display: flex; /* Mostrar como flexbox para alinear elementos */
    align-items: center; /* Centrar verticalmente los elementos */
    min-height: 328px; /* Altura mínima del banner */
    margin: 0; /* Eliminar márgenes */
    border-radius: 20px; /* Borde redondeado */
    max-width: 100%; /* Ancho máximo del 100% */
    background-size: cover; /* Ajustar el tamaño de la imagen de fondo */
`;

// Estilo para el título del banner
const TituloEstilizado = styled.h1`
    font-weight: 400; /* Peso de la fuente */
    font-size: 40px; /* Tamaño de la fuente */
    line-height: 48px; /* Altura de línea */
    color: #FFFFFF; /* Color del texto */
    max-width: 300px; /* Ancho máximo del título */
    padding: 0 64px; /* Relleno horizontal */
`;

// Componente funcional Banner que muestra un título sobre una imagen de fondo
const Banner = ({ texto, backgroundImage }) => {
    return (
        <FigureEstilizada $backgroundImage={backgroundImage}>
            <TituloEstilizado>{texto}</TituloEstilizado> {/* Texto del título del banner */}
        </FigureEstilizada>
    );
};

export default Banner;