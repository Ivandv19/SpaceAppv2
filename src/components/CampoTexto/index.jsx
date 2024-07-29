import { useContext, useRef } from "react";
import { styled } from "styled-components";
import search from "./search.png";
import { GlobalContext } from "../../context/GlobalContext";

// Estilo para el contenedor principal del campo de texto
const ContainerEstilizado = styled.div`
  position: relative;
  display: inline-block;

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
  height: 56px;
  padding: 12px 16px;
  border-radius: 10px;
  border: 2px solid;
  border-color: #c98cf1;
  background: transparent;
  box-sizing: border-box;
  width: 566px;
  color: #d9d9d9;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  outline: none;

  @media (max-width: 599px) {
    width: 100%;

}

/* Media query para tabletas */
@media (min-width: 600px) and (max-width: 1199px) {

width: 100%;
}
`;

// Estilo para el ícono de lupa
const IconoLupa = styled.img`
  position: absolute;
  top: 10px;
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
                type="text"
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
