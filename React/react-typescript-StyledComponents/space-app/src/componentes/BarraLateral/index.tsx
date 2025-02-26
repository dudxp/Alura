import styled from "styled-components";
import ItemNavegacao from "./ItemNavegacao";
import dadosJson from "./itensNavegacao.json";

const ListaEstilizada = styled.ul`
  list-style-type: none;
  padding-left: 0;
  width: 220px;
  height: 276px;
`;

interface CamposNavegacao {
  id: number;
  nome: string;
  iconeAtivo: string;
  iconeInativo: string;
  ativo: boolean;
}

export default function BarraLateral() {
  const itensNavegacao: CamposNavegacao[] = dadosJson.camposNavegacao;

  return (
    <aside>
      <nav>
        <ListaEstilizada>
          {itensNavegacao.map((item) => (
            <ItemNavegacao
              iconeAtivo={item.iconeAtivo}
              iconeInativo={item.iconeInativo}
              ativo={item.ativo}
              key={item.id}
            >
              {item.nome}
            </ItemNavegacao>
          ))}
        </ListaEstilizada>
      </nav>
    </aside>
  );
}
