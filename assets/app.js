(function () {
  "use strict";

  const config = window.VISA_CONFIG;
  const data = window.VISA;

  const view = document.getElementById("view");
  const breadcrumb = document.getElementById("breadcrumb");
  const areaTabs = document.getElementById("areaTabs");
  const topNavigation = document.getElementById("topNavigation");
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
    info: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7h.01"/></svg>'
  };

  const icon = (name, cls = "") =>
    `<span class="icon ${cls}" aria-hidden="true">${ICONS[name] || ICONS.info}</span>`;

  function installIcons(root = document) {
    root.querySelectorAll("[data-icon]").forEach(el => {
      el.innerHTML = icon(el.dataset.icon);
    });
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

  function renderTopNavigation(activeAreaId = "") {
    document.body.dataset.area = activeAreaId || "inicio";
    officialNoticeLink.href = activeAreaId ? `#area/${activeAreaId}/legislacao` : "#inicio";
    officialNoticeLink.textContent = activeAreaId ? "Ver legislação desta área" : "Acessar áreas e canais";
    topNavigation.innerHTML = `
      <a href="#inicio" class="${!activeAreaId ? "active" : ""}">Início</a>
      ${areaList().map(area =>
        `<a href="#area/${area.id}" class="${activeAreaId === area.id ? "active" : ""}">${esc(area.title)}</a>`
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
    renderTopNavigation("");
    renderAreaTabs(null);
    setBreadcrumb([{ label: "Início", route: "inicio" }]);

    transition(`
      <section class="hero">
        <p class="kicker">Informação sanitária organizada</p>
        <h1>Encontre uma orientação sem receber tudo de uma vez.</h1>
        <p>Escolha uma área, avance por assuntos e abra apenas a pergunta que deseja consultar.</p>
      </section>

      <section class="area-grid">
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
      </section>

      <section class="home-note">
        <div><strong>Escolha</strong><span>Entre pela área relacionada à sua dúvida.</span></div>
        <div><strong>Navegue</strong><span>Use as abas e os caminhos apresentados no centro da tela.</span></div>
        <div><strong>Consulte</strong><span>Abra a resposta e, quando necessário, as fontes relacionadas.</span></div>
      </section>
    `);
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

      <section class="journey-grid">
        ${area.journeys.map(journey => `
          <a class="journey-card area-${area.id}" href="#area/${area.id}/caminho/${journey.id}">
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

    transition(`
      ${pageHeader("Biblioteca", "Perguntas e respostas", "Escolha um tema. A resposta só aparece depois que você abre a pergunta desejada.")}
      <section class="category-grid">
        ${categoriesFor(areaId).map(category => categoryCard(area, category)).join("")}
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
      ${pageHeader("Mapa da área", "Temas disponíveis", "Abra um tema para consultar somente as perguntas relacionadas.")}
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
      ${pageHeader("Caminho de orientação", journey.title, journey.description)}
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

    const sources = [...new Set(question.sourceIds || category.sourceIds || [])]
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
          <summary>${icon("book")} Fontes relacionadas ${icon("chevron")}</summary>
          <div class="source-grid">${sources.map(sourceCard).join("")}</div>
        </details>

        <section class="related">
          <div class="section-heading"><div><p class="kicker">Continue navegando</p><h2>Itens próximos</h2></div></div>
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
    categoriesFor(areaId).forEach(category =>
      (category.sourceIds || []).forEach(id => usedIds.add(id))
    );

    const sources = [...usedIds].map(id => data.sources[id]).filter(Boolean);
    const groups = {};
    sources.forEach(source => {
      groups[source.sphere] = groups[source.sphere] || [];
      groups[source.sphere].push(source);
    });

    transition(`
      ${pageHeader("Referências", "Legislação e fontes", "Abra somente a esfera ou a fonte que deseja consultar.")}
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
      searchResults.innerHTML = `<div class="search-empty">Digite pelo menos duas letras para localizar uma orientação.</div>`;
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

    if (parts[0] === "inicio") return renderHome();

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
        <span>Atendimento e orientação sobre assuntos sanitários.</span>
      </div>
      <div class="contact-links">
        <a href="${esc(channels.visaPage)}" target="_blank" rel="noopener noreferrer">Página da Vigilância ${icon("external")}</a>
        <a href="${esc(channels.protocol)}" target="_blank" rel="noopener noreferrer">Protocolo On-Line ${icon("external")}</a>
        <a href="${esc(channels.ombudsman)}" target="_blank" rel="noopener noreferrer">Ouvidoria Municipal ${icon("external")}</a>
        <a href="${esc(channels.phoneDirectory)}" target="_blank" rel="noopener noreferrer">Telefones e horários ${icon("external")}</a>
      </div>
      <p class="contact-note">Para decisões sobre um caso concreto, informe a atividade, o procedimento, os produtos e os equipamentos utilizados.</p>`;
  }

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
  route();
})();