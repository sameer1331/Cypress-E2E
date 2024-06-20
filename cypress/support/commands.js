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

///<reference types="cypress"/>  

///<reference types="cypress-xpath"/>

let credentials= {
    userName : "fin-admin@finstein.ai",
    password : "Finx@12~!"
}
    
 
function login() {
 
    cy.visit ('/')

    cy.xpath("//div[@id='kc-header-wrapper']").should('contain','FINSTEIN')
    cy.xpath("//h1[@id='kc-page-title']").should('contain', 'Sign in to your account')
    cy.get("label[for='username']").should('have.text', 'Username or email')
    cy.get("label[for='password']").should('have.text', 'Password')
    cy.xpath("//input[@id='kc-login']").should('be.visible').and('contain', 'Sign In')
     
 
    cy.xpath('//input[@id="username"]').type(credentials.userName)
 
    cy.xpath('//input[@id="password"]').type(credentials.password)
 
    cy.xpath('//input[@id="kc-login"]').click()
   
}

function dashboard() {
 
    cy.url().should('contain', 'dashboard')
    cy.xpath("//div[@class='nav-bar']").should('be.visible')
    cy.xpath("//img[@class='logo-img']").should('be.visible')
    cy.xpath("//span[contains(text(),'Dashboard')]").should('be.visible')
    cy.xpath("//span[contains(text(),'Your Expenses')]").should('be.visible')
    cy.xpath("//span[contains(text(),'Your Approvals')]").should('be.visible')
    cy.xpath("//span[contains(text(),'Admin Setting')]").should('be.visible')
    cy.xpath('(//div[@class="side-nav"]//img)[1]').should('be.visible')
    cy.xpath('(//div[@class="side-nav"]//img)[2]').should('be.visible')

}
 
 
// cypress.commands.addAll({login})
 
Cypress.Commands.add('login', login);

Cypress.Commands.add('dashboard', dashboard);