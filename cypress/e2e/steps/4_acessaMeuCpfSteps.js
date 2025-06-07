import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

// Ignorar erros não tratados do site
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

// Dado que eu acesso o site "{url}"
Given('que eu acesso o site {string}', (url) => {
  cy.visit(url);
});

// Quando a página carregar completamente
When('a página carregar completamente', () => {
  cy.document().should('exist');
  cy.get('body').should('be.visible');
});

// E eu clico no link "{linkText}"
When('eu clico no link {string}', (linkText) => {
  cy.contains('a', linkText).click({ force: true });
});

// Então a URL deve ser "{urlEsperada}"
Then('a URL deve ser {string}', (urlEsperada) => {
  cy.url().should('eq', urlEsperada);
});

// E o título da página deve ser "{tituloEsperado}"
Then('o título da página deve ser {string}', (tituloEsperado) => {
  cy.title().should('eq', tituloEsperado);
});
