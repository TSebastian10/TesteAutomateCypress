describe('Site LinkedIn.com', () => {

    it('incorrect credentials', () => {

        cy.visit('https://linkedin.com');

        cy.get('.nav__button-secondary').click();
        cy.get('#username').type('abc@yahoo.com');
        cy.get('#password').type('1234567');
        cy.get('.btn__primary--large').click();

       



    });











})