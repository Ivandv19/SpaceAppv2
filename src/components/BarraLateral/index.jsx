import styled from "styled-components";
import ItemNavegacion from "./ItemNavegacion";

// Estilo para la lista no ordenada (ul) que contiene los elementos de navegación
const ListaEstilizada = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 236px; /* Ancho fijo para la barra lateral */

  @media (max-width: 599px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  /* Media query para tabletas */
  @media (min-width: 600px) and (max-width: 1199px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;



const BarraLateral = () => {
    return (
        <aside>
            <nav>
                {/* Lista de navegación estilizada */}
                <ListaEstilizada>
                    {/* Item de navegación para "Inicio" */}
                    <ItemNavegacion
                        iconoActivo="/iconos/home-activo.png"
                        iconoInactivo="/iconos/home-inactivo.png"
                        activo={true} // Propiedad para indicar que este item está activo
                    >
                        Inicio

                    </ItemNavegacion>
                    {/* Item de navegación para "Más vistas" */}
                    <ItemNavegacion
                        iconoActivo="/iconos/mas-vistas-activo.png"
                        iconoInactivo="/iconos/mas-vistas-inactivo.png"
                        activo={false} // Propiedad para indicar que este item está activo
                    >
                        Más vistas
                    </ItemNavegacion>
                    {/* Item de navegación para "Más Me Gusta" */}
                    <ItemNavegacion
                        iconoActivo="/iconos/me-gusta-activo.png"
                        iconoInactivo="/iconos/me-gusta-inactivo.png"
                        activo={false} // Propiedad para indicar que este item está activo
                    >
                        <p>Más Me Gusta</p>
                    </ItemNavegacion>
                    {/* Item de navegación para "Nuevas" */}
                    <ItemNavegacion
                        iconoActivo="/iconos/nuevas-activo.png"
                        iconoInactivo="/iconos/nuevas-inactivo.png"
                        activo={false} // Propiedad para indicar que este item está activo
                    >
                        <p>Nuevas</p>
                    </ItemNavegacion>
                    {/* Item de navegación para "Sorpréndeme" */}
                    <ItemNavegacion
                        iconoActivo="/iconos/sorprendeme-activo.png"
                        iconoInactivo="/iconos/sorprendeme-inactivo.png"
                        activo={false} // Propiedad para indicar que este item está activo
                    >
                        <p >Sorpréndeme</p>
                    </ItemNavegacion>
                </ListaEstilizada>
            </nav>
        </aside>
    );
};

export default BarraLateral;
