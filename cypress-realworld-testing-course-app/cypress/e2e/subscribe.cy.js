describe("Newsletter Subscribe Form", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000")
    })
  
    it("allows users to subscribe to the email list", () => {
        cy.getByData("email-input").type("mail@gmail.com")
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("exist").contains("mail@gmail.com")
      })
      it("does NOT allow existing email address", () => {
        cy.getByData("email-input").type("john@example.com")
        cy.getByData("submit-button").click()
        cy.getByData("server-error-message").should("exist").contains("already exists")
      })
      it("does NOT allow an invalid email address", () => {
        cy.getByData("email-input").type("tom")
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("not.exist")
      })
    //   it("Type data and submit form", () => {
    //     cy.getByData("email-input")
    //       .type("Please tyyyyype")
    //       .should("have.value", "mail@gmail.com"); 
       
  
    //     cy.get('[data-cy=submit]').click();
    //   });
  })
  