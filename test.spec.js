describe('Amazon test suite',()=>{
    it('Amazon visit',()=>{
        cy.visit("https://www.amazon.com/");
        cy.scrollTo("bottom");
        cy.get("span.action-inner").click();
        let email="harshithap444@gmail.com";
        cy.get('input[id="ap_email"]').type(email);
        cy.get('.a-button-inner > #continue').click();
        alert("Hello");

            
     });
    });

    