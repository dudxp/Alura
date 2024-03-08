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
import IPrato from "../../../../interfaces/IPrato";
import { DarkTheme } from "../../../../types/DarkTheme";
import { useParams } from "react-router-dom";
import { httpV2 } from "../../../../http";

export default function FormularioPratos() {
  const parametros = useParams();
  const [nomePrato, setNomePrato] = useState("");

  useEffect(() => {
    if (parametros.id) {
      httpV2
        .get<IPrato>(`pratos/${parametros.id}/`)
        .then((resposta) => setNomePrato(resposta.data.nome))
        .catch((resposta) => console.log(resposta + " id: " + parametros.id));
    }
  }, [parametros]);

  const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    if (parametros.id) {
      httpV2
        .put<IPrato>(`pratos/${parametros.id}/`, {
          nome: nomePrato,
        })
        .then(() => alert("Prato atualizado com sucesso"))
        .catch((erro) => alert("Erro: " + erro));
    } else {
      httpV2
        .post<IPrato>("prato/", {
          nome: nomePrato,
        })
        .then(() => alert("Prato registrado com sucesso"))
        .catch((erro) => alert("Erro: " + erro));
    }
  };

  return (
    <ThemeProvider theme={DarkTheme}>
      <CssBaseline />
      <Box className={style.containerFormulario}>
        <Typography component="h1" variant="h6">
          Formulário de Prato
        </Typography>
        <Box
          component="form"
          className={style.formulario}
          onSubmit={submeterForm}
          >
            <TextField
              label="Nome do Prato:"
              variant="outlined"
              value={nomePrato}
              onChange={(evento) => setNomePrato(evento.target.value)}
              fullWidth
              required
              />
            <Button variant="outlined" className={style.botao} type="submit">
              {parametros.id ? "Editar" : "Inserir"}
            </Button>
          </Box>
      </Box>
    </ThemeProvider>
  );
}
