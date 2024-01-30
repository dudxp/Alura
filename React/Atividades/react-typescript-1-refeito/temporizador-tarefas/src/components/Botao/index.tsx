import style from "./Botao.module.scss";

interface Props {
  children?: React.ReactNode;
  tipo?: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
}

export default function Botao(props: Props) {
  const {onClick, children, tipo = "button"} = props;
  return (
    <button onClick={onClick} className={style.botao} type={tipo}>
      {children}
    </button>
  );
}
