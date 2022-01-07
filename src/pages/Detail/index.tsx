import CardDetail from "components/CardDetail"
import ErrorMessage from "components/ErrorMessage"
import Loader from "components/Loader"
import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {Link, useParams} from "react-router-dom"
import {fetchCoinRequest} from "redux/actions/coinActions"
import {AppState} from "redux/reducers"
import {Coin} from "types"

type DetailParams = {
	id: string
}

function Detail() {
	const {id} = useParams<DetailParams>()

	const dispatch = useDispatch()

	const coin = useSelector<AppState, Coin>((state) => state.coin.coin)
	const isLoading = useSelector<AppState, boolean>((state) => state.coin.isLoading)
	const error = useSelector<AppState, string | null>((state) => state.coin.error)

	useEffect(() => {
		dispatch(fetchCoinRequest(Number(id)))
	}, [id])

	return (
		<>
			<Link to="/">Volver</Link>

			{isLoading ? (
				<Loader />
			) : error ? (
				<ErrorMessage message={error} />
			) : (
				coin && (
					<>
						<h1 className="title">{coin.name}</h1>
						<CardDetail
							market_cap_usd={coin.market_cap_usd}
							name={coin.name}
							percent_change_1h={coin.percent_change_1h}
							percent_change_24h={coin.percent_change_24h}
							percent_change_7d={coin.percent_change_7d}
							price_btc={coin.price_btc}
							price_usd={coin.price_usd}
							rank={coin.rank}
							symbol={coin.symbol}
						/>
					</>
				)
			)}
		</>
	)
}

export default Detail
