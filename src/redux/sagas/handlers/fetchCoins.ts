import {call, put, takeEvery} from "redux-saga/effects"
import {ResponseGenerator} from "types"
import {FETCH_COINS_REQUEST, FETCH_COINS_SUCCESS, FETCH_COINS_FAILURE} from "../../actiontypes/coin"
import fetchGetCoins from "../requests/fetchCoins"

export function* handleGetCoins() {
	try {
		const response: ResponseGenerator = yield call(fetchGetCoins)
		yield put({type: FETCH_COINS_SUCCESS, payload: response})
	} catch (error) {
		yield put({type: FETCH_COINS_FAILURE, payload: error})
	}
}

function* watcherGetCoins() {
	yield takeEvery(FETCH_COINS_REQUEST, handleGetCoins)
}

export default watcherGetCoins
