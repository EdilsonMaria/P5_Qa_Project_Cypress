import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('que o usuário acessa o site do imposto de renda', () => {
  cy.visit('/');
});

When('a página for carregada completamente', () => {
  cy.document().should('exist');
});

Then('o título da página deve ser {string}', (tituloEsperado) => {
  cy.title().should('eq', tituloEsperado);
});

When('o usuário visualizar a página', () => {
  cy.document().should('exist');
});

Then('deve existir um link ou botão com o texto {string}', (texto) => {
  cy.contains(texto).should('exist');
});

Then('o link deve estar visível e acessível', () => {
  cy.contains('Baixar o programa').should('be.visible');
});
