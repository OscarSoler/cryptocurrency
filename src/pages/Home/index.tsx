import {useEffect} from "react"
import "./home.scss"

import {useSelector, useDispatch} from "react-redux"
import {fetchCoinsRequest} from "redux/actions/coinsActions"
import {Coin} from "types"
import {AppState} from "redux/reducers"
import Loader from "components/Loader"
import {getCoinsSelector, getErrorSelector, getIsLoadingSelector} from "redux/selectors/coins"
import InputSearch from "components/InputSearch"
import ButtonsFilter from "components/ButtonsFilter"
import ListCoins from "components/ListCoins"
import ErrorMessage from "components/ErrorMessage"

function Home() {
	const dispatch = useDispatch()

	const coins = useSelector<AppState, Coin[]>(getCoinsSelector)
	const isLoading = useSelector<AppState, boolean>(getIsLoadingSelector)
	const error = useSelector<AppState, string | null>(getErrorSelector)

	useEffect(() => {
		dispatch(fetchCoinsRequest())
	}, [])

	return (
		<div className="home">
			<h2 className="home__title">Cryptocurrency</h2>

			<div className="home__navfilter">
				<InputSearch />
				<ButtonsFilter />
			</div>

			{isLoading ? (
				<Loader />
			) : error ? (
				<ErrorMessage message={error} />
			) : coins.length <= 0 ? (
				"Empty Coins"
			) : (
				<ListCoins coins={coins} />
			)}
		</div>
	)
}

export default Home
