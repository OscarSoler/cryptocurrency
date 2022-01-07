import "./buttons-filter.scss"
import {useDispatch, useSelector} from "react-redux"
import {filterCoinsByChangePrice} from "redux/actions/coinsActions"
import {AppState} from "redux/reducers"
import {getChangePriceSelector} from "redux/selectors/coins"

function ButtonsFilter() {
	const dispatch = useDispatch()
	const changePrice = useSelector<AppState, string>(getChangePriceSelector)
	return (
		<div className="buttonsFilter">
			<button
				className={`buttonsFilter__button buttonsFilter__button--up ${
					changePrice === "up" ? "active" : ""
				}`}
				onClick={() => dispatch(filterCoinsByChangePrice("up"))}
			>
				Up
			</button>
			<button
				className={`buttonsFilter__button buttonsFilter__button--down ${
					changePrice === "down" ? "active" : ""
				}`}
				onClick={() => dispatch(filterCoinsByChangePrice("down"))}
			>
				Down
			</button>
			<button
				className="buttonsFilter__button"
				onClick={() => dispatch(filterCoinsByChangePrice(""))}
			>
				All
			</button>
		</div>
	)
}

export default ButtonsFilter
