import CampoTexto from "../CampoTexto";
import Botao from '../Botao';
import "./Formulario.css";

const Formulario = () =>{
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do cliente</h2>
                <CampoTexto/>
                <Botao/>
            </form>
        </section>
    )
}

export default Formulario;