import style from './Item.module.scss';
import item from '../itens.json';
import classNames from 'classnames';

type Props = typeof item[0];

export default function Item(props: Props) {
  const {
    title,
    description,
    photo,
    size,
    serving,
    price,
    category
  } = props;
  return (
    <div className={style.item}>
      <div className={style.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={style.item__descricao}>
        <div className={style.item__titulo}>
          <h2>{title} </h2>
          <p>{description}</p>
        </div>
        <div className={style.item__tags}>
          <div className={classNames(
            style.item__tipo,
            style[`item__tipo__${category.label.toLowerCase()}`]
            // [style.item__tipo__massas]: category.label === "Massas",
            // [style.item__tipo__carnes]: category.label === "Carnes",
            // [style.item__tipo__combos]: category.label === "Combos",
            // [style.item__tipo__veganos]: category.label === "Veganos"
          )}
          >{category.label}</div>
          <div className={style.item__porcao}>{size}g</div>
          <div className={style.item__qtdpessoas}>
            Serve {serving} pessoa{serving > 1 ? 's' : ''} 
          </div>
          <div className={style.item__valor}>R${price.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}
