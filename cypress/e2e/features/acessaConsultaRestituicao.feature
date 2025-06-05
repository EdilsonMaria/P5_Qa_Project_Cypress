# language: pt

Funcionalidade: Verificar se a funcionalidade de "Consultar minha restituição" exibe as informações corretamente

Cenário: Validar se ao clicar em "Consultar minha restituição" são exibidas informações sobre a consulta
    Dado que eu acesso o site "https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda"
    Quando eu clico no link "Consultar minha restituição"
    Então deve ser exibida a seção com informações sobre a consulta da restituição
