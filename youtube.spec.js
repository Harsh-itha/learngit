describe('Youtube test',()=>{
    it('visit youtube',()=>{
        cy.visit("https://www.youtube.com/");
        cy.title().should('eq','YouTube');
        let name ="automation learning";
        cy.get("input[type='text']").type(name);
        


    
    });

    
});