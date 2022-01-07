import {parseCurrency} from "utils/parseCurrency"
import "./card-detail.scss"

type CardDetailProps = {
	name: string
	symbol: string
	price_usd: number
	rank: number
	price_btc: number
	percent_change_24h: number
	percent_change_1h: number
	percent_change_7d: number
	market_cap_usd: number
}
function CardDetail({
	name,
	symbol,
	price_usd,
	price_btc,
	rank,
	percent_change_1h,
	percent_change_24h,
	percent_change_7d,
	market_cap_usd,
}: CardDetailProps) {
	return (
		<div className="card-detail">
			<div className="card-detail__header">
				<div>
					<div className="card-detail__name">{name}</div>
					<div className="card-detail__symbol">{symbol}</div>
				</div>

				<div>
					<div className="card-detail__price">{parseCurrency(price_usd || 0)}</div>
					<div
						className={`card__values__percentage ${
							Math.sign(percent_change_24h) === -1
								? "card__values__percentage--negative"
								: "card__values__percentage--positive"
						}`}
					>
						{percent_change_24h}
					</div>
				</div>
			</div>

			<div className="card-detail__body">
				<div className="card-detail__item">
					<strong>Rank:</strong>
					<span>{rank}</span>
				</div>

				<div className="card-detail__item">
					<strong>Price Bitcoin:</strong>
					<span>{price_btc}</span>
				</div>

				<div className="card-detail__item">
					<strong>Market Cap Usd:</strong>
					<span>{market_cap_usd}</span>
				</div>

				<div className="card-detail__item">
					<strong>Percent Change 1h:</strong>
					<span>{percent_change_1h}</span>
				</div>

				<div className="card-detail__item">
					<strong>Percent Change 24h:</strong>
					<span>{percent_change_24h}</span>
				</div>

				<div className="card-detail__item">
					<strong>Percent Change 7:</strong>
					<span>{percent_change_7d}</span>
				</div>
			</div>
		</div>
	)
}

export default CardDetail
