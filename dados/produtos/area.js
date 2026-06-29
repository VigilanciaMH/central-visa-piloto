window.VISA.areas["produtos"] = {
  "id": "produtos",
  "code": "PRO",
  "title": "Produtos sob Vigilância Sanitária",
  "navTitle": "Produtos",
  "icon": "sparkles",
  "summary": "Orientações sobre cosméticos, saneantes, produtos de higiene e dispositivos médicos.",
  "intro": "Clique em uma opção para encontrar a dúvida que deseja consultar.",
  "questionCount": 215,
  "featured": [
    "pro-001",
    "pro-013",
    "pro-025",
    "pro-041",
    "pro-056",
    "pro-069",
    "pro-082",
    "pro-106",
    "pro-129",
    "pro-147",
    "pro-159",
    "pro-182",
    "pro-193",
    "pro-206"
  ],
  "categoryOrder": [
    "entendendo-produtos",
    "antes-de-fabricar-importar-vender",
    "regularizacao-consulta-anvisa",
    "rotulos-embalagens-rastreabilidade",
    "compra-armazenamento-transporte",
    "produtos-irregulares-recolhimentos",
    "saneantes-produtos-limpeza",
    "cosmeticos-higiene-perfumes",
    "dispositivos-medicos",
    "internet-importados-marketplaces",
    "fracionamento-producao-artesanal",
    "publicidade-promessas-amostras",
    "acidentes-intoxicacoes-notificacoes",
    "fiscalizacao-documentos-medidas",
    "licenciamento-sc-maravilha"
  ],
  "journeys": [
    {
      "id": "abrir",
      "icon": "building",
      "title": "Quero fabricar, distribuir ou vender",
      "description": "Clique para verificar regularização, licença e responsabilidades.",
      "categoryIds": [
        "antes-de-fabricar-importar-vender",
        "licenciamento-sc-maravilha",
        "fracionamento-producao-artesanal"
      ]
    },
    {
      "id": "consultar",
      "icon": "search",
      "title": "Quero consultar um produto",
      "description": "Clique para verificar regularização, rótulo, origem e alertas.",
      "categoryIds": [
        "entendendo-produtos",
        "regularizacao-consulta-anvisa",
        "rotulos-embalagens-rastreabilidade",
        "produtos-irregulares-recolhimentos"
      ]
    },
    {
      "id": "categoria",
      "icon": "sparkles",
      "title": "Tenho dúvida sobre uma categoria",
      "description": "Clique para escolher saneantes, cosméticos ou dispositivos médicos.",
      "categoryIds": [
        "saneantes-produtos-limpeza",
        "cosmeticos-higiene-perfumes",
        "dispositivos-medicos"
      ]
    },
    {
      "id": "rotina",
      "icon": "clipboard",
      "title": "Tenho uma dúvida da rotina",
      "description": "Clique para consultar compra, estoque, publicidade, internet e fiscalização.",
      "categoryIds": [
        "compra-armazenamento-transporte",
        "internet-importados-marketplaces",
        "publicidade-promessas-amostras",
        "acidentes-intoxicacoes-notificacoes",
        "fiscalizacao-documentos-medidas"
      ]
    },
    {
      "id": "legislacao",
      "icon": "book",
      "title": "Quero consultar a legislação",
      "description": "Clique para abrir as fontes oficiais desta área.",
      "route": "produtos/legislacao"
    }
  ]
};
