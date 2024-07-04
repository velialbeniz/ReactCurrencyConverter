import React from "react";
import { Grid, Autocomplete, TextField, Skeleton } from "@mui/material";
import { useAxios } from "../hooks/useAxios";

export const SelectCountry = (props) => {
    const {value, setValue, label} = props

	const [data, loaded, error] = useAxios("https://restcountries.com/v3.1/all");

    if(loaded) {
        return (
            <Grid item xs={12} md={3}>
                <Skeleton />
            </Grid>
        )
    }

    if(error) {
        return "Something went wrong"
    }

	const dataFilter = data.filter((item) => "currencies" in item);
	const dataCountries = dataFilter.map((item) => `${item.flag} ${Object.keys(item.currencies)[0]} - ${item.name.common}`);

	return (
		<Grid
			item
			xs={12}
			md={3}>
			<Autocomplete
				options={dataCountries}
				value={value}
                disableClearable
                onChange={(event, newValue) => {
                    setValue(newValue)
                }}
				renderInput={(params) => (
					<TextField
						{...params}
						label={label}
					/>
				)}
			/>
		</Grid>
	);
};
