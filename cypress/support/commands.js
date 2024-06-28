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

import 'cypress-file-upload';


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
    // cy.xpath("//span[contains(text(),'Create Expense')]").should('be.visible').click()
    //Your Expenses tab
    // cy.xpath('(//div[@class="left"]//p-dropdown)').should('be.visible')
    // cy.xpath('(//div[@class="right"]//p-button)').should('be.visible')
    // cy.xpath("//input[@placeholder='Global Search']").should('be.visible')
    // cy.xpath("//img[@class='p-element downloadIcon']").should('be.visible')
    // cy.xpath("//div[@class='calendericon']//p-dropdown").should('be.visible')
    // cy.xpath("(//div[@class='from-to-date']//p-calendar)[1]").should('be.visible')
    // cy.xpath("(//div[@class='from-to-date']//p-calendar)[2]").should('be.visible')
    // cy.xpath("//div[@class='calendericon']//p-dropdown").click()
    // cy.xpath("//span[contains(text(),'All')]").should('be.visible')
    // cy.xpath("//span[contains(text(),'Current Month')]").should('be.visible')
    // cy.xpath("//span[contains(text(),'Last Month')]").should('be.visible')
    // cy.xpath("//span[contains(text(),'Custom Period')]").should('be.visible')
    // cy.xpath("//div[@class='calendericon']//p-dropdown").click()
    // cy.xpath('(//div[@class="left"]//p-dropdown)').click()
    // cy.xpath("//span[contains(text(),'All Expenses')]").should('be.visible')
    // cy.xpath("//span[contains(text(),'Approved expenses')]").should('be.visible')
    // cy.xpath("//span[contains(text(),'Pending Approval')]").should('be.visible')
    // cy.xpath("//span[contains(text(),'Rejected Expenses')]").should('be.visible')
    // cy.xpath("//span[contains(text(),'Paid Expenses')]").should('be.visible')
    // cy.xpath('(//div[@class="left"]//p-dropdown)').click()
    // //Your Approvals tab
    // cy.xpath("//span[contains(text(),'Your Approvals')]").click()

    // cy.xpath("(//div[@class='table']//thead)").should('contain',' EXPENSE DATE ')
    // cy.xpath("(//div[@class='table']//thead)").should('contain','  EXPENSE NO  ')
    // cy.xpath("(//div[@class='table']//thead)").should('contain','  CATEGORY   ')
    // cy.xpath("(//div[@class='table']//thead)").should('contain','  SUBMITTER   ')
    // cy.xpath("(//div[@class='table']//thead)").should('contain','  EXPENSE TYPE   ')
    // cy.xpath("(//div[@class='table']//thead)").should('contain','  AMOUNT   ')
    // cy.xpath("(//div[@class='table']//thead)").should('contain','   STATUS    ')
    // cy.xpath("(//div[@class='p-dropdown p-component'])[1]").click()
    // const approvalstatus = [PendingApproval, ApprovedExpenses, RejectedExpenses, PaidExpenses];
    // let PendingApproval = cy.xpath("//li[@aria-label='Pending Approval']")
    // approvalstatus.PendingApproval.click()
    // cy.xpath("(//span[contains(text(),'Pending Approval')])").should('be.visible')
    // let ApprovedExpenses = cy.xpath("//li[@aria-label='Pending Approval']")
    // approvalstatus.ApprovedExpenses.click()
    // cy.xpath("(//span[contains(text(),'Approved Expenses')])").should('be.visible')
    // let RejectedExpenses = cy.xpath("//li[@aria-label='Rejected expenses']")
    // approvalstatus.RejectedExpenses.click()
    // cy.xpath("(//span[contains(text(),'Rejected Expenses')])").should('be.visible')
    // let PaidExpenses = cy.xpath("//li[@aria-label='Paid expenses']")
    // approvalstatus.PaidExpenses.click()
    // cy.xpath("(//span[contains(text(),'Paid Expenses')])").should('be.visible')

    

    
}

function addNewExpense() {
    
    cy.xpath("//span[contains(text(),'Create Expense')]").should('be.visible').click()
    cy.xpath('(//div[@class="right"]//p-button)').should('be.visible').click()
    cy.xpath("//h6[contains(text(),'Add Expense')]").should('be.visible')
    cy.xpath("//label[contains(text(),'Expense Date')]").should('be.visible')
    cy.xpath("(//p-calendar//button)[3]").should('be.visible')
    cy.xpath("//label[contains(text(),'Chargeable')]").should('be.visible')
    cy.xpath("//div[@class='p-checkbox-box']").should('be.visible').should('not.be.checked')

    let chargeable = cy.xpath("//div[@class='p-checkbox-box']").should('be.visible').click()

    cy.xpath("//label[contains(text(),'Reference#')]").should('be.visible')
    cy.xpath("//input[@id='referText']").type('Fin-02116')
    cy.xpath('//label[@class="uploadImage"]').should('be.visible').and('contain','Uploaded file')
    cy.xpath('//div[@class="imageUploadDiv"]').should('be.visible')
    cy.get('input[type="file"]').attachFile('../fixtures/images/SampleJPGImage_500kbmb.jpg');

    if (chargeable) {
        cy.xpath("//label[contains(text(),'Customer')]").should('be.visible')
        cy.xpath('//p-dropdown[@id="customer"]').should('be.visible').click()
        cy.xpath('//div[@class="p-dropdown-filter-container ng-star-inserted"]').type('Dream Technology')
        cy.xpath("//span[contains(text(),'Dream Technology')]").click()
        cy.xpath("//label[contains(text(),'Project')]").should('be.visible')
        cy.xpath('//p-dropdown[@id="project"]').should('be.visible').click()
        cy.xpath('//div[@class="p-dropdown-filter-container ng-star-inserted"]').type('konfluence')
        cy.xpath("//span[contains(text(),'Konfluence')]").click()
    
    }

    cy.xpath("//label[contains(text(),'Category')]").should('be.visible')
    cy.xpath('//p-dropdown[@id="category"]').click()
    cy.xpath('//div[@class="p-dropdown-filter-container ng-star-inserted"]').type('Stationary Expense')
    cy.xpath("//span[contains(text(),'Stationary Expense')]").click()
    cy.xpath("//label[contains(text(),'Amount')]").should('be.visible')
    cy.xpath("//input[@id='currency-india']").type('1000')
    cy.xpath("//label[contains(text(),'Description')]").should('be.visible')
    cy.xpath("//textarea[@id='description']").type('Test Description')
    cy.xpath('//button[@label="Cancel"]').should('be.visible').click()
    cy.xpath("//span[.='Leave this Form']").should('be.visible')
    cy.xpath("//p[contains(text(),'Are you sure want to leave this form?')]").should('be.visible')
    cy.xpath('//button[@label="Leave"]').should('be.visible')
    cy.xpath('//button[@label="Stay"]').should('be.visible').click()
    cy.xpath('//button[@label="Submit"]').should('be.visible').click()
    cy.xpath("//span[.='Submit']").should('be.visible')
    cy.xpath('(//p-dialog[@header="Submit"]//button)[1]').should('be.visible')    
    cy.xpath("//p[contains(text(),'Are you sure want to submit?')]").should('be.visible')
    cy.xpath('(//p-dialog[@header="Submit"]//button)[2]').should('be.visible')
    cy.xpath('(//p-dialog[@header="Submit"]//button)[3]').should('be.visible').click()
    // cy.xpath('//div[@id="toast"]').should('be.visible').and('contain','The expense has been recorded')
}




 
 
// cypress.commands.addAll({login})
 
Cypress.Commands.add('login', login);

Cypress.Commands.add('dashboard', dashboard);

Cypress.Commands.add('addNewExpense', addNewExpense);

