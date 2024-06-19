import LoginPage from '../support/pages/loginPage';

describe('Amazon Login', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    cy.fixture('login').then((credentials) => {
      this.credentials = credentials;
    });
  });

  it('should log in to Amazon successfully', function() {
    loginPage.visit();
    loginPage.fillUsername(this.credentials.username);
    loginPage.fillPassword(this.credentials.password);
    loginPage.submit();

    // Assert successful login, for example by checking the existence of a logout button or user's name
    cy.get('#nav-link-accountList').should('contain', 'Account');
  });
});
