import "./Colaborador.css"

const Colaborador = ({nome, cargo, imagem, corPrimaria}) => {
    // let css = {backgroundColor: corPrimaria}

    return (<div className="colaborador">
        <div className="cabecalho" style={{backgroundColor:corPrimaria}}>
            <img src={imagem} alt={nome}></img>
        </div>
        <div className="rodape">
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
        </div>
    </div>)
}

// nome={colaborador.nome}
// cargo={colaborador.cargo}
// imagem={colaborador.imagem}
// time={colaborador.time}

export default Colaborador