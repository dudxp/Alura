import { useEffect, useState } from "react";
import IRestaurante from "../../../interfaces/IRestaurante";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ThemeProvider,
} from "@mui/material";
import axios from "axios";
import AdministrativoFormulario from "../Formulario";
import { DarkTheme } from "../../../types/DarkTheme";
import {
  StyledTableCell,
  StyledTableRow,
} from "../../../types/StyledTableComponents";
import { Link } from "react-router-dom";

export default function AdministrativoRestaurante() {
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v2/restaurantes/")
      .then((resposta) => setRestaurantes(resposta.data))
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <h3>Tabela de restaurantes:</h3>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell>Nome</StyledTableCell>
              <StyledTableCell>Editar</StyledTableCell>
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
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}
