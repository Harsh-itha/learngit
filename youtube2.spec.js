describe('Youtube test',()=>{
    it('visit youtube',()=>{
        cy.visit("https://www.youtube.com/");
        let name ="cypress";
        cy.get("input[type='text']").type(name);
        cy.get("input[type='text']").clear();
        let search ="cypress tutorial";
        cy.get("input[type='text']").type(search);
        cy.get("button[id='search-icon-legacy']").click();
        
        

            });

    
});