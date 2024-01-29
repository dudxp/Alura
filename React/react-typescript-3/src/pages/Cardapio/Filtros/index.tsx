import style from './Filtros.module.scss';
import filtros from './filtros.json';
import classNames from 'classnames';

//Maneira de criar o parametro usando interface:
// interface IOpcao {
//     id: number,
//     label: string
// }

//Maneira de criar o parametro usando typeof
// type opcao = typeof filtros[0];
// function selecionarFiltro(opcao: opcao){
// }

type IOpcao = (typeof filtros)[0];

interface Props {
  filtro: number | null;
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filtros({ filtro, setFiltro }: Props) {
  function selecionarFiltro(opcao: IOpcao) {
    return setFiltro(opcao.id === filtro ? null : opcao.id);
  }
  return (
    <div className={style.filtros}>
      {filtros.map((opcao) => (
        <button
          className={classNames({
            //`
            //   ${style.filtros__filtro}
            //   ${filtro === opcao.id ? style["filtros__filtro--ativo"] : ""}
            //`
            [style.filtros__filtro]: true,
            [style['filtros__filtro--ativo']]: filtro === opcao.id
          })}
          key={opcao.id}
          onClick={() => selecionarFiltro(opcao)}
        >
          {opcao.label}
        </button>
      ))}
    </div>
  );
}
