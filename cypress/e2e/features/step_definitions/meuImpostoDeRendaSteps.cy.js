import { Dado, Quando, Entao } from '@badeball/cypress-cucumber-preprocessor/steps';

Dado('que eu acesso o site {string}', (url) => {
  cy.visit(url);
});

Quando('a página carregar completamente', () => {
  cy.document().should('exist');
});

Entao('o título da página deve ser {string}', (titulo) => {
  cy.title().should('eq', titulo);
});

Entao('deve existir um link ou botão com o texto {string}', (texto) => {
  cy.contains(texto).should('be.visible');
});
