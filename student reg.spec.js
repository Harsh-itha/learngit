describe('My demo QA test',()=>{
    it('Student registration',()=>{
        cy.visit("https://demoqa.com/automation-practice-form");
        let firstname="Harshitha";
        cy.get("#firstName").click().type(firstname);
        let lastname="P";
        cy.get("#lastName").click().type(lastname);
        let email="harshithap444@gmail.com";
        cy.get("#userEmail").click().type(email);
        //cy.get("#gender-radio-2").click();
        let mobilenum="9986801170";
        cy.get("#userNumber").click().type(mobilenum);
        cy.get("#subjectsInput").type('Computer Science').type('{enter}');
        cy.get("#dateOfBirthInput").click();
        cy.get('.react-datepicker__month-select').select('2');
        cy.get('.react-datepicker__year-select').select('1998');
        cy.get('.react-datepicker__day--015').click();
        cy.get('hobbies-checkbox-3').select('3');
         const uploadImage =cy.get("#uploadPicture");
         uploadImage.attachFile("prescription.png");
         let address="#360, 8th main, 3rd stage, 4th block, Basaveshwarnagar, Bangalore-560079 KARNATAKA"
         cy.get("#currentAddress").click().type(address);
         cy.get("#state").click();
         cy.get("#react-select-3-option-1").click();
         cy.get("#city").click();
         cy.get("#react-select-4-option-0").click();
         cy.get("#submit").click();

            });
    });