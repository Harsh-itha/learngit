
describe('My demo QA test',()=>{
    it('file upload',()=>{
        cy.visit("https://demoqa.com/automation-practice-form");
        //const fileName = 'example.json'
       // cy.fixture('example.json').then(function(fileContent){
        //cy.get('#uploadPicture').upload({fileContent,fileName,mimetype:application/json})

   // });
         const uploadImage =cy.get("#uploadPicture");
         uploadImage.attachFile("prescription.png");
});
});