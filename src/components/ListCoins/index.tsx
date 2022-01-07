import "./list-coins.scss"
import Card from "components/Card"
import {Coin} from "types"
type ListCoinsProps = {
	coins: Coin[]
}
function ListCoins({coins}: ListCoinsProps) {
	return (
		<div className="listCoins">
			{coins &&
				coins.map((coin: Coin) => (
					<Card
						key={coin.id}
						id={coin.id}
						name={coin.name}
						percentage={coin.percent_change_24h}
						price={coin.price_usd}
						rank={coin.rank}
						symbol={coin.symbol}
					/>
				))}
		</div>
	)
}

export default ListCoins
