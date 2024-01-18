import Button from "../Botao";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss";

export default function Cronometro(){
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}> Escolha um card e inicie o cronômetro</p>
            {/* <div > */}
                <Relogio/>
            {/* </div> */}
            <Button>
                Começar!
            </Button>
        </div>
    )
}
