import React from "react";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { Grid, Button } from "@mui/material";
import { CurrencyContext } from "../context/CurrencyContext";
import { useContext } from "react";

export const SwitchCurrency = () => {

    const { from, setFrom, to, setTo } = useContext(CurrencyContext);

    const handleSwitch = () => {
        setFrom(to)
        setTo(from)
    }
	return (
		<Grid item xs={12} md="auto" >
			<Button onClick={handleSwitch} sx={{
                borderRadius: 1,
                height: "100%"
            }}> 
				<CompareArrowsIcon sx={{ fontSize: 30}}/>
			</Button>
		</Grid>
	);
};
