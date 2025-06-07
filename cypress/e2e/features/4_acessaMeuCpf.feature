# language: pt

Funcionalidade: Testar a acesso ao Meu CPF

Cenário: Navegar para a seção "Meu CPF"
    Dado que eu acesso o site "https://www.gov.br/receitafederal/pt-br/assuntos"
    Quando a página carregar completamente
    E eu clico no link "Meu CPF"
    Então a URL deve ser "https://www.gov.br/receitafederal/pt-br/assuntos/meu-cpf"
    E o título da página deve ser "Meu CPF — Receita Federal"