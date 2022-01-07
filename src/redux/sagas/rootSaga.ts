import {all} from "redux-saga/effects"
import watcherGetCoin from "./handlers/fetchCoin"
import watcherGetCoins from "./handlers/fetchCoins"

export default function* rootSaga() {
	yield all([watcherGetCoins(), watcherGetCoin()])
}
