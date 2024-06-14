class Login
{
    inputUsername="#login-form__username";
    submitBtn="//button[normalize-space()='Continue with email']";
    inputPassword="#login-form__password"; 
    loginBtn="//button[normalize-space()='Log in']";


    setusername(username)
    {
        cy.get(this.inputUsername).type(username);
    }
    setPassword(password)
    {
        cy.get(this.inputPassword).type(password);
    }
    clickSubmit()
    {
        cy.xpath(this.submitBtn).click();
    }
    clickLogin()
    {
        cy.xpath(this.loginBtn).click();
    }



}