describe("test de l'api", () => {
  it("should get all tasks (emplty tasks)", () => {
    cy.request("GET", Cypress.env("urlBackend") + "tasks").then((response) => {
      expect(response.status).to.eq(200);
      //expect(response.body.model).to.have.lengthOf(4);
    });
  });
  let savedTask;
  it("should add a task", () => {
    const data = {
      title: "task n",
      description: "Dorra Btt",
      duration: 60,
      type: "IT",
    };
    cy.request("POST", Cypress.env("urlBackend") + "tasks", data).then(
      (response) => {
        expect(response.status).to.eq(200);

        expect(response.body.model.title).to.eq(data.title);
        expect(response.body.model.description).to.eq(data.description);
        expect(response.body.model.duration).to.eq(data.duration);
        expect(response.body.model.type).to.eq(data.type);
        savedTask = response.body.model;
        expect(savedTask.title).to.eq(data.title);
      }
    );
  });

  it("should find the saved task in saved tasks", () => {
    cy.request("GET", Cypress.env("urlBackend") + "tasks").then((response) => {
      expect(response.status).to.eq(200);
      const tasks = response.body.model;
      const task = tasks.find((t) => t._id == savedTask._id);
      expect(task).to.exist;
    });
  });
  it("the new task exist", () => {
    cy.request(
      "GET",
      Cypress.env("urlBackend") + "tasks/" + savedTask._id.toString()
    ).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.model.title).to.eq(savedTask.title);
      expect(response.body.model.description).to.eq(savedTask.description);
      expect(response.body.model.duration).to.eq(savedTask.duration);
      expect(response.body.model.type).to.eq(savedTask.type);
    });
  });
  it("update the saved task", () => {
    const data = {
      title: "task n+1",
      description: "updated Dorra Btt",
    };
    cy.request(
      "PUT",
      Cypress.env("urlBackend") + "tasks/" + savedTask._id.toString(),
      data
    ).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.model.title).to.eq(data.title);
      savedTask = response.body.model;
    });
  });
  it("delete the saved task", () => {
    cy.request(
      "DELETE",
      Cypress.env("urlBackend") + "tasks/" + savedTask._id.toString()
    ).then((response) => {
      expect(response.status).to.eq(200);
    });
    cy.request({
      method: "GET",
      url: Cypress.env("urlBackend") + "tasks/" + savedTask._id.toString(),
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
  it("/users return 401", () => {
    cy.request({
      method: "GET",
      url: Cypress.env("urlBackend") + "users",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(401);
    });
  });
});
//projet react bien structuré
//installer cypress
//installer react-router-dom
