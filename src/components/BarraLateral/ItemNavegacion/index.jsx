import styled from "styled-components";

// Estilo para el elemento de lista (li) de la barra de navegación
const ItemListaEstilizado = styled.li`
  height: auto;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  gap: 16px; /* Espacio entre el icono y el texto */
  color: ${(props) =>
    props.$activo
      ? "#7B78E5"
      : "#D9D9D9"}; /* Color del texto según esté activo o no */
  font-family: ${(props) =>
    props.$activo
      ? "GandhiSansBold"
      : "GandhiSansRegular"}; /* Familia de fuente según esté activo o no */

  @media (max-width: 599px) {
    gap: 10px;
    flex-direction: column;
    justify-content: space-between;
  }

  @media (min-width: 600px) and (max-width: 1199px) {
    gap: 5px;
  }
`;

const Seccion = styled.div`
  @media (max-width: 599px) {
    display: ${(props) => (props.$activo ? "block" : "none")};
    font-size: 22px;
  }
`;

const ItemNavegacion = ({
  children,
  iconoActivo,
  iconoInactivo,
  activo,
  onClick,
}) => {
  return (
    <ItemListaEstilizado $activo={activo} onClick={onClick}>
      {/* Renderiza el ícono activo o inactivo dependiendo del estado 'activo'. */}
      <img
        src={activo ? iconoActivo : iconoInactivo}
        alt="Icono de navegación"
      />
      {/* Renderiza la sección con el texto (children) dentro, aplicando estilo según el estado 'activo'. */}
      <Seccion $activo={activo}>{children}</Seccion>
    </ItemListaEstilizado>
  );
};

export default ItemNavegacion;
