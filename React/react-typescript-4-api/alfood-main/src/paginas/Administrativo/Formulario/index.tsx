import { Button, CssBaseline, TextField, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import style from "./Formulario.module.scss";
import axios from "axios";
import IRestaurante from "../../../interfaces/IRestaurante";
import { DarkTheme } from "../../../types/DarkTheme";
import { useParams } from "react-router-dom";

export default function AdministrativoFormulario() {
  const parametros = useParams();
  const [nomeRestaurante, setNomeRestaurante] = useState("");

  useEffect(() => {
    if (parametros.id) {
      axios
        .get<IRestaurante>(`http://localhost:8000/api/v2/restaurantes/${parametros.id}/`)
        .then((resposta) => setNomeRestaurante(resposta.data.nome))
        .catch((resposta) => console.log(resposta + " id: " + parametros.id))
    }
  }, [parametros])

  const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    if (parametros.id) {
      axios
      .post<IRestaurante>("http://localhost:8000/api/v2/restaurantes/", {
        nome: nomeRestaurante,
      })
      .then(() => alert("Restaurante registrado com sucesso"))
      .catch((erro) => alert("Erro: " + erro));
    }
    else {
      axios
      .put<IRestaurante>(`http://localhost:8000/api/v2/restaurantes/${parametros.id}/`,{
        nome: nomeRestaurante,
      })
      .then(() => alert("Restaurante atualizado com sucesso"))
      .catch((erro) => alert("Erro: " + erro));
    }
  };

  return (
    <ThemeProvider theme={DarkTheme}>
      <form 
        className={style.formularioRestaurante} 
        onSubmit={submeterForm}
        >
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
          {parametros.id ? "Editar restaurante" : "Inserir restaurante"}
        </Button>
      </form>
    </ThemeProvider>
  );
}
