import React from "react";
import style from './Botao.module.scss';

class Button extends React.Component <any, any> {
  render() {
    return (
      <button className={style.botao}>
        {this.props.children}
      </button>
    )

    //Criando uma váriavel com o mesmo nome da propriedade e atribuindo valor a ela
    // const backgroundColor = 'red';
    // return <button style={{
    //   backgroundColor
    // }}>Inserir</button>;

    //Criando uma váriavel e atribuindo valor a propriedade com ela
    // const color = 'red';
    // return <button style={{
    //   backgroundColor: color
    // }}>Inserir</button>;

    //Criando uma váriavel e atribuindo valor a propriedade com ela
    // const color = 'red';
    // return <button style={{
    //   backgroundColor: color
    // }}>Inserir</button>;

    //Atribuindo valor a propriedade
    // const color = 'red';
    // return <button style={{
    //   backgroundColor: color
    // }}>Inserir</button>;

    //Criando um objeto com diversas propertys de styles e atribuindo valores a partir dela
    // const styles = {
    //   backgroundColor: "green"
    // }
    // return <button style={styles}>Inserir</button>;

    //Cor reativa
    // const estaAtivo = true;
    // const styles = {
    //   backgroundColor: estaAtivo ? "green" : "red"
      
    // };
    // return <button style={styles}>Inserir</button>;

    // const estaAtivo = true;
    // const styles = {
    //   backgroundColor: estaAtivo ? "green" : "red"
    // };
  }
}

export default Button;
