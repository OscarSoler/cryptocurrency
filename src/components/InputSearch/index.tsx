import "./input-search.scss"
import {useDispatch, useSelector} from "react-redux"
import {filterCoinsByName} from "redux/actions/coinsActions"
import {getSearchTermSelector} from "redux/selectors/coins"
import {AppState} from "redux/reducers"

function InputSearch() {
	const dispatch = useDispatch()

	const searchTerm = useSelector<AppState, string>(getSearchTermSelector)
	return (
		<input
			className="input-filter"
			placeholder="Search"
			type="search"
			value={searchTerm}
			onChange={(e) => dispatch(filterCoinsByName(e.target.value))}
		/>
	)
}

export default InputSearch
