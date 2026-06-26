window.VISA_DATA = {
  title: "Central de Conhecimento da Vigilância Sanitária de Maravilha/SC",
  home: {
    id: "home",
    type: "page",
    title: "Início",
    area: "Central",
    category: "Apresentação",
    updated: "26/06/2026",
    summary: "Base pública de orientação sanitária organizada por assuntos, perguntas práticas e legislação aplicável.",
    direct: "Escolha uma área no menu lateral ou pesquise por uma palavra-chave.",
    sections: [
      {title:"Como usar", body:["Esta central organiza o conhecimento sanitário em linguagem objetiva: assunto, resposta direta, quando se aplica, o que será observado e base legal.","A proposta é dar previsibilidade: o responsável pelo estabelecimento consegue entender o panorama antes de procurar atendimento ou receber fiscalização."]},
      {title:"Como o conteúdo nasce", body:["Legislação → interpretação técnica → orientação prática → revisão humana → publicação.","As páginas devem ser revisadas pela Vigilância Sanitária antes de uso oficial." ]},
      {title:"Primeira área em consolidação", body:["Alimentos e serviços de alimentação: restaurantes, lanchonetes, padarias, cozinhas, manipulação, armazenamento, higiene, água, resíduos e controle de pragas."]}
    ],
    sources: []
  },
  categories: [
    {name:"Alimentos", items:["ali-panorama","ali-legislacao","ali-pia-maos","ali-boas-praticas","ali-manual-bpf","ali-pops","ali-manipuladores","ali-agua","ali-armazenamento","ali-temperatura","ali-pragas","ali-residuos","ali-delivery","ali-industria"]},
    {name:"Academias", items:["aca-panorama"]},
    {name:"Legislação-base", items:["leg-federal","leg-sc","leg-maravilha"]},
    {name:"Canais oficiais", items:["canais"]}
  ],
  items: {
    "ali-panorama": {type:"page", title:"Alimentos — panorama geral", area:"Alimentos", category:"Panorama", updated:"26/06/2026", summary:"Visão inicial sobre serviços e estabelecimentos relacionados a alimentos.", direct:"A área de alimentos envolve toda atividade com produção, manipulação, armazenamento, transporte, exposição, venda ou entrega de alimentos.", sections:[
      {title:"O que entra neste assunto", body:["Restaurantes, lanchonetes, bares, padarias, confeitarias, cozinhas industriais, cantinas, mercados, açougues, peixarias, food trucks, eventos, delivery, depósitos, distribuidoras e estabelecimentos produtores/industrializadores de alimentos.","A análise não deve depender apenas do nome fantasia ou do CNAE: importa o que o local realmente faz com o alimento."]},
      {title:"Riscos sanitários típicos", body:["contaminação por manipulador, água, superfícies, equipamentos ou pragas; cruzamento entre alimento cru e pronto; tempo e temperatura inadequados; armazenamento incorreto; rotulagem/identificação insuficiente; resíduos; instalações sem condições higiênico-sanitárias."]},
      {title:"Perguntas que a central deve responder", body:["Preciso de pia para mãos? Preciso de Manual de Boas Práticas? Preciso de POP? Como armazenar alimentos? Como controlar temperatura? O que muda no delivery? O que muda quando produzo para vender em escala? Quais documentos são exigíveis? Onde encontro a norma?"]}
    ], sources:["src-rdc216","src-rdc275","src-divs-alimentos","src-sc6320","src-maravilha-lc5"]},

    "ali-legislacao": {type:"page", title:"Alimentos — principais legislações", area:"Alimentos", category:"Legislação", updated:"26/06/2026", summary:"Mapa inicial de normas aplicáveis a alimentos e serviços de alimentação.", direct:"A norma central para serviços de alimentação é a RDC Anvisa nº 216/2004. Para produtores/industrializadores, entram normas como a RDC nº 275/2002 e a Portaria SVS/MS nº 326/1997, além das regras estaduais e municipais.", sections:[
      {title:"Federal / Anvisa", body:["RDC Anvisa nº 216/2004: boas práticas para serviços de alimentação.","RDC Anvisa nº 275/2002: POPs e lista de verificação das boas práticas para estabelecimentos produtores/industrializadores de alimentos.","Portaria SVS/MS nº 326/1997: condições higiênico-sanitárias e boas práticas de fabricação para estabelecimentos produtores/industrializadores de alimentos.","Outras normas específicas podem entrar conforme o tipo de produto: embalagens, rotulagem, alimentos industrializados, gelo, água, suplementos, produtos de origem animal, eventos e comércio eletrônico."]},
      {title:"Santa Catarina", body:["Lei Estadual nº 6.320/1983: Código Sanitário Estadual, norma geral de saúde em SC.","Decreto Estadual nº 31.455/1987: regulamenta dispositivos do Código Sanitário Estadual sobre alimentos e bebidas.","A página de Alimentos da DIVS reúne a RDC 216/2004, roteiros, perguntas e respostas e normas complementares para alimentos.","Normas de classificação de risco e licenciamento devem ser consultadas separadamente conforme CNAE e atividade real."]},
      {title:"Maravilha/SC", body:["Lei Complementar Municipal nº 5/2002: norma municipal de saúde e Vigilância Sanitária de Maravilha, com penalidades e organização sanitária local.","A aplicação operacional depende também de regulamentos municipais, taxas, formulários, PMAVISA, designação de autoridades sanitárias e fluxos internos vigentes."]}
    ], sources:["src-rdc216","src-rdc275","src-port326","src-divs-alimentos","src-sc6320","src-sc31455","src-maravilha-lc5"]},

    "ali-pia-maos": {type:"question", title:"Cozinha precisa ter pia para higienização das mãos?", area:"Alimentos", category:"Estrutura", updated:"26/06/2026", summary:"Orientação sobre lavatório/pia para higiene das mãos em serviços de alimentação.", direct:"Sim, quando houver manipulação de alimentos, a estrutura deve permitir higienização adequada das mãos dos manipuladores em condição compatível com a atividade e o risco.", sections:[
      {title:"Quando se aplica", body:["Aplica-se especialmente a serviços de alimentação onde há preparo, fracionamento, montagem, porcionamento ou manipulação de alimentos.","A exigência concreta deve considerar a atividade realizada, o fluxo da cozinha, o risco de contaminação e a norma aplicável."]},
      {title:"O que será observado", body:["existência de ponto adequado para higienização das mãos; acesso sem cruzar área contaminada; abastecimento de água; sabonete líquido ou produto adequado; meio higiênico de secagem; ausência de uso simultâneo indevido para lavagem de utensílios ou alimentos; condições de limpeza e conservação."]},
      {title:"Ponto de atenção", body:["Nem toda pia existente resolve o problema sanitário. Uma pia usada para utensílios, alimentos ou limpeza pode não atender à finalidade de higienização das mãos se gerar risco de contaminação cruzada.","A orientação deve ser fundamentada na atividade real do estabelecimento e na norma técnica aplicável, evitando exigências genéricas desconectadas do risco."]}
    ], sources:["src-rdc216","src-anvisa-cartilha","src-divs-alimentos"]},

    "ali-boas-praticas": {type:"question", title:"O que são Boas Práticas em serviços de alimentação?", area:"Alimentos", category:"Boas Práticas", updated:"26/06/2026", summary:"Conceito operacional de boas práticas.", direct:"São procedimentos de higiene, organização e controle que devem ser adotados para garantir alimentos seguros ao consumidor.", sections:[
      {title:"Ideia principal", body:["Boas Práticas abrangem desde a escolha da matéria-prima até preparo, armazenamento, exposição e entrega do alimento.","O objetivo é reduzir o risco de doenças transmitidas por alimentos e outras contaminações."]},
      {title:"Temas normalmente envolvidos", body:["edificação e instalações; equipamentos e utensílios; higienização; controle de pragas; água; resíduos; manipuladores; matéria-prima; preparo; armazenamento; exposição; documentação; responsabilidade pelo serviço."]}
    ], sources:["src-rdc216","src-anvisa-cartilha"]},

    "ali-manual-bpf": {type:"question", title:"Serviço de alimentação precisa de Manual de Boas Práticas?", area:"Alimentos", category:"Documentos", updated:"26/06/2026", summary:"Documento que descreve as práticas adotadas pelo serviço.", direct:"Em regra, serviços de alimentação sujeitos à RDC 216/2004 devem possuir documentação que descreva suas Boas Práticas, compatível com as atividades realizadas.", sections:[
      {title:"Para que serve", body:["O Manual de Boas Práticas descreve como o estabelecimento organiza suas atividades para manter condições higiênico-sanitárias adequadas.","Não deve ser um documento genérico copiado: precisa corresponder à realidade do local."]},
      {title:"O que normalmente deve refletir", body:["estrutura física; fluxos; higienização; controle de água; pragas; resíduos; manipuladores; recebimento; armazenamento; preparo; exposição; transporte; responsabilidades e registros aplicáveis."]}
    ], sources:["src-rdc216","src-divs-alimentos"]},

    "ali-pops": {type:"question", title:"Quando entram os POPs em alimentos?", area:"Alimentos", category:"Documentos", updated:"26/06/2026", summary:"Procedimentos Operacionais Padronizados.", direct:"POPs são exigidos especialmente no contexto de estabelecimentos produtores/industrializadores de alimentos e, conforme a atividade, podem ser necessários para demonstrar controle de procedimentos críticos.", sections:[
      {title:"RDC 275/2002", body:["A RDC 275/2002 trata de Procedimentos Operacionais Padronizados aplicados a estabelecimentos produtores/industrializadores de alimentos e de lista de verificação de boas práticas.","A aplicação deve considerar se o estabelecimento é serviço de alimentação, produtor/industrializador ou possui atividade mista."]},
      {title:"Exemplos de temas de POP", body:["higienização de instalações/equipamentos; controle da potabilidade da água; higiene e saúde dos manipuladores; manejo de resíduos; manutenção preventiva; controle integrado de vetores e pragas; seleção de matérias-primas; recolhimento de produtos."]}
    ], sources:["src-rdc275","src-port326"]},

    "ali-manipuladores": {type:"question", title:"O que observar sobre manipuladores de alimentos?", area:"Alimentos", category:"Manipuladores", updated:"26/06/2026", summary:"Higiene, saúde e condutas do manipulador.", direct:"O manipulador deve atuar de forma a não contaminar o alimento, mantendo higiene pessoal, condutas adequadas e controle de saúde quando aplicável.", sections:[
      {title:"Pontos frequentes", body:["higienização das mãos; uniformes/vestimentas compatíveis; proteção de cabelos; ausência de adornos quando houver risco; não manipular alimentos em condição de saúde incompatível; capacitação em boas práticas; condutas que evitem contaminação."]},
      {title:"Como interpretar", body:["A exigência deve estar ligada ao risco da atividade. O foco não é aparência formal, mas prevenção de contaminação do alimento."]}
    ], sources:["src-rdc216","src-anvisa-cartilha"]},

    "ali-agua": {type:"question", title:"Qual a relação entre água e alimentos?", area:"Alimentos", category:"Água", updated:"26/06/2026", summary:"Água potável como condição para produção segura.", direct:"A água utilizada em serviços de alimentação deve ser potável quando entrar em contato direto ou indireto com alimentos, utensílios, superfícies ou mãos de manipuladores.", sections:[
      {title:"O que observar", body:["origem da água; reservatório; higienização da caixa d’água; proteção contra contaminação; disponibilidade nos pontos necessários; gelo e vapor quando usados em contato com alimentos; registros quando aplicáveis."]},
      {title:"Quando aprofundar", body:["Se o estabelecimento usa solução alternativa, poço, reservatório próprio, gelo, água transportada ou produção com grande risco, a análise deve ser aprofundada com as normas específicas de água para consumo humano."]}
    ], sources:["src-rdc216","src-divs-alimentos"]},

    "ali-armazenamento": {type:"question", title:"Como deve ser o armazenamento de alimentos?", area:"Alimentos", category:"Armazenamento", updated:"26/06/2026", summary:"Organização, separação e conservação.", direct:"O armazenamento deve preservar a segurança do alimento, evitando contaminação, deterioração, mistura indevida e perda de rastreabilidade.", sections:[
      {title:"Pontos práticos", body:["separar crus e prontos; proteger embalagens; manter prateleiras e equipamentos limpos; controlar validade; identificar produtos abertos/preparados; evitar contato com piso e paredes quando houver risco; respeitar temperatura indicada."]},
      {title:"Atenção", body:["Produtos saneantes, materiais de limpeza e objetos estranhos à atividade não devem contaminar alimentos ou utensílios."]}
    ], sources:["src-rdc216","src-anvisa-cartilha"]},

    "ali-temperatura": {type:"question", title:"Por que controlar tempo e temperatura?", area:"Alimentos", category:"Conservação", updated:"26/06/2026", summary:"Controle para evitar multiplicação microbiana.", direct:"Alimentos que exigem refrigeração, congelamento ou manutenção quente devem permanecer em condições compatíveis com a segurança do produto.", sections:[
      {title:"O que observar", body:["temperatura de equipamentos; armazenamento refrigerado/congelado; exposição de alimentos prontos; resfriamento e reaquecimento; transporte; registros quando necessários; equipamentos suficientes e em bom estado."]},
      {title:"Interpretação", body:["O problema não é apenas o número no termômetro: é o risco de crescimento microbiano e perda de segurança do alimento."]}
    ], sources:["src-rdc216"]},

    "ali-pragas": {type:"question", title:"Controle de pragas em estabelecimentos de alimentos", area:"Alimentos", category:"Controle de pragas", updated:"26/06/2026", summary:"Medidas preventivas e corretivas.", direct:"O estabelecimento deve prevenir acesso, abrigo e proliferação de vetores e pragas que possam contaminar alimentos, superfícies e ambientes.", sections:[
      {title:"O que observar", body:["barreiras físicas; telas quando aplicáveis; vedação; limpeza; manejo de resíduos; armazenamento adequado; sinais de infestação; ações corretivas; uso seguro de produtos e serviços especializados quando necessários."]},
      {title:"Atenção", body:["A dedetização isolada não substitui boas condições estruturais, limpeza e manejo adequado de resíduos."]}
    ], sources:["src-rdc216","src-sc6320"]},

    "ali-residuos": {type:"question", title:"Manejo de resíduos em alimentos", area:"Alimentos", category:"Resíduos", updated:"26/06/2026", summary:"Resíduos não podem comprometer a segurança dos alimentos.", direct:"Resíduos devem ser manejados de modo a evitar contaminação, atração de pragas, odores e risco ao alimento ou às pessoas.", sections:[
      {title:"Pontos práticos", body:["recipientes adequados; retirada frequente; separação de áreas limpas; local de armazenamento externo quando aplicável; limpeza dos recipientes; controle de óleo, restos e materiais contaminantes."]},
      {title:"Integração", body:["Dependendo do caso, resíduos também podem envolver normas ambientais, urbanas ou de coleta pública, mas o risco sanitário no estabelecimento permanece relevante."]}
    ], sources:["src-rdc216","src-sc6320"]},

    "ali-delivery": {type:"question", title:"Delivery e comércio online de alimentos", area:"Alimentos", category:"Delivery", updated:"26/06/2026", summary:"Produção, venda e entrega por aplicativos ou meios digitais.", direct:"O fato de vender pela internet ou aplicativo não elimina a sujeição às normas sanitárias quando há produção, manipulação, armazenamento, comércio ou entrega de alimentos.", sections:[
      {title:"Santa Catarina", body:["Em Santa Catarina, há norma específica da DIVS sobre exigência de Alvará Sanitário para estabelecimentos que produzem e realizam comércio de alimentos online, incluindo sites, aplicativos e afins."]},
      {title:"O que observar", body:["local de produção; condições de armazenamento; embalagem; transporte; tempo e temperatura; identificação; responsabilidade pelo alimento até a entrega."]}
    ], sources:["src-rn-divs-2020","src-rdc216"]},

    "ali-industria": {type:"question", title:"Serviço de alimentação ou indústria de alimentos?", area:"Alimentos", category:"Enquadramento", updated:"26/06/2026", summary:"Diferença importante para saber qual norma aplicar.", direct:"Nem todo estabelecimento que trabalha com alimento é apenas restaurante. Quando há produção/industrialização, embalagem, distribuição ou venda em escala, outras normas podem se aplicar.", sections:[
      {title:"Por que isso importa", body:["Serviços de alimentação tendem a usar a RDC 216/2004 como referência central. Produtores/industrializadores entram em campo normativo que inclui RDC 275/2002, Portaria 326/1997 e normas específicas por produto."]},
      {title:"Perguntas para enquadrar", body:["O alimento é consumido no local? É produzido para venda embalada? Há rotulagem? Há distribuição para terceiros? Há produção em escala? Há transporte? Há registro ou comunicação sanitária específica para o produto?"]}
    ], sources:["src-rdc216","src-rdc275","src-port326"]},

    "aca-panorama": {type:"page", title:"Academias — panorama inicial", area:"Academias", category:"Panorama", updated:"26/06/2026", summary:"Área reservada para consolidação posterior.", direct:"Academias serão estruturadas depois de alimentos, seguindo o mesmo método: legislação, interpretação, perguntas práticas e panorama público.", sections:[{title:"Assuntos futuros", body:["licenciamento; higiene; vestiários; equipamentos; suplementos; piscinas; climatização; atividades adicionais; interação com CREF, Bombeiros e outros órgãos."]}], sources:[]},

    "leg-federal": {type:"page", title:"Legislação federal — base sanitária", area:"Legislação", category:"Federal", updated:"26/06/2026", summary:"Normas estruturantes nacionais.", direct:"A legislação federal define a estrutura do SUS, da Anvisa e das normas sanitárias nacionais.", sections:[{title:"Normas a considerar", body:["Constituição Federal, arts. 196 a 200; Lei nº 8.080/1990; Lei nº 9.782/1999; Lei nº 6.437/1977; normas técnicas da Anvisa e do Ministério da Saúde."]}], sources:["src-rdc216","src-rdc275"]},
    "leg-sc": {type:"page", title:"Santa Catarina — base sanitária", area:"Legislação", category:"Estadual", updated:"26/06/2026", summary:"Normas estaduais de SC.", direct:"Santa Catarina possui Código Sanitário Estadual e normas complementares da DIVS/SES.", sections:[{title:"Normas iniciais", body:["Lei Estadual nº 6.320/1983; decretos regulamentadores; normas da DIVS; classificação de risco sanitário; roteiros e orientações técnicas."]}], sources:["src-sc6320","src-divs-alimentos"]},
    "leg-maravilha": {type:"page", title:"Maravilha/SC — base municipal", area:"Legislação", category:"Municipal", updated:"26/06/2026", summary:"Normas municipais de saúde e VISA.", direct:"A base municipal precisa ser consolidada com a LC nº 5/2002 e demais atos locais vigentes.", sections:[{title:"Itens a confirmar", body:["Lei Complementar nº 5/2002; alterações posteriores; decretos; taxas; fluxos; PMAVISA; designações de autoridade sanitária; modelos oficiais de notificação e processo."]}], sources:["src-maravilha-lc5"]},
    "canais": {type:"page", title:"Canais oficiais", area:"Central", category:"Atendimento", updated:"26/06/2026", summary:"Encaminhamento para os canais formais já existentes.", direct:"Esta central orienta, mas não substitui protocolo, licenciamento, denúncia formal, defesa em processo sanitário ou análise individual do estabelecimento.", sections:[{title:"Quando procurar atendimento", body:["Quando a situação envolver documentos do seu estabelecimento, denúncia, processo, licenciamento, recurso, análise de projeto, prazo ou interpretação individual."]},{title:"Observação", body:["Na versão oficial, esta página deve conter os canais oficiais atualizados da Prefeitura de Maravilha e da Vigilância Sanitária."]}], sources:[]}
  },
  sources: {
    "src-rdc216": {label:"RDC Anvisa nº 216/2004 — Boas Práticas para Serviços de Alimentação", url:"https://bvsms.saude.gov.br/bvs/saudelegis/anvisa/2004/res0216_15_09_2004.html"},
    "src-anvisa-cartilha": {label:"Anvisa — Cartilha sobre Boas Práticas para Serviços de Alimentação", url:"https://www.gov.br/anvisa/pt-br/centraisdeconteudo/publicacoes/alimentos/manuais-guias-e-orientacoes/cartilha-boas-praticas-para-servicos-de-alimentacao.pdf"},
    "src-rdc275": {label:"RDC Anvisa nº 275/2002 — POPs e Lista de Verificação de BPF", url:"https://anvisalegis.datalegis.net/action/ActionDatalegis.php?acao=abrirTextoAto&numeroAto=00000275&orgao=RDC/DC/ANVISA/MS&tipo=RDC&valorAno=2002"},
    "src-port326": {label:"Portaria SVS/MS nº 326/1997 — BPF para produtores/industrializadores", url:"https://bvsms.saude.gov.br/bvs/saudelegis/svs1/1997/prt0326_30_07_1997.html"},
    "src-divs-alimentos": {label:"DIVS/SC — Página de Alimentos e referências técnicas", url:"https://www.vigilanciasanitaria.sc.gov.br/index.php/component/content/article/alimentos.html?Itemid=109&catid=27%3Aalimentos"},
    "src-sc6320": {label:"Lei Estadual SC nº 6.320/1983 — Código Sanitário Estadual", url:"https://leis.alesc.sc.gov.br/ato-normativo/7529"},
    "src-sc31455": {label:"Decreto Estadual SC nº 31.455/1987 — Alimentos e Bebidas", url:"https://leisestaduais.com.br/sc/decreto-n-31455-1987-santa-catarina-regulamenta-os-artigos-30-e-31-da-lei-n-6320-de-20-de-dezembro-de-1983-que-dispoem-sobre-alimentos-e-bebidas"},
    "src-maravilha-lc5": {label:"Lei Complementar Municipal nº 5/2002 — VISA Maravilha/SC", url:"https://leismunicipais.com.br/a/sc/m/maravilha/lei-complementar/2002/0/5/lei-complementar-n-5-2002-dispoe-sobre-normas-relativas-a-saude-e-a-vigilancia-sanitaria-no-municipio-de-maravilha-estabelece-penalidades-e-da-outras-providencias"},
    "src-rn-divs-2020": {label:"RN DIVS/SUV/SES nº 003/2020 — Alvará Sanitário para comércio online de alimentos", url:"https://www.legisweb.com.br/legislacao/?id=395497"}
  }
};
