describe('Flipkart test',()=>{
    it('visit Flipkart',()=>{
        cy.visit("https://www.flipkart.com/");
        cy.title().should('eq','Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!');


    
    });

    
});