import style1 from "../Cronometro.module.scss";
import style from "./Relogio.module.scss";

export default function Relogio() {
    return (
        <div>
            <span className={style.relogioNumero }>0</span>
            <span className={style.relogioNumero }>0</span>
            <span className={style.relogioDivisao }>:</span>
            <span className={style.relogioNumero }>0</span>
            <span className={style.relogioNumero }>0</span>
            <span className={style.relogioDivisao }>:</span>
            <span className={style.relogioNumero }>0</span>
            <span className={style.relogioNumero }>0</span>
        </div>
    )
}