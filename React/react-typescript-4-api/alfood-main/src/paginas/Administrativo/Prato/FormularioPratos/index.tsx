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

  useEffect(() => {
    if (parametros.id) {
      httpV2
        .get<IPrato>(`pratos/${parametros.id}/`)
        .then((resposta) => {
          setNomePrato(resposta.data.nome);
          setDescricao(resposta.data.descricao);
          setTag(resposta.data.tag);
          setRestaurante(resposta.data.restaurante.toString());
        })
        .catch((resposta) => console.log(resposta + " id: " + parametros.id));
    }
  }, [parametros]);

  const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    var httpMethod = parametros.id ? "PUT" : "POST";
    var urlMethod = parametros.id ? `pratos/${parametros.id}/` : "pratos/";

    const formData = new FormData();

    // id: number
    // nome: string
    // tag: string
    // imagem: string
    // descricao: string
    // restaurante: number

    formData.append("nome", nomePrato);
    formData.append("descricao", descricao);
    formData.append("tag", tag);
    formData.append("restaurante",restaurante);

    if (imagem) {
      formData.append("imagem", imagem);
    }

    httpV2
      .request({
        url: urlMethod,
        method: httpMethod,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        data: formData,
      })
      .then(() => {
        setNomePrato("");
        setDescricao("");
        setTag("");
        setRestaurante("");
        setImagem(null);
        if (parametros.id) {
          alert("Prato editado com sucesso!");
        } else {
          alert("Prato cadastrado com sucesso!");
        }
      })
      .catch((resposta) => console.log(resposta));
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
                <MenuItem key={tag.id} value={tag.value}>
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
