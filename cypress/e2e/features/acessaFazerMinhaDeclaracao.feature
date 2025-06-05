# language: pt

Funcionalidade: Testa o acesso ao Fazer minha declaração

Cenário: Validar se ao clicar em "Fazer minha declaração" são exibidas informações pertinentes
    Dado que eu acesso o site "https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda"
    Quando a página carregar completamente
    E eu clico no link "Fazer minha declaração"
    Então a URL deve ser "https://www.gov.br/pt-br/servicos/declarar-meu-imposto-de-renda"
    E o título da página deve ser "Declarar meu imposto de renda"