window.VISA.areas["cidadao"] = {
  "id": "cidadao",
  "code": "CID",
  "title": "Vigilância Sanitária e o Cidadão",
  "navTitle": "Cidadão",
  "icon": "shield",
  "summary": "Orientações sobre denúncias, fiscalização, alvará e qual serviço procurar.",
  "intro": "Clique em uma opção para encontrar a dúvida que deseja consultar.",
  "questionCount": 188,
  "featured": [
    "cid-001",
    "cid-006",
    "cid-021",
    "cid-041",
    "cid-053",
    "cid-077",
    "cid-095",
    "cid-111",
    "cid-129",
    "cid-167",
    "cid-177"
  ],
  "categoryOrder": [
    "as-vigilancias-nao-sao-a-mesma-coisa",
    "quem-devo-procurar",
    "atendimento-e-orientacao-ao-cidadao",
    "denuncias-sanitarias",
    "depois-da-denuncia",
    "inspecao-sanitaria",
    "orientacao-notificacao-medidas",
    "alvara-licenciamento",
    "situacoes-comuns-limites",
    "identificacao-agentes-golpes",
    "doenca-surto-risco-imediato"
  ],
  "journeys": [
    {
      "id": "qual-equipe",
      "icon": "users",
      "title": "Não sei qual equipe procurar",
      "description": "Clique para comparar as áreas e encontrar o serviço correto.",
      "categoryIds": [
        "as-vigilancias-nao-sao-a-mesma-coisa",
        "quem-devo-procurar",
        "doenca-surto-risco-imediato"
      ]
    },
    {
      "id": "denuncia",
      "icon": "clipboard",
      "title": "Quero registrar uma denúncia",
      "description": "Clique para saber o que informar e o que acontece depois.",
      "categoryIds": [
        "denuncias-sanitarias",
        "depois-da-denuncia",
        "situacoes-comuns-limites"
      ]
    },
    {
      "id": "fiscalizacao",
      "icon": "search",
      "title": "Tenho dúvida sobre fiscalização",
      "description": "Clique para entender inspeções, documentos e medidas sanitárias.",
      "categoryIds": [
        "inspecao-sanitaria",
        "orientacao-notificacao-medidas",
        "identificacao-agentes-golpes"
      ]
    },
    {
      "id": "licenca",
      "icon": "building",
      "title": "Tenho dúvida sobre alvará",
      "description": "Clique para consultar licenciamento e atendimento ao cidadão.",
      "categoryIds": [
        "alvara-licenciamento",
        "atendimento-e-orientacao-ao-cidadao"
      ]
    },
    {
      "id": "legislacao",
      "icon": "book",
      "title": "Quero consultar a legislação",
      "description": "Clique para abrir as fontes oficiais desta área.",
      "route": "cidadao/legislacao"
    }
  ]
};
