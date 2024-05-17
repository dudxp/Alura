import styled from "styled-components";
import ItemNavegacao from "./ItemNavegacao";

const ListaEstilizada = styled.ul`
  list-style-type: none;
  padding-left: 0;
  width: 220px;
  height: 276px;
`;

const itensNavegacao = [
  {
    id: 1,
    nome: "Inicío",
    iconeAtivo: "/icones/home-ativo.png",
    iconeInativo: "/icones/home-inativo.png",
    ativo: false
  },
  {
    id: 2,
    nome: "Mais vistas",
    iconeAtivo: "/icones/mais-vistas-ativo.png",
    iconeInativo: "/icones/mais-vistas-inativo.png",
    ativo: false
  },
  {
    id: 3,
    nome: "Mais curtidas",
    iconeAtivo: "/icones/mais-curtidas-ativo.png",
    iconeInativo: "/icones/mais-curtidas-inativo.png",
    ativo: false
  },
  {
    id: 4,
    nome: "Novas",
    iconeAtivo: "/icones/novas-ativo.png",
    iconeInativo: "/icones/novas-inativo.png",
    ativo: false
  },
  {
    id: 5,
    nome: "Surpreenda-me",
    iconeAtivo: "/icones/surpreenda-me-ativo.png",
    iconeInativo: "/icones/surpreenda-me-inativo.png",
    ativo: false
  },
];

export default function BarraLateral() {
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
