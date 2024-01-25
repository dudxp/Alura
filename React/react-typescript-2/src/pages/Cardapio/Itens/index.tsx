import Item from "./Item";
import itensCardapio from "./itens.json"
import style from "./Itens.module.scss";

export default function Itens (){
    return (
        <div className={style.itens}>
            {itensCardapio.map(item => (
                <Item 
                    key={item.id}
                    {...item}
                />
            ))}
        </div>
    )
}