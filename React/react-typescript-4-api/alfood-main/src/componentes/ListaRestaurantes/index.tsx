import { useEffect, useState } from "react";
import IRestaurante from "../../interfaces/IRestaurante";
import style from "./ListaRestaurantes.module.scss";
import Restaurante from "./Restaurante";
import axios, { AxiosRequestConfig } from "axios";
import { IPaginacao } from "../../interfaces/IPaginacao";
import { Button, TextField } from "@mui/material";

interface IParametrosBusca {
  ordering: string,
  search: string
}

const ListaRestaurantes = () => {
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);
  const [proximaPagina, setProximaPagina] = useState("");
  const [paginaAnterior, setPaginaAnterior] = useState("");
  const [valorBusca, setValorBusca] = useState("");

  const buscarDados = (paginaNavegar: string, opcoes: AxiosRequestConfig = {}) => {
    if (opcoes){
      console.log(opcoes)

    }
    axios
      .get<IPaginacao<IRestaurante>>(paginaNavegar, opcoes)
      .then((resposta) => {
        setRestaurantes(resposta.data.results);
        setProximaPagina(resposta.data.next);
        setPaginaAnterior(resposta.data.previous);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  const filtrarValor = (valorBusca: string) => {
    const opcoes = {
      params: {
      } as IParametrosBusca
    }
    if (valorBusca) {
      opcoes.params.search = valorBusca;
    }
    buscarDados("http://localhost:8000/api/v1/restaurantes/",opcoes);
  }

  useEffect(() => {
    buscarDados("http://localhost:8000/api/v1/restaurantes/");
  }, []);

  const buttonTheme = {
    marginTop: 4,
    marginRight: 4,
    alignSelf: "center",
    paddingRight: 4,
    paddingLeft: 4,
  };

  return (
    <section className={style.listaRestaurantes}>
      <h1>
        Os restaurantes mais <em>bacanas</em>!
      </h1>

      <form>
        <TextField
          id="filled-basic"
          label="Filtrar restaurante:"
          variant="filled"
          onChange={(evento) => filtrarValor(evento.target.value)}
        />
      </form>

      {restaurantes?.map((item) => (
        <Restaurante restaurante={item} key={item.id} />
      ))}

      <div className={style.listaRestaurantes__botoesPaginaAnteriorProxima}>
        {
          <Button
            sx={buttonTheme}
            color="inherit"
            variant="contained"
            onClick={() => buscarDados(paginaAnterior)}
            disabled={!paginaAnterior}
          >
            Página anterior
          </Button>
        }
        {
          <Button
            sx={buttonTheme}
            color="inherit"
            variant="contained"
            onClick={() => buscarDados(proximaPagina)}
            disabled={!proximaPagina}
          >
            Proxima página
          </Button>
        }
      </div>
    </section>
  );
};

export default ListaRestaurantes;
