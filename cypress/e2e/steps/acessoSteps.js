import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("acesso ao site Meu imposto de Renda", () => {
  cy.visit("https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda");

  cy.contains("button", "Aceitar todos", { timeout: 10000 })
    .should("be.visible")
    .click();

  cy.get(
    "#modal-tutorial > .vertical-alignment-helper > .modal-dialog > .modal-content > :nth-child(1) > :nth-child(2) > :nth-child(2) > .col-lg-12 > .br-button",
    { timeout: 10000 }
  )
    .should("be.visible")
    .click();
});

When('clico no "Mais serviços..."', () => {
  cy.get(':nth-child(2) > :nth-child(1) > .flipcard > .flipcard-wrap > .card-front')
    .should("be.visible")
    .click();
});

Then(
  "deve aparecer a tela que contém Mais serviços",
  () => {
    cy.contains('Despesas Públicas');
  }
);
