describe('Login Page', () => {
    it('logs into the Finx page', () => {
        
         cy.login();
         cy.dashboard();
         cy.addNewExpense();

    })

})