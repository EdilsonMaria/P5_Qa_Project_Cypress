# 🧪 Projeto de Testes Automatizados BDD com Cypress + Cucumber + Gherkin

Este projeto tem como objetivo a automação de testes end-to-end (E2E) para **sites públicos**, utilizando a metodologia **BDD (Behavior-Driven Development)** com as ferramentas **Cypress**, **Cucumber** e linguagem **Gherkin**.

O projeto foi desenvolvido por **Edilson Maria** e **Nayara dos Santos**, com foco em entregar testes automatizados de alta qualidade, legíveis tanto para times técnicos quanto não técnicos.

---

## 🚀 Tecnologias Utilizadas

- ✅ [Cypress](https://www.cypress.io/) — Framework de automação de testes E2E.
- ✅ [Cucumber Preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor) — Permite escrita dos testes no formato BDD (Gherkin).
- ✅ [Gherkin](https://cucumber.io/docs/gherkin/) — Linguagem estruturada para descrever os comportamentos esperados do sistema.
- ✅ [Node.js](https://nodejs.org/) — Ambiente de execução JavaScript.

---

## 📂 Estrutura de Pastas

```
├── cypress
│   ├── e2e
│   │   ├── features             # Arquivos .feature (cenários em Gherkin)
│   │   ├── step_definitions     # Definições dos passos (Steps)
│   │   └── support              # Configurações e comandos customizados
│   ├── fixtures                 # Massa de dados simulada (JSON)
│   └── screenshots              # Prints automáticos dos testes
├── cypress.config.js            # Configuração principal do Cypress
├── package.json                 # Gerenciamento de dependências e scripts
└── README.md                    # Documentação do projeto
```

---

## 📜 Exemplo de Cenário em Gherkin

```gherkin
Feature: Validação da Página Inicial

  Scenario: Verificar o título da página
    Given que eu acesso o site "https://exemplo.com"
    Then o título da página deve ser "Exemplo - Bem-vindo"
```

---

## 🧠 Exemplo de Step Definition

```javascript
import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('que eu acesso o site {string}', (url) => {
  cy.visit(url);
});

Then('o título da página deve ser {string}', (title) => {
  cy.title().should('eq', title);
});
```

---

## 🛠️ Instalação e Configuração do Projeto

### 1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2. Instale as dependências necessárias:

```bash
npm install
```

### 3. Executando os testes:

- ✅ **Modo interativo (Interface Gráfica)**

```bash
npx cypress open
```

- ✅ **Modo headless (linha de comando)**

```bash
npx cypress run
```

---

## 🏗️ Scripts Úteis no package.json

```json
"scripts": {
  "test": "cypress run",
  "test:open": "cypress open"
}
```

Execute:

```bash
npm run test        # Executa os testes no modo headless
npm run test:open   # Executa os testes com interface gráfica
```

---

## ✅ Boas Práticas Adotadas

- 🔹 Criação de cenários descritivos e claros utilizando Gherkin.
- 🔹 Organização dos steps por funcionalidade para fácil manutenção.
- 🔹 Uso de dados dinâmicos através de fixtures.
- 🔹 Estrutura modular, escalável e de fácil entendimento.
- 🔹 Relatórios automáticos e prints de evidências.

---

## 🔗 Documentações e Referências

- [📘 Cypress](https://docs.cypress.io/)
- [📘 Cucumber](https://cucumber.io/docs/guides/10-minute-tutorial/)
- [📘 Gherkin](https://cucumber.io/docs/gherkin/)
- [📘 Cypress Cucumber Preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)

---

## 🤝 Autores

Desenvolvido por:

- **Edilson Maria**  
- **Nayara dos Santos**

---

## 💻 Sobre o Projeto

Projeto desenvolvido para automação de testes BDD utilizando Cypress, Cucumber e Gherkin, com foco na validação de funcionalidades de **sites públicos**. O objetivo principal é garantir qualidade, rastreabilidade e comunicação eficiente entre times técnicos e de negócio.

---
