import { Container, Typography, Grid, Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { InputAmount } from "./components/InputAmount";
import { SelectCountry } from "./components/SelectCountry";
import { SwitchCurrency } from "./components/SwitchCurrency";
import { CurrencyContext } from "./context/CurrencyContext";
import axios from "axios";

function App() {
	const { from, setFrom, to, setTo, firstAmount, setFirstAmount } = useContext(CurrencyContext);

	const [resultCurrency, setResultCurrency] = useState(0);
	const codeFrom = from.split(" ")[1];
	const codeTo = to.split(" ")[1];

	useEffect(() => {
		if (firstAmount) {
			axios("https://api.freecurrencyapi.com/v1/latest", {
				params: {
					apikey: import.meta.env.VITE_API_KEY,
					base_currency: codeFrom,
					currencies: codeTo,
				},
			})
				.then((res) => setResultCurrency(res.data.data[codeTo]))
				.catch((err) => console.log("err", err));
		}
	}, [firstAmount, from, to]);

	const style = {
		marginTop: "10rem",
		boxShadow: 3,
		backdropFilter: "blur(10px)",
		padding: "10px 40px",
		textAlign: "center",
		minHeight: "20rem",
		borderRadius: 2,
		position: "relative",
	};

	return (
		<Container
			maxWidth="md"
			sx={style}>
			<Typography
				variant="h5"
				sx={{ marginBottom: "2rem" }}>
				Get Accurate Conversions
			</Typography>
			<Grid
				container
				spacing={2}>
				<InputAmount />
				<SelectCountry
					value={from}
					setValue={setFrom}
					label="from"
				/>
				<SwitchCurrency />
				<SelectCountry
					value={to}
					setValue={setTo}
					label="to"
				/>
			</Grid>

			{firstAmount ? (
				<Box sx={{ textAlign: "left", marginTop: "1rem" }}>
					<Typography>
						{firstAmount} {from} =
					</Typography>
					<Typography
						variant="h5"
						sx={{ marginTop: "5px", fontWeight: "bold" }}>
						{resultCurrency * firstAmount} {to}
					</Typography>
				</Box>
			) : null}
		</Container>
	);
}

export default App;
