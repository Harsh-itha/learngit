describe('My Naukri test',()=>{
    it('visiting to naukri and logging in',()=>{
        cy.visit("https://www.naukri.com/");
        cy.get('#login_Layer > .mTxt').click();
        let email="harshithap444@gmail.com";
        let password="H@r$hitha@1098";
        cy.get(".form > :nth-child(2) > input").click().type(email);
        cy.get("input[type='password']").click().type(password);
        cy.get(":nth-child(6) > .btn-primary").click();
        let job="Software engineer";
        let location="Bangalore";
        cy.get("#qsb-keyskill-sugg").click().type(job);
        cy.get("[data-id='1'] > .Sbtn").click();
        cy.get("#qsb-location-sugg").click().type(location);
        cy.get("[data-id='97'] > .Sbtn").click()
        cy.get(".search").click();

        
        

            });

    
});