import { Button, CssBaseline, TextField, ThemeProvider } from "@mui/material";
import { useState } from "react";
import style from "./Formulario.module.scss";
import axios from "axios";
import IRestaurante from "../../../interfaces/IRestaurante";
import { DarkTheme } from "../../../types/DarkTheme";

interface Props {
  setRestaurantes: React.Dispatch<React.SetStateAction<IRestaurante[]>>;
  restaurantes: IRestaurante[];
}

export default function AdministrativoFormulario(props: Props) {
  const { setRestaurantes, restaurantes } = props;
  const [nomeRestaurante, setNomeRestaurante] = useState("");

  const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    axios
      .post("http://localhost:8000/api/v2/restaurantes/", {
        nome: nomeRestaurante,
      })
      .then((evento) => {
        setRestaurantes([...restaurantes, evento.data]);
        alert("Restaurante registrado com sucesso");
      })
      .catch((erro) => {
        alert("Erro: " + erro.response.data.nome[0]);
      });
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
          Inserir restaurante
        </Button>
      </form>
    </ThemeProvider>
  );
}
