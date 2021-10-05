/// <reference types="Cypress" />

describe("Pulls page test suite", () => {
    it("Test the Pulls page navigation", () => {
        const pullsElem = cy.findInNavBarByText("Pull")
        pullsElem.should("exist")
        pullsElem.should("have.attr", "aria-label", "Pull requests you created")
        pullsElem.click()
        cy.location('pathname').should('eq', '/pulls')
    })
})

describe("Issues page test suite", () => {
    it("Test the Issues page navigation", () => {
        const issuesElement = cy.findInNavBarByText("Issues")
        issuesElement.should("exist")
        issuesElement.should("have.attr", "aria-label", "Issues you created")
        issuesElement.click()
        cy.location('pathname').should('eq', '/issues')
    })
})


describe("Marketplace page test suite", () => {
    it("Test the Marketplace page navigation", () => {
        const marketplaceElement = cy.findInNavBarByText("Marketplace")
        marketplaceElement.should("exist")
        marketplaceElement.should("be.visible")
        marketplaceElement.should("have.attr", "data-octo-click", "marketplace_click")
        marketplaceElement.click()
        cy.location('pathname').should('eq', '/marketplace')
    })
})

describe("Explore page test suite", () => {
    it("Test the Explore page navigation", () => {
        const exploreElement = cy.findInNavBarByText("Explore")
        exploreElement.should("exist")
        exploreElement.should("be.visible")
        exploreElement.should("have.attr", "href", "/explore")
        exploreElement.click()
        cy.location('pathname').should('eq', '/explore')
    })
})
