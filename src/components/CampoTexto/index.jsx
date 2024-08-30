import { useContext, useRef } from "react";
import { styled } from "styled-components";
import search from "./search.png";
import { GlobalContext } from "../../context/GlobalContext";

// Estilo para el contenedor principal del campo de texto
const ContainerEstilizado = styled.div`
  position: relative;
  display: inline-block;
  width: 566px;
  height: 50px;

  @media (max-width: 599px) {
    width: 100%;

}

/* Media query para tabletas */
@media (min-width: 600px) and (max-width: 1199px) {

width: 100%;
}
`;

// Estilo para el campo de texto
const CampoTextoEstilizado = styled.input`
 width: 100%;
 height: 100%;
  padding: 12px 40px;
  border-radius: 10px;
  border: 2px solid;
  border-color: #c98cf1;
  background: transparent;
  box-sizing: border-box;
  color: #d9d9d9;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  outline: none;

  @media (max-width: 599px) {
    width: 100%;
    padding: 10px;
    font-size: 16px;

}

/* Media query para tabletas */
@media (min-width: 600px) and (max-width: 1199px) {

width: 100%;
}
`;

// Estilo para el ícono de lupa
const IconoLupa = styled.img`
  position: absolute;
  top: 7px;
  right: 10px;
  width: 38px !important;
  height: 38px;
`;

const CampoTexto = () => {
    // Referencia al input del campo de texto
    const cajaConsulta = useRef(null);

    // Contexto global para manejar el estado global
    const { dispatch } = useContext(GlobalContext);

    return (
        <ContainerEstilizado>
            {/* Campo de texto estilizado con referencia */}
            <CampoTextoEstilizado
                ref={cajaConsulta}
                type="search"
                placeholder="¿Qué estás buscando?"

            />
            {/* Ícono de lupa para enviar la consulta */}
            <IconoLupa
                src={search}
                alt="ícono de lupa"
                onClick={() => {
                    // Envía la consulta al contexto global
                    dispatch({
                        type: "SET_CONSULTA",
                        payload: cajaConsulta.current.value,
                    });
                }}
            />
        </ContainerEstilizado>
    );
};

export default CampoTexto;
