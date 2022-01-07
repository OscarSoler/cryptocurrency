export interface Coin {
	id: string
	name: string
	symbol: string
	price_usd: number
	rank: number
	price_btc: number
	percent_change_24h: number
	percent_change_1h: number
	percent_change_7d: number
	market_cap_usd: number
}

export interface ResponseGenerator {
	config?: any
	data?: any
	headers?: any
	request?: any
	status?: number
	statusText?: string
}
