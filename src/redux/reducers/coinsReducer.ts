import {Coin} from "types"
import {
	FETCH_COINS_REQUEST,
	FETCH_COINS_SUCCESS,
	FETCH_COINS_FAILURE,
	FILTER_COINS_BY_NAME,
	FILTER_COINS_BY_CHANGE_PRICE,
} from "../actiontypes/coin"

export interface CoinsState {
	coins: Coin[]
	isLoading: boolean
	error: null | string
	searchTerm: string
	changePrice: string
}

const initialState: CoinsState = {
	coins: [] as Coin[],
	isLoading: false,
	error: null,
	searchTerm: "",
	changePrice: "",
}

type ActionGetCoins = {type: typeof FETCH_COINS_REQUEST; payload: boolean}
type ActionSuccess = {type: typeof FETCH_COINS_SUCCESS; payload: Coin[]}
type ActionFailed = {type: typeof FETCH_COINS_FAILURE; payload: string | null}
type ActionFilterByName = {type: typeof FILTER_COINS_BY_NAME; payload: string}
type ActionFilterByChangePrice = {type: typeof FILTER_COINS_BY_CHANGE_PRICE; payload: string}

type Actions =
	| ActionGetCoins
	| ActionSuccess
	| ActionFailed
	| ActionFilterByName
	| ActionFilterByChangePrice

export const coinsReducer = (state: CoinsState = initialState, action: Actions) => {
	switch (action.type) {
		case FETCH_COINS_REQUEST:
			return {
				...state,
				isLoading: true,
			}
		case FETCH_COINS_SUCCESS:
			return {
				...state,
				isLoading: false,
				coins: action.payload,
			}
		case FETCH_COINS_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			}
		case FILTER_COINS_BY_NAME: {
			return {
				...state,
				searchTerm: action.payload,
			}
		}

		case FILTER_COINS_BY_CHANGE_PRICE: {
			// const type = action.payload
			// let coins = state.coins
			// if (type === "up") {
			// 	coins = state.filteredCoins.filter(
			// 		(coin) => Math.sign(coin.percent_change_24h) !== -1,
			// 	)
			// } else if (type === "down") {
			// 	coins = state.filteredCoins.filter(
			// 		(coin) => Math.sign(coin.percent_change_24h) === -1,
			// 	)
			// }
			return {
				...state,
				changePrice: action.payload,
			}
		}

		default:
			return state
	}
}
