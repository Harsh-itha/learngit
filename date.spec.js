describe('My dob test',()=>{
    it('Handling calendar',()=>{
        cy.visit("https://demoqa.com/automation-practice-form");
        cy.get("#dateOfBirthInput").click();
        cy.get('.react-datepicker__month-select').select('3');
        cy.get(' .react-datepicker__year-select').select('2000');
        cy.get('.react-datepicker__day--015').click();

    
          });
});