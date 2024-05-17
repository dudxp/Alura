import styled from "styled-components";

interface ItemProps {
  botaoAtivo: boolean;
}

const ItemListaEstilizado = styled.li<ItemProps>`
  text-decoration: none;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  cursor: pointer;
  color: ${(props) => (props.botaoAtivo ? "#7B78E5" : "#D9D9D9")};
  font-family: ${(props) => (props.botaoAtivo ? "GandhiSansBold" : "GandhiSansRegular")};
  display: flex;
  align-items: center;
  gap: 18px;
  padding-bottom: 32px;
`

interface props {
  children: React.ReactNode;
  iconeAtivo: string;
  iconeInativo: string;
  ativo: boolean;
}

export default function ItemNavegacao(props: props) {
  const { children, iconeAtivo, iconeInativo, ativo = false } = props;
  return (
    <ItemListaEstilizado botaoAtivo={ativo}>
      <img src={ativo ? iconeAtivo : iconeInativo} alt={children as string} />
      {children}
    </ItemListaEstilizado>
  );
}
