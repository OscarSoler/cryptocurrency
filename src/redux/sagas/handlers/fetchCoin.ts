import {call, put, takeEvery} from "redux-saga/effects"
import {ResponseGenerator} from "types"
import {FETCH_COIN_REQUEST, FETCH_COIN_SUCCESS, FETCH_COIN_FAILURE} from "../../actiontypes/coin"
import fetchGetCoin from "../requests/fetchCoin"

export function* handleGetCoin({id}: {id: number}) {
	try {
		const response: ResponseGenerator = yield call(fetchGetCoin, id)

		yield put({type: FETCH_COIN_SUCCESS, payload: response})
	} catch (error) {
		yield put({type: FETCH_COIN_FAILURE, payload: error})
	}
}

function* watcherGetCoin() {
	yield takeEvery<any>(FETCH_COIN_REQUEST, handleGetCoin)
}

export default watcherGetCoin
