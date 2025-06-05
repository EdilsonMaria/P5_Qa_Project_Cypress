import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

// Acessar o site
Given('que eu acesso o site {string}', (url) => {
  cy.visit(url);
});

// Garantir que o DOM e o body estão visíveis
When('a página carregar completamente', () => {
  cy.document().should('exist');
  cy.get('body').should('be.visible');
});

// Verificar o link "Consultar meu imposto de renda"
Then('o link {string} deve estar visível e disponível', (textoLink) => {
  cy.contains('a', textoLink, { timeout: 10000 })
    .should('exist')
    .and('be.visible')
    .and('have.attr', 'href')
    .then((href) => {
      cy.log('O link encontrado aponta para: ' + href);
    });
});
