describe("Signin test", () => {
  it("passes", () => {
    window.localStorage.removeItem("token");
    cy.visit("/");
    cy.location("pathname").should("eq", "/login");
    cy.getByData("email").type("boutitidorra@gmail.com");
    cy.getByData("password").type("123456789");
    cy.getByData("connect").click();
    cy.location("pathname").should("eq", "/tasks");
    // cy.visit("/hello");
    // cy.get(".app").should("be.empty");
  });
  // it("signin as admin", () => {
  //   window.localStorage.removeItem("token");
  //   cy.visit("/");
  //   cy.location("pathname").should("eq", "/teachers/tasks");
  // });
  // it("signin as user", () => {
  //   window.localStorage.removeItem("token");
  //   cy.visit("/");
  //   cy.getByData("email").should("exist");
  //   cy.getByData("password").should("exist");
  //   cy.getByData("email").type("user@gmail.com");
  //   cy.getByData("password").type("123456");
  //   cy.getByData("connect").click();
  //   cy.location("pathname").should("eq", "/hello");
  //   cy.visit("/teachers/tasks");
  //   cy.get(".app").should("be.empty");
  // });
  it("new todo", () => {
    cy.visit("/tasks");
    const newItem = "Feed the cat";
    cy.get("[data-test=newt]").type(`${newItem}{enter}`);
    cy.get(".todo-list li")
      .should("have.length", 3)
      .last()
      .should("have.text", newItem);
  });
});
