describe('UIlicious Test Automation Page', () => {
        
    // beforeEach(() => {
    //       cy.visit('https://uilicious.com/blog/practicing-automation-testing-with-demo-sites/'); 
    // });
      
        // Ui-Test
        it('should load the page with the correct title', () => {
            cy.visit('https://uilicious.com/')
            cy.title().should('eq', 'uilicious'); 
          });

        it('should display the navigation menu items', () => {
            cy.get('.navbar-brand').should('be.visible');
            cy.contains('Why UIlicious?').should('be.visible');
            cy.contains('Products').should('be.visible');
            cy.contains('Pricing').should('be.visible');
            cy.contains('Services').should('be.visible');
            cy.contains('Learn').should('be.visible');
            cy.contains('Docs').should('be.visible');
          });  

        it('should display the login link and sign-up button', () =>{
            cy.get('#navbar-login-btn-desktop').should('be.visible');
            cy.get('#navbar-sign-up-btn').should('be.visible');
        });

        //Functional Test
        it('should show the list of options when clicks on Why UIlicious tab', () =>{
            cy.contains('Why Uilicious?').click();
            cy.xpath('//ul[@class="dropdown-menu show"]').should('be.visible');
        });

        it('should show the list of options when clicks on Products tab', () =>{
            cy.contains('Products').click();
            cy.xpath('//ul[@class="dropdown-menu show"]').should('be.visible');
        });

        it('should navigate to the respective page when clicks on Pricing tab', () =>{
            cy.contains('Pricing').click();
            cy.url().should('include', '/pricing');
        });

        it('should navigate back to the homepage when clicks on the Uilicious Logo', () =>{
            cy.get('.navbar-brand').click();
            cy.url().should('include', '/uilicious');
        });

        it('should navigate to the respective page when clicks on Services tab', () =>{
            cy.contains('Services').click();
            cy.url().should('include', '/services');
        }); 

        it('should show the drop-down menu when clicks on Learn tab', () =>{
            cy.contains('Learn').click();
            cy.xpath('//ul[@class="dropdown-menu show"]').should('be.visible');         
        });

        it('should navigate to the respective page when clicks on Docs tab', () =>{
            cy.contains('Docs').click();
            cy.url().should('include', '/docs');
        });

    }),

    describe('UIlicious Footer Tests', () => {
        beforeEach(() => {
          // Visit the target website
          cy.visit('https://uilicious.com/'); 
        });
      
        // Functional Tests
        it('should navigate to the correct pages when footer links are clicked', () => {
          // Pricing link
          cy.contains('Pricing').click();
          cy.url().should('include', '/pricing');
          cy.go('back');
      
          // Case Studies link
          cy.contains('Case Studies').click();
          cy.url().should('include', '/case-studies'); 
          cy.go('back');
      
          // Terms of Service link
          cy.contains('Terms of Service').click();
          cy.url().should('include', '/terms'); 
          cy.go('back');
      
          // Privacy link
          cy.contains('Privacy').click();
          cy.url().should('include', '/privacy'); 
          cy.go('back');
      
          // About Us link
          cy.contains('About Us').click();
          cy.url().should('include', '/about'); 
          cy.go('back');
      
          // Blog link
          cy.contains('Blog').click();
          cy.url().should('include', '/blog'); 
        });
      
        it('should navigate to the correct external pages when social media icons are clicked', () => {
          // LinkedIn icon
          cy.get('a[href*="linkedin.com"]').should('have.attr', 'target', '_blank');
      
          // Facebook icon
          cy.get('a[href*="facebook.com"]').should('have.attr', 'target', '_blank');
      
          // Twitter icon
          cy.get('a[href*="twitter.com"]').should('have.attr', 'target', '_blank');
        });
      
        it('should redirect to the homepage when clicking on the UIlicious logo', () => {
          // Click on the UIlicious logo in the footer
          cy.get('.navbar-brand').click(); 
          cy.url().should('eq', 'https://uilicious.com/'); 
        });
      
        // UI Tests
        it('should display all footer elements', () => {
          // Check that each footer section is visible
          cy.contains('Product').should('be.visible');
          cy.contains('Learn').should('be.visible');
          cy.contains('Explore Examples').should('be.visible');
          cy.contains('Support and Services').should('be.visible');
          cy.contains('Company').should('be.visible');
        });
      
        it('should display the footer text correctly', () => {
          cy.contains('© 2023 UIlicious').should('be.visible');
        });
      
    })
      
        
       



     
