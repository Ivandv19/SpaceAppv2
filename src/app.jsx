import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Cabecera from "./components/Cabecera";
import BarraLateral from "./components/BarraLateral";
import Banner from "./components/Banner";
import banner from "./assets/banner.png";
import Galeria from "./components/Galeria";
import ModalZoom from "./components/ModalZoom";
import Pie from "./components/Pie";
import GlobalContextProvider from "./context/GlobalContext";

// Estilo del fondo con gradiente
const FondoGradiente = styled.div`
  background: linear-gradient(
    175deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

// Contenedor principal de la aplicación
const AppContainer = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding-top: 200px;
  box-sizing: border-box;

  @media (max-width: 599px) {
    padding-top: 200px;
  }

  /* Media query para tabletas */
  @media (min-width: 600px) and (max-width: 1199px) {
    padding-top: 200px;
  }
`;

// Contenedor principal para el contenido principal y lateral
const MainContainer = styled.main`
  display: flex;
  gap: 24px;
  padding: 0;

  /* Media query para dispositivos móviles (celulares) */
  @media (max-width: 599px) {
    flex-direction: column;
  }

  /* Media query para tabletas */
  @media (min-width: 600px) and (max-width: 1199px) {
    flex-direction: column;
  }
`;

// Contenedor para la galería principal y otros elementos del contenido
const ContenidoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1; // Permitir que este contenedor crezca para ocupar espacio disponible
  padding: 0 20px;

  @media (max-width: 599px) {
    padding: 0;
  }
`;

// Componente principal de la aplicación
const App = () => {
  return (
    <>
      {/* Fondo con gradiente */}
      <FondoGradiente>
        {/* Estilos globales de la aplicación */}
        <GlobalStyles />
        {/* Proveedor del contexto global */}
        <GlobalContextProvider>
          {/* Contenedor principal de la aplicación */}
          <AppContainer>
            {/* Componente de cabecera */}
            <Cabecera />
            {/* Contenedor principal y lateral */}
            <MainContainer>
              {/* Barra lateral */}
              <BarraLateral />
              {/* Contenido principal de la galería */}
              <ContenidoGaleria>
                {/* Banner con texto y fondo */}
                <Banner
                  texto={"La galería más completa de fotos del espacio"}
                  backgroundImage={banner}
                />
                {/* Componente de galería */}
                <Galeria />
              </ContenidoGaleria>
            </MainContainer>
          </AppContainer>
          {/* Componente modal de zoom */}
          <ModalZoom />
          {/* Componente de pie de página */}
          <Pie />
        </GlobalContextProvider>
      </FondoGradiente>
    </>
  );
};

export default App;
