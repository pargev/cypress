class LoginPage
{
    getUsername()
    {
        return cy.get('#login_field')
    }
    getPassword()
    {
        return cy.get('#password')
    }
    getSubmitButton()
    {
        return cy.get('.btn')
    }
}
export default LoginPage;