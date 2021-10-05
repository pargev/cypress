// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import LoginPage from "../support/pageObjects/loginPage"

Cypress.Commands.add('findInNavBarByText', ($text) => {
    return cy.get("header nav a").contains($text)
}
)

Cypress.Commands.add("loginIfNeeded", () => {
    const loginPage = new LoginPage()
    cy.visit("/login")
    cy.getCookie("logged_in").then((cookie) => {
        if (cookie.value !== "yes") {
            {
                loginPage.getUsername().type(Cypress.env("username"), { log: false })
                loginPage.getPassword().type(Cypress.env("password"), { log: false })
                loginPage.getSubmitButton().click()

            }
        }
    })
    cy.getCookie("logged_in").then((cookie) => {
        expect(cookie.value).to.equal('yes');
    })
    Cypress.Cookies.defaults({
        preserve: ["user_session", "_gh_sess"]
    })
})

Cypress.Commands.add("logout", ()=>{
    Cypress.Cookies.defaults({
        preserve: []
    })
})


before(function () {
    cy.fixture("data").then(function (data) {
        this.data = data
    })
    cy.loginIfNeeded()
    cy.writeFile("support/cookies.json", cy.getCookie("_gh_sess"))

})

// after(function () {
//     cy.logout()
// })