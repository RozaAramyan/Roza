/// <reference types="cypress" /> 
 describe("Automation Test Store", () => {

  beforeEach( () => {
    cy.visit('https://automationteststore.com/')
   })




    it("url should contain the word automation",()=>{
      cy.visit("https://automationteststore.com/");
      cy.url().should('include','automation');  
    });

   
      it(" clicking the Login and Register button goes to the registration paage", () => {
        cy.visit("https://automationteststore.com/");
        cy.get("[id='customer_menu_top']").contains("Login or register").click();
        cy.url().should("include", "/index.php?rt=account/login");
      }); 

      it("clicking the Skincare button goes to the page titled Skincare", () => {
        cy.get("[href='https://automationteststore.com/index.php?rt=product/category&path=43']").click()
        cy.on('window:alert', (f) => {
          expect(t).to.eq('Skincare')
        });
      })

        it("click MAC button go to it's page", () => {
          cy.get("[href='https://automationteststore.com/index.php?rt=product/manufacturer&manufacturer_id=11']").click()
          cy.on('window:alert', (f) => {
            expect(t).to.eq('M·A·C')
});
});

it("click books button go to it's page", () => {
  cy.get("[href='https://automationteststore.com/index.php?rt=product/category&path=65']").click()
  cy.on('window:alert', (f) => {
    expect(t).to.eq(Books)
  });
});
    
 })

      
        

      

  










        
        


    
    

