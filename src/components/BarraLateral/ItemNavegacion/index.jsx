import styled from "styled-components";

// Estilo para el elemento de lista (li) de la barra de navegación
const ItemListaEstilizado = styled.li`
    font-size: 24px;
    margin-bottom: 30px;
    line-height: 28px;
    display: flex;
    align-items: center;
    gap: 16px; /* Espacio entre el icono y el texto */
    color: ${props => (props.$activo ? "#7B78E5" : "#D9D9D9")}; /* Color del texto según esté activo o no */
    font-family: ${props => (props.$activo ? "GandhiSansBold" : "GandhiSansRegular")}; /* Familia de fuente según esté activo o no */

    
`;



const ItemNavegacion = ({ children, iconoActivo, iconoInactivo, activo = false }) => {
    return (
        <ItemListaEstilizado $activo={activo}>
            <img src={activo ? iconoActivo : iconoInactivo} alt="Icono de navegación" />
            {children} {/* Texto descriptivo del ítem de navegación */}
        </ItemListaEstilizado>
    );
};

export default ItemNavegacion;