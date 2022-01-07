export function parseCurrency(currencyValue: number) {
	return currencyValue.toLocaleString("en-US", {
		style: "currency",
		currency: "USD",
	})
}
