const { _ } = Cypress // importing lodash
describe("Cypress is just JavaScript", () => {
    it("uses _.each() from lodash to make sure the titles from the posts api are displayed correctly on the home page", () => {    
      cy.visit("http://localhost:3000");  
       
        const posts= [{name :"course-0", url:'/testing-your-first-application'},{name :"course-1", url:'/cypress-fundamentals'},{name :"course-2", url:'/testing-foundations'}]
        _.each(post, (name, url) => {
          cy.get(`[data-test="${name}"]`).location("pathname").should("eq", ${url})
        });
      
    });
})  
   
