import { expect } from 'chai';
import LoginPage from '../PageObjects/LoginPage.js';

describe('Login with POM', () => {
   it.only('Login test', () => {
      cy.visit('https://uilicious.com/')
      cy.fixture('UIliciousLoginCred').then((data) => {

          const login = new LoginPage();
          login.setusername(data.username)
          login.clickSubmit()
          login.setPassword(data.password)
          login.clickLogin()
          cy.url().should('eq','https://studio.uilicious.com/space')
          
          //using explicit assertions
          let expName = "john wick"
          cy.get('.app-nav-dropdown-item app-nav-dropdown-item--link').then((x)=>{
            let actName=x.text()

            expect(actName).to.equal(expName)
          })
          //using implicit assertions
          cy.get('.app-nav-dropdown-item app-nav-dropdown-item--link').contains('john wick')
      })

    }) 
})