const { describe } = require("mocha");

describe('Handling DropDowns', () => {
    
    it('Dropdown with Select', () => {
        cy.visit('https://www.zoho.com/commerce/free-demo.html')
        cy.get('#zcf_address_country').select('Italy').should('have.value', 'Italy')
    });

    it('Dropdown without Select', () => {
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Italy').type('{enter}')
        cy.get('#select2-billing_country-container').should('have.text', 'Italy')
    }); 

    it('Auto Suggest Dropdown', () => {
        cy.visit('https://www.wikipedia.org/')
        cy.get('#searchInput').type('Delhi')
        cy.get('.suggestion-title').contains('Delhi University').click()
    })
})     