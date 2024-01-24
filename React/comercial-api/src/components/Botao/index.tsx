import React from "react";
import style from "./Botao.module.scss";

interface Props {
  type?: "button" | "reset" | "submit" | undefined;
  onClick?: () => void;
  children?: React.ReactNode;
}

function Botao({ onClick, type = "button", children }: Props) {
  return (
    <button onClick={onClick} className={style.botao} type={type}>
      {children}
    </button>
  );
}

// class Botao1 extends React.Component{
//   render() {
//     const {type = "button", onClick} = this.props;

//     //Criando uma váriavel com o mesmo nome da propriedade e atribuindo valor a ela
//     // const backgroundColor = 'red';
//     // return <button style={{
//     //   backgroundColor
//     // }}>Inserir</button>;

//     //Criando uma váriavel e atribuindo valor a propriedade com ela
//     // const color = 'red';
//     // return <button style={{
//     //   backgroundColor: color
//     // }}>Inserir</button>;

//     //Criando uma váriavel e atribuindo valor a propriedade com ela
//     // const color = 'red';
//     // return <button style={{
//     //   backgroundColor: color
//     // }}>Inserir</button>;

//     //Atribuindo valor a propriedade
//     // const color = 'red';
//     // return <button style={{
//     //   backgroundColor: color
//     // }}>Inserir</button>;

//     //Criando um objeto com diversas propertys de styles e atribuindo valores a partir dela
//     // const styles = {
//     //   backgroundColor: "green"
//     // }
//     // return <button style={styles}>Inserir</button>;

//     //Cor reativa
//     // const estaAtivo = true;
//     // const styles = {
//     //   backgroundColor: estaAtivo ? "green" : "red"

//     // };
//     // return <button style={styles}>Inserir</button>;

//     // const estaAtivo = true;
//     // const styles = {
//     //   backgroundColor: estaAtivo ? "green" : "red"
//     // };
//   }
// }

export default Botao;
