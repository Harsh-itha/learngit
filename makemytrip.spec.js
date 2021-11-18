describe('Makemytrip test',()=>{
    it('visit to makemytrip',()=>{
        cy.visit("https://www.makemytrip.com/");
        cy.get('.makeFlex hrtlCenter font10 makeRelative lhUser userLoggedOut').click();
        let email="harshithap444@gmail.com";
        cy.get("input#username").click().type(email);
        cy.get("input#username").click();
        let password="H@r$hitha@1098";
        cy.get("input#Password.font14").click().type(password);
        cy.get("button.capText.font16").click();
        
            });

    
});