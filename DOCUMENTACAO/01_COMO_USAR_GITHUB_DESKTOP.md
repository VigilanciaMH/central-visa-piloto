# Como usar esta pasta no GitHub Desktop

## Situação recomendada: usar o repositório que já existe

1. Abra o GitHub Desktop e entre na mesma conta utilizada no GitHub.
2. Clique em `File > Clone repository`.
3. Selecione o repositório `central-visa-piloto`.
4. Escolha onde a pasta local será salva.
5. Clique em `Clone`.

O GitHub Desktop criará uma pasta local vinculada ao repositório.

## Colocar esta pasta-mãe no repositório

1. Feche o GitHub Desktop por alguns segundos.
2. Abra a pasta clonada `central-visa-piloto`.
3. Apague ou mova os arquivos antigos.
4. Copie **o conteúdo** desta pasta-mãe para dentro da pasta clonada.
   - `index.html` deve ficar diretamente na raiz;
   - as pastas `assets`, `dados` e `DOCUMENTACAO` devem ficar ao lado dele.
5. Abra novamente o GitHub Desktop.

O programa mostrará apenas os arquivos adicionados, removidos ou alterados.

## Primeiro envio

1. No campo `Summary`, escreva:
   `Estrutura inicial da pasta-mãe`
2. Clique em `Commit to main`.
3. Clique em `Push origin`.
4. Aguarde o GitHub Pages atualizar.

## Atualizações futuras

Exemplo: foi necessário alterar apenas o item `SAU-191`.

1. Abra:
   `dados/saude/categorias/13-laboratorios-exames.js`
2. Procure por:
   `SAU-191`
3. Altere o texto e salve.
4. O GitHub Desktop mostrará somente esse arquivo.
5. Escreva no Summary:
   `Atualiza resposta SAU-191`
6. Clique em `Commit to main`.
7. Clique em `Push origin`.

## Antes de começar a editar em outro computador

No GitHub Desktop, clique em `Fetch origin`.
Se houver mudança disponível, clique em `Pull origin`.

Isso evita trabalhar sobre uma versão antiga.
