import {runSaga} from "redux-saga"

import {handleGetCoin} from "../handlers/fetchCoin"
import {FETCH_COIN_SUCCESS} from "redux/actiontypes/coin"

describe("Sagas", () => {
	it("should test makeFetchCoinByIdRequest saga", async () => {
		const idBitcoin = 90

		const dispatched = []
		const initialAction = {id: idBitcoin}

		await runSaga(
			{
				dispatch: (action) => dispatched.push(action),
			},
			handleGetCoin,
			initialAction,
		).toPromise()

		expect(dispatched[0].type).toEqual(FETCH_COIN_SUCCESS)
		expect(dispatched[0].payload.id).toEqual(idBitcoin.toString())
	})
})
