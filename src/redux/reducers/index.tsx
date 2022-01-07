import {combineReducers} from "redux"
import {coinReducer} from "./coinReducer"
import {coinsReducer} from "./coinsReducer"

const rootReducer = combineReducers({
	coins: coinsReducer,
	coin: coinReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
