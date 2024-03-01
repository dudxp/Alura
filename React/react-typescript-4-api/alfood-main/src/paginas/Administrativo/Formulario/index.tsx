import {
  Box,
  Button,
  CssBaseline,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import style from "./Formulario.module.scss";
import IRestaurante from "../../../interfaces/IRestaurante";
import { DarkTheme } from "../../../types/DarkTheme";
import { useParams } from "react-router-dom";
import { httpV2 } from "../../../http";

export default function AdministrativoFormulario() {
  const parametros = useParams();
  const [nomeRestaurante, setNomeRestaurante] = useState("");

  useEffect(() => {
    if (parametros.id) {
      httpV2
        .get<IRestaurante>(
          `restaurantes/${parametros.id}/`
        )
        .then((resposta) => setNomeRestaurante(resposta.data.nome))
        .catch((resposta) => console.log(resposta + " id: " + parametros.id));
    }
  }, [parametros]);

  const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    if (parametros.id) {
      httpV2
        .put<IRestaurante>(
          `restaurantes/${parametros.id}/`,
          {
            nome: nomeRestaurante,
          }
        )
        .then(() => alert("Restaurante atualizado com sucesso"))
        .catch((erro) => alert("Erro: " + erro));
    } else {
      httpV2
        .post<IRestaurante>("restaurantes/", {
          nome: nomeRestaurante,
        })
        .then(() => alert("Restaurante registrado com sucesso"))
        .catch((erro) => alert("Erro: " + erro));
    }
  };

  return (
    <ThemeProvider theme={DarkTheme}>
      <CssBaseline />
      <Box className={style.containerFormulario}
      >
        <Typography component="h1" variant="h6">
          Formulário de restaurante
        </Typography>
        <Box component="form" className={style.formulario} onSubmit={submeterForm}>
          <TextField
            label="Nome do restaurante:"
            variant="outlined"
            value={nomeRestaurante}
            onChange={(evento) => setNomeRestaurante(evento.target.value)}
            fullWidth
            required
          />
          <Button
            variant="outlined"
            className={style.botao}
            type="submit"
          >
            {parametros.id ? "Editar" : "Inserir"}
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
