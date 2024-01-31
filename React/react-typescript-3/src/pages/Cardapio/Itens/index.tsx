import { useEffect, useState } from "react";
import Item from "./Item";
import itensCardapio from "data/cardapio.json";
import style from "./Itens.module.scss";
import { Cardapio } from "types/Prato";

interface Props{
    busca: string,
    filtro: number | null,
    ordenador: string
}

export default function Itens (props:Props){
  const [lista, setLista] = useState(itensCardapio); 
  const {busca, filtro, ordenador} = props;

  function buscaItens(title: string){
    const regex = new RegExp(busca, "i");
    return regex.test(title);
  }

  function filtraItens(id: number){
    if (filtro !== null) return id === filtro;
    return true;
  }

  function ordenarItens(novaLista: Cardapio){
    switch(ordenador){
    case "porcao":
      return novaLista.sort((a,b) => a.size > b.size ? 1 : -1);
    case "qtd_pessoas":
      return novaLista.sort((a,b) => a.serving > b.serving ? 1 : -1);
    case "preco":
      return novaLista.sort((a,b) => a.price > b.price ? 1 : -1);
    default: 
      return novaLista;
    }
  }

  useEffect(() =>{
    const novaLista = itensCardapio.filter(item => 
      filtraItens(item.category.id) && 
            buscaItens(item.title));
    setLista(ordenarItens(novaLista));
  },[busca, filtro, ordenador]);

  return (
    <div className={style.itens}>
      {lista.map(item => (
        <Item 
          key={item.id}
          {...item}
        />
      ))}
    </div>
  );
}