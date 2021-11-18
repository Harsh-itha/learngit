describe('My demoqa test',()=>{
    it('launch demoqa',()=>{
        cy.visit("https://demoqa.com/text-box");
        cy.get("li#item-0.btn.btn-light.active").click();
        let name="Harshitha";
        let email="harshithap444@gmail.com";
        let c_address="#360,8th main,3rd stage,4th block basaveshwarnagar";
        let p_address="#360,8th main,3rd stage,4th block basaveshwarnagar";
        cy.get("input[type='text']").click().type(name);
        cy.get("input[type='email']").click().type(email);
        cy.get("#currentAddress").click().type(c_address);
        cy.get("#permanentAddress").click().type(p_address);
        cy.get("#submit").click();
});
});
