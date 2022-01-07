/// <reference types="cypress" />

import coinFixture from "../fixtures/coin.json"

describe("Coins", () => {
	beforeEach(() => {
		cy.visit("localhost:3000")
	})

	it("should display the correct number of coins", () => {
		cy.intercept("GET", "https://api.coinlore.net/api/tickers/", {fixture: "coin"}).as(
			"getCoins",
		)
		cy.wait("@getCoins")
		cy.get(".listCoins").should("have.length", coinFixture.data.length)
	})

	it("should show a message when there is an error retrieving the coins", () => {
		cy.intercept("GET", "https://api.coinlore.net/api/tickers/", {
			statusCode: 500,
			body: "error",
		}).as("getCoinsError")
		cy.wait("@getCoinsError")
		cy.get(".listCoins").should("have.length", 0)
		cy.contains("Error")
	})

	it("should show a one coin correctly", () => {
		const coin = coinFixture.data[0]

		cy.get(".card")
			.first()
			.within(() => {
				cy.get(".card__rank__number").should("have.text", coin.rank)
				cy.get(".card__info__name").should("have.text", coin.name)
				cy.get(".card__info__symbol").should("have.text", coin.symbol)
			})
	})

	it("should show the detail of a coin", () => {
		cy.intercept("GET", "https://api.coinlore.net/api/tickers/", {fixture: "coin"}).as(
			"getCoins",
		)
		cy.wait("@getCoins")

		const coin = coinFixture.data[0]

		cy.get(".card").first().click()

		cy.contains(coin.name)
	})
})
