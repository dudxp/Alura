import { useEffect, useState } from "react";
import IRestaurante from "../../../interfaces/IRestaurante";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ThemeProvider,
  Typography,
} from "@mui/material";
import axios from "axios";
import { DarkTheme } from "../../../types/DarkTheme";
import {
  StyledTableCell,
  StyledTableRow,
} from "../../../types/StyledTableComponents";
import { Link } from "react-router-dom";

export default function AdministrativoRestaurante() {
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);

  const excluirRestaurante = (restauranteExcluir: IRestaurante) => {
    axios
      .delete(`http://localhost:8000/api/v2/restaurantes/${restauranteExcluir.id}/`)
      .then(() => {
        const listaRestaurantes = restaurantes.filter(restaurante => restaurante.id !== restauranteExcluir.id);
        setRestaurantes(listaRestaurantes);
      })
      .catch((resposta) => console.log(resposta.data))
  }

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v2/restaurantes/")
      .then((resposta) => setRestaurantes(resposta.data))
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <TableContainer component={Paper}>
        <Typography variant="h3" gutterBottom>
          Tabela de restaurantes:
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell>Nome</StyledTableCell>
              <StyledTableCell>Editar</StyledTableCell>
              <StyledTableCell>Excluir</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {restaurantes.map((restaurante) => {
              return (
                <StyledTableRow key={restaurante.id}>
                  <TableCell>{restaurante.id}</TableCell>
                  <TableCell>{restaurante.nome}</TableCell>
                  <TableCell
                    sx={{ cursor: "pointer" }}>
                    <Link to={`/admin/restaurantes/${restaurante.id}`}>
											[editar]
										</Link>
                  </TableCell>
                  <TableCell>
                    <Button variant="outlined" color="error" onClick={() => excluirRestaurante(restaurante)}>
                      Excluir
                    </Button>
                  </TableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}
