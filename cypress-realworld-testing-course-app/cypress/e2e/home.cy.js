describe("home page", () => {
  beforeEach(()=>{
       cy.visit("http://localhost:3000/")
  })
  //test case(voir fichier excel)
  it("visit home page", () => {
    cy.visit("http://localhost:3000/")
    cy.get("[data-test='hero-heading']").contains(
      "Testing Next.js Applications with Cypress"
    )
  })
  it("the features on the homepage are correct", () => {
    cy.visit("http://localhost:3000")

    cy.getByData("hero-heading")
    // cy.get("dt").eq(0).contains("4 Courses")
    // cy.get("dt").eq(1).contains("25+ Lessons")
    // cy.get("dt").eq(2).contains("Free and Open Source")
  }) 
//   context("Courses section", () => {
//      it(" Testing foundations", () => {
//          cy.getByData("course-1").find("a").eq("3").click()        
//          cy.location("pathname").should("eq", " /testing-foundations")
//      })
    
//      it.only("Course: Testing Your First Next.js Application", () => {
//         cy.getByData("course-0").find("a").eq("3").then(($a)=>{
//             const href = $a.attr("href")
//             if (href == '//testing-your-first-application'){
//                 console.log(href);
//                 cy.wrap($a).click()
//                 cy.location("pathname").should("eq", "/testing-your-first-application")
//             }
//         }) 
//         cy.screenshot() 
//         // .click()
        
//       })
//       it("Testing Cypress Fundamentals ", () => {
//         cy.getByData("course-2").find("a").eq("3").click()
//         cy.location("pathname").should("eq", "/cypress-fundamentals")
//       })
//     }) 
context("Courses section", () => {
    const courses = [{ name: "Testing Your First Next.js Application", data: "course-0", href: "/testing-your-first-application" },    { name: "Testing Foundations", data: "course-1", href: "/testing-foundations" },    { name: "Testing Cypress Fundamentals", data: "course-2", href: "/cypress-fundamentals" },  ];
  
    courses.forEach((course) => {
      it(`Course: ${course.name}`, () => {
        cy.getByData(course.data)
          .find("a")
          .eq(3)
          .then(($a) => {
            const href = $a.attr("href");
            if (href === course.href) {
              cy.wrap($a).click();
              cy.location("pathname").should("eq", course.href);
            }
          });
      });
    });
  });
})
