import {AppState} from "redux/reducers"
import {createSelector} from "reselect"
import {Coin} from "types"

const getIsLoading = (state: AppState) => state.coins.isLoading

const getCoins = (state: AppState) => state.coins.coins

const getError = (state: AppState) => state.coins.error

const getSearchTerm = (state: AppState) => state.coins.searchTerm

const getChangePrice = (state: AppState) => state.coins.changePrice

export const getCoinsSelector = createSelector(
	[getCoins, getSearchTerm, getChangePrice],
	(coins, searchTerm, changePrice) => {
		return coins
			.filter((coin: Coin) => coin.name.toLowerCase().startsWith(searchTerm.toLowerCase()))
			.filter((coin) => {
				if (changePrice === "up") {
					return Math.sign(coin.percent_change_24h) !== -1
				} else if (changePrice === "down") {
					return Math.sign(coin.percent_change_24h) === -1
				} else {
					return true
				}
			})
	},
)

export const getIsLoadingSelector = createSelector(getIsLoading, (isLoading) => isLoading)

export const getErrorSelector = createSelector(getError, (error) => error)

export const getSearchTermSelector = createSelector(getSearchTerm, (searchTerm) => searchTerm)

export const getChangePriceSelector = createSelector(getChangePrice, (changePrice) => changePrice)
