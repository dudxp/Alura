import styled from "styled-components";
import CampoTexto from "../CampoTexto";

const HeaderEstilizado = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
`;

const LogoEstilizado = styled.img`
    width: 212px;
    height: 65px;
    top: 60px;
    left: 24px; 
`

export default function Cabecalho() {
  return (
    <HeaderEstilizado>
      <LogoEstilizado src="/imagens/logo.png" alt="Logo do Space App" />
      <CampoTexto></CampoTexto>
    </HeaderEstilizado>
  );
}
