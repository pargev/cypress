/// <reference types="Cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";


Given('Open github page', ()=>
    {
        cy.visit('/')
    }
)

When("I click click on the Pulls (or Pull Requests) link from the nav menu", ()=>{
    const pullsElem = cy.findInNavBarByText("Pull")
    pullsElem.should("exist")
    pullsElem.should("have.attr", "aria-label", "Pull requests you created")
    pullsElem.click()

})

Then("The system shpuld navigate to the Pulls page", ()=>{
    cy.location('pathname').should('eq', '/pulls')

})