describe('Test Suite', () => {


    it('Verify Title-Positive', () => {
        cy.visit('https://www.amazon.in')
        cy.url().should('include','amazon')
        
    }),

    it('CSS-Selector', () => {
        cy.visit('https://www.amazon.in')
        cy.get('#twotabsearchtextbox').type('macbook air')
        cy.get('#nav-search-submit-button').click()
        cy.get('.a-color-state.a-text-bold').contains('macbook air')
        cy.get('#twotabsearchtextbox').clear().type('iphone 15 plus')
        cy.get('#nav-search-submit-button').click()
        cy.get('.a-color-state.a-text-bold').contains('iphone 15 plus')
          
    })

}),



describe('UIlicious Test Automation Page', () => {
        
    beforeEach(() => {
          cy.visit('https://uilicious.com/blog/testing-tips/test-automation/'); 
    });
      
        // Functional Tests
        it('should navigate to the correct page when clicking on the Blog Home link', () => {
          cy.contains('Blog Home').click();
          cy.url().should('include', '/blog-home'); 
        });
      
        it('should navigate to the correct page when clicking on the "Get started" button', () => {
          cy.contains('Get started').click();
          cy.url().should('include', '/get-started'); 
        });
      
        it('should navigate to the corresponding blog post when clicking on a blog post link', () => {
          cy.get('.blog-post-link').first().click(); // Adjust the selector
          cy.url().should('include', '/blog-post'); // Adjust the URL accordingly
        });
      
        // UI Tests
        it('should load the page with the correct title', () => {
          cy.title().should('eq', 'Test Automation - UIlicious'); // Adjust the title accordingly
        });
      
        it('should display the "Test Automation" header', () => {
          cy.contains('Test Automation').should('be.visible');
        });
      
        it('should display the "Get started" button', () => {
          cy.contains('Get started').should('be.visible');
        });
      
        it('should display blog post previews', () => {
          cy.get('.blog-post-preview').should('have.length.at.least', 1); // Adjust the selector
        });
      
        it('should display the navigation menu items', () => {
          cy.contains('Blog Home').should('be.visible');
          cy.contains('News and Updates').should('be.visible');
          cy.contains('Best Practices').should('be.visible');
          cy.contains('Testing Tips').should('be.visible');
          cy.contains('Engineering').should('be.visible');
        });
      
        // Responsive Design Test
        it('should be responsive', () => {
          cy.viewport('iphone-6');
          cy.contains('Test Automation').should('be.visible');
          cy.viewport('ipad-2');
          cy.contains('Test Automation').should('be.visible');
          cy.viewport('macbook-15');
          cy.contains('Test Automation').should('be.visible');
        });
      });
      


















    
