import { styled } from 'styled-components';

import { useEffect, useState } from 'react';

// Contenedor principal de los tags con estilos
const TagsContainer = styled.section`
    display: flex;
    align-items: center;
    gap: 64px;
    margin: 25px 0;


    @media (min-width: 600px) and (max-width: 1199px) {
        flex-wrap: wrap;
    }

    @media (max-width: 599px) {
        gap: 5px;
        flex-direction: column;
    }


`;

// Título de la sección de tags con estilos
const TagTitulo = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
`;

// Estilo del botón de tag
const Tag = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    border-color: ${(props) => (props.selected ? '#C98CF1' : 'transparent')}; 
    
`;

// Contenedor div para los tags
const Div = styled.div`
    display: flex;
    gap: 24px;
    justify-content: end;

    @media (min-width: 600px) and (max-width: 1199px) {
        width: 100%;
        justify-content: space-evenly;
    }

    @media (max-width: 599px){
        width: 100%;
        gap: 10px;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        align-self: center;
    }
`;

// Componente funcional Tags
const Tags = () => {
    // Estado para el tag seleccionado
    const [tagSeleccionado, setTagSeleccionado] = useState(0);
    // Estado para los tags
    const [tags, setTags] = useState([]);

    const obtenerTags = async () => {

        // Petición a la API para obtener los tags
        const response = await fetch('https://my-json-server.typicode.com/IvandevI9/api_tags_spaceappv2/Tags');
        const data = await response.json();
        setTags(data);
    }

    useEffect(() => {
        obtenerTags();
       
    },[]);

    // Función para manejar el click en un tag
    const handleClick = async (id) => {
        setTagSeleccionado(id);
        console.log(tagSeleccionado);
    }

    
    return (
        <TagsContainer>
            {/* Título de la sección de tags */}
            <TagTitulo>Busque por tags:</TagTitulo>

            {/* Div contenedor de los tags */}
            <Div>
                {/* Mapeo de los tags desde el archivo JSON */}
                {tags.map(tag => (
                    <Tag key={tag.id} onClick={() => handleClick(tag.id)} selected={tag.id === tagSeleccionado}>{tag.titulo}</Tag>
                ))}
            </Div>
        </TagsContainer>
    );
};

export default Tags;