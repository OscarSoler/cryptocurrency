import {runSaga} from "redux-saga"

import {handleGetCoins} from "../handlers/fetchCoins"
import {FETCH_COINS_SUCCESS} from "redux/actiontypes/coin"

describe("Sagas", () => {
	it("should test makeFetchCoinsRequest saga", async () => {
		const lengthCoins = 100

		const dispatched = []
		await runSaga(
			{
				dispatch: (action) => dispatched.push(action),
			},
			handleGetCoins,
		).toPromise()

		expect(dispatched[0].type).toEqual(FETCH_COINS_SUCCESS)
		expect(dispatched[0].payload.length).toEqual(lengthCoins)
	})
})
