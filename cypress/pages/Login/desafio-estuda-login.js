export class Login {
  clickSignIn() {
    cy.get("#signin").click();
    cy.url().should("eq", "https://bstackdemo.com/signin");
  }

  selectUsername() {
    cy.get(
      "#username > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer"
    ).click();

    cy.get("#react-select-2-option-0-0").click();

    cy.get(".css-1uccc91-singleValue")
      .should("exist")
      .and("contain", "demouser");
  }

  selectPassword() {
    cy.get(
      "#password > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer"
    ).click();

    cy.get("#react-select-3-option-0-0").click();
  }

  submitLogin() {
    cy.get("#login-btn").click();
  }

  loginComSucesso() {
    this.clickSignIn();
    this.selectUsername();
    this.selectPassword();
    this.submitLogin();
  }
}
