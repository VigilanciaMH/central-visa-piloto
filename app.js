const $ = (sel)=>document.querySelector(sel);
const tree = $('#tree'), cards = $('#cards'), detail = $('#detail'), home = $('#home'), search = $('#search');
function areaName(id){ return VISA_DATA.areas.find(a=>a.id===id)?.nome || id; }
function renderTree(filter=''){
  tree.innerHTML='';
  const q = filter.toLowerCase();
  VISA_DATA.areas.forEach(area=>{
    const itens = area.itens.map(id=>VISA_DATA.items.find(x=>x.id===id)).filter(Boolean)
      .filter(x=>!q || [x.titulo,x.area,x.categoria,x.resumo,x.publico].join(' ').toLowerCase().includes(q));
    if(!itens.length) return;
    const group=document.createElement('div'); group.className='tree-group';
    group.innerHTML=`<div class="tree-title">▾ ${area.nome}</div>`;
    itens.forEach(item=>{
      const b=document.createElement('button'); b.className='tree-item'; b.textContent=item.titulo; b.onclick=()=>openItem(item.id); b.id='nav-'+item.id; group.appendChild(b);
    });
    tree.appendChild(group);
  });
}
function renderCards(){
  cards.innerHTML='';
  VISA_DATA.items.slice(0,6).forEach(item=>{
    const c=document.createElement('div'); c.className='card'; c.onclick=()=>openItem(item.id);
    c.innerHTML=`<span class="badge">${item.area}</span><span class="badge status">${item.status}</span><h3>${item.titulo}</h3><p>${item.resumo}</p>`;
    cards.appendChild(c);
  });
}
function list(arr){ return arr && arr.length ? '<ul>'+arr.map(x=>`<li>${x}</li>`).join('')+'</ul>' : '<p class="small">Sem itens cadastrados.</p>'; }
function openItem(id){
  const item=VISA_DATA.items.find(x=>x.id===id); if(!item) return;
  home.classList.add('hidden'); detail.classList.remove('hidden');
  document.querySelectorAll('.tree-item').forEach(x=>x.classList.remove('active'));
  const nav=$('#nav-'+id); if(nav) nav.classList.add('active');
  const ansClass = item.resposta==='sim'?'sim':item.resposta==='nao'?'nao':'depende';
  detail.innerHTML=`
    <div><span class="badge">${item.area}</span><span class="badge">${item.categoria}</span><span class="badge status">${item.status}</span></div>
    <h1>${item.titulo}</h1>
    <div class="answer ${ansClass}">Resposta: ${item.resposta.toUpperCase()}</div>
    <p>${item.resumo}</p>
    <div class="grid">
      <div class="box"><h3>O fiscal pode</h3>${list(item.pode)}</div>
      <div class="box"><h3>O fiscal não pode</h3>${list(item.naoPode)}</div>
      <div class="box"><h3>Depende de</h3>${list(item.depende)}</div>
      <div class="box"><h3>Versão pública</h3><p>${item.publico}</p></div>
    </div>
    <h2>Base legal / fundamento</h2>
    ${item.fundamento.length ? item.fundamento.map(f=>`<div class="legal"><strong>${f.norma}</strong><p>${f.trecho}</p></div>`).join('') : '<p class="small">Nenhum fundamento cadastrado ainda.</p>'}
    <p class="small">Última revisão: ${item.revisao} · ID: <span class="source">${item.id}</span></p>
    <p><button class="linklike" onclick="showHome()">Voltar ao início</button></p>
  `;
}
function showHome(){ detail.classList.add('hidden'); home.classList.remove('hidden'); document.querySelectorAll('.tree-item').forEach(x=>x.classList.remove('active')); }
search.addEventListener('input', e=>renderTree(e.target.value));
renderTree(); renderCards();
