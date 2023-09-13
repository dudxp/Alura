import "./CampoTexto.css";

const CampoTexto = (props) => {
  const aoDigitar = (evento) => {
    props.alterandoEstado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={props.valor}
        onInput={aoDigitar}
        placeholder={props.placeholder}
        required={props.obrigatorio}
      />
    </div>
  );
};

export default CampoTexto;
