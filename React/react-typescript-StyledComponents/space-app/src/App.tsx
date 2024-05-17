import styled from "styled-components";
import Cabecalho from "./componentes/Cabecalho";
import BarraLateral from "./componentes/BarraLateral";
import Banner from "./componentes/Banner";

const FundoEstilizado = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  min-height: 100vh;
  padding: 60px 24px;
`;

const CorpoEstilizado = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
`;

function App() {
  return (
    <FundoEstilizado>
      <Cabecalho />
      <CorpoEstilizado>
        <BarraLateral />
        <Banner
          imagemSource="/imagens/banner.png"
          texto="A galeria mais completa de fotos do espaço!"
        />
      </CorpoEstilizado>
    </FundoEstilizado>
  );
}

export default App;
