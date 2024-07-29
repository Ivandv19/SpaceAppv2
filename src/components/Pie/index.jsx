import { styled } from 'styled-components';

// Componente estilizado para el pie de página
const PieEstilizado = styled.footer`
    display: flex;
   flex-direction: column-reverse;
   gap: 20px;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-top: 100px;
    background-color: #04244F;
    padding: 50px;
    box-sizing: border-box;
`;

// Contenedor de íconos de redes sociales
const IconoContainer = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    li {
        display: inline-block;
        margin-right: 32px;
    }
`;

// Estilo para el texto del pie de página
const PieTexto = styled.p`
    font-size: 16px;
    color: white;
    margin: 0;
    text-align: center;
`;

// Componente funcional Pie
const Pie = () => {
    return (
        <PieEstilizado>
            <IconoContainer>
                <li>
                    <a href="#">
                        <img src="/img/redes/facebook.svg" alt="Facebook" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/img/redes/twitter.svg" alt="Twitter" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/img/redes/instagram.svg" alt="Instagram" />
                    </a>
                </li>
            </IconoContainer>
            <PieTexto>Creado por Ivan Cruz - 2024 🇲🇽 <br /> Estudiante ONE (G6) - Oracle Next Education </PieTexto>
        </PieEstilizado>
    );
}

export default Pie;
