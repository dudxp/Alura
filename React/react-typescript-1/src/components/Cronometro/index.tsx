import { useEffect, useState } from 'react';
import Botao from "../Botao";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss";
import tempoParaSegundos from "../../common/utils/date";
import { ITarefa } from "../../types/tarefa";

interface Props {
    tarefaSelecionada: ITarefa | undefined,
    finalizarTarefa: () => void
}

export default function Cronometro({tarefaSelecionada, finalizarTarefa}:Props){
    const [tempo, setTempo] = useState<number>();
    
    useEffect(() => {
        if (tarefaSelecionada?.tempo) {
            setTempo(tempoParaSegundos(String(tarefaSelecionada?.tempo)))
        }
    },[tarefaSelecionada])

    function regressarTempoTarefa(tempoParaRegredir: number = 0){
        setTimeout(() => {
            if (tempoParaRegredir > 0) {
                setTempo(tempoParaRegredir - 1);
                return regressarTempoTarefa(tempoParaRegredir - 1);
            }
            finalizarTarefa();
        }, 1000)
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}> Escolha um card e inicie o cronômetro:</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo}/>
            </div>
            <Botao onClick = {() => regressarTempoTarefa(tempo)}>
                Começar!
            </Botao>
        </div>
    )
}
