import styled from "styled-components";
import ItemNavegacion from "./ItemNavegacion";
import { useGlobalContext } from "../../context/GlobalContext";

// Estilo para la lista no ordenada (ul) que contiene los elementos de navegación
const ListaEstilizada = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 236px; 
  display: flex; 
  flex-direction: column; 
  gap: 40px; 
  padding: 0 20px; 
  box-sizing: border-box;


  @media (min-width: 600px) and (max-width: 1199px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 5px;
    
  }


  @media (max-width: 599px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 5px;
    font-size: 25px;
    padding: 0 20px;
    box-sizing: border-box;
  }


`;


const BarraLateral = () => {
    // Obtiene el estado 'activo' y la función 'handleClick' desde el contexto global.
    const { activo, handleClick } = useGlobalContext();

    return (
        <aside>
            <nav>
                {/* Lista de navegación estilizada */}
                <ListaEstilizada>
                    {/* Primer item de navegación - 'Inicio' */}
                    <ItemNavegacion
                        iconoActivo="/iconos/home-activo.png"  // Icono activo para la opción 'Inicio'
                        iconoInactivo="/iconos/home-inactivo.png"  // Icono inactivo para la opción 'Inicio'
                        activo={activo === 'inicio'}  // Verifica si 'inicio' es el estado activo
                        onClick={() => handleClick('inicio')}  // Al hacer clic, cambia el estado a 'inicio'
                        style={{ cursor: 'pointer' }}  // Establece el cursor como puntero al pasar por encima
                    >
                        <section>Inicio</section>  {/* Texto que se muestra en este item de navegación */}
                    </ItemNavegacion>
                    {/* Segundo item de navegación - 'Más vistas' */}
                    <ItemNavegacion
                        iconoActivo="/iconos/mas-vistas-activo.png"
                        iconoInactivo="/iconos/mas-vistas-inactivo.png"
                        activo={activo === 'masVistas'}  // Verifica si 'masVistas' es el estado activo
                        onClick={() => handleClick('masVistas')}
                        style={{ cursor: 'pointer' }}
                    >
                        <section>Más vistas</section>
                    </ItemNavegacion>
                    {/* Tercer item de navegación - 'Más Me Gusta' */}
                    <ItemNavegacion
                        iconoActivo="/iconos/me-gusta-activo.png"
                        iconoInactivo="/iconos/me-gusta-inactivo.png"
                        activo={activo === 'meGusta'}  // Verifica si 'meGusta' es el estado activo
                        onClick={() => handleClick('meGusta')}
                        style={{ cursor: 'pointer' }}
                    >
                        <section>Más Me Gusta</section>
                    </ItemNavegacion>
                    {/* Cuarto item de navegación - 'Nuevas' */}
                    <ItemNavegacion
                        iconoActivo="/iconos/nuevas-activo.png"
                        iconoInactivo="/iconos/nuevas-inactivo.png"
                        activo={activo === 'nuevas'}  // Verifica si 'nuevas' es el estado activo
                        onClick={() => handleClick('nuevas')}
                        style={{ cursor: 'pointer' }}
                    >
                        <section>Nuevas</section>
                    </ItemNavegacion>
                    {/* Quinto item de navegación - 'Sorpréndeme' */}
                    <ItemNavegacion
                        iconoActivo="/iconos/sorprendeme-activo.png"
                        iconoInactivo="/iconos/sorprendeme-inactivo.png"
                        activo={activo === 'sorprendeme'}  // Verifica si 'sorprendeme' es el estado activo
                        onClick={() => handleClick('sorprendeme')}
                        style={{ cursor: 'pointer' }}
                    >
                        <section>Sorpréndeme</section>
                    </ItemNavegacion>
                </ListaEstilizada>
            </nav>
        </aside>
    );
};

export default BarraLateral;