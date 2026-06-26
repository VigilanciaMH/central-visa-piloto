# Guia de edição - Central de Conhecimento

## Onde está o conteúdo de Alimentação

Cada grande assunto possui um arquivo próprio em:

`dados/alimentacao/categorias/`

Exemplos:

- `03-estrutura-e-ambiente.js` - perguntas sobre cozinha, lavatórios, sanitários e equipamentos;
- `07-temperaturas-e-delivery.js` - temperaturas, transporte e delivery;
- `10-rotulos-e-consumidor.js` - rótulos, alergênicos e regularização.

Para corrigir uma pergunta, abra somente o arquivo do assunto correspondente no VS Code, pesquise o título, altere o texto entre aspas, salve e atualize o navegador com `Ctrl + F5`.

## Testar no computador

1. Descompacte a pasta.
2. Dê dois cliques em `index.html`.
3. Navegue pelo site.
4. Após editar um arquivo, salve e use `Ctrl + F5`.

Não é necessário terminal, servidor, banco de dados ou instalação adicional.

## Publicar uma alteração

No GitHub, substitua apenas o arquivo que foi alterado e faça o commit. O GitHub Pages publicará a nova versão.

## Estrutura

- `configuracao.js` - nome, data e aviso geral;
- `dados/fontes.js` - legislação e links oficiais;
- `dados/alimentacao/area.js` - tela de entrada e caminhos da área;
- `dados/alimentacao/categorias/*.js` - perguntas e respostas;
- `style.css` - aparência;
- `app.js` - funcionamento e navegação;
- `index.html` - carrega os arquivos.

## Cuidados antes de publicar

- confira a legislação vigente;
- valide orientações que dependem da prática local;
- não inclua dados pessoais, denúncias ou documentos de empresas;
- confirme se os links oficiais continuam funcionando.
