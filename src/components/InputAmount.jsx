import React from "react";
import { Grid, TextField, InputAdornment } from "@mui/material";
import { CurrencyContext } from "../context/CurrencyContext";
import { useContext } from "react";

export const InputAmount = () => {

    const {firstAmount, setFirstAmount} = useContext(CurrencyContext)
	return (
		<Grid item xs={12} md>
			<TextField
                value={firstAmount}
                onChange={(e) => setFirstAmount(e.target.value)}
				label="Amount"
				fullWidth
				InputProps={{
					type: "number",
					startAdornment: <InputAdornment position="start">$</InputAdornment>,
				}}
			/>
		</Grid>
	);
};
