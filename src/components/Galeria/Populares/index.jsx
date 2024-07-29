import { styled } from "styled-components";
import Titulo from "../../Titulo"; // Importa el componente de título
import fotos from './fotos-populares.json'; // Importa el archivo JSON con las fotos populares

// Estilo para la columna de fotos populares
const ColumnaFotos = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;

    
`;

// Estilo para la imagen de cada foto popular
const Imagen = styled.img`
    max-width: 212px;
    border-radius: 20px;
`;

// Estilo para el botón "Ver más"
const Boton = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;
`;

const Populares__container = styled.section`
    width: 30%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    @media (max-width: 599px){
        width: 100%;
    }
`

// Componente funcional Populares
const Populares = () => {
    return (
        <Populares__container>
            {/* Título centrado para la sección de populares */}
            <Titulo $align='center'>Populares</Titulo>

            {/* Contenedor de columna para las fotos */}
            <ColumnaFotos>
                {/* Mapeo de las fotos populares desde el archivo JSON */}
                {fotos.map(foto => (
                    <Imagen key={foto.id} src={foto.path} alt={foto.alt} />
                ))}
            </ColumnaFotos>

            {/* Botón "Ver más" al final de la sección */}
            <Boton>Ver más</Boton>
        </Populares__container>
    );
};

export default Populares;