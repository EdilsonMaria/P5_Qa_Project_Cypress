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
│   │   │── features/
│   │   │   ├── 1_verificarLinkConsulta.feature
│   │   │   ├── 2_acessaFazerMinhaDeclaracao.feature
│   │   │   ├── 3_testePaginaInicial.feature
│   │   │   └── 4_acessaMeuCpf.feature
│   │   └── steps/
│   │       ├── 1_verificarLinkConsulta.js
│   │       ├── 2_acessaFazerMinhaDeclaracao.js
│   │       ├── 3_testePaginaInicial.js
│   │       └── 4_acessaMeuCpf.js
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── .gitignore
├── cypress.config.js
├── package.json
└── README.md
```

---

## 🎯 Cenários de Teste (Gherkin)

Este projeto possui dois cenários de testes automatizados utilizando a linguagem **Gherkin**, que segue uma sintaxe de fácil entendimento, baseada na estrutura **Dado, Quando, Então**. Essa abordagem facilita a leitura dos testes tanto por desenvolvedores quanto por pessoas não técnicas.

---

### 🔹 Cenário 1: Verificar se o link "Consultar meu imposto de renda" está visível e acessível

- 📄 **Arquivo:** `cypress/e2e/features/VerificaLinkConsulta.feature`

**Objetivo:**  
Garantir que o link para **"Consultar meu imposto de renda"** esteja presente, visível e acessível na página oficial do serviço.

**Fluxo do teste:**

- **Dado** que o usuário acessa o site do imposto de renda,  
- **Quando** a página carregar completamente,  
- **Então** o link **"Consultar meu imposto de renda"** deve estar **visível e disponível**.

**Validação:**  
Este teste garante que o usuário consiga localizar facilmente o link de consulta do imposto de renda, o que é essencial para acessar informações sobre sua declaração.

---

### 🔹 Cenário 2: Validar redirecionamento e conteúdo ao clicar em "Fazer minha declaração"

- 📄 **Arquivo:** `cypress/e2e/features/acessaFazerMinhaDeclaração.feature`

**Objetivo:**  
Verificar se ao clicar no link **"Fazer minha declaração"**, o usuário é corretamente redirecionado para a página apropriada e o título da página está conforme o esperado.

**Fluxo do teste:**

- **Dado** que o usuário acessa o site do imposto de renda,  
- **Quando** a página carregar completamente,  
- **E** o usuário clicar no link **"Fazer minha declaração"**,  
- **Então** a URL deve ser **"https://www.gov.br/pt-br/servicos/declarar-meu-imposto-de-renda"**,  
- **E** o título da página deve ser **"Declarar meu imposto de renda"**.

**Validação:**  
Este teste assegura que o link redireciona corretamente para a área de declaração do imposto de renda e que o conteúdo carregado é o correto, reforçando a confiança do usuário no processo de navegação.

---

### 🔹 Cenário 3: Verificar elementos essenciais da página inicial

- 📄 **Arquivo:** `cypress/e2e/features/testaPaginaInicial.feature`

**Objetivo:**  
Garantir que a página inicial da seção de assuntos da Receita Federal carregue corretamente e exiba o título esperado.

**Fluxo do teste:**

- **Dado** que o usuário acessa o site da Receita Federal,  
- **Quando** a página carregar completamente,  
- **Então** o título da página deve ser **"Assuntos — Receita Federal"**.

**Validação:**  
Este teste confirma que a página principal foi carregada corretamente e que o usuário está visualizando o conteúdo esperado da seção de assuntos da Receita Federal.

---

### 🔹 Cenário 4: Navegar para a seção "Meu CPF"

- 📄 **Arquivo:** `cypress/e2e/features/acessaMeuCpf.feature`

**Objetivo:**  
Verificar se, ao clicar no link **"Meu CPF"**, o usuário é redirecionado corretamente para a página correspondente e que o conteúdo está de acordo com o esperado.

**Fluxo do teste:**

- **Dado** que o usuário acessa o site da Receita Federal,  
- **Quando** a página carregar completamente,  
- **E** o usuário clicar no link **"Meu CPF"**,  
- **Então** a URL deve ser **"https://www.gov.br/receitafederal/pt-br/assuntos/meu-cpf"**,  
- **E** o título da página deve ser **"Meu CPF — Receita Federal"**.

**Validação:**  
Este teste assegura que a navegação até a área de CPF está funcional e que o título da página confirma o destino correto, promovendo uma experiência confiável ao usuário.

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
