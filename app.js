(function () {
  "use strict";

  const config = window.VISA_CONFIG;
  const data = window.VISA;
  const view = document.getElementById("view");
  const breadcrumb = document.getElementById("breadcrumb");
  const navigation = document.getElementById("navigation");
  const sidebar = document.getElementById("sidebar");
  const menuButton = document.getElementById("menuButton");
  const searchDialog = document.getElementById("searchDialog");
  const searchTrigger = document.getElementById("searchTrigger");
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");

  const ICONS = {
    menu: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>',
    search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>',
    shield: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 19 6v5c0 4.6-2.8 8-7 10-4.2-2-7-5.4-7-10V6l7-3Z"/><path d="m9 12 2 2 4-5"/></svg>',
    home: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10M9 20v-6h6v6"/></svg>',
    utensils: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3v7M4 3v5c0 2 1.3 3 3 3s3-1 3-3V3M7 11v10M15 3v18M15 3c3 2 4 5 4 8h-4"/></svg>',
    question: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.4 2.4 0 1 1 3.6 2.1c-.9.5-1.4 1-1.4 2M12 17h.01"/></svg>',
    book: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A3.5 3.5 0 0 1 7.5 2H11v17H7.5A3.5 3.5 0 0 0 4 22V5.5ZM20 5.5A3.5 3.5 0 0 0 16.5 2H13v17h3.5A3.5 3.5 0 0 1 20 22V5.5Z"/></svg>',
    phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 3h3l1.3 4-2 1.6a15 15 0 0 0 6.6 6.6l1.6-2 4 1.3v3c0 1.4-1.1 2.5-2.5 2.5C10.5 20 4 13.5 4 5.5 4 4.1 5.1 3 6.5 3Z"/></svg>',
    building: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 21V5l8-3v19M20 21V9l-8-2M2 21h20M7 8h2M7 12h2M7 16h2M15 12h2M15 16h2"/></svg>',
    clipboard: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5H6a2 2 0 0 0-2 2v13h16V7a2 2 0 0 0-2-2h-3"/><rect x="9" y="2" width="6" height="5" rx="1"/><path d="M8 11h8M8 15h8"/></svg>',
    heart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 5.8a5.5 5.5 0 0 0-7.8 0L12 6.8l-1-1a5.5 5.5 0 1 0-7.8 7.8L12 22l8.8-8.4a5.5 5.5 0 0 0 0-7.8Z"/></svg>',
    store: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10v10h16V10M3 10l2-6h14l2 6"/><path d="M3 10a3 3 0 0 0 5 2 3 3 0 0 0 4 0 3 3 0 0 0 4 0 3 3 0 0 0 5-2M9 20v-5h6v5"/></svg>',
    layout: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M9 9h12"/></svg>',
    users: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6M17 14a5 5 0 0 1 4 5v1"/></svg>',
    package: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 7 9 5 9-5v10l-9 5-9-5V7ZM12 12v10"/></svg>',
    chef: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 14h12v7H6z"/><path d="M6 14a4 4 0 0 1 1-7.9A5 5 0 0 1 16.7 6 4 4 0 0 1 18 14"/></svg>',
    thermometer: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 14.8V5a3 3 0 0 0-6 0v9.8a5 5 0 1 0 6 0Z"/><path d="M11 17V8"/></svg>',
    droplet: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2S5 10 5 15a7 7 0 0 0 14 0c0-5-7-13-7-13Z"/></svg>',
    tag: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 13 13 20 4 11V4h7l9 9Z"/><circle cx="8.5" cy="8.5" r="1.2"/></svg>',
    truck: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h11v11H3zM14 9h4l3 3v4h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M14 7l5 5-5 5"/></svg>',
    chevron: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>',
    external: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9"/><path d="M18 13v7H4V6h7"/></svg>',
    info: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7h.01"/></svg>'
  };

  function icon(name, className = "") {
    return `<span class="svg-icon ${className}" aria-hidden="true">${ICONS[name] || ICONS.info}</span>`;
  }

  function enhanceIcons(root = document) {
    root.querySelectorAll("[data-icon]").forEach(el => { el.innerHTML = icon(el.dataset.icon); });
    root.querySelectorAll("[data-icon-link]").forEach(el => {
      if (!el.querySelector(".svg-icon")) el.insertAdjacentHTML("afterbegin", icon(el.dataset.iconLink));
    });
  }

  function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>\"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[c]);
  }

  function normalize(value) {
    return String(value ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  function area() { return data.areas.alimentacao; }
  function categories() {
    const order = area().categoryOrder;
    return order.map(id => data.categories.find(c => c.id === id)).filter(Boolean);
  }
  function categoryById(id) { return data.categories.find(c => c.id === id); }
  function allQuestions() { return categories().flatMap(category => category.questions.map(question => ({question, category}))); }
  function questionById(id) { return allQuestions().find(item => item.question.id === id); }
  function sourceById(id) { return data.sources[id]; }

  function href(route) { return `#${route}`; }
  function routeLink(route, label, cls="") { return `<a class="${cls}" href="${href(route)}">${label}</a>`; }

  function renderNavigation() {
    navigation.innerHTML = `
      <a class="nav-item" href="#inicio">${icon("home")}<span>Início</span></a>
      <div class="nav-section">
        <a class="nav-item nav-area" href="#alimentacao">${icon("utensils")}<span>Alimentação</span></a>
        <div class="nav-subitems">
          <a href="#alimentacao/perguntas">Perguntas e respostas</a>
          <a href="#alimentacao/legislacao">Legislação e fontes</a>
        </div>
      </div>`;
  }

  function setBreadcrumb(items) {
    breadcrumb.innerHTML = items.map((item,index) => index === items.length - 1
      ? `<span>${escapeHTML(item.label)}</span>`
      : `<a href="#${escapeHTML(item.route)}">${escapeHTML(item.label)}</a>${icon("chevron")}`).join("");
  }

  function transitionRender(html) {
    view.classList.remove("view-enter");
    view.innerHTML = html;
    enhanceIcons(view);
    requestAnimationFrame(() => view.classList.add("view-enter"));
  }

  function pageHeader(kicker,title,description) {
    return `<header class="page-header"><p class="kicker">${escapeHTML(kicker)}</p><h1>${escapeHTML(title)}</h1><p>${escapeHTML(description)}</p></header>`;
  }

  function renderHome() {
    setBreadcrumb([{label:"Início",route:"inicio"}]);
    transitionRender(`
      <section class="hero">
        <div class="hero-copy">
          <p class="kicker">Orientação sanitária em linguagem simples</p>
          <h1>Encontre a informação certa, no seu ritmo.</h1>
          <p>Comece por uma área, procure uma dúvida específica e avance apenas até o detalhe de que precisa.</p>
          <button class="primary-action" data-open-search>${icon("search")}Pesquisar uma dúvida</button>
        </div>
        <a class="area-feature" href="#alimentacao">
          <span class="feature-icon">${icon("utensils")}</span>
          <div><small>Área disponível</small><h2>Alimentação</h2><p>149 respostas sobre abertura, estrutura, manipulação, temperaturas, documentos, rótulos e situações do consumidor.</p></div>
          ${icon("arrow","feature-arrow")}
        </a>
      </section>
      <section class="quiet-section">
        <div><strong>Direto ao ponto</strong><span>Respostas curtas primeiro; detalhes e fontes aparecem quando você escolhe abrir.</span></div>
        <div><strong>Fontes identificadas</strong><span>As orientações apontam para referências federais, estaduais e municipais relacionadas.</span></div>
        <div><strong>Consulta pública</strong><span>O conteúdo é informativo e os canais oficiais continuam disponíveis para situações específicas.</span></div>
      </section>`);
    bindDynamicActions();
  }

  function renderArea() {
    const a=area();
    setBreadcrumb([{label:"Início",route:"inicio"},{label:a.title,route:"alimentacao"}]);
    const journeys=a.journeys.map(j=>`<a class="journey-card" href="#${j.route || `alimentacao/caminho/${j.id}`}">
      <span class="journey-icon">${icon(j.icon)}</span><div><h2>${escapeHTML(j.title)}</h2><p>${escapeHTML(j.description)}</p></div>${icon("arrow","card-arrow")}</a>`).join("");
    const featured=a.featured.slice(0,6).map(id=>{
      const item=questionById(id); if(!item)return'';
      return questionRow(item.question,item.category);
    }).join("");
    transitionRender(`
      ${pageHeader("Área de orientação",a.title,a.intro)}
      <section class="journey-grid" aria-label="Caminhos de navegação">${journeys}</section>
      <section class="content-section spacious">
        <div class="section-heading"><div><p class="kicker">Comece por uma dúvida comum</p><h2>Assuntos procurados com frequência</h2></div><a class="text-link" href="#alimentacao/perguntas">Ver todas as perguntas ${icon("arrow")}</a></div>
        <div class="question-list">${featured}</div>
      </section>`);
  }

  function renderJourney(id) {
    const journey=area().journeys.find(j=>j.id===id);
    if(!journey)return renderNotFound();
    setBreadcrumb([{label:"Início",route:"inicio"},{label:"Alimentação",route:"alimentacao"},{label:journey.title,route:`alimentacao/caminho/${id}`}]);
    const cats=(journey.categoryIds||[]).map(categoryById).filter(Boolean);
    transitionRender(`${pageHeader("Caminho de orientação",journey.title,journey.description)}<div class="category-grid">${cats.map(categoryCard).join("")}</div>`);
  }

  function categoryCard(cat) {
    return `<a class="category-card" href="#alimentacao/categoria/${cat.id}"><span class="category-icon">${icon(cat.icon)}</span><div><small>${cat.questions.length} perguntas</small><h2>${escapeHTML(cat.title)}</h2><p>${escapeHTML(cat.description)}</p></div>${icon("arrow","card-arrow")}</a>`;
  }

  function renderQuestions() {
    setBreadcrumb([{label:"Início",route:"inicio"},{label:"Alimentação",route:"alimentacao"},{label:"Perguntas e respostas",route:"alimentacao/perguntas"}]);
    transitionRender(`${pageHeader("Biblioteca de dúvidas","Perguntas e respostas","Escolha um assunto. As respostas só aparecem depois que você abre a pergunta desejada.")}
      <div class="category-grid">${categories().map(categoryCard).join("")}</div>`);
  }

  function renderCategory(id) {
    const cat=categoryById(id); if(!cat)return renderNotFound();
    setBreadcrumb([{label:"Início",route:"inicio"},{label:"Alimentação",route:"alimentacao"},{label:"Perguntas",route:"alimentacao/perguntas"},{label:cat.title,route:`alimentacao/categoria/${cat.id}`}]);
    transitionRender(`${pageHeader(`${cat.questions.length} perguntas`,cat.title,cat.description)}<div class="question-list">${cat.questions.map(q=>questionRow(q,cat)).join("")}</div>`);
  }

  function questionRow(q,cat) {
    return `<a class="question-row" href="#alimentacao/pergunta/${q.id}"><span class="question-number">${String(q.number).padStart(2,"0")}</span><span class="question-title">${escapeHTML(q.title)}</span>${icon("chevron","question-chevron")}</a>`;
  }

  function renderQuestion(id) {
    const item=questionById(id); if(!item)return renderNotFound();
    const {question:q,category:cat}=item;
    setBreadcrumb([{label:"Início",route:"inicio"},{label:"Alimentação",route:"alimentacao"},{label:cat.title,route:`alimentacao/categoria/${cat.id}`},{label:`Pergunta ${q.number}`,route:`alimentacao/pergunta/${q.id}`}]);
    const sources=[...new Set(q.sourceIds||cat.sourceIds||[])].map(sourceById).filter(Boolean);
    const rel=cat.questions.filter(other=>other.id!==q.id).sort((a,b)=>Math.abs(a.number-q.number)-Math.abs(b.number-q.number)).slice(0,3);
    transitionRender(`
      <article class="answer-page">
        <header><p class="kicker">Pergunta ${q.number} de 149</p><h1>${escapeHTML(q.title)}</h1></header>
        <section class="answer-box"><span>Resposta direta</span><p>${escapeHTML(q.answer)}</p></section>
        <details class="disclosure"><summary>${icon("book")}Fontes relacionadas <span>${icon("chevron")}</span></summary><div class="source-list">${sources.map(sourceCard).join("")}</div></details>
        <section class="related"><div class="section-heading compact"><div><p class="kicker">Continue navegando</p><h2>Perguntas próximas</h2></div></div><div class="question-list">${rel.map(x=>questionRow(x,cat)).join("")}</div></section>
        <footer class="answer-footer">${icon("info")}<span>${escapeHTML(config.notice)}</span></footer>
      </article>`);
  }

  function sourceCard(src) {
    return `<a class="source-card" href="${escapeHTML(src.url)}" target="_blank" rel="noopener noreferrer"><span>${escapeHTML(src.sphere)}</span><strong>${escapeHTML(src.title)}</strong><p>${escapeHTML(src.description)}</p>${icon("external")}</a>`;
  }

  function renderLegislation() {
    setBreadcrumb([{label:"Início",route:"inicio"},{label:"Alimentação",route:"alimentacao"},{label:"Legislação e fontes",route:"alimentacao/legislacao"}]);
    const groups={"Federal":[],"Santa Catarina":[],"Maravilha/SC":[]};
    Object.values(data.sources).forEach(src=>{ if(groups[src.sphere]) groups[src.sphere].push(src); });
    transitionRender(`${pageHeader("Referências normativas","Legislação e fontes","As normas estão organizadas por esfera. Abra apenas a referência que deseja consultar.")}
      <div class="law-groups">${Object.entries(groups).map(([sphere,list])=>`<details class="law-group" ${sphere==='Federal'?'open':''}><summary><div><small>${list.length} referências</small><h2>${sphere}</h2></div><span>${icon("chevron")}</span></summary><div class="source-list">${list.map(sourceCard).join("")}</div></details>`).join("")}</div>`);
  }

  function renderChannels() {
    setBreadcrumb([{label:"Início",route:"inicio"},{label:"Canais oficiais",route:"canais"}]);
    transitionRender(`${pageHeader("Atendimento municipal","Canais oficiais","Use os canais do Município quando a situação exigir protocolo, análise individual, denúncia ou atendimento direto.")}
      <div class="channel-grid">
        ${sourceCard(data.sources.visaMaravilha)}
        ${sourceCard(data.sources.alvaraMaravilha)}
        ${sourceCard(data.sources.ouvidoriaMaravilha)}
      </div>`);
  }

  function renderNotFound() {
    setBreadcrumb([{label:"Conteúdo não encontrado",route:"inicio"}]);
    transitionRender(`<div class="empty-state">${icon("info")}<h1>Conteúdo não encontrado</h1><p>O endereço pode ter mudado ou a orientação ainda não está disponível.</p><a class="primary-action" href="#inicio">Voltar ao início</a></div>`);
  }

  function parseRoute() {
    const raw=location.hash.replace(/^#/,"")||"inicio";
    const parts=raw.split("/").map(decodeURIComponent);
    if(parts[0]==="inicio") return renderHome();
    if(parts[0]==="canais") return renderChannels();
    if(parts[0]==="alimentacao") {
      if(!parts[1]) return renderArea();
      if(parts[1]==="perguntas") return renderQuestions();
      if(parts[1]==="legislacao") return renderLegislation();
      if(parts[1]==="caminho") return renderJourney(parts[2]);
      if(parts[1]==="categoria") return renderCategory(parts[2]);
      if(parts[1]==="pergunta") return renderQuestion(parts[2]);
    }
    renderNotFound();
  }

  function openSearch() {
    if(typeof searchDialog.showModal === "function") searchDialog.showModal();
    else searchDialog.setAttribute("open","");
    searchInput.value=""; renderSearchResults(""); setTimeout(()=>searchInput.focus(),30);
  }

  function renderSearchResults(term) {
    const n=normalize(term.trim());
    if(n.length<2) {
      searchResults.innerHTML=`<div class="search-empty"><span>${icon("search")}</span><p>Digite pelo menos duas letras. Você pode procurar por “pia”, “alvará”, “temperatura”, “rótulo” ou outra dúvida.</p></div>`;
      return;
    }
    const results=allQuestions().filter(({question,category})=>normalize([question.title,question.answer,category.title,...(question.tags||[])].join(" ")).includes(n)).slice(0,30);
    searchResults.innerHTML=results.length?results.map(({question,category})=>`<a href="#alimentacao/pergunta/${question.id}" data-search-result><small>${escapeHTML(category.title)}</small><strong>${escapeHTML(question.title)}</strong><span>${escapeHTML(question.answer)}</span></a>`).join(""):`<div class="search-empty"><span>${icon("search")}</span><p>Nenhuma resposta encontrada. Tente uma palavra mais geral.</p></div>`;
    enhanceIcons(searchResults);
    searchResults.querySelectorAll("[data-search-result]").forEach(a=>a.addEventListener("click",()=>searchDialog.close()));
  }

  function bindDynamicActions() {
    view.querySelectorAll("[data-open-search]").forEach(el=>el.addEventListener("click",openSearch));
  }

  searchTrigger.addEventListener("click",openSearch);
  searchInput.addEventListener("input",()=>renderSearchResults(searchInput.value));
  menuButton.addEventListener("click",()=>sidebar.classList.toggle("open"));
  window.addEventListener("hashchange",()=>{ sidebar.classList.remove("open"); parseRoute(); window.scrollTo({top:0,behavior:"smooth"}); });
  document.addEventListener("keydown",e=>{ if(e.key==="/" && !/input|textarea/i.test(document.activeElement.tagName)){e.preventDefault();openSearch();} if(e.key==="Escape"&&searchDialog.open)searchDialog.close(); });
  searchDialog.addEventListener("click",e=>{ if(e.target===searchDialog)searchDialog.close(); });

  renderNavigation(); enhanceIcons(); parseRoute(); bindDynamicActions();
})();
