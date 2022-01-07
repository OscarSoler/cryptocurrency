import {Link} from "react-router-dom"
import {parseCurrency} from "utils/parseCurrency"
import "./card.scss"

type CardProps = {
	id: string
	name: string
	symbol: string
	price: number
	percentage: number
	rank: number
}

function Card({id, name, symbol, price, percentage, rank}: CardProps) {
	return (
		<Link className="card" to={`/coins/${id}`}>
			<div className="card__rank">
				<div className="card__rank__number">{rank}</div>
				<div className="card__rank__label">Rank</div>
			</div>

			<div className="card__info">
				<div className="card__info__name">{name}</div>
				<div className="card__info__symbol">{symbol}</div>
			</div>

			<div className="card__values">
				<div className="card__values__price">{parseCurrency(price)}</div>
				<div
					className={`card__values__percentage ${
						Math.sign(percentage) === -1
							? "card__values__percentage--negative"
							: "card__values__percentage--positive"
					}`}
				>
					{percentage}
				</div>
			</div>
		</Link>
	)
}

export default Card
