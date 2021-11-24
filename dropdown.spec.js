describe('My dropdown test',()=>{
    it('Handling dropdowns',()=>{
        cy.visit("https://demoqa.com/automation-practice-form");
        cy.get(".css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer > .css-19bqh2r").click();
        cy.get("#react-select-3-option-1").click();
        cy.get("#city > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer > .css-19bqh2r").click();
        cy.get("#react-select-4-option-0").click();

    
         
    });
});