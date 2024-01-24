import style from "./Botao.module.scss";
import React from "react";

class Botao extends React.Component <{
    children: string,
    tipo?: "submit" | "reset" | "button" | undefined
}>{
    render() {
        return (
            <button className={style.botao} type={this.props.tipo}>
                {this.props.children}
            </button>
        )
    }
}

export default Botao;