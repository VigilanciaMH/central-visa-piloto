# Como editar os conteúdos

## Regra geral

Cada grande tema possui seu próprio arquivo.

### Alimentação

Exemplo:

`dados/alimentacao/categorias/03-estrutura-e-ambiente.js`

### Serviços de Saúde

Exemplo:

`dados/saude/categorias/13-laboratorios-exames.js`

## Alterar o item 191 da Saúde

1. Abra:
   `dados/saude/categorias/13-laboratorios-exames.js`
2. Pressione `Ctrl + F`.
3. Pesquise:
   `SAU-191`
4. Modifique apenas:
   - `title`, para mudar a pergunta;
   - `answer`, para mudar a resposta;
   - `tags`, se quiser melhorar a pesquisa;
   - `sourceIds`, se mudar as fontes.
5. Salve com `Ctrl + S`.
6. Abra `index.html` e pesquise `SAU-191`.

## Criar um complemento 191.2

Copie o bloco do item `SAU-191.1` e altere:

```js
"number": "191.2",
"sort": 191.2,
"id": "sau-191-2",
"code": "SAU-191.2",
"parentCode": "SAU-191",
"title": "Nova pergunta complementar?",
"answer": "Nova resposta."
```

Não renumere os itens antigos.

## Por que usar 191.1, 191.2 etc.

A numeração permanente permite acrescentar exceções e explicações sem quebrar:

- links antigos;
- materiais impressos;
- referências internas;
- histórico de alterações.

## Testar

Depois de salvar:

1. dê dois cliques em `index.html`;
2. pressione `Ctrl + F5`;
3. pesquise pelo código.
