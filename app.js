(function(){
  const data = window.VISA_DATA;
  const tree = document.getElementById('tree');
  const view = document.getElementById('view');
  const breadcrumb = document.getElementById('breadcrumb');
  const searchInput = document.getElementById('searchInput');
  const btnPrint = document.getElementById('btnPrint');

  function textOf(item){
    const parts = [item.title,item.area,item.category,item.summary,item.direct];
    (item.sections||[]).forEach(s=>{parts.push(s.title); parts.push((s.body||[]).join(' '));});
    (item.sources||[]).forEach(id=>parts.push(data.sources[id]?.label||''));
    return parts.join(' ').toLowerCase();
  }

  function buildTree(filter=''){
    tree.innerHTML = '';
    const f = filter.trim().toLowerCase();
    const homeBtn = document.createElement('button');
    homeBtn.className = 'tree-item'; homeBtn.textContent = 'Início'; homeBtn.onclick = ()=>openItem('home');
    tree.appendChild(homeBtn);
    data.categories.forEach(cat=>{
      const matches = cat.items.filter(id=>!f || textOf(data.items[id]).includes(f));
      if(!matches.length && f) return;
      const sec = document.createElement('div'); sec.className='tree-section';
      const title = document.createElement('div'); title.className='tree-title'; title.textContent = cat.name; sec.appendChild(title);
      const sub = document.createElement('div'); sub.className='tree-sub';
      matches.forEach(id=>{
        const item = data.items[id];
        const btn = document.createElement('button'); btn.className='tree-item'; btn.dataset.id=id; btn.textContent=item.title;
        btn.onclick=()=>openItem(id); sub.appendChild(btn);
      });
      sec.appendChild(sub); tree.appendChild(sec);
    });
  }

  function openItem(id){
    const item = id==='home' ? data.home : data.items[id];
    if(!item){ view.innerHTML='<p class="empty">Item não encontrado.</p>'; return; }
    document.querySelectorAll('.tree-item').forEach(b=>b.classList.toggle('active', b.dataset.id===id));
    breadcrumb.textContent = `${item.area || 'Central'} / ${item.category || ''}`;
    const tags = [item.area,item.category,item.type==='question'?'Pergunta prática':'Página'].filter(Boolean);
    const sections = (item.sections||[]).map(s=>`<section class="section"><h3>${escapeHtml(s.title)}</h3>${(s.body||[]).map(p=>`<p>${escapeHtml(p)}</p>`).join('')}</section>`).join('');
    const sources = (item.sources||[]).map(srcId=>data.sources[srcId]).filter(Boolean);
    view.innerHTML = `
      <h2>${escapeHtml(item.title)}</h2>
      <p class="empty">${escapeHtml(item.summary || '')}</p>
      <div class="meta">${tags.map(t=>`<span class="tag">${escapeHtml(t)}</span>`).join('')}<span class="tag">Atualizado em ${escapeHtml(item.updated||'')}</span></div>
      <div class="answer"><strong>Resposta direta:</strong><br>${escapeHtml(item.direct || '')}</div>
      ${sections}
      ${sources.length?`<section class="section"><h3>Base legal e fontes</h3><ul class="source-list">${sources.map(s=>`<li><a target="_blank" rel="noopener" href="${escapeAttr(s.url)}">${escapeHtml(s.label)}</a></li>`).join('')}</ul></section>`:''}
      <div class="status">Orientação pública de caráter geral. Não substitui protocolo, licenciamento, denúncia formal, defesa em processo sanitário ou análise individual do estabelecimento.</div>`;
    location.hash = id;
  }

  function escapeHtml(str){return String(str).replace(/[&<>"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));}
  function escapeAttr(str){return String(str).replace(/"/g,'&quot;');}

  searchInput.addEventListener('input', e=>buildTree(e.target.value));
  btnPrint.addEventListener('click', ()=>window.print());
  buildTree(); openItem(location.hash.replace('#','') || 'home');
})();
