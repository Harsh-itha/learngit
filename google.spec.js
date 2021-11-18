describe('scenario to search on google',()=>{
    it('visit google and search cypress',()=>{
        cy.visit("https://www.google.com/");cy.wait(5000);
        cy.get("input[title='Search']").type('cypress');


    
    });

    
});