import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

Given('que eu acesso o site {string}', (url) => {
  cy.visit(url);
});

When('a página carregar completamente', () => {
  cy.document().should('exist');
  cy.get('body').should('be.visible');
});

When('eu clico no link {string}', (linkText) => {
  cy.contains('a', linkText)
    .invoke('removeAttr', 'target')
    .click({ force: true });
});

Then('a URL deve ser {string}', (urlEsperada) => {
  cy.url().should('eq', urlEsperada);
});

Then('o título da página deve ser {string}', (tituloEsperado) => {
  cy.title().should('eq', tituloEsperado);
});
