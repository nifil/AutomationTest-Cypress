import signup_page from "../support/pageobject/signuppage.cy.js"
const signup_data = require("../fixtures/signup.json")

describe('Verify User Sign Up', () => {

  beforeEach(() => {
    cy.visit('https://itera-qa.azurewebsites.net/')
  })

  const SignUpPage = new signup_page()

  it('Success Sign Up', () => {
    cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click()
    SignUpPage.input_first_name(signup_data.first_name)
    SignUpPage.input_surname(signup_data.surname)
    SignUpPage.input_epost(signup_data.epost)
    SignUpPage.input_mobile(signup_data.mobile)
    SignUpPage.input_username(signup_data.username)
    SignUpPage.input_password(signup_data.password)
    SignUpPage.input_confirm_password(signup_data.confirm_password)
    cy.get('#submit').click()
    cy.get(SignUpPage.success_message).should('contain.text', 'Registration Successful')
  })

  it('Failed Sign Up with User Exist', () => {
    cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click()
    SignUpPage.input_first_name(signup_data.first_name)
    SignUpPage.input_surname(signup_data.surname)
    SignUpPage.input_epost(signup_data.epost)
    SignUpPage.input_mobile(signup_data.mobile)
    SignUpPage.input_username(signup_data.username)
    SignUpPage.input_password(signup_data.password)
    SignUpPage.input_confirm_password(signup_data.confirm_password)
    cy.get('#submit').click()
    cy.get(SignUpPage.error_message).should('contain.text', 'Username already exist')
  })
})