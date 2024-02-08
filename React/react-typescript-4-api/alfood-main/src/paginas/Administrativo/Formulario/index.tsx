import { Button, CssBaseline, TextField, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import style from "./Formulario.module.scss";
import axios from "axios";
import IRestaurante from "../../../interfaces/IRestaurante";
import { DarkTheme } from "../../../types/DarkTheme";

interface Props {
  setRestaurantes: React.Dispatch<React.SetStateAction<IRestaurante[]>>;
  restaurantes: IRestaurante[];
  setRestauranteAtualizacao: React.Dispatch<
    React.SetStateAction<IRestaurante | undefined>
  >;
  restauranteAtualizacao: IRestaurante | undefined;
}

export default function AdministrativoFormulario(props: Props) {
  const {
    setRestaurantes,
    restaurantes,
    setRestauranteAtualizacao,
    restauranteAtualizacao,
  } = props;
  const [nomeRestaurante, setNomeRestaurante] = useState("");

  useEffect(() => {
    if (restauranteAtualizacao) {
      setNomeRestaurante(restauranteAtualizacao.nome);
    }
  }, [restauranteAtualizacao]);

  const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    if (restauranteAtualizacao) {
      axios
        .put(
          `http://localhost:8000/api/v2/restaurantes/${restauranteAtualizacao.id}/`,
          {
            nome: nomeRestaurante,
          }
        )
        .then((resposta) => {
          const restauranteAtualizado = resposta.data;

          setRestaurantes((restaurantesAnteriores) => {
            const listaAtualizada = restaurantesAnteriores.map((restaurante) =>
              restaurante.id === restauranteAtualizado.id
                ? restauranteAtualizado
                : restaurante
            );
            return [...listaAtualizada];
          });

          alert("Restaurante atualizado com sucesso");
        })
        .catch((erro) => {
          alert("Erro: " + erro.response.data.nome[0]);
        });
    } else {
      axios
        .put("http://localhost:8000/api/v2/restaurantes/", {
          nome: nomeRestaurante,
        })
        .then((resposta) => {
          setRestaurantes([...restaurantes, resposta.data]);
          alert("Restaurante registrado com sucesso");
        })
        .catch((erro) => {
          alert("Erro: " + erro.response.data.nome[0]);
        });
    }

    setRestauranteAtualizacao(undefined);
    setNomeRestaurante("");
  };

  return (
    <ThemeProvider theme={DarkTheme}>
      <form className={style.formularioRestaurante} onSubmit={submeterForm}>
        <CssBaseline />
        <TextField
          id="filled-basic"
          label="Nome do restaurante:"
          variant="filled"
          value={nomeRestaurante}
          onChange={(evento) => setNomeRestaurante(evento.target.value)}
        />
        <Button
          variant="contained"
          sx={{
            marginTop: "10px",
          }}
          type="submit"
        >
          {
            restauranteAtualizacao 
            ? "Atualizar restaurante"
            : "Inserir restaurante"
          }
        </Button>
      </form>
    </ThemeProvider>
  );
}
