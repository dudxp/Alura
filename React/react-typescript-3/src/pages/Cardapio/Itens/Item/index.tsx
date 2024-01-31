import style from "./Item.module.scss";
import TagsPratos from "components/TagsPratos";
import { useNavigate } from "react-router-dom";
import { Prato } from "types/Prato";

type Props = Prato;

export default function Item(props: Props) {
  const navigate = useNavigate();
  const {
    id,
    title,
    description,
    photo
  } = props;
  return (
    <div className={style.item} onClick={()=> {navigate(`/prato/${id}`);}}>
      <div className={style.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={style.item__descricao}>
        <div className={style.item__titulo}>
          <h2>{title} </h2>
          <p>{description}</p>
        </div>
        <TagsPratos {...props}/>
      </div>
    </div>
  );
}
