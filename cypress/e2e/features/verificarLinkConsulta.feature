# language: pt

Funcionalidade: Verificar se o link de consulta do imposto de renda está disponível no site Meu Imposto de Renda

Cenário: Verificar se o link "Consultar meu imposto de renda" está visível e acessível
    Dado que eu acesso o site "https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda"
    Quando a página carregar completamente
    Então o link "Consultar meu imposto de renda" deve estar visível e disponível
