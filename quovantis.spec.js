describe('Quovantis test',()=>{
    it('visit Quovantis',()=>{
        cy.visit("https://quovantis.com/");
        cy.title().should('eq','Product Design and Development Company | Quovantis Technologies');


    
    });

    
});