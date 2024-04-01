import styled from "styled-components";

const ItemListaEstilizado = styled.li`
  text-decoration: none;
  color: #d9d9d9;
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  
  &:hover {
    color: #c98cf1;
  }
`

interface Props {
  children: React.ReactNode;
  iconeAtivo: string;
  iconeInativo: string;
  ativo: boolean;
}

export default function ItemNavegacao(props: Props) {
  const { children, iconeAtivo, iconeInativo, ativo = false } = props;
  return (
    <ItemListaEstilizado>
      <img src={ativo ? iconeAtivo : iconeInativo} alt={children as string} />
      {children}
    </ItemListaEstilizado>
  );
}
