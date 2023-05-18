/// <reference types="cypress" /> 
describe("MY ex. Work", ()=>{
    it("register and login",()=>{
        cy.visit("https://automationteststore.com/index.php?rt=account/create");
        cy.get("[name='firstname']").type("Tamy");
        cy.get("[name='lastname']").type("Aram");
        cy.get("[name='email']").first().type("tamya@gmail.com");
        
        cy.get("[name='telephone']").type("093252963");
        cy.get("[name='fax']").type("+37493252963");
        cy.get("[name='address_1']").type("Arami7");
        cy.get("[name='city']").type("Yerevan");
        cy.get("[name='postcode']").type("3121");
        cy.get("[name='country_id']").select("Armenia");
        cy.get("[name='zone_id']").select("Yerevan");
        cy.get("[name='loginname']").type("Tamik");
        cy.get("[name='password']").type("1234qwertt");
        cy.get("[name='confirm']").type("1234qwertt");
        cy.get("[name='agree']").click();
        cy.get("[title='Continue']").click();
 cy.get('.maintext').should("have.text",' Create Account')
       

    });
    it("Check with valid datas",()=>{
        cy.visit("https://automationteststore.com/index.php?rt=account/login");
        cy.get("[name='loginname']").type("Tamik");
        cy.get("[type='password']").type("1234qwertt");
        
        cy.get("[title='Login']").click();

        cy.get('.maintext').should("have.text",' My Account')
   });

    it("Check with invalid login",()=>{
        cy.visit("https://automationteststore.com/index.php?rt=account/login"); 
        cy.get("[name='loginname']").type("Tam");
        cy.get("[type='password']").type("1234qwertt");
        cy.get("[title='Login']").click();
        cy.get('.alert').should("have.text",'Error: Incorrect login or password provided')
    })  
    it("Check with invalid password",()=>{
        cy.visit("https://automationteststore.com/index.php?rt=account/login");
        cy.get("[name='loginname']").type("Tamik");
        cy.get("[type='password']").type("1234q");
        cy.get("[title='Login']").click();
        cy.get('.alert').should("have.text",'Error: Incorrect login or password provided')
    });

})
