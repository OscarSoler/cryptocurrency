import {Coin} from "types"
import {
	FETCH_COINS_REQUEST,
	FETCH_COINS_SUCCESS,
	FETCH_COINS_FAILURE,
	FILTER_COINS_BY_NAME,
	FILTER_COINS_BY_CHANGE_PRICE,
} from "../actiontypes/coin"

export const fetchCoinsRequest = () => {
	return {
		type: FETCH_COINS_REQUEST,
	}
}

export const fetchCoinsSuccess = (payload: Coin[]) => ({
	type: FETCH_COINS_SUCCESS,
	payload,
})

export const fetchCoinsFailure = (payload: string) => ({
	type: FETCH_COINS_FAILURE,
	payload,
})

export const filterCoinsByName = (payload: string) => ({
	type: FILTER_COINS_BY_NAME,
	payload,
})

export const filterCoinsByChangePrice = (payload: string) => ({
	type: FILTER_COINS_BY_CHANGE_PRICE,
	payload,
})
