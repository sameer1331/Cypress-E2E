import LoginPage from '../PageObjects/LoginPage.js';

describe('Login with POM', () => {
   it.only('Login test', () => {
      cy.visit('https://uilicious.com/')
      cy.fixture('UIliciousLoginCred').then((data) => {

          const login = new LoginPage();
          login.setusername(data.username)
          login.setPassword(data.password)
          login.clickSubmit()
          login.clickLogin()
          cy.url().should('include',data.expected)
          
      })

    }) 
})