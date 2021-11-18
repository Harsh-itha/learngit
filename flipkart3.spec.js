describe('Flipkart test',()=>{
    it('Flipkart login with invalid credentials',()=>{
        cy.visit("https://www.flipkart.com/");
        cy.get('._1_3w1N').click();
        let email ="abcdefgh";
        let password ="12345679";
        cy.get("input._2IX_2-[type='text']").type(email);
        cy.get("input._2IX_2-[type='password']").type(password);
        cy.get('._1D1L_j').click();
        cy.get("span._2YULOR > span").invoke("text").should("eq", "Please enter valid Email ID/Mobile number");

      
});
});

