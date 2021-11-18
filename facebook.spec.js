describe('My facebook test Suite',()=>{
    it('visit facebook',()=>{
        cy.visit("https://www.facebook.com/");
        let email="harshitha.p@quovantis.com";
        let password="12345";
        cy.get("input[id='email']").type(email);
        cy.get("input[type='password']").type(password);

            
     });
     it('visit youtube',()=>{
        cy.visit("https://www.youtube.com/");   
    });


  });
  