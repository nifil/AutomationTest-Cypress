import login_page from "../support/pageobject/loginpage.cy.js"
const login_data = require("../fixtures/login.json")

describe('Verify Login and Logout User', () => {

  beforeEach(() => {
    cy.visit('https://itera-qa.azurewebsites.net/')
    Cypress.on('uncaught:exception', (error, runnable) => {
        return false
    })
  })

  const LoginPage = new login_page()

  it('Success Login', () => {
    cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
    LoginPage.input_username(login_data.username)
    LoginPage.input_password(login_data.password)
    cy.get('.btn-primary').click()
    cy.get('h3').should('contain.text', login_data.username)
  })

  it('Failed Login Wrong Username and Password', () => {
    cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
    LoginPage.input_username(login_data.username_wrong)
    LoginPage.input_password(login_data.password_wrong)
    cy.get('.btn-primary').click()
    cy.get(LoginPage.error_message).should('contain.text', 'Wrong username or password')
  })

  it('Success Logout', () => {
    cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
    LoginPage.input_username(login_data.username)
    LoginPage.input_password(login_data.password)
    cy.get('.btn-primary').click()
    cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
    cy.url().should('include', '/Login')
  })
})