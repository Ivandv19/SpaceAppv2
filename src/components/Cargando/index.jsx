import React from "react";

const Cargando = () => {
  return (
    // Contenedor que centra la imagen de carga en la página
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}
    >
      {/* Imagen de carga (un GIF que indica que la página está cargando) */}
      <img
        src="img/loading.gif" // Fuente del archivo GIF de carga
        style={{ width: "20vh" }} // Estilo que define el tamaño de la imagen (20% de la altura de la ventana)
        alt="Cargando..." // Texto alternativo para accesibilidad
      />
    </div>
  );
};

export default Cargando;
