describe('Flipkart test',()=>{
    it('Flipkart login with valid credentials',()=>{
        cy.visit("https://www.flipkart.com/");
        cy.get('._1_3w1N').click();
        let email ="harshithap444@gmail.com";
        let password ="Harshitha@1098";
        cy.get("input._2IX_2-[type='text']").click().type(email);
        cy.get("input._2IX_2-[type='password']").type(password);
        cy.get('._1D1L_j').click();
        cy.title().should('eq','Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!');
        cy.title().then((title)=>{cy.log(title)});
        
        

            });

    
});