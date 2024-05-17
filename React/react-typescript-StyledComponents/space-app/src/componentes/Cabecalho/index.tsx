import styled from "styled-components";
import CampoTexto from "../CampoTexto";

const HeaderEstilizado = styled.header`
  padding-bottom: 65px; 
  display: flex;
  justify-content: space-between;
`;

const LogoEstilizado = styled.img`
    width: 212px;
    height: 65px;
    top: 60px;
`

export default function Cabecalho() {
  return (
    <HeaderEstilizado>
      <LogoEstilizado src="/imagens/logo.png" alt="Logo do Space App" />
      <CampoTexto/>
    </HeaderEstilizado>
  );
}
