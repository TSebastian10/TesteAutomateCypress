describe('Exemplu unde', () => {


    // it('verific daca un URL contine ceva', () => {
    //     cy.visit('https://www.digi24.ro/stiri/actualitate/politica/ciolacu-am-inteles-e-o-problema-cu-primarul-din-psd-eu-nu-trebuie-sa-iau-legatura-cu-tatal-nimanui-2481851')

    //     cy.get('.container > .gdpr-trigger').click();
    //     cy.url().should('include', '/stiri/');

    // it('Asteapta 10 secunde', () => {
    //     cy.visit('https://www.google.com');
        
    //     cy.get('#L2AGLb').click();

    //     cy.wait(10000); //asteapta 10 secunde

    //     cy.get('.SDkEP').type('Au trecut 10 secunde').type('{enter}');
        
    //     cy.get('#result-stats').should('exist');


    // })
    // it('selectez folosind un atribut' , () => {
    //     cy.visit('https://www.google.com');

    //     cy.get('#L2AGLb').click();

    //     cy.get('[alt="Google"]').should('be.visible');


    // }) 
        
// it('fac un ss la pagina google', () => {

// cy.visit('https://www.google.com');
// cy.screenshot();


// })

it('verific o valoare din input', () => {

    cy.visit('https://www.google.com');

    cy.get('#L2AGLb').click();
    const googleSearch = cy.get('.gLFyf');

    googleSearch.type('123');
    googleSearch.should('have.value', '123');




})


})