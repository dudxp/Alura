import style from "./Botao.module.scss";

interface Props {
  children?: React.ReactNode;
  tipo?: "submit" | "reset" | "button" | undefined;
//   onClick(): () => void;
}

export default function Botao({ children, tipo = "button" }: Props) {
  return (
    <button className={style.botao} type={tipo}>
      {children}
    </button>
  );
}
