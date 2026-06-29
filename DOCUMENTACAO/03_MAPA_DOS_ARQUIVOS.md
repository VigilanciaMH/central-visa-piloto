# Mapa dos arquivos

## Arquivos que raramente mudam

- `index.html`
- `assets/app.js`
- `assets/style.css`
- `dados/base.js`

## Arquivos gerais

- `dados/configuracao.js`: título, data e ordem das áreas;
- `dados/fontes.js`: fontes oficiais e links utilizados.

## Áreas e conteúdos

- `dados/alimentacao/area.js` e `dados/alimentacao/categorias/`: 149 perguntas;
- `dados/saude/area.js` e `dados/saude/categorias/`: 304 perguntas e complementos;
- `dados/interesse-saude/area.js` e `dados/interesse-saude/categorias/`: 375 perguntas;
- `dados/produtos/area.js` e `dados/produtos/categorias/`: 215 perguntas;
- `dados/cidadao/area.js` e `dados/cidadao/categorias/`: 188 perguntas.

## Exemplo rápido

Pedido:
“Precisamos alterar a pergunta 191 da Saúde.”

Arquivo:
`dados/saude/categorias/13-laboratorios-exames.js`

Código:
`SAU-191`

Somente esse arquivo precisa ser enviado pelo GitHub Desktop.

Os prefixos `ALI-`, `SAU-`, `INT-`, `PRO-` e `CID-` continuam nos arquivos para manutenção, mas não aparecem na interface pública.
