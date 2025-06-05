# language: pt

Funcionalidade: Testar a página principal da Receita Federal

Cenário: Verificar elementos essenciais da página inicial
    Dado que eu acesso o site "https://www.gov.br/receitafederal/pt-br/assuntos"
    Quando a página carregar completamente
    Então o título da página deve ser "Assuntos — Receita Federal"