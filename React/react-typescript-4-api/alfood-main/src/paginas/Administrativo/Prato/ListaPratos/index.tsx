import { useEffect, useState } from "react";
import IPrato from "../../../../interfaces/IPrato";
import {
  Box,
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
import { DarkTheme } from "../../../../types/DarkTheme";
import {
  StyledTableCell,
  StyledTableRow,
} from "../../../../types/StyledTableComponents";
import { Link } from "react-router-dom";
import { httpV2 } from "../../../../http";

export default function ListaPratos() {
  const [pratos, setpratos] = useState<IPrato[]>([]);

  const excluirPrato = (pratoExcluir: IPrato) => {
    httpV2
      .delete(`pratos/${pratoExcluir.id}/`)
      .then(() => {
        const listapratos = pratos.filter(
          (prato) => prato.id !== pratoExcluir.id
        );
        setpratos(listapratos);
      })
      .catch((resposta) => console.log(resposta.data));
  };

  useEffect(() => {
    httpV2.get("pratos/").then((resposta) => setpratos(resposta.data));
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <TableContainer component={Paper}>
        <Typography variant="h3" gutterBottom>
          Tabela de pratos:
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell>Nome</StyledTableCell>
              <StyledTableCell>Descrição</StyledTableCell>
              <StyledTableCell>Tag</StyledTableCell>
              <StyledTableCell>Imagem</StyledTableCell>
              <StyledTableCell>Restaurante</StyledTableCell>
              <StyledTableCell>Editar</StyledTableCell>
              <StyledTableCell>Excluir</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pratos.map((prato) => {
              return (
                <StyledTableRow key={prato.id}>
                  <TableCell>{prato.id}</TableCell>
                  <TableCell>{prato.nome}</TableCell>
                  <TableCell>{prato.descricao}</TableCell>
                  <TableCell>{prato.tag}</TableCell>
                  <TableCell>
                    <Box
                      component="img"
                      src={prato.imagem}
                      sx={{
                        width: 200,
                        height: 100,
                      }}
                    />
                  </TableCell>
                  <TableCell>{prato.restaurante}</TableCell>
                  <TableCell sx={{ cursor: "pointer" }}>
                    <Link to={`/admin/pratos/${prato.id}`}>[editar]</Link>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => excluirPrato(prato)}
                    >
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
