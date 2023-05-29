import dashboard_page from "../support/pageobject/dashboardpage.cy.js"
import login_page from "../support/pageobject/loginpage.cy.js"
const dashboard_data = require("../fixtures/dashboard.json")
const login_data = require("../fixtures/login.json")

describe('Verify Dashboard Page', () => {

  const DashboardPage = new dashboard_page()
  const LoginPage = new login_page()

  beforeEach(() => {
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
    LoginPage.input_username(login_data.username)
    LoginPage.input_password(login_data.password)
    cy.get('.btn-primary').click()
    Cypress.on('uncaught:exception', (error, runnable) => {
        return false
    })
  })

  it('Success Create', () => {
    cy.get(DashboardPage.createBtn).click()
    DashboardPage.input_name(dashboard_data.name)
    DashboardPage.input_company(dashboard_data.company)
    DashboardPage.input_address(dashboard_data.address)
    DashboardPage.input_city(dashboard_data.city)
    DashboardPage.input_phone(dashboard_data.phone)
    DashboardPage.input_email(dashboard_data.email)
    cy.get('.col-md-offset-2 > .btn').click()
    DashboardPage.input_search(dashboard_data.name)
    cy.get('.container > div > form > .btn').click()
    cy.get('tbody > :nth-child(2) > :nth-child(1)').should('contain.text', dashboard_data.name)
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('contain.text', dashboard_data.company)
  })

  it('Success Edit', () => {
    DashboardPage.input_search(dashboard_data.name)
    cy.get('.container > div > form > .btn').click()
    cy.get(':nth-child(2) > :nth-child(7) > .btn-outline-primary').click()
    cy.get('#Name').invoke('val', '')
    cy.get('#Company').invoke('val', '')
    DashboardPage.input_name(dashboard_data.name_edit)
    DashboardPage.input_company(dashboard_data.company_edit)
    cy.get('.col-md-offset-2 > .btn').click()
    DashboardPage.input_search(dashboard_data.name_edit)
    cy.get('.container > div > form > .btn').click()
    cy.get('tbody > :nth-child(2) > :nth-child(1)').should('contain.text', dashboard_data.name_edit)
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('contain.text', dashboard_data.company_edit)
  })

  it('Success View Detail', () => {
    DashboardPage.input_search(dashboard_data.name)
    cy.get(DashboardPage.searchBtn).click()
    cy.get(DashboardPage.detailsBtn).click()
    cy.get('.dl-horizontal > :nth-child(2)').should('contain.text', dashboard_data.name_edit)
    cy.get('.dl-horizontal > :nth-child(4)').should('contain.text', dashboard_data.company_edit)
  })

  it('Success Delete', () => {
    DashboardPage.input_search(dashboard_data.name_edit)
    cy.get('.container > div > form > .btn').click()
    cy.get(':nth-child(2) > :nth-child(7) > .btn-outline-danger').click()
    cy.get('.btn-outline-danger').click()
    DashboardPage.input_search(dashboard_data.name_edit)
    cy.get('.container > div > form > .btn').click()
    cy.get('td').should('contain.text', 'No Match')
  })
})