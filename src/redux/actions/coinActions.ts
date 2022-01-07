import {Coin} from "types"
import {FETCH_COIN_REQUEST, FETCH_COIN_SUCCESS, FETCH_COIN_FAILURE} from "../actiontypes/coin"

export const fetchCoinRequest = (id: number) => {
	return {
		type: FETCH_COIN_REQUEST,
		id,
	}
}

export const fetchCoinSuccess = (payload: Coin) => ({
	type: FETCH_COIN_SUCCESS,
	payload,
})

export const fetchCpinFailure = (payload: string) => ({
	type: FETCH_COIN_FAILURE,
	payload,
})
