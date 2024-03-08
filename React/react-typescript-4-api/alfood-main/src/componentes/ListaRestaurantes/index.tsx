import { ChangeEvent, useEffect, useState } from "react";
import IRestaurante from "../../interfaces/IRestaurante";
import style from "./ListaRestaurantes.module.scss";
import Restaurante from "./Restaurante";
import { AxiosRequestConfig } from "axios";
import { IPaginacao } from "../../interfaces/IPaginacao";
import {
  Box,
  Button,
  FormGroup,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { httpV1 } from "../../http";

interface IParametrosBusca {
  ordering: string;
  search: string;
}

const ListaRestaurantes = () => {
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);
  const [proximaPagina, setProximaPagina] = useState("");
  const [paginaAnterior, setPaginaAnterior] = useState("");
  const [nomeRestaurante, setNomeRestaurante] = useState("");
  const [selectOrder, setSelectOrder] = useState("id");

  const buscarDados = (
    paginaNavegar: string,
    opcoes: AxiosRequestConfig = {}
  ) => {
    httpV1
      .get<IPaginacao<IRestaurante>>(paginaNavegar, opcoes)
      .then((resposta) => {
        // console.log(resposta)
        setRestaurantes(resposta.data.results);
        setProximaPagina(resposta.data.next);
        setPaginaAnterior(resposta.data.previous);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  const filtrarValor = (valorBusca: string, ordemBusca: string) => {
    // console.log(ordemBusca);
    const opcoes = {
      params: {} as IParametrosBusca,
    };
    if (valorBusca) {
      opcoes.params.search = valorBusca;
    }
    if (ordemBusca) {
      opcoes.params.ordering = ordemBusca;
    }
    // console.log(opcoes.params.search + " -- " + opcoes.params.ordering)
    buscarDados("restaurantes/", opcoes);
  };

  const handleSelectedOrder = (evento: SelectChangeEvent<string>) => {
    const selectedValue = evento.target.value;
    setSelectOrder(selectedValue);
    filtrarValor(nomeRestaurante, selectedValue);
  }

  const handleNomeRestaurante = (evento: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const selectedValue = evento.target.value;
    setNomeRestaurante(selectedValue);
    filtrarValor(selectedValue, selectOrder);
  }

  useEffect(() => {
    buscarDados("restaurantes/");
  }, []);

  return (
    <Box component="section" className={style.listaRestaurantes}>
      <Typography component="h1">
        Os restaurantes mais <em>bacanas</em>!
      </Typography>
      <Box>
        <Typography component="h1" variant="h6">
          Filtros:
        </Typography>
        <Box className={style.listaRestaurantes__grupoFiltros}>
          <TextField
            id="filled-basic"
            label="Filtrar restaurante:"
            variant="filled"
            className={style.listaRestaurantes__grupoFiltros__grupoForm__form}
            onChange={(evento) => handleNomeRestaurante(evento)}
            />
          <Select
            value={selectOrder}
            label="Ordenar por"
            autoWidth
            onChange={(evento) => handleSelectedOrder(evento)}
            >
            <MenuItem value="id">Id</MenuItem>
            <MenuItem value="nome">Nome</MenuItem>
          </Select>
        </Box>
      </Box>

      {restaurantes?.map((item) => (
        <Restaurante restaurante={item} key={item.id} />
      ))}

      <Box className={style.listaRestaurantes__grupoBotoes}>
        {
          <Button
            className={style.listaRestaurantes__grupoBotoes__botao}
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
            className={style.listaRestaurantes__grupoBotoes__botao}
            color="inherit"
            variant="contained"
            onClick={() => buscarDados(proximaPagina)}
            disabled={!proximaPagina}
          >
            Proxima página
          </Button>
        }
      </Box>
    </Box>
  );
};

export default ListaRestaurantes;
