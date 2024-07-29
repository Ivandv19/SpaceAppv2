import { styled } from "styled-components";
import BotonIcono from "../../BotonIcono"; // Importa el componente BotonIcono
import { useContext } from "react"; // Importa el hook useContext de React
import { GlobalContext } from "../../../context/GlobalContext"; // Importa el contexto global
import useFotoModal from "../../../hooks/useFotoModal"; // Importa el hook personalizado useFotoModal

// Estilos para la figura que contiene la imagen y su información
const Figure = styled.figure`
    width: ${props => props.$expandida ? '90%' : '370px'}; // Ancho condicional basado en la propiedad $expandida
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0; // Borde redondeado solo en la parte superior
    }
    figcaption {
        background-color: #001634; // Fondo del pie de figura en color azul oscuro
        border-radius: 0px 0px 20px 20px; // Borde redondeado solo en la parte inferior
        color: white; // Texto blanco en el pie de figura
        box-sizing: border-box;
        padding: 12px;
        h3 {
            font-family: 'GandhiSansBold'; // Estilo de fuente para el título
        }
        h4 {
            flex-grow: 1; // Ocupa todo el espacio disponible en el pie de figura
        }
        h3, h4 {
            margin: 0; // Sin márgenes para los títulos
            font-size: 16px; // Tamaño de fuente para los títulos
        }
    }

    
    @media (max-width: 599px){
        width: 100%;
    }
`;

// Estilos para el pie de la figura
const Pie = styled.footer`
    display: flex;
    justify-content: space-between; // Distribución espaciada uniformemente
    align-items: center; // Centra verticalmente los elementos
`;

// Componente funcional Imagen que muestra una imagen y su información asociada
const Imagen = ({ foto, expandida = false }) => {
    const { abrirModal } = useFotoModal(); // Utiliza el hook useFotoModal para abrir el modal
    const { dispatch } = useContext(GlobalContext); // Obtiene el dispatcher del contexto global
    const iconoFavorito = foto.favorita ? "/iconos/favorito-activo.png" : "/iconos/favorito.png"; // Determina el icono de favorito activo o inactivo

    return (
        <Figure $expandida={expandida} id={`foto-${foto.id}`}>
            {/* Imagen con src y alt */}
            <img src={foto.path} alt={foto.alt} />

            {/* Información adicional en el figcaption */}
            <figcaption>
                {/* Título de la imagen */}
                <h3>{foto.titulo}</h3>

                {/* Pie de figura con información adicional */}
                <Pie>
                    {/* Fuente de la imagen */}
                    <h4>{foto.fuente}</h4>

                    {/* Botón de favorito que alterna su estado */}
                    <BotonIcono onClick={() => dispatch({ type: 'ALTERNAR_FAVORITO', payload: foto })}>
                        <img src={iconoFavorito} alt="Ícono de favorito" />
                    </BotonIcono>

                    {/* Botón de expandir para abrir el modal con la imagen */}
                    {!expandida && (
                        <BotonIcono aria-hidden={expandida} onClick={() => abrirModal(foto)}>
                            <img src="/iconos/expandir.png" alt="Ícono de expandir" />
                        </BotonIcono>
                    )}
                </Pie>
            </figcaption>
        </Figure>
    );
};

export default Imagen;