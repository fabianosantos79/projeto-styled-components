import React from "react";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from "./Components/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from './Components/UI/temas'
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema"
import { useState } from "react";

function App() {

  const [tema, setTema] = useState(true)

  const toogleTema = () => {
    setTema((tema) => !tema)
  }

  return (
    <>
      <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
        <GlobalStyle />
        <BtnTema onClick={toogleTema}>
          <SwitcherTema tema={tema} />
        </BtnTema>
        <Cabecalho />
        <Container />
      </ThemeProvider>
    </>
  );
}

export default App;
