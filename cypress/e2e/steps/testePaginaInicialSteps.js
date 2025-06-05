// cypress/support/step_definitions/common_steps.js
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

// Dado que eu acesso o site "{url}"
Given('que eu acesso o site {string}', (url) => {
  cy.visit(url);
});

// Quando a página carregar completamente
When('a página carregar completamente', () => {
  cy.document().should('exist');
  cy.get('body').should('be.visible');
});

// Então o título da página deve ser "{titulo}"
Then('o título da página deve ser {string}', (titulo) => {
  cy.title().should('eq', titulo);
});
