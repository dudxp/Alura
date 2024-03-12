import {
  Box,
  Button,
  CssBaseline,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
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
import ITag from "../../../../interfaces/ITag";
import IRestaurante from "../../../../interfaces/IRestaurante";

export default function FormularioPratos() {
  const parametros = useParams();
  const [nomePrato, setNomePrato] = useState("");
  const [descricao, setDescricao] = useState("");

  const [tag, setTag] = useState("");
  const [tags, setTags] = useState<ITag[]>([]);

  const [restaurante, setRestaurante] = useState("");
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);

  const [imagem, setImagem] = useState<File | null>(null);

  useEffect(() => {
    httpV2
      .get<{ tags: ITag[] }>("tags/")
      .then((resposta) => setTags(resposta.data.tags))
      .catch((resposta) => console.log(resposta))
    httpV2
      .get<IRestaurante[]>("restaurantes/")
      .then((resposta) => setRestaurantes(resposta.data))
      .catch((resposta) => console.log(resposta))
  }, []);

  // id: number
  // nome: string
  // tag: string
  // imagem: string
  // descricao: string
  // restaurante: number

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

  const selecionarArquivo = (arquivo: React.ChangeEvent<HTMLInputElement>) => {
    const imagem = arquivo.target.files;

    if (imagem?.length) {
      setImagem(imagem[0]);
    } else {
      setImagem(null);
    } 
  }

  return (
    <ThemeProvider theme={DarkTheme}>
      <CssBaseline />
      <Box className={style.containerFormulario}>
        <Typography component="h1" variant="h6">
          Formulário de pratos
        </Typography>
        <Box
          component="form"
          className={style.formulario}
          onSubmit={submeterForm}
        >
          <TextField
            label="Nome do prato:"
            variant="outlined"
            value={nomePrato}
            onChange={(evento) => setNomePrato(evento.target.value)}
            fullWidth
            required
            margin="dense"
          />
          <TextField
            label="Descrição do prato:"
            variant="outlined"
            value={descricao}
            onChange={(evento) => setDescricao(evento.target.value)}
            fullWidth
            required
            margin="dense"
          />

          <FormControl margin="dense" fullWidth required>
            <InputLabel id="tag">Tag</InputLabel>
            <Select labelId="tag" value={tag} onChange={(evento) => setTag(evento.target.value)}>
              {tags.map((tag) => (
                <MenuItem key={tag.id} value={tag.id}>
                  {tag.value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl margin="dense" fullWidth required>
            <InputLabel id="restaurante">Restaurante</InputLabel>
            <Select labelId="restaurante" value={restaurante} onChange={(evento) => setRestaurante(evento.target.value)}>
              {restaurantes.map((restaurante) => (
                <MenuItem key={restaurante.id} value={restaurante.id}>
                  {restaurante.nome}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <input type="file" onChange={(evento) => selecionarArquivo(evento)}/>

          <Button variant="outlined" className={style.botao} type="submit">
            {parametros.id ? "Editar" : "Inserir"}
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
