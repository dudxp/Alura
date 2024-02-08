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
	ThemeProvider
} from "@mui/material";
import axios from "axios";
import AdministrativoFormulario from "../Formulario";
import { DarkTheme } from "../../../types/DarkTheme";
import { StyledTableCell, StyledTableRow } from "../../../types/StyledTableComponents";

export default function AdministrativoRestaurante() {
	const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);
	const [restauranteAtualizacao, setRestauranteAtualizacao] = useState<IRestaurante | undefined>();

	useEffect(() => {
		axios.get("http://localhost:8000/api/v2/restaurantes/")
			.then((resposta) => {
				setRestaurantes(resposta.data);
		});
	}, []);

	const styles = {
		button: {
			background: "lightskyblue",
			'&:hover': {
				background: "blue",
			}
		}
	}

	return (
		<ThemeProvider theme={DarkTheme}>
			<AdministrativoFormulario
				setRestaurantes={setRestaurantes}
				restaurantes={restaurantes} 
				setRestauranteAtualizacao={setRestauranteAtualizacao}
				restauranteAtualizacao={restauranteAtualizacao}
			/>
			<h3>Tabela de restaurantes:</h3>
			<TableContainer component={Paper}>
				<Table>
					<TableHead>
						<TableRow>
							<StyledTableCell>Id</StyledTableCell>
							<StyledTableCell>Nome</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{restaurantes.map((restaurante) => {
							return (
								<StyledTableRow
									key={restaurante.id}
									sx={{
										":hover":{
											bgcolor: "grey"
										},
										cursor: "pointer"
									}}
									onClick={() => setRestauranteAtualizacao(restaurante)}
								>
									<TableCell>{restaurante.id}</TableCell>
									<TableCell>{restaurante.nome}</TableCell>
								</StyledTableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</ThemeProvider>
	);
}
