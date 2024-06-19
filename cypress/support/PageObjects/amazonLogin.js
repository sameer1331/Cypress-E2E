class LoginPage {
    visit() {
      cy.visit('https://www.amazon.com/ap/signin');
    }
  
    fillUsername(username) {
      cy.get('#ap_email').type(username);
    }
  
    fillPassword(password) {
      cy.get('#ap_password').type(password);
    }
  
    submit() {
      cy.get('#signInSubmit').click();
    }
  }
  
  export default LoginPage;
  