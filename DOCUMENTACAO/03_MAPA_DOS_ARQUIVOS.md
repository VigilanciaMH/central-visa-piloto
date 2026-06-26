# Mapa dos arquivos

## Arquivos que raramente mudam

- `index.html`
- `assets/app.js`
- `assets/style.css`
- `dados/base.js`

## Arquivos gerais

- `dados/configuracao.js`: título, data e ordem das áreas;
- `dados/fontes.js`: fontes e links utilizados.

## Alimentação

- `dados/alimentacao/area.js`: entrada e caminhos da área;
- `dados/alimentacao/categorias/`: perguntas separadas por tema.

## Serviços de Saúde

- `dados/saude/area.js`: entrada e caminhos da área;
- `dados/saude/categorias/`: 19 temas e as respectivas perguntas.

## Exemplo rápido

Pedido:
“João, precisamos alterar a pergunta 191 da Saúde.”

Arquivo:
`dados/saude/categorias/13-laboratorios-exames.js`

Código:
`SAU-191`

Somente esse arquivo precisa ser enviado pelo GitHub Desktop.


## Interesse da saúde

- `dados/interesse-saude/area.js`: entrada e caminhos;
- `dados/interesse-saude/categorias/`: 20 temas e 315 perguntas.

Os prefixos `ALI-`, `SAU-` e `INT-` continuam nos arquivos para manutenção, mas não aparecem na interface pública.
