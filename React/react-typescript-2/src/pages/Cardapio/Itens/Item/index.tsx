import IItemCardapio from "util/itemCardapio";
import style from "./Item.module.scss";
import logo from "assets/logo.svg";
import item from "../itens.json";

type Props = typeof item[0];

export default function Item(props: Props) {
    const {
        title,
        description,
        photo,
        size,
        serving,
        price,
        id,
        category
        } = props;

  return (
    <div className={style.item}>
      <div className={style.item__imagem}>
        <img src={logo} alt="Imagem do item" />
      </div>
      <div className={style.item__descricao}>
        <div className={style.item__titulo}>
          <h2>{title} </h2>
          <p>{description}</p>
        </div>

        <div className={style.item__tags}>
          <div className={style.item__tipo}>{category.label}</div>
          <div className={style.item__porcao}>{size}g</div>
          <div className={style.item__qtdpessoas}>
            Serve {serving} pessoas
          </div>
          <div className={style.item__valor}>R${price}</div>
        </div>
      </div>
    </div>
  );
}
