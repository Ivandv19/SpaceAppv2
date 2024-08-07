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

  /* Media query para tabletas */

`;



const BarraLateral = () => {

    const { activo, handleClick } = useGlobalContext();

    return (
        <aside>
            <nav>
                <ListaEstilizada>
                    <ItemNavegacion
                        iconoActivo="/iconos/home-activo.png"
                        iconoInactivo="/iconos/home-inactivo.png"
                        activo={activo === 'inicio'}
                        onClick={() => handleClick('inicio')}
                        style={{ cursor: 'pointer' }}
                    >
                        <section>Inicio</section>
                    </ItemNavegacion>
                    <ItemNavegacion
                        iconoActivo="/iconos/mas-vistas-activo.png"
                        iconoInactivo="/iconos/mas-vistas-inactivo.png"
                        activo={activo === 'masVistas'}
                        onClick={() => handleClick('masVistas')}
                        style={{ cursor: 'pointer' }}
                    >
                        <section>Más vistas</section>
                    </ItemNavegacion>
                    <ItemNavegacion
                        iconoActivo="/iconos/me-gusta-activo.png"
                        iconoInactivo="/iconos/me-gusta-inactivo.png"
                        activo={activo === 'meGusta'}
                        onClick={() => handleClick('meGusta')}
                        style={{ cursor: 'pointer' }}
                    >
                        <section>Más Me Gusta</section>
                    </ItemNavegacion>
                    <ItemNavegacion
                        iconoActivo="/iconos/nuevas-activo.png"
                        iconoInactivo="/iconos/nuevas-inactivo.png"
                        activo={activo === 'nuevas'}
                        onClick={() => handleClick('nuevas')}
                        style={{ cursor: 'pointer' }}
                    >
                        <section>Nuevas</section>
                    </ItemNavegacion>
                    <ItemNavegacion
                        iconoActivo="/iconos/sorprendeme-activo.png"
                        iconoInactivo="/iconos/sorprendeme-inactivo.png"
                        activo={activo === 'sorprendeme'}
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