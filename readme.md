# 🧠 Testes End-to-End BDD com Cypress + Cucumber + Gherkin

Este projeto tem como objetivo a automação de testes end-to-end (E2E) para **sites públicos**, em específico o site da Receita Federal sobre **Meu Imposto de Renda**, utilizando a metodologia **BDD (Behavior-Driven Development)** com as ferramentas **Cypress**, **Cucumber** e linguagem **Gherkin**.

O projeto foi desenvolvido por **Edilson Maria** e **Nayara dos Santos**, com foco em entregar testes automatizados de alta qualidade.

---

## 🚀 Tecnologias Utilizadas

- ✅ [Cypress](https://www.cypress.io/) — Framework de automação de testes E2E.
- ✅ [Cucumber Preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor) — Permite escrita dos testes no formato BDD (Gherkin).
- ✅ [Gherkin](https://cucumber.io/docs/gherkin/) — Linguagem estruturada para descrever os comportamentos esperados do sistema.
- ✅ [Node.js](https://nodejs.org/) — Ambiente de execução JavaScript.

---

## 📂 Estrutura de Pastas

```
Project_Cypress/
├── cypress/
│   ├── e2e/
│   │   └── features/
│   │       ├── link_baixar_programa.feature
│   │       ├── titulo_pagina.feature
│   │       └── step_definitions/
│   │           └── meuImpostoDeRendaSteps.cy.js
│   ├── support/
│   │   ├── commands.js
│   │   └── e2e.js
├── .gitignore
├── cypress.config.js
├── package.json
└── README.md
```

---

## 🎯 Cenários de Teste (Gherkin)

Este projeto possui dois cenários de testes automatizados utilizando a linguagem **Gherkin**, que segue uma sintaxe de fácil entendimento, baseada na estrutura **Dado, Quando, Então**. Essa abordagem facilita a leitura dos testes tanto por desenvolvedores quanto por pessoas não técnicas.

### 🔹 Cenário 1: Verificar título da página

- 📄 **Arquivo:** `cypress/e2e/features/titulo_pagina.feature`

**Objetivo:**  
Garantir que, ao acessar o site do **Imposto de Renda**, o título da página seja exibido corretamente.

**Fluxo do teste:**

- **Dado** que o usuário acessa o site do imposto de renda,
- **Quando** a página for carregada completamente,
- **Então** o título da página deve ser **"Meu Imposto de Renda — Receita Federal"**.

**Validação:**  
Este teste assegura que o site foi carregado corretamente e que o título da página corresponde ao esperado, garantindo que o usuário está na página correta.

---

### 🔹 Cenário 2: Verificar se o link "Baixar o programa" está disponível

- 📄 **Arquivo:** `cypress/e2e/features/link_baixar_programa.feature`

**Objetivo:**  
Verificar se o link ou botão para **"Baixar o programa"** do imposto de renda está presente e visível na página.

**Fluxo do teste:**

- **Dado** que o usuário acessa o site do imposto de renda,
- **Quando** o usuário visualizar a página,
- **Então** deve existir um link ou botão com o texto **"Baixar o programa"**,
- **E** esse link deve estar **visível e acessível**.

**Validação:**  
Este teste garante que os usuários consigam encontrar facilmente a opção de download do programa, que é uma funcionalidade essencial oferecida na página.

---

## 🛠️ Instalação e Configuração do Projeto

### 1. Clone o repositório:

```bash
git clone https://https://github.com/EdilsonMaria/P5_Qa_Project_Cypress
cd P5_Qa_Project_Cypress
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
- 🔹 Uso de dados dinâmicos através de fixtures (se aplicável).
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
