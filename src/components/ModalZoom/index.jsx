import styled from "styled-components";
import Imagen from "../Galeria/Imagen";
import BotonIcono from "../BotonIcono";
import useFotoModal from "../../hooks/useFotoModal"; // Importa el hook personalizado

// Estilos para el overlay oscuro de fondo
const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

// Estilos para el diálogo modal
const DialogEstilizado = styled.dialog`
  position: absolute;
  top: 294px;
  background: transparent;
  padding: 0;
  border: 0;
  width: 1156px;
  display: flex;
  justify-content: center;
  form {
    button {
      position: relative;
      top: 20px;
      right: 60px;
    }
  }

  @media (min-width: 600px) and (max-width: 1199px) {
    width: 100%;
    height: auto;
  }

  @media (max-width: 599px) {
    width: 100%;
    height: auto;
    padding: 0 10px;
  }
`;

// Componente funcional ModalZoom
const ModalZoom = () => {
  // Utiliza el hook personalizado useFotoModal para obtener estado y funciones del modal
  const { estaAbiertoModal, fotoSeleccionada, cerrarModal } = useFotoModal();

  return (
    <>
      {estaAbiertoModal && (
        <>
          {/* Overlay oscuro que cubre toda la pantalla */}
          <Overlay />

          {/* Diálogo modal para mostrar la imagen */}
          <DialogEstilizado
            open={!!fotoSeleccionada}
            onClose={() => cerrarModal()}
          >
            {/* Componente Imagen que muestra la foto seleccionada */}
            <Imagen foto={fotoSeleccionada} expandida={true} />

            {/* Botón de cerrar el modal */}
            <form method="dialog">
              <BotonIcono formMethod="dialog">
                <img src="/iconos/cerrar.png" alt="Icono de cerrar" />
              </BotonIcono>
            </form>
          </DialogEstilizado>
        </>
      )}
    </>
  );
};

export default ModalZoom;
