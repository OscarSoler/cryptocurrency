import {Coin} from "types"
import {FETCH_COIN_REQUEST, FETCH_COIN_SUCCESS, FETCH_COIN_FAILURE} from "../actiontypes/coin"

export interface CoinsState {
	coin: Coin
	isLoading: boolean
	error: null | string
}

const initialState: CoinsState = {
	coin: {} as Coin,
	isLoading: false,
	error: null,
}

type ActionGetCoin = {type: typeof FETCH_COIN_REQUEST; payload: boolean}
type ActionSuccess = {type: typeof FETCH_COIN_SUCCESS; payload: Coin}
type ActionFailed = {type: typeof FETCH_COIN_FAILURE; payload: string}

type Actions = ActionGetCoin | ActionSuccess | ActionFailed

export const coinReducer = (state: CoinsState = initialState, action: Actions) => {
	switch (action.type) {
		case FETCH_COIN_REQUEST:
			return {
				...state,
				isLoading: true,
			}
		case FETCH_COIN_SUCCESS:
			return {
				...state,
				isLoading: false,
				coin: action.payload,
			}
		case FETCH_COIN_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			}
		default:
			return state
	}
}
