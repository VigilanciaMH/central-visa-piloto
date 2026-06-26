const VISA_DATA = {
  areas: [
    { id:'alimentos', nome:'Alimentos', itens:['pia-maos-cozinha','armazenamento-alimentos'] },
    { id:'academias', nome:'Academias', itens:['academia-panorama','academia-suplementos'] },
    { id:'legislacao', nome:'Legislação-base', itens:['lei-8080','rdc-216'] }
  ],
  items: [
    {
      id:'pia-maos-cozinha', area:'Alimentos', categoria:'Restaurantes > Estrutura da cozinha',
      titulo:'Preciso ter pia para higienização das mãos na cozinha?', tipo:'orientacao', status:'Rascunho para revisão', resposta:'depende',
      resumo:'Em serviços de alimentação, as instalações sanitárias/lavatórios devem possuir meios adequados para higienização das mãos. A exigência concreta depende da atividade, layout e norma aplicável.',
      pode:['Verificar se há condição efetiva para higienização das mãos dos manipuladores.','Verificar água, sabonete, secagem higiênica e localização compatível com o risco.','Exigir adequação quando a ausência ou inadequação representar risco de contaminação.'],
      naoPode:['Exigir um modelo único de pia sem avaliar a norma e a situação concreta.','Confundir automaticamente pia de mãos com pia de lavagem de utensílios sem análise técnica.'],
      depende:['Tipo de manipulação realizada.','Fluxo da cozinha.','Existência de manipulação direta de alimentos.','Normas federais, estaduais e municipais aplicáveis.'],
      fundamento:[{norma:'RDC Anvisa nº 216/2004', trecho:'Item 4.1.14 — lavatórios devem possuir sabonete líquido inodoro antisséptico ou sabonete líquido inodoro e produto antisséptico, toalhas de papel não reciclado ou outro sistema higiênico e seguro de secagem das mãos e coletor sem contato manual.'}],
      publico:'O estabelecimento deve garantir meios adequados para higienização das mãos dos manipuladores. A VISA avaliará se a estrutura existente evita risco de contaminação.',
      revisao:'26/06/2026'
    },
    {
      id:'armazenamento-alimentos', area:'Alimentos', categoria:'Restaurantes > Armazenamento', titulo:'Como deve ser o armazenamento de alimentos?', tipo:'orientacao', status:'A preencher', resposta:'depende', resumo:'Página reservada para futura orientação sobre temperatura, separação, identificação e validade.', pode:['A preencher'], naoPode:['A preencher'], depende:['A preencher'], fundamento:[], publico:'Conteúdo em construção.', revisao:'—'
    },
    {
      id:'academia-panorama', area:'Academias', categoria:'Panorama', titulo:'Panorama inicial de academias', tipo:'panorama', status:'Piloto', resposta:'depende', resumo:'Academia pode envolver condicionamento físico, vestiários, água, climatização, suplementos, piscina e outras atividades. Cada elemento muda o olhar sanitário.', pode:['Verificar higiene de ambientes de uso coletivo.','Verificar água para consumo, vestiários e condições sanitárias gerais.','Analisar atividades adicionais, como piscina, estética, fisioterapia ou venda de produtos.'], naoPode:['Substituir conselho profissional em julgamento ético-profissional.','Tratar toda questão de academia como sanitária sem identificar risco à saúde.'], depende:['CNAE declarado e atividade real.','Existência de piscina, suplementos ou serviços de saúde/interesse da saúde.','Classificação de risco em SC e legislação municipal.'], fundamento:[{norma:'Base geral', trecho:'A confirmar com normas federais, estaduais e municipais específicas.'}], publico:'Antes de abrir ou regularizar uma academia, identifique todas as atividades prestadas, pois cada uma pode gerar exigências diferentes.', revisao:'26/06/2026'
    },
    {
      id:'academia-suplementos', area:'Academias', categoria:'Produtos', titulo:'Academia pode vender ou fracionar suplementos?', tipo:'pergunta', status:'A pesquisar', resposta:'depende', resumo:'Página reservada para estudo sobre venda, fracionamento, preparo e rotulagem de suplementos.', pode:['A preencher'], naoPode:['A preencher'], depende:['A preencher'], fundamento:[], publico:'Conteúdo em pesquisa.', revisao:'—'
    },
    {
      id:'lei-8080', area:'Legislação-base', categoria:'Federal', titulo:'Lei Federal nº 8.080/1990', tipo:'legislacao', status:'Referência', resposta:'sim', resumo:'Define a Vigilância Sanitária no SUS e estabelece competências gerais.', pode:['Usar como base estrutural para entender o campo da VISA.'], naoPode:['Usar sozinha para criar exigência documental específica sem norma complementar.'], depende:['Aplicação ao caso concreto e normas específicas.'], fundamento:[{norma:'Lei nº 8.080/1990', trecho:'Define a vigilância sanitária como conjunto de ações capaz de eliminar, diminuir ou prevenir riscos à saúde.'}], publico:'Lei estrutural do SUS e da Vigilância Sanitária.', revisao:'26/06/2026'
    },
    {
      id:'rdc-216', area:'Legislação-base', categoria:'Alimentos', titulo:'RDC Anvisa nº 216/2004', tipo:'legislacao', status:'Referência', resposta:'sim', resumo:'Regulamento técnico de boas práticas para serviços de alimentação.', pode:['Usar como norma técnica central para serviços de alimentação.'], naoPode:['Aplicar fora do seu campo sem verificar se a atividade é serviço de alimentação.'], depende:['Atividade exercida e normas complementares locais.'], fundamento:[{norma:'RDC nº 216/2004', trecho:'Dispõe sobre Regulamento Técnico de Boas Práticas para Serviços de Alimentação.'}], publico:'Norma técnica relevante para restaurantes, lanchonetes e serviços similares.', revisao:'26/06/2026'
    }
  ]
};
