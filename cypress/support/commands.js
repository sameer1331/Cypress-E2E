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

//<reference types="cypress"/>  

//<reference types="cypress-xpath"/>

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
    //UI-Test
    // cy.url().should('contain', 'dashboard')
    cy.xpath("//div[@class='nav-bar']").should('be.visible')
    cy.xpath("//img[@class='logo-img']").should('be.visible')
    cy.xpath("//span[contains(text(),'Dashboard')]").should('be.visible')
    cy.xpath("//span[contains(text(),'Your Expenses')]").should('be.visible')
    cy.xpath("//span[contains(text(),'Your Approvals')]").should('be.visible')
    cy.xpath("//span[contains(text(),'Admin Setting')]").should('be.visible')
    cy.xpath('(//div[@class="side-nav"]//img)[1]').should('be.visible')
    cy.xpath('(//div[@class="side-nav"]//img)[2]').should('be.visible')
    cy.xpath('(//div[@class="calender-row"]//p-calendar)[1]').should('be.visible')
    cy.xpath('(//div[@class="calender-row"]//p-calendar)[2]').should('be.visible')
    cy.xpath("//div[@class='p-dropdown p-component']").should('be.visible').click()
    cy.xpath("//span[contains(text(),'My Expenses')]").should('be.visible')
    cy.xpath("//span[contains(text(),'My Approvals')]").should('be.visible')

    cy.xpath('(//div[@class="cards"]//div)[1]').should('be.visible').and('contain','Total')
    cy.xpath('(//div[@class="cards"]//div)[2]').should('be.visible').and('contain','Pending Approval')
    cy.xpath('(//div[@class="cards"]//div)[3]').should('be.visible').and('contain','Approved')
    cy.xpath('(//div[@class="cards"]//div)[4]').should('be.visible').and('contain','Paid')
    cy.xpath('(//div[@class="cards"]//div)[5]').should('be.visible').and('contain','Rejected')
    cy.xpath("//span[contains(text(),'Create Expense')]").should('be.visible').click()
    //Your Expenses tab
    cy.xpath('(//div[@class="left"]//p-dropdown)').should('be.visible')
    cy.xpath('(//div[@class="right"]//p-button)').should('be.visible')
    cy.xpath("//input[@placeholder='Global Search']").should('be.visible')
    cy.xpath("//img[@class='p-element downloadIcon']").should('be.visible')
    cy.xpath("//div[@class='calendericon']//p-dropdown").should('be.visible')
    cy.xpath("(//div[@class='from-to-date']//p-calendar)[1]").should('be.visible')
    cy.xpath("(//div[@class='from-to-date']//p-calendar)[2]").should('be.visible')
    cy.xpath("//div[@class='calendericon']//p-dropdown").click()
    cy.xpath("//span[contains(text(),'All')]").should('exist')
    cy.xpath("//span[contains(text(),'Current Month')]").should('exist')
    cy.xpath("//span[contains(text(),'Last Month')]").should('exist')
    cy.xpath("//span[contains(text(),'Custom Period')]").should('exist')
    cy.xpath("//div[@class='calendericon']//p-dropdown").click()
    cy.xpath('(//div[@class="left"]//p-dropdown)').click()
    cy.xpath("//span[contains(text(),'All Expenses')]").should('exist')
    cy.xpath("//span[contains(text(),'Approved expenses')]").should('exist')
    cy.xpath("//span[contains(text(),'Pending Approval')]").should('exist')
    cy.xpath("//span[contains(text(),'Rejected Expenses')]").should('exist')
    cy.xpath("//span[contains(text(),'Paid Expenses')]").should('exist')
    cy.xpath('(//div[@class="left"]//p-dropdown)').click()
    //Your Approvals tab
    cy.xpath("//span[contains(text(),'Your Approvals')]").click()

    cy.xpath("(//div[@class='table']//thead)").should('contain',' EXPENSE DATE ')
    cy.xpath("(//div[@class='table']//thead)").should('contain','  EXPENSE NO  ')
    cy.xpath("(//div[@class='table']//thead)").should('contain','  CATEGORY   ')
    cy.xpath("(//div[@class='table']//thead)").should('contain','  SUBMITTER   ')
    cy.xpath("(//div[@class='table']//thead)").should('contain','  EXPENSE TYPE   ')
    cy.xpath("(//div[@class='table']//thead)").should('contain','  AMOUNT   ')
    cy.xpath("(//div[@class='table']//thead)").should('contain','   STATUS    ')
    cy.xpath("(//div[@class='p-dropdown p-component'])[1]").click()
    const approvalstatus = [PendingApproval, ApprovedExpenses, RejectedExpenses, PaidExpenses];
    let PendingApproval = cy.xpath("//li[@aria-label='Pending Approval']")
    approvalstatus.PendingApproval.click()
    cy.xpath("(//span[contains(text(),'Pending Approval')])").should('exist')
    let ApprovedExpenses = cy.xpath("//li[@aria-label='Pending Approval']")
    approvalstatus.ApprovedExpenses.click()
    cy.xpath("(//span[contains(text(),'Approved Expenses')])").should('exist')
    let RejectedExpenses = cy.xpath("//li[@aria-label='Rejected expenses']")
    approvalstatus.RejectedExpenses.click()
    cy.xpath("(//span[contains(text(),'Rejected Expenses')])").should('exist')
    let PaidExpenses = cy.xpath("//li[@aria-label='Paid expenses']")
    approvalstatus.PaidExpenses.click()
    cy.xpath("(//span[contains(text(),'Paid Expenses')])").should('exist')

    






    
}
 
 
// cypress.commands.addAll({login})
 
Cypress.Commands.add('login', login);

Cypress.Commands.add('dashboard', dashboard);