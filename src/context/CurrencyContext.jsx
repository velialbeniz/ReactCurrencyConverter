import { createContext, useState } from "react";

export const CurrencyContext = createContext();

const CurrencyProvider = ({ children }) => {
	const [from, setFrom] = useState("🇹🇷 TRY - Turkey");
	const [to, setTo] = useState("🇺🇸 USD - United States");
    const [firstAmount, setFirstAmount] = useState("")

	const value = {
		from,
		setFrom,
		to,
		setTo,
        firstAmount,
        setFirstAmount
	};
	return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
};

export default CurrencyProvider;
