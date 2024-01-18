import CampoTexto from "../CampoTexto";
import "./Formulario.css"

const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Preecha os dados para criar o card do cliente</h2>
                <CampoTexto/>
            </form>
        </section>
    );
}

export default Formulario;