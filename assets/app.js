(function () {
  "use strict";

  const config = window.VISA_CONFIG;
  const data = window.VISA;

  const view = document.getElementById("view");
  const breadcrumb = document.getElementById("breadcrumb");
  const areaTabs = document.getElementById("areaTabs");
  const topNavigation = document.getElementById("topNavigation");
  const portalModeSwitcher = document.getElementById("portalModeSwitcher");
  const portalContextBar = document.getElementById("portalContextBar");
  const searchButton = document.getElementById("searchButton");
  const searchDialog = document.getElementById("searchDialog");
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");
  const officialNoticeLink = document.getElementById("officialNoticeLink");
  const contactFab = document.getElementById("contactFab");
  const contactDialog = document.getElementById("contactDialog");
  const contactClose = document.getElementById("contactClose");
  const contactContent = document.getElementById("contactContent");

  const ICONS = {
    shield: '<svg viewBox="0 0 24 24"><path d="M12 3 19 6v5c0 4.6-2.8 8-7 10-4.2-2-7-5.4-7-10V6l7-3Z"/><path d="m9 12 2 2 4-5"/></svg>',
    search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>',
    close: '<svg viewBox="0 0 24 24"><path d="m6 6 12 12M18 6 6 18"/></svg>',
    home: '<svg viewBox="0 0 24 24"><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10M9 20v-6h6v6"/></svg>',
    utensils: '<svg viewBox="0 0 24 24"><path d="M7 3v7M4 3v5c0 2 1.3 3 3 3s3-1 3-3V3M7 11v10M15 3v18M15 3c3 2 4 5 4 8h-4"/></svg>',
    medical: '<svg viewBox="0 0 24 24"><path d="M9 3h6v5h5v6h-5v7H9v-7H4V8h5V3Z"/></svg>',
    building: '<svg viewBox="0 0 24 24"><path d="M4 21V5l8-3v19M20 21V9l-8-2M2 21h20M7 8h2M7 12h2M7 16h2M15 12h2M15 16h2"/></svg>',
    clipboard: '<svg viewBox="0 0 24 24"><path d="M9 5H6a2 2 0 0 0-2 2v13h16V7a2 2 0 0 0-2-2h-3"/><rect x="9" y="2" width="6" height="5" rx="1"/><path d="M8 11h8M8 15h8"/></svg>',
    users: '<svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6M17 14a5 5 0 0 1 4 5v1"/></svg>',
    book: '<svg viewBox="0 0 24 24"><path d="M4 5.5A3.5 3.5 0 0 1 7.5 2H11v17H7.5A3.5 3.5 0 0 0 4 22V5.5ZM20 5.5A3.5 3.5 0 0 0 16.5 2H13v17h3.5A3.5 3.5 0 0 1 20 22V5.5Z"/></svg>',
    question: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.4 2.4 0 1 1 3.6 2.1c-.9.5-1.4 1-1.4 2M12 17h.01"/></svg>',
    layout: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M9 9h12"/></svg>',
    hand: '<svg viewBox="0 0 24 24"><path d="M8 12V5a2 2 0 0 1 4 0v6M12 10V4a2 2 0 0 1 4 0v7M16 10V6a2 2 0 0 1 4 0v8c0 5-3 8-8 8H9c-3 0-5-2-5-5v-4a2 2 0 0 1 4 0v2"/></svg>',
    sparkles: '<svg viewBox="0 0 24 24"><path d="m12 3 1.2 3.8L17 8l-3.8 1.2L12 13l-1.2-3.8L7 8l3.8-1.2L12 3ZM5 14l.8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8L5 14ZM19 13l.8 2.2L22 16l-2.2.8L19 19l-.8-2.2L16 16l2.2-.8L19 13Z"/></svg>',
    sterilize: '<svg viewBox="0 0 24 24"><path d="M5 3h14v7H5zM3 10h18v11H3zM7 14h10M7 17h6"/></svg>',
    trash: '<svg viewBox="0 0 24 24"><path d="M4 7h16M9 3h6l1 4H8l1-4ZM6 7l1 14h10l1-14M10 11v6M14 11v6"/></svg>',
    heart: '<svg viewBox="0 0 24 24"><path d="M20.8 5.8a5.5 5.5 0 0 0-7.8 0L12 6.8l-1-1a5.5 5.5 0 1 0-7.8 7.8L12 22l8.8-8.4a5.5 5.5 0 0 0 0-7.8Z"/></svg>',
    stethoscope: '<svg viewBox="0 0 24 24"><path d="M5 3v6a5 5 0 0 0 10 0V3M3 3h4M13 3h4"/><path d="M10 14v2a5 5 0 0 0 10 0v-2"/><circle cx="20" cy="12" r="2"/></svg>',
    tooth: '<svg viewBox="0 0 24 24"><path d="M7 3c-3 1-4 4-3 8 1 5 3 10 5 10 2 0 1-6 3-6s1 6 3 6c2 0 4-5 5-10 1-4 0-7-3-8-2-1-3 1-5 1S9 2 7 3Z"/></svg>',
    flask: '<svg viewBox="0 0 24 24"><path d="M9 3h6M10 3v6l-6 10a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3L14 9V3M7 16h10"/></svg>',
    syringe: '<svg viewBox="0 0 24 24"><path d="m14 3 7 7M16 5l-9 9M5 12l7 7M3 21l4-4M11 8l5 5"/></svg>',
    radiology: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="2"/><path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l4 4M15 15l4 4M19 5l-4 4M9 15l-4 4"/></svg>',
    pharmacy: '<svg viewBox="0 0 24 24"><path d="M4 4h16v16H4z"/><path d="M12 7v10M7 12h10"/></svg>',
    spark: '<svg viewBox="0 0 24 24"><path d="M13 2 4 14h7l-1 8 10-13h-7l0-7Z"/></svg>',
    leaf: '<svg viewBox="0 0 24 24"><path d="M20 4C12 4 6 8 5 16c5 1 11-1 15-12Z"/><path d="M4 20c4-5 8-8 14-11"/></svg>',
    foot: '<svg viewBox="0 0 24 24"><path d="M9 4c-2 2-3 6-2 9 1 4 4 7 7 7 3 0 5-2 5-5 0-4-4-4-5-7-1-3-2-5-5-4Z"/><circle cx="6" cy="5" r="1"/><circle cx="9" cy="2.8" r=".8"/></svg>',
    hospital: '<svg viewBox="0 0 24 24"><path d="M4 21V4h16v17M2 21h20M9 8h6M12 5v6M7 15h3v6M14 15h3v6"/></svg>',
    arrow: '<svg viewBox="0 0 24 24"><path d="M5 12h14M14 7l5 5-5 5"/></svg>',
    chevron: '<svg viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg>',
    external: '<svg viewBox="0 0 24 24"><path d="M14 4h6v6M20 4l-9 9"/><path d="M18 13v7H4V6h7"/></svg>',
    info: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7h.01"/></svg>',
    megaphone: '<svg viewBox="0 0 24 24"><path d="M4 13h4l10 5V6L8 11H4v2Z"/><path d="M8 13v5a2 2 0 0 0 2 2h1"/><path d="M20 9v6"/></svg>',
    droplet: '<svg viewBox="0 0 24 24"><path d="M12 3s7 7.1 7 12a7 7 0 0 1-14 0c0-4.9 7-12 7-12Z"/><path d="M9 16a3 3 0 0 0 3 2.5"/></svg>'
  };

  const icon = (name, cls = "") =>
    `<span class="icon ${cls}" aria-hidden="true">${ICONS[name] || ICONS.info}</span>`;

  function installIcons(root = document) {
    root.querySelectorAll("[data-icon]").forEach(el => {
      el.innerHTML = icon(el.dataset.icon);
    });
  }

  const PORTAL_MODES = {
    cidadao: {
      id: "cidadao",
      label: "Área do Cidadão",
      shortLabel: "Cidadão",
      kicker: "",
      title: "",
      description: "",
      searchPlaceholder: "Pesquise uma dúvida, atividade ou procedimento",
      quickLinks: []
    },
    contador: {
      id: "contador",
      label: "Área do Contador",
      shortLabel: "Contador",
      kicker: "Ambiente técnico",
      title: "Área do Contador",
      description: "Orientação técnica para enquadramento sanitário, protocolos e organização documental de clientes.",
      searchPlaceholder: "Pesquise alvará, protocolo, documentação ou enquadramento",
      quickLinks: []
    },
    empresa: {
      id: "empresa",
      label: "Área da Empresa",
      shortLabel: "Empresa",
      kicker: "Ambiente empresarial",
      title: "Área da Empresa",
      description: "Orientação sanitária para alvará, inspeção, documentação e conformidade do estabelecimento.",
      searchPlaceholder: "Pesquise alvará, inspeção, documentos ou conformidade",
      quickLinks: []
    }
  };

  const CONTADOR_BETHA_DOCUMENTOS = [
    "Alvará Sanitário para Academias",
    "Alvará Sanitário para Serviços de Ótica",
    "Alvará Sanitário para Serviços Odontológicos",
    "Exumação – translado",
    "Habite-se Sanitário"
  ];

  const OFFICIAL_VISA_URL = "https://maravilha.sc.gov.br/vigilancia-sanitaria/";

  const CONTADOR_FAQ_BLOCKS = [
    {
      "title": "Finalidade da Área do Contador",
      "description": "Papel da área, limites da orientação e importância da contabilidade.",
      "icon": "shield",
      "questions": [
        {
          "n": 1,
          "q": "Para que serve a Área do Contador?",
          "a": "Serve para orientar profissionais da contabilidade sobre os principais cuidados antes de abrir, alterar, regularizar ou protocolar empresas sujeitas a Vigilância Sanitária. A proposta é reduzir dúvidas, evitar retrabalho e melhorar a comunicação entre contabilidade, empresa e setor público."
        },
        {
          "n": 2,
          "q": "A Área do Contador substitui o atendimento da Vigilância Sanitária?",
          "a": "Não. Ela organiza orientações gerais e ajuda na preparação dos protocolos, mas situações concretas podem exigir análise individual da Vigilância Sanitária."
        },
        {
          "n": 3,
          "q": "Por que a contabilidade é importante no processo sanitário?",
          "a": "Porque muitas informações usadas pela Vigilância Sanitária começam no cadastro da empresa, especialmente CNAE, endereço, atividade declarada, natureza do serviço e alterações contratuais. Quando esses dados não representam a atividade real, o processo pode ser atrasado ou exigir correção."
        },
        {
          "n": 4,
          "q": "A Vigilância Sanitária analisa apenas o CNAE?",
          "a": "Não. O CNAE é uma informação importante, mas a análise também considera a atividade efetivamente exercida, o risco sanitário, a estrutura física, os produtos ou serviços oferecidos e a legislação aplicável."
        },
        {
          "n": 5,
          "q": "Uma empresa pode ter CNAE de baixo risco e mesmo assim precisar de análise?",
          "a": "Sim. Dependendo da atividade real, da forma de operação, do local, do público atendido ou dos produtos envolvidos, pode ser necessária avaliação da Vigilância Sanitária."
        }
      ]
    },
    {
      "title": "Abertura e consulta prévia",
      "description": "Cuidados antes da abertura e início da operação.",
      "icon": "building",
      "questions": [
        {
          "n": 6,
          "q": "O contador deve orientar o cliente a procurar a Vigilância antes de abrir a empresa?",
          "a": "Sim, especialmente quando a atividade envolver alimentos, saúde, estetica, medicamentos, produtos de interesse a saúde, saneantes, serviços veterinarios, educacao, assistencia, hospedagem ou outras atividades com possível risco sanitário. A consulta prévia evita investimento em local ou estrutura incompatível com a atividade pretendida."
        },
        {
          "n": 7,
          "q": "Toda empresa precisa de Alvará Sanitário?",
          "a": "Não necessariamente. A exigência depende da atividade, do CNAE, da classificação de risco e das normas vigentes. Algumas atividades podem ter tratamento simplificado ou dispensa de emissão do alvará sanitário, mas isso não significa dispensa de cumprir as normas sanitárias."
        },
        {
          "n": 8,
          "q": "MEI precisa de Alvará Sanitário?",
          "a": "Depende da atividade. Ser MEI não elimina automaticamente as exigências sanitárias. O enquadramento deve considerar o que a pessoa realmente faz, onde faz, como faz e qual risco a atividade pode gerar."
        },
        {
          "n": 9,
          "q": "A empresa pode iniciar as atividades antes da liberação sanitária?",
          "a": "Depende do enquadramento da atividade e do procedimento aplicável. Em atividades sujeitas a autorizacao sanitária, iniciar sem a liberação necessária pode gerar irregularidade e medidas administrativas. Na dúvida, o correto e consultar a Vigilância Sanitária antes do início da operação."
        },
        {
          "n": 10,
          "q": "O endereço da empresa interfere na análise sanitária?",
          "a": "Sim. O endereço interfere porque a Vigilância Sanitária pode precisar avaliar estrutura física, acesso, fluxo, água, esgoto, ventilação, áreas de manipulação, armazenamento, atendimento ao público e compatibilidade da atividade com o local."
        }
      ]
    },
    {
      "title": "CNAE, atividade real e enquadramento",
      "description": "Coerência entre cadastro, objeto social e atividade efetivamente exercida.",
      "icon": "layout",
      "questions": [
        {
          "n": 11,
          "q": "O que deve ser observado ao escolher o CNAE?",
          "a": "O CNAE deve representar, com fidelidade, a atividade que a empresa realmente exerce ou pretende exercer. A Vigilância Sanitária não escolhe nem define os CNAEs da empresa. Porém, os CNAEs informados servem como uma das bases para análise do risco sanitário, da documentação necessária e do procedimento aplicável. Por isso, a escolha incorreta de CNAE pode gerar exigências incompatíveis, ausência de exigências necessárias, atraso no processo ou necessidade de adequacao cadastral."
        },
        {
          "n": 12,
          "q": "O CNAE secundario também importa?",
          "a": "Sim. CNAEs secundários também podem gerar análise sanitária, especialmente quando envolverem fabricação, manipulação, armazenamento, transporte, prestação de serviços, comercialização de produtos sujeitos a Vigilância Sanitária ou atividades de interesse a saúde. A empresa deve informar os CNAEs que correspondam as atividades efetivamente realizadas, pois o risco sanitário não depende apenas da atividade principal."
        },
        {
          "n": 13,
          "q": "O que acontece quando o CNAE não corresponde a atividade real?",
          "a": "A Vigilância Sanitária não determina quais CNAEs a empresa deve possuir. A definicao dos CNAEs e de responsabilidade da empresa e de sua contabilidade, conforme as atividades que serão efetivamente exercidas. No entanto, o enquadramento sanitário será analisado a partir das informações declaradas, dos CNAEs informados e da atividade real verificada. Assim, quando a empresa informa CNAEs de alto, medio ou baixo risco sanitário, essa declaracao pode acarretar a cobranca de documentos, exigências e procedimentos compatíveis com o respectivo nivel de risco. Por isso, e fundamental que constem no cadastro apenas CNAEs coerentes com as atividades realmente exercidas. CNAEs incompatíveis, ausentes ou declarados de forma inadequada podem gerar exigências incorretas, necessidade de correção cadastral, atraso na análise do processo ou reavaliação do enquadramento sanitário."
        },
        {
          "n": 14,
          "q": "A descrição do objeto social deve ser genérica ou detalhada?",
          "a": "A descrição deve ser clara e compatível com a atividade real da empresa. Objetos sociais muito genéricos podem dificultar a análise sanitária, principalmente quando não permitem identificar se haverá manipulação, fabricação, armazenamento, prestação de serviço, atendimento ao público ou outra atividade sujeita a Vigilância Sanitária. Quanto mais coerente for a relação entre CNAE, objeto social e atividade real, menor tende a ser o risco de exigências posteriores ou necessidade de correção."
        },
        {
          "n": 15,
          "q": "A empresa pode exercer atividade diferente daquela informada no cadastro?",
          "a": "Não deve. A empresa precisa manter seu cadastro compatível com a atividade efetivamente exercida. Quando houver inclusão, exclusão ou alteração de atividade, deve verificar a necessidade de atualização cadastral e de comunicação a Vigilância Sanitária, especialmente se a mudança alterar o risco sanitário, a documentação exigida ou a forma de funcionamento."
        }
      ]
    },
    {
      "title": "Protocolos, Betha e documentação",
      "description": "Conferência documental e envio correto das informações.",
      "icon": "clipboard",
      "questions": [
        {
          "n": 16,
          "q": "O que costuma atrasar um protocolo sanitário?",
          "a": "Os atrasos mais comuns ocorrem por documentação incompleta, CNAE incompatível, endereço incorreto, falta de informações sobre a atividade real, ausência de documentos específicos, formulários preenchidos de forma genérica ou protocolos feitos sem consulta prévia."
        },
        {
          "n": 17,
          "q": "A lista de documentos é igual para todas as empresas?",
          "a": "Não. A documentação depende da atividade, do risco sanitário, da estrutura, do tipo de serviço, dos produtos envolvidos e da legislação aplicável. Empresas diferentes podem ter exigências diferentes."
        },
        {
          "n": 18,
          "q": "O contador deve confirmar a documentação antes de protocolar?",
          "a": "Sim. Sempre que houver dúvida, é recomendável confirmar previamente a documentação exigida para a atividade. Como o Protocolo Betha ainda está em fase de implantação para alguns serviços, a disponibilidade do serviço on-line e a forma correta de envio podem variar. Antes de protocolar, o contador deve verificar se o serviço já está disponível no sistema e se a documentação está completa. Essa conferência reduz retrabalho, evita protocolo em categoria incorreta e agiliza a análise pela Vigilância Sanitária."
        },
        {
          "n": 19,
          "q": "O contrato social ou cadastro da empresa precisa estar atualizado?",
          "a": "Sim. Os dados cadastrais devem refletir a realidade da empresa, incluindo razão social, endereço, atividades, responsáveis e demais informações necessárias."
        },
        {
          "n": 20,
          "q": "A Vigilância Sanitária pode pedir documentos complementares?",
          "a": "Sim. Quando a documentação apresentada não for suficiente para avaliar o risco ou a regularidade da atividade, podem ser solicitados documentos, esclarecimentos ou adequações complementares."
        }
      ]
    },
    {
      "title": "Alterações de empresa",
      "description": "Mudanças de endereço, CNAE, responsável, reforma ou ampliação.",
      "icon": "spark",
      "questions": [
        {
          "n": 21,
          "q": "Mudança de endereço precisa ser comunicada a Vigilância Sanitária?",
          "a": "Sim, quando a empresa estiver sujeita a Vigilância Sanitária. O novo local pode alterar completamente a análise da atividade, da estrutura e do risco."
        },
        {
          "n": 22,
          "q": "Alteração de CNAE precisa ser informada?",
          "a": "Sim. A inclusão, exclusão ou alteração de CNAE pode modificar o enquadramento sanitário e a documentação exigida. A Vigilância Sanitária não define os CNAEs da empresa, mas analisa as consequências sanitárias das atividades declaradas e exercidas."
        },
        {
          "n": 23,
          "q": "Mudança de responsável legal interfere no processo?",
          "a": "Pode interferir. A empresa deve manter seus dados atualizados, especialmente quando houver alteração de responsável legal, responsável técnico ou representante vinculado ao processo sanitário."
        },
        {
          "n": 24,
          "q": "Ampliação de atividade precisa passar pela Vigilância?",
          "a": "Sim, quando a ampliação envolver nova atividade sujeita a Vigilância Sanitária ou mudança relevante no risco sanitário. Exemplo: uma empresa que apenas vendia produtos passa a manipular, fabricar, fracionar, armazenar ou prestar serviço relacionado a saúde."
        },
        {
          "n": 25,
          "q": "Reforma ou ampliação física precisa ser comunicada?",
          "a": "Quando a reforma altera área de manipulação, atendimento, armazenamento, sanitários, fluxo, ventilação, abastecimento de água ou capacidade de produção, a Vigilância Sanitária deve ser consultada."
        }
      ]
    },
    {
      "title": "Responsabilidade da empresa e da contabilidade",
      "description": "Limites da atuação contábil e riscos de orientar sem análise.",
      "icon": "users",
      "questions": [
        {
          "n": 26,
          "q": "O contador é responsável pela condição sanitária da empresa?",
          "a": "A responsabilidade pela atividade e pela estrutura é da empresa e de seus responsáveis. Porém, a contabilidade tem papel importante na correta orientação cadastral, documental e formal do processo."
        },
        {
          "n": 27,
          "q": "O contador deve prometer ao cliente que o alvará será liberado?",
          "a": "Não. A liberação depende da análise da documentação, do enquadramento da atividade, da classificação de risco e, quando aplicável, da vistoria ou avaliação da autoridade sanitária."
        },
        {
          "n": 28,
          "q": "O que a contabilidade deve evitar?",
          "a": "Deve evitar protocolar informações incompletas, utilizar CNAE incompatível com a atividade real, declarar atividade diferente da exercida, orientar início irregular da operação ou tratar a dispensa de alvará como dispensa de normas sanitárias."
        },
        {
          "n": 29,
          "q": "A empresa de baixo risco pode ser fiscalizada?",
          "a": "Sim. Baixo risco não significa ausência de responsabilidade. A empresa continua obrigada a cumprir as normas sanitárias e pode ser fiscalizada."
        },
        {
          "n": 30,
          "q": "O que é melhor: protocolar rápido ou protocolar corretamente?",
          "a": "Protocolar corretamente. Um protocolo incompleto ou incompatível pode gerar retrabalho, exigências, indeferimento, atraso e desgaste entre empresa, contador e Vigilância Sanitária."
        }
      ]
    },
    {
      "title": "Comunicação com a Vigilância Sanitária",
      "description": "Informações que ajudam a orientar melhor e evitar retrabalho.",
      "icon": "hand",
      "questions": [
        {
          "n": 31,
          "q": "Quando o contador deve procurar a Vigilância Sanitária?",
          "a": "Sempre que houver dúvida sobre enquadramento, documentação, CNAE, atividade real, mudança de endereço, início de atividade sujeita a fiscalização, reforma, ampliação ou alteração relevante no funcionamento da empresa."
        },
        {
          "n": 32,
          "q": "Quais informações ajudam a Vigilância a orientar melhor?",
          "a": "Nome da empresa, CNPJ ou CPF quando houver, endereço, CNAEs, descrição real da atividade, forma de funcionamento, produtos ou serviços oferecidos, existência de manipulação, fabricação, armazenamento, transporte, atendimento ao público e situação atual do processo."
        },
        {
          "n": 33,
          "q": "E possível resolver tudo apenas pelo CNAE?",
          "a": "Não. O CNAE ajuda, mas não substitui a análise da atividade real. Duas empresas com o mesmo CNAE podem ter riscos diferentes dependendo da estrutura e da forma de operação."
        },
        {
          "n": 34,
          "q": "Como melhorar a relação entre contabilidade, empresa e Vigilância?",
          "a": "Com informações claras, documentos completos, consulta prévia quando necessário, respeito aos prazos e compreensão de que a análise sanitária existe para prevenir riscos à saúde coletiva."
        },
        {
          "n": 35,
          "q": "Qual é a orientação principal para os contadores?",
          "a": "Antes de protocolar, confirme se o CNAE, a atividade real, o endereço e a documentação estão coerentes. Essa simples conferência evita grande parte dos problemas no processo sanitário."
        }
      ]
    }
  ];

  let currentMode = "cidadao";

  function modeData() {
    return PORTAL_MODES[currentMode] || PORTAL_MODES.cidadao;
  }

  function setMetaThemeColor(color) {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", color);
  }

  function applyModeTheme() {
    document.body.dataset.mode = currentMode;
    document.body.classList.remove("mode-cidadao", "mode-contador", "mode-empresa");
    document.body.classList.add(`mode-${currentMode}`);
    const colors = {
      cidadao: "#f7f9fb",
      contador: "#0b1118",
      empresa: "#0a2440"
    };
    setMetaThemeColor(colors[currentMode] || colors.cidadao);
    if (searchInput) searchInput.placeholder = modeData().searchPlaceholder;
  }

  function modeLottie(modeId) {
    const files = {
      cidadao: "assets/area-cidadao.lottie",
      contador: "assets/area-contador.lottie",
      empresa: "assets/area-empresa.lottie"
    };
    return files[modeId] || files.cidadao;
  }

  function renderModeSwitcher() {
    if (!portalModeSwitcher) return;
    portalModeSwitcher.innerHTML = Object.values(PORTAL_MODES).map(mode => `
      <button
        type="button"
        class="mode-switch-button mode-switch-${mode.id} ${mode.id === currentMode ? "active" : ""}"
        data-mode="${mode.id}"
        aria-pressed="${mode.id === currentMode ? "true" : "false"}"
        aria-label="Abrir ${esc(mode.label)}"
      >
        <span class="mode-switch-fallback" aria-hidden="true">${esc(mode.label)}</span>
        <dotlottie-wc
          class="mode-switch-lottie"
          src="${esc(modeLottie(mode.id))}"
          speed="1"
          autoplay
          loop
          aria-hidden="true"
        ></dotlottie-wc>
      </button>
    `).join("");
    setupModeAnimations();
  }

  function setupModeAnimations() {
    if (!portalModeSwitcher) return;
    const reveal = player => {
      const button = player.closest(".mode-switch-button");
      if (button) button.classList.add("animation-ready");
    };

    portalModeSwitcher.querySelectorAll("dotlottie-wc").forEach(player => {
      player.addEventListener("ready", () => reveal(player), { once: true });
      player.addEventListener("load", () => reveal(player), { once: true });
      if (player.dotLottie) reveal(player);
    });
  }

  function renderPortalContext() {
    if (!portalContextBar) return;
    if (currentMode === "cidadao") {
      portalContextBar.innerHTML = "";
      portalContextBar.hidden = true;
      return;
    }
    portalContextBar.hidden = true;
    portalContextBar.innerHTML = "";
  }

  function renderModeLanding() {
    const mode = modeData();
    if (mode.id === "contador") return renderContadorLanding(mode);
    if (mode.id === "empresa") return renderEmpresaLanding(mode);
    return "";
  }

  function renderContadorLanding(mode) {
    return `
      <section class="mode-landing mode-landing-contador contador-page">
        <section class="contador-hero contador-hero-approved">
          <div class="contador-hero-copy">
            <p class="kicker">${esc(mode.kicker)}</p>
            <h1>Área do Contador</h1>
          </div>
          <aside class="contador-directive-card contador-keywords-card">
            <small>Orientação central</small>
            <div class="contador-keywords" aria-label="Palavras-chave da Área do Contador">
              <span>Responsabilidade</span>
              <span>Ética</span>
              <span>Comprometimento</span>
            </div>
          </aside>
        </section>

        <section class="contador-menu-cards" aria-label="Menus da Área do Contador">
          <a class="contador-menu-card primary" href="#contador/documentacoes">
            <span>${icon("clipboard")}</span>
            <div>
              <small>Menu técnico</small>
              <strong>Documentações</strong>
              <p>Serviços já organizados para protocolação e consulta de documentos necessários.</p>
            </div>
            ${icon("arrow")}
          </a>

          <a class="contador-menu-card" href="#contador/cnae-atividade-real">
            <span>${icon("layout")}</span>
            <div>
              <small>Enquadramento</small>
              <strong>CNAE e atividade real</strong>
              <p>O que deve estar coerente antes de orientar abertura, alteração ou protocolo.</p>
            </div>
            ${icon("arrow")}
          </a>

          <a class="contador-menu-card" href="#contador/protocolos-betha">
            <span>${icon("book")}</span>
            <div>
              <small>Envio correto</small>
              <strong>Protocolos e Betha</strong>
              <p>Cuidados antes do envio para evitar anexos incorretos e retrabalho.</p>
            </div>
            ${icon("arrow")}
          </a>

          <a class="contador-menu-card" href="#contador/alteracoes-empresa">
            <span>${icon("building")}</span>
            <div>
              <small>Cadastro</small>
              <strong>Alterações de empresa</strong>
              <p>Mudança de endereço, atividade, estrutura, responsáveis e comunicação necessária.</p>
            </div>
            ${icon("arrow")}
          </a>

          <a class="contador-menu-card" href="#contador/faq">
            <span>${icon("question")}</span>
            <div>
              <small>Consulta técnica</small>
              <strong>FAQ técnico</strong>
              <p>35 perguntas orientativas organizadas em blocos para consulta rápida.</p>
            </div>
            ${icon("arrow")}
          </a>

          <a class="contador-menu-card quiet" href="#contador/panfletos">
            <span>${icon("sparkles")}</span>
            <div>
              <small>Espaço reservado</small>
              <strong>Panfletos e Interatividade</strong>
              <p></p>
            </div>
            ${icon("arrow")}
          </a>
        </section>
      </section>
    `;
  }

  function renderEmpresaLanding(mode) {
    const empresaCards = [
      ["Antes de abrir ou alterar", "O endereço, a atividade real e a estrutura devem ser avaliados antes do funcionamento ou da mudança.", "building", "empresa/antes-de-abrir-alterar"],
      ["Documentos da empresa", "Os documentos variam conforme atividade, risco, estrutura e serviço realizado.", "clipboard", "empresa/documentos"],
      ["Fiscalização e responsabilidades", "O estabelecimento deve manter rotinas, registros e condições sanitárias compatíveis com sua atividade.", "shield", "empresa/fiscalizacao-responsabilidades"],
      ["Situações comuns", "Mudança de endereço, reforma, ampliação, nova atividade e outras situações que exigem atenção.", "question", "empresa/situacoes-comuns"],
      ["Panfletos e Interatividade", "", "sparkles", "empresa/panfletos"]
    ];
    return `
      <section class="mode-landing mode-landing-empresa empresa-page">
        <section class="empresa-hero">
          <div>
            <p class="kicker">${esc(mode.kicker)}</p>
            <h1>Área da Empresa</h1>
            <p>Orientação prática para organização, funcionamento e responsabilidade sanitária do estabelecimento.</p>
          </div>
          <aside>
            <strong>Organizar antes evita corrigir depois.</strong>
            <p>A empresa deve acompanhar suas atividades, estrutura, documentos e alterações relevantes.</p>
          </aside>
        </section>
        <div class="empresa-card-grid">
          ${empresaCards.map(([title, text, ico, route]) => `
            <a class="empresa-premium-card empresa-menu-link" href="#${esc(route)}">
              <span>${icon(ico)}</span>
              <h2>${esc(title)}</h2>
              ${text ? `<p>${esc(text)}</p>` : ""}
            </a>
          `).join("")}
        </div>
      </section>
    `;
  }

  function activateMode(modeId) {
    const routes = { cidadao: "inicio", contador: "contador", empresa: "empresa" };
    if (!PORTAL_MODES[modeId]) return;
    const nextRoute = routes[modeId] || "inicio";
    currentMode = modeId;
    if ((window.location.hash || "#inicio") !== `#${nextRoute}`) {
      window.location.hash = nextRoute;
      return;
    }
    route();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const esc = value => String(value ?? "").replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  })[c]);

  const normalize = value => String(value ?? "")
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  const areaList = () => config.areaOrder.map(id => data.areas[id]).filter(Boolean);
  const categoriesFor = areaId => {
    const area = data.areas[areaId];
    if (!area) return [];
    return area.categoryOrder
      .map(id => data.categories.find(c => c.id === id && c.areaId === areaId))
      .filter(Boolean);
  };
  const categoryById = (areaId, categoryId) =>
    data.categories.find(c => c.areaId === areaId && c.id === categoryId);

  const allQuestions = () => areaList().flatMap(area =>
    categoriesFor(area.id).flatMap(category =>
      category.questions.map(question => ({ area, category, question }))
    )
  );

  const allQuestionsFor = areaId => {
    const area = data.areas[areaId];
    if (!area) return [];
    return categoriesFor(areaId).flatMap(category =>
      category.questions.map(question => ({ area, category, question }))
    ).sort((a, b) =>
      (a.question.sort ?? Number(a.question.number)) - (b.question.sort ?? Number(b.question.number))
    );
  };

  const noticeList = () => Array.isArray(window.VISA_AVISOS)
    ? window.VISA_AVISOS.filter(aviso => aviso.status !== "inativo")
    : [];

  const noticeById = id => noticeList().find(aviso => aviso.id === id);

  const cssColor = value => /^#[0-9a-f]{3,8}$/i.test(String(value || ""))
    ? value
    : "#2f9e44";

  function codeFor(area, question) {
    if (question.code) return question.code;
    const n = String(question.number);
    const display = n.includes(".") ? n : n.padStart(3, "0");
    return `${area.code || area.id.slice(0,3).toUpperCase()}-${display}`;
  }

  function questionById(areaId, questionId) {
    const area = data.areas[areaId];
    if (!area) return null;
    for (const category of categoriesFor(areaId)) {
      const question = category.questions.find(q => q.id === questionId);
      if (question) return { area, category, question };
    }
    return null;
  }

  function setBreadcrumb(items) {
    breadcrumb.innerHTML = items.map((item, index) =>
      index === items.length - 1
        ? `<span>${esc(item.label)}</span>`
        : `<a href="#${esc(item.route)}">${esc(item.label)}</a>${icon("chevron")}`
    ).join("");
  }

  
  function specialPageHeader(kicker, title, description = "") {
    return `<header class="special-subpage-head">
      <p class="kicker">${esc(kicker)}</p>
      <h1>${esc(title)}</h1>
      ${description ? `<p>${esc(description)}</p>` : ""}
    </header>`;
  }

  function renderContadorDocumentacoes() {
    renderTopNavigation("contador", "documentacoes");
    renderAreaTabs(null);
    setBreadcrumb([{ label: "Área do Contador", route: "contador" }, { label: "Documentações", route: "contador/documentacoes" }]);
    transition(`
      <section class="mode-landing mode-landing-contador contador-page special-subpage">
        ${specialPageHeader("Área do Contador", "Documentações", "Documentações necessárias e serviços já disponíveis para protocolação pelo Protocolo Betha.")}
        <section class="contador-docs-grid" aria-label="Documentações com protocolação pelo Betha">
          ${CONTADOR_BETHA_DOCUMENTOS.map((name, index) => `
            <article class="contador-doc-card">
              <span class="contador-doc-number">${String(index + 1).padStart(2, "0")}</span>
              <div>
                <h2>${esc(name)}</h2>
                <p>Consulte a página oficial para verificar os documentos exigidos e a forma correta de envio.</p>
                <a href="${OFFICIAL_VISA_URL}" target="_blank" rel="noopener noreferrer">Ver documentos ${icon("external")}</a>
              </div>
            </article>
          `).join("")}
        </section>
      </section>
    `);
  }

  function renderContadorCnaeAtividade() {
    renderTopNavigation("contador", "cnae");
    renderAreaTabs(null);
    setBreadcrumb([{ label: "Área do Contador", route: "contador" }, { label: "CNAE e atividade real", route: "contador/cnae-atividade-real" }]);
    transition(`
      <section class="mode-landing mode-landing-contador contador-page special-subpage">
        ${specialPageHeader("Área do Contador", "CNAE e atividade real", "A análise sanitária considera o cadastro informado, mas também a atividade efetivamente exercida, a estrutura e o risco envolvido.")}
        <section class="special-info-grid">
          <article>${icon("layout")}<h2>CNAE não resolve tudo sozinho</h2><p>O CNAE é uma base importante, mas não substitui a análise da atividade real.</p></article>
          <article>${icon("clipboard")}<h2>Objeto social claro ajuda</h2><p>Descrições genéricas podem dificultar o entendimento do que a empresa realmente fará.</p></article>
          <article>${icon("shield")}<h2>Risco depende da operação</h2><p>Manipulação, fabricação, armazenamento, atendimento e estrutura podem alterar a análise.</p></article>
        </section>
      </section>
    `);
  }

  function renderContadorProtocolosBetha() {
    renderTopNavigation("contador", "betha");
    renderAreaTabs(null);
    setBreadcrumb([{ label: "Área do Contador", route: "contador" }, { label: "Protocolos e Betha", route: "contador/protocolos-betha" }]);
    transition(`
      <section class="mode-landing mode-landing-contador contador-page special-subpage">
        ${specialPageHeader("Área do Contador", "Protocolos e Betha", "Antes do envio, confira o serviço correto, a documentação, a atividade declarada e a coerência dos dados.")}
        <section class="special-info-grid">
          <article>${icon("book")}<h2>Protocolo correto</h2><p>Um envio incorreto gera retrabalho, exigências e atraso na análise.</p></article>
          <article>${icon("clipboard")}<h2>Anexos completos</h2><p>A documentação depende da atividade, do risco, da estrutura e do serviço solicitado.</p></article>
          <article>${icon("info")}<h2>Betha em organização</h2><p>Alguns serviços já podem estar disponíveis; outros podem depender de orientação específica.</p></article>
        </section>
      </section>
    `);
  }

  function renderContadorAlteracoesEmpresa() {
    renderTopNavigation("contador", "alteracoes");
    renderAreaTabs(null);
    setBreadcrumb([{ label: "Área do Contador", route: "contador" }, { label: "Alterações de empresa", route: "contador/alteracoes-empresa" }]);
    transition(`
      <section class="mode-landing mode-landing-contador contador-page special-subpage">
        ${specialPageHeader("Área do Contador", "Alterações de empresa", "Mudanças cadastrais, estruturais ou operacionais podem alterar a análise sanitária.")}
        <section class="special-info-grid">
          <article>${icon("building")}<h2>Endereço</h2><p>O novo local pode mudar estrutura, fluxo, acesso, água, esgoto e compatibilidade da atividade.</p></article>
          <article>${icon("layout")}<h2>Atividade ou CNAE</h2><p>Inclusão, exclusão ou alteração de atividade pode alterar documentos e procedimentos.</p></article>
          <article>${icon("shield")}<h2>Estrutura física</h2><p>Reforma, ampliação ou mudança de fluxo deve ser avaliada quando impactar a atividade.</p></article>
        </section>
      </section>
    `);
  }

  function renderContadorFaqPage() {
    renderTopNavigation("contador", "faq");
    renderAreaTabs(null);
    setBreadcrumb([{ label: "Área do Contador", route: "contador" }, { label: "FAQ técnico", route: "contador/faq" }]);
    transition(`
      <section class="mode-landing mode-landing-contador contador-page special-subpage">
        ${specialPageHeader("Área do Contador", "FAQ técnico", "Perguntas frequentes para abertura, alteração e regularização de empresas.")}
        <section class="contador-blocks" aria-label="Blocos da Área do Contador">
          ${CONTADOR_FAQ_BLOCKS.map((block, index) => `
            <details class="contador-block" ${index === 0 ? "open" : ""}>
              <summary>
                <span class="contador-block-icon">${icon(block.icon)}</span>
                <div>
                  <small>Bloco ${String(index + 1).padStart(2, "0")}</small>
                  <h2>${esc(block.title)}</h2>
                  <p>${esc(block.description)}</p>
                </div>
                ${icon("chevron", "contador-chevron")}
              </summary>
              <div class="contador-question-list">
                ${block.questions.map(item => `
                  <article class="contador-question-card">
                    <span class="contador-question-number">${String(item.n).padStart(2, "0")}</span>
                    <div>
                      <h3>${esc(item.q)}</h3>
                      <p>${esc(item.a)}</p>
                    </div>
                  </article>
                `).join("")}
              </div>
            </details>
          `).join("")}
        </section>
      </section>
    `);
  }

  function renderEmpresaSimplePage(pageId) {
    const pages = {
      "antes-de-abrir-alterar": ["Área da Empresa", "Antes de abrir ou alterar", "Verifique atividade real, endereço, estrutura e documentos antes do funcionamento ou da mudança."],
      "documentos": ["Área da Empresa", "Documentos da empresa", "Os documentos variam conforme atividade, risco sanitário, estrutura e serviço realizado."],
      "fiscalizacao-responsabilidades": ["Área da Empresa", "Fiscalização e responsabilidades", "A empresa mantém responsabilidade contínua pelas condições sanitárias da atividade."],
      "situacoes-comuns": ["Área da Empresa", "Situações comuns", "Mudança de endereço, reforma, ampliação, nova atividade e alterações relevantes exigem atenção."]
    };
    const page = pages[pageId] || pages["antes-de-abrir-alterar"];
    renderTopNavigation("empresa", pageId);
    renderAreaTabs(null);
    setBreadcrumb([{ label: "Área da Empresa", route: "empresa" }, { label: page[1], route: `empresa/${pageId}` }]);
    transition(`
      <section class="mode-landing mode-landing-empresa empresa-page special-subpage">
        ${specialPageHeader(page[0], page[1], page[2])}
      </section>
    `);
  }

  function renderPanfletosPage(modeId = currentMode) {
    const modeClass = modeId === "contador"
      ? "mode-landing-contador contador-page"
      : modeId === "empresa"
        ? "mode-landing-empresa empresa-page"
        : "panfletos-public-page";
    renderTopNavigation(modeId === "cidadao" ? "" : modeId, "panfletos");
    renderAreaTabs(null);
    setBreadcrumb([{ label: "Panfletos e Interatividade", route: "panfletos" }]);
    transition(`
      <section class="mode-landing ${modeClass} special-subpage panfletos-only-title">
        ${specialPageHeader("Conteúdo interativo", "Panfletos e Interatividade")}
      </section>
    `);
  }

  function renderTopNavigation(activeAreaId = "", activePage = "") {
    const specialMode = activeAreaId === "contador" || activeAreaId === "empresa";
    document.body.dataset.area = activePage || activeAreaId || "inicio";
    officialNoticeLink.href = activeAreaId && !specialMode ? `#area/${activeAreaId}/legislacao` : config.officialChannels.visaPage;
    officialNoticeLink.textContent = activeAreaId && !specialMode ? "Abrir fontes desta área" : "Abrir página oficial";
    if (activeAreaId && !specialMode) {
      officialNoticeLink.removeAttribute("target");
      officialNoticeLink.removeAttribute("rel");
    } else {
      officialNoticeLink.target = "_blank";
      officialNoticeLink.rel = "noopener noreferrer";
    }

    if (activeAreaId === "contador") {
      topNavigation.innerHTML = `
        <a href="#contador" class="${activePage === "inicio" || !activePage ? "active" : ""}">Início do Contador</a>
        <a href="#contador/documentacoes" class="${activePage === "documentacoes" ? "active" : ""}">Documentações</a>
        <a href="#contador/cnae-atividade-real" class="${activePage === "cnae" ? "active" : ""}">CNAE e Atividade Real</a>
        <a href="#contador/protocolos-betha" class="${activePage === "betha" ? "active" : ""}">Protocolos e Betha</a>
        <a href="#contador/alteracoes-empresa" class="${activePage === "alteracoes" ? "active" : ""}">Alterações de Empresa</a>
        <a href="#contador/faq" class="${activePage === "faq" ? "active" : ""}">FAQ técnico</a>
        <a href="#contador/panfletos" class="${activePage === "panfletos" ? "active" : ""}">Panfletos e Interatividade</a>
      `;
      return;
    }

    if (activeAreaId === "empresa") {
      topNavigation.innerHTML = `
        <a href="#empresa" class="${activePage === "inicio" || !activePage ? "active" : ""}">Início da Empresa</a>
        <a href="#empresa/antes-de-abrir-alterar" class="${activePage === "antes-de-abrir-alterar" ? "active" : ""}">Antes de Abrir ou Alterar</a>
        <a href="#empresa/documentos" class="${activePage === "documentos" ? "active" : ""}">Documentos da Empresa</a>
        <a href="#empresa/fiscalizacao-responsabilidades" class="${activePage === "fiscalizacao-responsabilidades" ? "active" : ""}">Fiscalização e Responsabilidades</a>
        <a href="#empresa/situacoes-comuns" class="${activePage === "situacoes-comuns" ? "active" : ""}">Situações Comuns</a>
        <a href="#empresa/panfletos" class="${activePage === "panfletos" ? "active" : ""}">Panfletos e Interatividade</a>
      `;
      return;
    }

    topNavigation.innerHTML = `
      <a href="#inicio" class="${!activeAreaId && !activePage ? "active" : ""}">Início</a>
      <a href="#avisos" class="${activePage === "avisos" ? "active" : ""}">Avisos e Campanhas</a>
      <a href="#agua" class="${activePage === "agua" ? "active" : ""}">Qualidade da Água</a>
      <a href="#panfletos" class="${activePage === "panfletos" ? "active" : ""}">Panfletos e Interatividade</a>
      ${areaList().map(area =>
        `<a href="#area/${area.id}" class="${activeAreaId === area.id ? "active" : ""}">${esc(area.navTitle || area.title)}</a>`
      ).join("")}
    `;
  }

  function renderAreaTabs(area, active = "visao-geral") {
    if (!area) {
      areaTabs.innerHTML = "";
      return;
    }
    const tabs = [
      ["visao-geral", "Visão geral", `area/${area.id}`],
      ["perguntas", "Perguntas", `area/${area.id}/perguntas`],
      ["temas", "Temas", `area/${area.id}/temas`],
      ["legislacao", "Legislação", `area/${area.id}/legislacao`]
    ];
    areaTabs.innerHTML = `<nav class="area-tabs" aria-label="Navegação da área">
      ${tabs.map(([id, label, route]) =>
        `<a href="#${route}" class="${active === id ? "active" : ""}">${label}</a>`
      ).join("")}
    </nav>`;
  }

  function pageHeader(kicker, title, description) {
    return `<header class="page-header">
      <p class="kicker">${esc(kicker)}</p>
      <h1>${esc(title)}</h1>
      <p>${esc(description)}</p>
    </header>`;
  }

  function transition(html) {
    view.classList.remove("enter");
    void view.offsetWidth;
    view.innerHTML = html;
    view.classList.add("enter");
  }

  function renderHome() {
    const mode = modeData();

    if (mode.id !== "cidadao") {
      if (topNavigation) topNavigation.innerHTML = "";
      renderAreaTabs(null);
      if (breadcrumb) breadcrumb.innerHTML = "";
      transition(renderModeLanding());
      return;
    }

    renderTopNavigation("");
    renderAreaTabs(null);
    setBreadcrumb([{ label: "Início", route: "inicio" }]);

    transition(`
      ${homeNoticeHighlight()}

      <section class="home-area-section">
        <header class="home-section-title">
          <p class="kicker">Assuntos</p>
          <h2>Navegação pública</h2>
          <p>Conteúdo organizado por tema para consulta pública.</p>
        </header>
        <div class="area-grid">
          ${areaList().map(area => `
            <a class="area-card area-${area.id}" href="#area/${area.id}">
              <span class="area-card-icon">${icon(area.icon)}</span>
              <div>
                <small>${area.questionCount} perguntas${area.supplementCount ? " + complementos" : ""}</small>
                <h2>${esc(area.title)}</h2>
                <p>${esc(area.summary)}</p>
              </div>
              ${icon("arrow", "arrow")}
            </a>
          `).join("")}
        </div>
      </section>
    `);

    setupHomeNoticeCarousel();
  }


  function homeNoticeHighlight() {
    const avisos = noticeList();
    if (!avisos.length) return "";

    const total = avisos.length;
    const totalAvisos = avisos.filter(item => String(item.categoria || "").toLowerCase().includes("aviso")).length;
    const totalCampanhas = avisos.filter(item => String(item.categoria || "").toLowerCase().includes("campanha")).length;
    const resumoContagem = `${total} conteúdo${total === 1 ? "" : "s"} ativo${total === 1 ? "" : "s"}`;

    return `<section class="home-notice-block" aria-label="Avisos e campanhas">
      <div class="home-notice-topline">
        <a class="home-count-pill" href="#avisos" aria-label="${esc(resumoContagem)} em avisos e campanhas">
          <strong>${total}</strong>
          <span>${esc(resumoContagem)}</span>
        </a>
        <span>${totalAvisos} aviso${totalAvisos === 1 ? "" : "s"}</span>
        <span>${totalCampanhas} campanha${totalCampanhas === 1 ? "" : "s"}</span>
        <aside class="home-alert-pill">
          ${icon("info")}
          <span>Novos conteúdos aparecem aqui.</span>
        </aside>
      </div>

      <section class="home-carousel-shell" aria-label="Carrossel de avisos e campanhas">
        <div class="home-carousel-track" id="homeNoticeCarousel">
          ${avisos.map((aviso, index) => `
            <article class="home-slide" style="--notice-accent:${esc(cssColor(aviso.cor))}" aria-label="${esc(aviso.titulo)}">
              <div class="home-slide-copy">
                <span class="notice-badge">${esc(aviso.categoria || "Aviso")}</span>
                <h2>${esc(aviso.titulo)}</h2>
                <p>${esc(aviso.resumo)}</p>
                <a href="#avisos/${esc(aviso.id)}">Abrir conteúdo ${icon("arrow")}</a>
              </div>
              <div class="home-slide-media">
                <figure class="home-image-frame">
                  <img src="${esc(aviso.imagem)}" alt="${esc(aviso.alt || aviso.titulo)}">
                </figure>
              </div>
            </article>
          `).join("")}
        </div>

        ${avisos.length > 1 ? `
          <div class="home-carousel-controls">
            <div class="home-carousel-dots" id="homeNoticeDots" aria-label="Selecionar conteúdo">
              ${avisos.map((_, index) => `<button class="home-carousel-dot ${index === 0 ? "active" : ""}" type="button" aria-label="Ir para conteúdo ${index + 1}"></button>`).join("")}
            </div>
            <div class="home-carousel-arrows">
              <button class="home-carousel-arrow" id="homeNoticePrev" type="button" aria-label="Anterior">‹</button>
              <button class="home-carousel-arrow" id="homeNoticeNext" type="button" aria-label="Próximo">›</button>
            </div>
          </div>` : ""}
      </section>
    </section>`;
  }

  function setupHomeNoticeCarousel() {
    const track = document.getElementById("homeNoticeCarousel");
    if (!track) return;

    const dots = Array.from(document.querySelectorAll(".home-carousel-dot"));
    const total = track.children.length;
    if (total <= 1) return;

    const prev = document.getElementById("homeNoticePrev");
    const next = document.getElementById("homeNoticeNext");
    const shell = track.closest(".home-carousel-shell");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let current = 0;
    let timer = null;

    function goTo(index) {
      current = (index + total) % total;
      track.style.transform = `translateX(${current * -100}%)`;
      dots.forEach((dot, i) => dot.classList.toggle("active", i === current));
    }

    function stop() {
      if (timer) window.clearInterval(timer);
    }

    function start() {
      if (reduceMotion) return;
      stop();
      timer = window.setInterval(() => goTo(current + 1), 5600);
    }

    prev?.addEventListener("click", () => { goTo(current - 1); start(); });
    next?.addEventListener("click", () => { goTo(current + 1); start(); });
    dots.forEach((dot, index) => dot.addEventListener("click", () => { goTo(index); start(); }));
    shell?.addEventListener("mouseenter", stop);
    shell?.addEventListener("mouseleave", start);

    start();
  }

  function noticeBadge(text) {
    return text ? `<span class="notice-badge">${esc(text)}</span>` : "";
  }

  function renderNoticeCard(aviso) {
    return `<article class="notice-card" style="--notice-accent:${esc(cssColor(aviso.cor))}">
      <a class="notice-card-image" href="#avisos/${esc(aviso.id)}">
        <img src="${esc(aviso.imagem)}" alt="${esc(aviso.alt || aviso.titulo)}">
      </a>
      <div class="notice-card-body">
        <div class="notice-card-meta">
          ${noticeBadge(aviso.categoria)}
          ${noticeBadge(aviso.publico)}
          ${noticeBadge(aviso.prioridade)}
        </div>
        <h2><a href="#avisos/${esc(aviso.id)}">${esc(aviso.titulo)}</a></h2>
        <p>${esc(aviso.resumo)}</p>
        <a class="notice-action" href="#avisos/${esc(aviso.id)}">Abrir conteúdo ${icon("arrow")}</a>
      </div>
    </article>`;
  }

  function renderNotices() {
    const avisos = noticeList();
    renderTopNavigation("", "avisos");
    renderAreaTabs(null);
    setBreadcrumb([{ label: "Início", route: "inicio" }, { label: "Avisos e Campanhas", route: "avisos" }]);

    transition(`
      <section class="notice-hero">
        <div>
          <p class="kicker">Avisos e campanhas</p>
          <h1>Orientações importantes em destaque.</h1>
          <p>Campanhas e avisos rápidos para facilitar a comunicação com cidadãos, empresas e serviços.</p>
        </div>
        <span class="notice-hero-icon">${icon("megaphone")}</span>
      </section>

      ${avisos.length ? `
        <section class="notice-grid">
          ${avisos.map(renderNoticeCard).join("")}
        </section>` : `
        <section class="empty-state">${icon("info")}<h1>Nenhum aviso ativo</h1><p>Cadastre os avisos no arquivo <strong>dados/avisos.js</strong>.</p></section>`}
    `);
  }

  function renderNoticeDetail(noticeId) {
    const aviso = noticeById(noticeId);
    if (!aviso) return renderNotFound();

    const gallery = Array.isArray(aviso.galeria) && aviso.galeria.length
      ? aviso.galeria
      : [{ imagem: aviso.imagem, alt: aviso.alt || aviso.titulo }];

    renderTopNavigation("", "avisos");
    renderAreaTabs(null);
    setBreadcrumb([
      { label: "Início", route: "inicio" },
      { label: "Avisos e Campanhas", route: "avisos" },
      { label: aviso.titulo, route: `avisos/${aviso.id}` }
    ]);

    transition(`
      <article class="notice-detail" style="--notice-accent:${esc(cssColor(aviso.cor))}">
        <div class="notice-detail-copy">
          <p class="kicker">${esc(aviso.categoria || "Aviso")}</p>
          <h1>${esc(aviso.titulo)}</h1>
          <p class="notice-lead">${esc(aviso.textoPrincipal || aviso.resumo)}</p>
          <div class="notice-card-meta">
            ${noticeBadge(aviso.categoria)}
            ${noticeBadge(aviso.publico)}
            ${noticeBadge(aviso.prioridade)}
          </div>
          ${aviso.orientacoes?.length ? `
            <section class="notice-steps">
              <h2>${esc(aviso.orientacoesTitulo || "Orientação rápida")}</h2>
              <ul>
                ${aviso.orientacoes.map(item => `<li>${esc(item)}</li>`).join("")}
              </ul>
            </section>` : ""}
          ${aviso.alerta ? `<p class="notice-warning">${icon("info")}<span>${esc(aviso.alerta)}</span></p>` : ""}
          <a class="notice-back" href="#avisos">${icon("arrow")} Voltar para avisos</a>
        </div>
        <div class="notice-media-column">
          <figure class="notice-detail-image">
            <img src="${esc(gallery[0].imagem || aviso.imagem)}" alt="${esc(gallery[0].alt || aviso.alt || aviso.titulo)}">
          </figure>
          ${gallery.length > 1 ? `
            <div class="notice-gallery">
              ${gallery.slice(1).map(item => `
                <figure class="notice-gallery-item">
                  <img src="${esc(item.imagem)}" alt="${esc(item.alt || aviso.titulo)}">
                </figure>
              `).join("")}
            </div>` : ""}
        </div>
      </article>
    `);
  }

  function questionsOverviewCta(area) {
    return `<aside class="questions-overview-cta">
      <div>
        <strong>Quer ver tudo de uma vez?</strong>
        <span>Abra a lista completa para ter uma noção geral antes de escolher o tema.</span>
      </div>
      <a href="#area/${esc(area.id)}/perguntas">Ver todas as perguntas relacionadas ${icon("arrow")}</a>
    </aside>`;
  }

  function renderWaterQuality() {
    renderTopNavigation("", "agua");
    renderAreaTabs(null);
    setBreadcrumb([{ label: "Início", route: "inicio" }, { label: "Qualidade da Água", route: "agua" }]);

    const agua = window.VISA_AGUA || { bairros: [] };
    const bairros = agua.bairros || [];
    const selected = bairros.find(item => item.id === "01") || bairros[0];
    const statusLabels = {
      concluido: "Última coleta concluída",
      "coleta-analise": "Última coleta em análise",
      "recoleta-andamento": "Recoleta em andamento"
    };
    const areasNoMapa = bairros.filter(item => item.noMapa);
    const areasForaDoMapa = bairros.filter(item => !item.noMapa);
    const totalAnalises = bairros.reduce((sum, item) => sum + (Number(item.analises) || 0), 0);
    const totalSatisfatorias = bairros.reduce((sum, item) => sum + ((Number(item.analises) || 0) * ((Number(item.satisfatorias) || 0) / 100)), 0);
    const totalPendenciasTecnicas = bairros.filter(item => item.status === "coleta-analise" || item.status === "recoleta-andamento").length;
    const conformidadeGeral = totalAnalises ? (totalSatisfatorias / totalAnalises) * 100 : 0;

    transition(`
      <section class="water-dashboard" aria-label="Painel de qualidade da água por bairro">
        <header class="water-dashboard-head">
          <div class="water-title-block">
            <span class="water-title-icon">${icon("droplet")}</span>
            <div>
              <p class="kicker">SAA Maravilha</p>
              <h1><span>Qualidade da Água</span> <span>por Bairro</span></h1>
              <p>Clique no mapa ou escolha uma área para ver a última coleta, o histórico geral e a evolução anual.</p>
            </div>
          </div>
          <div class="water-head-actions">
            <label class="water-search">
              ${icon("search")}
              <input id="waterNeighborhoodSearch" type="search" placeholder="Buscar bairro" autocomplete="off">
            </label>
            <span class="water-update">Atualizado em <strong>${esc(agua.atualizadoEm || "Jul/2026")}</strong></span>
          </div>
        </header>

        <div class="water-system-tabs" role="tablist" aria-label="Sistemas de abastecimento">
          <button class="active" type="button" role="tab" aria-selected="true" data-water-tab="saa">SAA</button>
          <button type="button" role="tab" aria-selected="false" data-water-tab="sac">SAC em breve</button>
          <button type="button" role="tab" aria-selected="false" data-water-tab="sai">SAI em breve</button>
        </div>

        <div class="water-system-panel active" data-water-panel="saa">
        <div id="waterEducationModal" class="water-education-modal" role="dialog" aria-modal="true" aria-labelledby="waterEducationTitle">
          <div class="water-education-card">
            <button id="waterEducationClose" class="water-education-close" type="button" aria-label="Fechar explicação">×</button>
            <p class="kicker">Antes de consultar</p>
            <h2 id="waterEducationTitle">Como ler os indicadores da água</h2>
            <p>Os percentuais mostram quantas coletas ficaram dentro do padrão analisado no período. Uma coleta em análise ainda não é resultado ruim nem bom: significa que o laudo mais recente ainda está sendo concluído. Quando aparecer recoleta em andamento, a área fica em amarelo para indicar acompanhamento técnico até a nova verificação.</p>
            <div class="water-education-grid">
              <div><strong>Cloro no padrão</strong><span>Indica se o cloro residual ficou na faixa esperada para ajudar na desinfecção da água.</span></div>
              <div><strong>pH no padrão</strong><span>Mostra se a água está dentro da faixa adequada de acidez/alcalinidade.</span></div>
              <div><strong>Coliformes</strong><span>O padrão esperado é ausência. Presença exige avaliação técnica e providências.</span></div>
              <div><strong>Turbidez</strong><span>Indica a clareza da água. Valores fora do padrão pedem acompanhamento.</span></div>
            </div>
          </div>
        </div>

        <div class="water-status-legend" aria-label="Legenda de status">
          ${Object.entries(statusLabels).map(([key, label]) => `<span><i class="water-dot status-${key}"></i>${esc(label)}</span>`).join("")}
        </div>

        <div class="water-layout">
          <section class="water-map-card" aria-label="Mapa interativo dos bairros">
            <div class="water-map-toolbar" aria-label="Controles do mapa">
              <button class="water-tool" type="button" data-water-zoom="in" aria-label="Aproximar">+</button>
              <button class="water-tool" type="button" data-water-zoom="out" aria-label="Afastar">−</button>
              <button class="water-tool" type="button" data-water-reset aria-label="Centralizar">⌖</button>
            </div>
            <div id="waterMapStage" class="water-map-stage">
              <div class="water-map-canvas">
                <div id="waterMapOverlay" class="water-map-overlay"><div class="water-map-loading">${icon("droplet")} Carregando mapa dos bairros...</div></div>
              </div>
            </div>
          </section>

          <aside id="waterDetails" class="water-details" aria-live="polite">
            ${waterDetailsMarkup(selected, statusLabels)}
          </aside>
        </div>

        <section class="water-bottom-grid">
          <div class="water-neighborhoods">
            <div class="water-section-title">
              <div>
                <p class="kicker">Bairros monitorados</p>
                <h2>${areasNoMapa.length} bairros presentes no mapa + ${areasForaDoMapa.length} locais abastecidos pela SAA</h2>
              </div>
              <span>Toque para selecionar</span>
            </div>
            <div id="waterNeighborhoodList" class="water-neighborhood-list">
              ${bairros.map(item => `
                <button type="button" class="water-neighborhood-chip ${item.id === selected?.id ? "active" : ""}" data-water-id="${esc(item.id)}">
                  <i class="water-dot status-${esc(item.status)}"></i>
                  <span>${esc(item.nome)}</span>${item.noMapa ? "" : "<em>local SAA</em>"}
                </button>
              `).join("")}
            </div>
          </div>

          <aside class="water-summary">
            <p class="kicker">Resumo do município</p>
            <div class="water-summary-grid">
              <div><span>${icon("shield")}</span><small>Conformidade geral</small><strong>${conformidadeGeral.toFixed(1).replace(".", ",")}%</strong></div>
              <div><span>${icon("layout")}</span><small>Áreas monitoradas</small><strong>${bairros.length}</strong></div>
              <div><span>${icon("info")}</span><small>Em análise/recoleta</small><strong>${totalPendenciasTecnicas}</strong></div>
            </div>
            <p class="water-source-note">${esc(agua.fonte || "")}</p>
          </aside>
        </section>

        <section class="water-analysis" aria-label="Consulta detalhada dos dados de qualidade da água">
          <div class="water-analysis-head">
            <div>
              <p class="kicker">Consultar histórico</p>
              <h2>Pesquise uma área e veja os gráficos</h2>
            </div>
            <form id="waterAnalysisForm" class="water-analysis-form">
              <select id="waterAnalysisSelect" aria-label="Selecionar bairro ou local">
                ${bairros.map(item => `<option value="${esc(item.id)}" ${item.id === selected?.id ? "selected" : ""}>${esc(item.nome)}</option>`).join("")}
              </select>
              <button type="submit">Pesquisar</button>
            </form>
          </div>
          <div id="waterAnalysisResult" class="water-analysis-result">
            ${waterAnalysisMarkup(selected)}
          </div>
        </section>
        </div>

        <div class="water-system-panel" data-water-panel="sac">
          ${waterPreviewPanel("sac")}
        </div>

        <div class="water-system-panel" data-water-panel="sai">
          ${waterPreviewPanel("sai")}
        </div>
      </section>
    `);

    setupWaterDashboard(bairros, statusLabels);
  }

  function waterPreviewPanel(type) {
    const isSac = type === "sac";
    const title = isSac ? "Soluções Alternativas Coletivas" : "Soluções Alternativas Individuais";
    const tag = isSac ? "SAC" : "SAI";
    const subtitle = isSac
      ? "Prévia dos indicadores para pontos coletivos em construção."
      : "Prévia dos indicadores para pontos individuais em construção.";
    const cards = isSac
      ? [["Pontos cadastrados", "12"], ["Coletas previstas", "28"], ["Painéis planejados", "4"]]
      : [["Imóveis referência", "36"], ["Coletas previstas", "18"], ["Painéis planejados", "3"]];
    const bars = isSac ? [72, 88, 64, 91, 78] : [58, 74, 69, 82, 76];

    return `
      <section class="water-preview water-preview-${type}" aria-label="Prévia ${tag}">
        <div class="water-preview-copy">
          <p class="kicker">${tag} em construção</p>
          <h2>${title}</h2>
          <p>${subtitle} Esta área já está desenhada para receber dados mensais da planilha oficial.</p>
        </div>
        <div class="water-preview-grid">
          ${cards.map(([label, value]) => `
            <article class="water-preview-card">
              <span>${icon("layout")}</span>
              <small>${esc(label)}</small>
              <strong>${esc(value)}</strong>
            </article>
          `).join("")}
        </div>
        <div class="water-preview-chart">
          <div>
            <strong>Gostinho do painel</strong>
            <small>Modelo visual para evolução mensal</small>
          </div>
          <div class="water-bars" aria-hidden="true">
            ${bars.map((bar, index) => `<i style="--bar:${bar}%; --delay:${index}"></i>`).join("")}
          </div>
        </div>
      </section>
    `;
  }
  function waterDetailsMarkup(item, statusLabels) {
    if (!item) {
      return `<div class="water-empty-details">${icon("info")}<h2>Nenhum bairro encontrado</h2><p>Ajuste a busca ou revise a base de dados.</p></div>`;
    }
    const parametros = item.parametros || {};
    const gaugeSat = Math.max(0, Math.min(100, Number(item.satisfatorias) || 0));
    const gaugeInsat = Math.max(0, Math.min(100, Number(item.insatisfatorias) || 0));
    const gaugeOutros = Math.max(0, Math.min(100, Number(item.naoRegistrado) || 0));
    return `
      <div class="water-details-head">
        <div>
          <span class="water-status-pill status-${esc(item.status)}">${esc(statusLabels[item.status] || item.status)}</span>
          <h2>${esc(item.nome)}</h2>
        </div>
        <strong>${formatWaterPercent(item.satisfatorias)}</strong>
      </div>
      <div class="water-last-sample">
        <small>Última coleta registrada</small>
        <strong>${esc(item.ultimaColeta || "Não informado")}</strong>
        <span>${esc(item.situaçãoUltimaColeta || "Não informado")}</span>
      </div>
      <p class="water-details-summary">${esc(item.resumo)}</p>
      <div class="water-gauge" aria-label="Distribuição geral dos resultados de 2014 a 2026">
        <div class="water-gauge-bar">
          <i class="gauge-sat" style="width:${gaugeSat}%"></i>
          <i class="gauge-insat" style="width:${gaugeInsat}%"></i>
          <i class="gauge-other" style="width:${gaugeOutros}%"></i>
        </div>
        <div class="water-gauge-legend">
          <span><i class="gauge-sat"></i>Satisfatória ${formatWaterPercent(item.satisfatorias)}</span>
          <span><i class="gauge-insat"></i>Insatisfatória ${formatWaterPercent(item.insatisfatorias)}</span>
          <span><i class="gauge-other"></i>Outros ${formatWaterPercent(item.naoRegistrado)}</span>
        </div>
      </div>
      <div class="water-metrics">
        <div><small>Coletas no histórico</small><strong>${item.analises}</strong></div>
        <div><small>Satisfatórias no histórico</small><strong>${formatWaterPercent(item.satisfatorias)}</strong></div>
        <div><small>Insatisfatórias no histórico</small><strong>${formatWaterPercent(item.insatisfatorias)}</strong></div>
        <div><small>Representação</small><strong>${item.noMapa ? "Bairro no mapa" : "Local SAA"}</strong></div>
      </div>
    `;
  }

  function formatWaterPercent(value) {
    const number = Number(value) || 0;
    return `${number.toFixed(2).replace(".", ",")}%`;
  }

  function waterAnnualChart(item) {
    const historico = (item.historicoAnual || []).filter(row => Number(row.coletas) > 0);
    if (!historico.length) {
      return `<div class="water-chart"><div class="water-chart-title"><strong>Evolução anual</strong><span>sem dados</span></div></div>`;
    }
    const points = historico.map((row, index) => {
      const x = historico.length === 1 ? 50 : (index / (historico.length - 1)) * 100;
      const y = 58 - ((Math.max(0, Math.min(100, Number(row.satisfatorias) || 0)) / 100) * 52);
      return `${x.toFixed(2)},${y.toFixed(2)}`;
    }).join(" ");
    return `
      <div class="water-chart">
        <div class="water-chart-title"><strong>Evolução anual das satisfatórias</strong><span>%</span></div>
        <svg viewBox="0 0 100 64" role="img" aria-label="Evolução anual de análises satisfatórias">
          <path class="water-chart-grid" d="M0 6H100M0 32H100M0 58H100"/>
          <polyline class="water-chart-line" points="${esc(points)}"/>
          ${historico.map((row, index) => {
            const x = historico.length === 1 ? 50 : (index / (historico.length - 1)) * 100;
            const y = 58 - ((Math.max(0, Math.min(100, Number(row.satisfatorias) || 0)) / 100) * 52);
            return `<circle class="water-chart-point" cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="1.8"><title>${esc(row.ano)}: ${formatWaterPercent(row.satisfatorias)} em ${row.coletas} coletas</title></circle>`;
          }).join("")}
        </svg>
        <div class="water-chart-months">${historico.map(row => `<span>${esc(row.ano)}</span>`).join("")}</div>
      </div>
    `;
  }

  function waterAnalysisMarkup(item) {
    if (!item) {
      return `<div class="water-analysis-empty">${icon("info")} Selecione uma área para ver os gráficos.</div>`;
    }
    const parametros = Object.values(item.parametros || {});
    const historico = (item.historicoAnual || []).filter(row => Number(row.coletas) > 0);
    return `
      <div class="water-analysis-title">
        <div>
          <p class="kicker">Área selecionada</p>
          <h3>${esc(item.nome)}</h3>
        </div>
        <span>${esc(item.ultimaColeta || "Sem data")} · ${esc(item.situaçãoUltimaColeta || "Não informado")}</span>
      </div>
      <div class="water-analysis-grid">
        <article class="water-analysis-card wide">
          <div class="water-chart-title"><strong>Satisfatórias por ano</strong><span>2014-2026</span></div>
          <div class="water-annual-bars">
            ${historico.map(row => `
              <div>
                <i style="height:${Math.max(4, Math.min(100, Number(row.satisfatorias) || 0))}%"></i>
                <strong>${formatWaterPercent(row.satisfatorias)}</strong>
                <span>${esc(row.ano)}</span>
              </div>
            `).join("")}
          </div>
        </article>
        <article class="water-analysis-card">
          <div class="water-chart-title"><strong>Resultado geral</strong><span>${esc(item.analises)} coletas</span></div>
          <div class="water-result-bars">
            <div><span>Satisfatória</span><i><b class="gauge-sat" style="width:${Math.max(0, Math.min(100, Number(item.satisfatorias) || 0))}%"></b></i><strong>${formatWaterPercent(item.satisfatorias)}</strong></div>
            <div><span>Insatisfatória</span><i><b class="gauge-insat" style="width:${Math.max(0, Math.min(100, Number(item.insatisfatorias) || 0))}%"></b></i><strong>${formatWaterPercent(item.insatisfatorias)}</strong></div>
            <div><span>Outros</span><i><b class="gauge-other" style="width:${Math.max(0, Math.min(100, Number(item.naoRegistrado) || 0))}%"></b></i><strong>${formatWaterPercent(item.naoRegistrado)}</strong></div>
          </div>
        </article>
        <article class="water-analysis-card">
          <div class="water-chart-title"><strong>Parâmetros no padrão</strong><span>%</span></div>
          <div class="water-parameter-bars">
            ${parametros.map(parametro => `
              <div>
                <span>${esc(parametro.label)}</span>
                <i><b style="width:${Math.max(0, Math.min(100, Number(parametro.valor) || 0))}%"></b></i>
                <strong>${formatWaterPercent(parametro.valor)}</strong>
              </div>
            `).join("")}
          </div>
        </article>
      </div>
    `;
  }

  function setupWaterDashboard(bairros, statusLabels) {
    const stage = document.getElementById("waterMapStage");
    const details = document.getElementById("waterDetails");
    const list = document.getElementById("waterNeighborhoodList");
    const search = document.getElementById("waterNeighborhoodSearch");
    const analysisForm = document.getElementById("waterAnalysisForm");
    const analysisSelect = document.getElementById("waterAnalysisSelect");
    const analysisResult = document.getElementById("waterAnalysisResult");
    const educationModal = document.getElementById("waterEducationModal");
    const educationClose = document.getElementById("waterEducationClose");
    const byId = new Map(bairros.map(item => [item.id, item]));
    let activeId = bairros[0]?.id || "";
    let zoom = 1;

    function select(id) {
      const item = byId.get(id);
      if (!item) return;
      activeId = id;
      details.innerHTML = waterDetailsMarkup(item, statusLabels);
      if (analysisSelect) analysisSelect.value = id;
      list.querySelectorAll("[data-water-id]").forEach(button => button.classList.toggle("active", button.dataset.waterId === id));
      stage.querySelectorAll(".bairro-exato").forEach(area => area.classList.toggle("selecionado", area.dataset.id === id));
      stage.querySelectorAll(".map-label").forEach(label => label.classList.toggle("active", label.dataset.labelId === id));
    }

    function decorateMap(root) {
      root.querySelectorAll("script,style,#painel-bairro-exato,#tooltip-bairro-exato").forEach(node => node.remove());
      const svg = root.querySelector("svg");
      if (svg) {
        svg.removeAttribute("width");
        svg.removeAttribute("height");
        svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
        svg.classList.add("water-real-map");
      }
      root.querySelectorAll(".bairro-exato").forEach(area => {
        const item = byId.get(area.dataset.id);
        if (!item) return;
        area.classList.add(`status-${item.status}`);
        area.setAttribute("role", "button");
        area.setAttribute("tabindex", "0");
        area.setAttribute("aria-label", `Selecionar ${item.nome}`);
        area.addEventListener("click", () => select(item.id));
        area.addEventListener("mouseenter", () => select(item.id));
        area.addEventListener("keydown", event => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            select(item.id);
          }
        });
      });
      select(activeId || bairros[0]?.id);
    }

    fetch("assets/images/mapa-bairros-saa.svg")
      .then(response => response.text())
      .then(svgText => {
        const overlay = document.getElementById("waterMapOverlay");
        overlay.innerHTML = svgText;
        decorateMap(overlay);
      })
      .catch(() => {
        document.getElementById("waterMapOverlay").innerHTML = `<div class="water-map-loading">${icon("info")} Não foi possível carregar os bairros. Verifique o arquivo SVG.</div>`;
      });

    list.addEventListener("click", event => {
      const button = event.target.closest("[data-water-id]");
      if (button) select(button.dataset.waterId);
    });

    search.addEventListener("input", () => {
      const term = normalize(search.value);
      list.querySelectorAll("[data-water-id]").forEach(button => {
        const item = byId.get(button.dataset.waterId);
        button.hidden = item && term ? !normalize(item.nome).includes(term) : false;
      });
    });

    analysisForm?.addEventListener("submit", event => {
      event.preventDefault();
      const item = byId.get(analysisSelect.value);
      if (!item) return;
      analysisResult.innerHTML = waterAnalysisMarkup(item);
      select(item.id);
    });

    educationClose?.addEventListener("click", () => {
      educationModal?.classList.add("hidden");
    });

    document.querySelectorAll("[data-water-zoom]").forEach(button => {
      button.addEventListener("click", () => {
        zoom = button.dataset.waterZoom === "in" ? Math.min(1.55, zoom + .12) : Math.max(.82, zoom - .12);
        stage.style.setProperty("--water-zoom", zoom);
      });
    });
    document.querySelector("[data-water-reset]")?.addEventListener("click", () => {
      zoom = 1;
      stage.style.setProperty("--water-zoom", zoom);
    });

    document.querySelectorAll("[data-water-tab]").forEach(button => {
      button.addEventListener("click", () => {
        const target = button.dataset.waterTab;
        document.querySelectorAll("[data-water-tab]").forEach(tab => {
          const active = tab.dataset.waterTab === target;
          tab.classList.toggle("active", active);
          tab.setAttribute("aria-selected", active ? "true" : "false");
        });
        document.querySelectorAll("[data-water-panel]").forEach(panel => {
          panel.classList.toggle("active", panel.dataset.waterPanel === target);
        });
      });
    });
  }
  function renderArea(areaId) {
    const area = data.areas[areaId];
    if (!area) return renderNotFound();

    renderTopNavigation(areaId);
    renderAreaTabs(area, "visao-geral");
    setBreadcrumb([{ label: "Início", route: "inicio" }, { label: area.title, route: `area/${area.id}` }]);

    const featured = area.featured
      .map(id => questionById(area.id, id))
      .filter(Boolean)
      .slice(0, 6);

    transition(`
      ${pageHeader("Área de orientação", area.title, area.intro)}
      ${questionsOverviewCta(area)}

      <section class="journey-grid">
        ${area.journeys.map(journey => `
          <a class="journey-card area-${area.id}" href="#area/${journey.route ? journey.route : `${area.id}/caminho/${journey.id}`}">
            <span class="journey-icon">${icon(journey.icon)}</span>
            <div>
              <h2>${esc(journey.title)}</h2>
              <p>${esc(journey.description)}</p>
            </div>
            ${icon("arrow", "arrow")}
          </a>
        `).join("")}
      </section>

      <section class="content-section">
        <div class="section-heading">
          <div><p class="kicker">Pontos de entrada</p><h2>Perguntas procuradas com frequência</h2></div>
          <a href="#area/${area.id}/perguntas">Ver todas ${icon("arrow")}</a>
        </div>
        <div class="question-list">${featured.map(questionRow).join("")}</div>
      </section>
    `);
  }

  function renderQuestions(areaId) {
    const area = data.areas[areaId];
    if (!area) return renderNotFound();

    renderTopNavigation(areaId);
    renderAreaTabs(area, "perguntas");
    setBreadcrumb([
      { label: "Início", route: "inicio" },
      { label: area.title, route: `area/${area.id}` },
      { label: "Perguntas", route: `area/${area.id}/perguntas` }
    ]);

    const allAreaQuestions = allQuestionsFor(areaId);

    transition(`
      ${pageHeader("Perguntas", "Todas as perguntas relacionadas", "Veja a lista geral primeiro ou desça para navegar por temas.")}
      <section class="all-questions-panel">
        <div class="section-heading compact-heading">
          <div><p class="kicker">Visão geral</p><h2>${allAreaQuestions.length} perguntas reunidas</h2></div>
          <a href="#area/${area.id}/temas">Ver por temas ${icon("arrow")}</a>
        </div>
        <div class="question-list all-questions-list">${allAreaQuestions.map(questionRow).join("")}</div>
      </section>

      <section class="content-section compact-section">
        <div class="section-heading">
          <div><p class="kicker">Organização</p><h2>Ver perguntas por tema</h2></div>
        </div>
        <section class="category-grid">
          ${categoriesFor(areaId).map(category => categoryCard(area, category)).join("")}
        </section>
      </section>
    `);
  }

  function renderThemes(areaId) {
    const area = data.areas[areaId];
    if (!area) return renderNotFound();

    renderTopNavigation(areaId);
    renderAreaTabs(area, "temas");
    setBreadcrumb([
      { label: "Início", route: "inicio" },
      { label: area.title, route: `area/${area.id}` },
      { label: "Temas", route: `area/${area.id}/temas` }
    ]);

    transition(`
      ${pageHeader("Temas", "Temas disponíveis", "Clique em um tema para ver as perguntas.")}
      ${questionsOverviewCta(area)}
      <section class="category-grid">
        ${categoriesFor(areaId).map(category => categoryCard(area, category)).join("")}
      </section>
    `);
  }

  function renderJourney(areaId, journeyId) {
    const area = data.areas[areaId];
    const journey = area && area.journeys.find(j => j.id === journeyId);
    if (!area || !journey) return renderNotFound();

    renderTopNavigation(areaId);
    renderAreaTabs(area, "");
    setBreadcrumb([
      { label: "Início", route: "inicio" },
      { label: area.title, route: `area/${area.id}` },
      { label: journey.title, route: `area/${area.id}/caminho/${journey.id}` }
    ]);

    const categories = journey.categoryIds.map(id => categoryById(areaId, id)).filter(Boolean);

    transition(`
      ${pageHeader("Perguntas por assunto", journey.title, journey.description)}
      ${questionsOverviewCta(area)}
      <section class="category-grid">
        ${categories.map(category => categoryCard(area, category)).join("")}
      </section>
    `);
  }

  function categoryCard(area, category) {
    return `<a class="category-card area-${area.id}" href="#area/${area.id}/categoria/${category.id}">
      <span class="category-icon">${icon(category.icon)}</span>
      <div>
        <small>${category.questions.length} itens</small>
        <h2>${esc(category.title)}</h2>
        <p>${esc(category.description)}</p>
      </div>
      ${icon("arrow", "arrow")}
    </a>`;
  }

  function renderCategory(areaId, categoryId) {
    const area = data.areas[areaId];
    const category = categoryById(areaId, categoryId);
    if (!area || !category) return renderNotFound();

    renderTopNavigation(areaId);
    renderAreaTabs(area, "perguntas");
    setBreadcrumb([
      { label: "Início", route: "inicio" },
      { label: area.title, route: `area/${area.id}` },
      { label: "Perguntas", route: `area/${area.id}/perguntas` },
      { label: category.title, route: `area/${area.id}/categoria/${category.id}` }
    ]);

    const sorted = [...category.questions].sort((a, b) =>
      (a.sort ?? Number(a.number)) - (b.sort ?? Number(b.number))
    );

    transition(`
      ${pageHeader(`${category.questions.length} itens`, category.title, category.description)}
      ${questionsOverviewCta(area)}
      <div class="question-list">${sorted.map(item => questionRow({ area, category, question: item })).join("")}</div>
    `);
  }

  function questionRow(item) {
    const { area, question } = item;
    return `<a class="question-row" href="#area/${area.id}/pergunta/${question.id}">
      <span class="question-number">${esc(question.number)}</span>
      <span>${esc(question.title)}</span>
      ${icon("chevron")}
    </a>`;
  }

  function renderQuestion(areaId, questionId) {
    const item = questionById(areaId, questionId);
    if (!item) return renderNotFound();

    const { area, category, question } = item;
    const code = codeFor(area, question);

    renderTopNavigation(areaId);
    renderAreaTabs(area, "perguntas");
    setBreadcrumb([
      { label: "Início", route: "inicio" },
      { label: area.title, route: `area/${area.id}` },
      { label: category.title, route: `area/${area.id}/categoria/${category.id}` },
      { label: `Item ${question.number}`, route: `area/${area.id}/pergunta/${question.id}` }
    ]);

    const sources = [...new Set([...(category.sourceIds || []), ...(question.sourceIds || [])])]
      .map(id => data.sources[id]).filter(Boolean);

    const supplements = category.questions.filter(q =>
      q.parentCode === code || (question.parentCode && codeFor(area, q) === question.parentCode)
    );

    const related = [...category.questions]
      .filter(q => q.id !== question.id && !q.parentCode)
      .sort((a, b) =>
        Math.abs((a.sort ?? Number(a.number)) - (question.sort ?? Number(question.number))) -
        Math.abs((b.sort ?? Number(b.number)) - (question.sort ?? Number(question.number)))
      )
      .slice(0, 3);

    transition(`
      <article class="answer-page">
        <header>
          <p class="question-label">Item ${esc(question.number)}${question.parentCode ? " · Complemento" : ""}</p>
          <h1>${esc(question.title)}</h1>
        </header>

        <section class="answer-box">
          <span>Resposta direta</span>
          <p>${esc(question.answer)}</p>
        </section>

        ${question.parentCode ? `
          <a class="parent-link" href="#area/${area.id}/pergunta/${category.questions.find(q => codeFor(area, q) === question.parentCode)?.id || ""}">
            ${icon("arrow")} Voltar para o item principal
          </a>` : ""}

        ${supplements.length && !question.parentCode ? `
          <section class="supplements">
            <p class="kicker">Complementos deste item</p>
            <div class="question-list">
              ${supplements.map(q => questionRow({ area, category, question: q })).join("")}
            </div>
          </section>` : ""}

        <details class="sources">
          <summary>${icon("book")} Fontes oficiais ${icon("chevron")}</summary>
          <div class="source-grid">${sources.map(sourceCard).join("")}</div>
        </details>

        <section class="related">
          <div class="section-heading"><div><p class="kicker">Outras dúvidas</p><h2>Perguntas relacionadas</h2></div></div>
          <div class="question-list">${related.map(q => questionRow({ area, category, question: q })).join("")}</div>
        </section>

        <footer class="answer-footer">${icon("info")}<span>${esc(config.notice)}</span></footer>
      </article>
    `);
  }

  function sourceCard(source) {
    return `<a class="source-card" href="${esc(source.url)}" target="_blank" rel="noopener noreferrer">
      <small>${esc(source.sphere)}</small>
      <strong>${esc(source.title)}</strong>
      <p>${esc(source.description)}</p>
      ${icon("external")}
    </a>`;
  }

  function renderLegislation(areaId) {
    const area = data.areas[areaId];
    if (!area) return renderNotFound();

    renderTopNavigation(areaId);
    renderAreaTabs(area, "legislacao");
    setBreadcrumb([
      { label: "Início", route: "inicio" },
      { label: area.title, route: `area/${area.id}` },
      { label: "Legislação", route: `area/${area.id}/legislacao` }
    ]);

    const usedIds = new Set();
    categoriesFor(areaId).forEach(category => {
      (category.sourceIds || []).forEach(id => usedIds.add(id));
      category.questions.forEach(question =>
        (question.sourceIds || []).forEach(id => usedIds.add(id))
      );
    });

    const sources = [...usedIds].map(id => data.sources[id]).filter(Boolean);
    const groups = {};
    sources.forEach(source => {
      groups[source.sphere] = groups[source.sphere] || [];
      groups[source.sphere].push(source);
    });

    transition(`
      ${pageHeader("Fontes oficiais", "Legislação e fontes", "Clique em uma fonte para abrir a página oficial.")}
      <section class="law-groups">
        ${Object.entries(groups).map(([sphere, list], index) => `
          <details class="law-group" ${index === 0 ? "open" : ""}>
            <summary><div><small>${list.length} referências</small><h2>${esc(sphere)}</h2></div>${icon("chevron")}</summary>
            <div class="source-grid">${list.map(sourceCard).join("")}</div>
          </details>
        `).join("")}
      </section>
    `);
  }

  function renderNotFound() {
    renderTopNavigation("");
    renderAreaTabs(null);
    setBreadcrumb([{ label: "Conteúdo não encontrado", route: "inicio" }]);
    transition(`<section class="empty-state">${icon("info")}<h1>Conteúdo não encontrado</h1><p>O endereço pode ter mudado ou ainda não está disponível.</p><a href="#inicio">Voltar ao início</a></section>`);
  }

  function renderSearchResults(term) {
    const query = normalize(term.trim());
    if (query.length < 2) {
      searchResults.innerHTML = `<div class="search-empty">Digite pelo menos duas letras para pesquisar.</div>`;
      return;
    }

    const results = allQuestions().filter(({ area, category, question }) => {
      const content = normalize([
        codeFor(area, question),
        question.title,
        question.answer,
        category.title,
        area.title,
        ...(question.tags || [])
      ].join(" "));
      return content.includes(query);
    }).slice(0, 40);

    searchResults.innerHTML = results.length
      ? results.map(item => `
          <a href="#area/${item.area.id}/pergunta/${item.question.id}" class="search-result">
            <span>${esc(item.area.title)} · ${esc(item.category.title)}</span>
            <strong>${esc(item.question.title)}</strong>
          </a>
        `).join("")
      : `<div class="search-empty">Nenhum resultado para “${esc(term)}”.</div>`;
  }

  function route() {
    const parts = (location.hash.replace(/^#/, "") || "inicio").split("/").map(decodeURIComponent);

    if (parts[0] === "contador") currentMode = "contador";
    else if (parts[0] === "empresa") currentMode = "empresa";
    else currentMode = "cidadao";

    applyModeTheme();
    renderModeSwitcher();
    renderPortalContext();

    if (parts[0] === "contador") {
      if (!parts[1]) {
        renderTopNavigation("contador", "inicio");
        renderAreaTabs(null);
        setBreadcrumb([{ label: "Área do Contador", route: "contador" }]);
        transition(renderContadorLanding(modeData()));
        return;
      }
      if (parts[1] === "documentacoes") return renderContadorDocumentacoes();
      if (parts[1] === "cnae-atividade-real") return renderContadorCnaeAtividade();
      if (parts[1] === "protocolos-betha") return renderContadorProtocolosBetha();
      if (parts[1] === "alteracoes-empresa") return renderContadorAlteracoesEmpresa();
      if (parts[1] === "faq") return renderContadorFaqPage();
      if (parts[1] === "panfletos") return renderPanfletosPage("contador");
      return renderNotFound();
    }

    if (parts[0] === "empresa") {
      if (!parts[1]) {
        renderTopNavigation("empresa", "inicio");
        renderAreaTabs(null);
        setBreadcrumb([{ label: "Área da Empresa", route: "empresa" }]);
        transition(renderEmpresaLanding(modeData()));
        return;
      }
      if (parts[1] === "panfletos") return renderPanfletosPage("empresa");
      return renderEmpresaSimplePage(parts[1]);
    }

    if (parts[0] === "inicio") return renderHome();
    if (parts[0] === "panfletos") return renderPanfletosPage("cidadao");
    if (parts[0] === "agua") return renderWaterQuality();
    if (parts[0] === "avisos") {
      if (!parts[1]) return renderNotices();
      return renderNoticeDetail(parts[1]);
    }

    if (parts[0] === "area") {
      const areaId = parts[1];
      if (!parts[2]) return renderArea(areaId);
      if (parts[2] === "perguntas") return renderQuestions(areaId);
      if (parts[2] === "temas") return renderThemes(areaId);
      if (parts[2] === "legislacao") return renderLegislation(areaId);
      if (parts[2] === "caminho") return renderJourney(areaId, parts[3]);
      if (parts[2] === "categoria") return renderCategory(areaId, parts[3]);
      if (parts[2] === "pergunta") return renderQuestion(areaId, parts[3]);
    }

    renderNotFound();
  }

  function renderContactChannels() {
    const channels = config.officialChannels || {};
    contactContent.innerHTML = `
      <div class="contact-primary">
        <small>Vigilância Sanitária</small>
        <strong>${esc(channels.visaPhone || "Consulte o portal municipal")}</strong>
        <span>Clique nos canais abaixo para falar com o Município.</span>
      </div>
      <div class="contact-links">
        <a href="${esc(channels.visaPage)}" target="_blank" rel="noopener noreferrer">Página da Vigilância ${icon("external")}</a>
        <a href="${esc(channels.protocol)}" target="_blank" rel="noopener noreferrer">Protocolo On-Line ${icon("external")}</a>
        <a href="${esc(channels.ombudsman)}" target="_blank" rel="noopener noreferrer">Ouvidoria Municipal ${icon("external")}</a>
        <a href="${esc(channels.phoneDirectory)}" target="_blank" rel="noopener noreferrer">Telefones e horários ${icon("external")}</a>
      </div>
      <p class="contact-note">Ao entrar em contato, informe o endereço e explique a sua dúvida.</p>`;
  }

  portalModeSwitcher?.addEventListener("click", event => {
    const button = event.target.closest("[data-mode]");
    if (!button) return;
    activateMode(button.dataset.mode);
  });

  contactFab.addEventListener("click", () => {
    renderContactChannels();
    contactDialog.showModal();
  });
  contactClose.addEventListener("click", () => contactDialog.close());

  searchButton.addEventListener("click", () => {
    searchDialog.showModal();
    searchInput.focus();
  });

  searchInput.addEventListener("input", () => renderSearchResults(searchInput.value));

  searchResults.addEventListener("click", event => {
    if (event.target.closest("a")) searchDialog.close();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "/" && document.activeElement?.tagName !== "INPUT") {
      event.preventDefault();
      searchDialog.showModal();
      searchInput.focus();
    }
    if (event.key === "Escape" && searchDialog.open) searchDialog.close();
    if (event.key === "Escape" && contactDialog.open) contactDialog.close();
  });

  window.addEventListener("hashchange", () => {
    route();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  installIcons();
  applyModeTheme();
  renderModeSwitcher();
  renderPortalContext();
  route();
})();
