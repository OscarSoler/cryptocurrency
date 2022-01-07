import {Coin} from "types"

const url = "https://api.coinlore.net/api/tickers/"

const fetchGetCoins = (): Promise<Coin[]> => {
	return fetch(url, {
		method: "GET",
	})
		.then((response) => response.json())
		.then((data) => {
			const coins: Coin[] = data.data

			return coins.map((coin) => ({
				...coin,
				price_usd: Number(coin.price_usd),
				price_btc: Number(coin.price_btc),
				percent_change_24h: Number(coin.percent_change_24h),
				percent_change_1h: Number(coin.percent_change_1h),
				percent_change_7d: Number(coin.percent_change_7d),
			}))
		})
		.catch((error) => {
			throw error.message
		})
}

export default fetchGetCoins
