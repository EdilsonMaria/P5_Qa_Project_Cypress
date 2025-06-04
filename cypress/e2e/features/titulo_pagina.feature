# language: pt

Funcionalidade: Verificar o título da página do site Meu Imposto de Renda

  Cenário: Validar se o título da página está correto
    Dado que eu acesso o site "https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda"
    Quando a página carregar completamente
    Então o título da página deve ser "Meu Imposto de Renda — Receita Federal"
