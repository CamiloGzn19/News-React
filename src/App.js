import React, { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";

function App() {
  // Definir categoria
  const [categoria, guardarCategoria] = useState("");


  return (
    <>
      <Header 
      titulo="Buscador de noticias"
      />
      <div class="container white">
        <Formulario 
          guardarCategoria={guardarCategoria}
        />
      </div>
    </>
  );
}

export default App;
