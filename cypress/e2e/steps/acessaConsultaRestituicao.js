import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

// Acessar diretamente a página
Given('que eu acesso o site {string}', (url) => {
  cy.visit(url, { timeout: 120000 });
});

// Clicar no link "Consultar minha restituição"
When('eu clico no link {string}', (textoLink) => {
  cy.contains('a', textoLink, { timeout: 20000 })
    .should('be.visible')
    .click();
});

// Validar se aparecem informações da consulta
Then('deve ser exibida a seção com informações sobre a consulta da restituição', () => {
  cy.contains(/Consulta.*Restituição/i, { timeout: 20000 })
    .should('exist')
    .and('be.visible');
});
