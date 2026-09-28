/* ASSETS: replace with Ashgrove's own images/videos */
const U=id=>'https://images.unsplash.com/photo-'+id+'?auto=format&fit=crop&w=1400&q=70';
const IMG={hero:U('1613490493576-7fde63acd811'),arch:U('1600585154340-be6161a56a0c'),int:U('1600607687939-ce8a6c25118c'),home:U('1512917774080-9991f1c4c750'),land:U('1500382017468-9049fed747ef'),green:U('1518780664697-55e3ad937233'),pool:U('1600596542815-ffad4c1539a9'),kit:U('1556909114-f6e7ad7d3136'),bath:U('1552321554-5fefe8c9ef14'),liv:U('1600210492486-724fe5c67fb0'),bed:U('1616594039964-ae9021a400a0'),gym:U('1534438327276-14e5300c3a48'),team:U('1521737604893-d14cc237f11d')};
const HERO_VIDEO=''; /* e.g. 'assets/hero.mp4' */
const FB='linear-gradient(135deg,#1a3352,#0a1728)';
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
$$('[data-img]').forEach(e=>{const u=IMG[e.dataset.img],i=new Image();i.onload=()=>e.style.backgroundImage='url('+u+')';i.onerror=()=>e.style.backgroundImage=FB;i.src=u});
const hv=$('#hv');if(hv&&HERO_VIDEO){hv.src=HERO_VIDEO;hv.hidden=false;hv.play().catch(()=>{})}
const nav=$('#nav');addEventListener('scroll',()=>nav.classList.toggle('s',scrollY>40),{passive:true});
$('#burger').onclick=()=>$('#links').classList.toggle('open');
$$('.tabs button').forEach(b=>b.onclick=()=>{$$('.tabs button,.pane').forEach(x=>x.classList.remove('on'));b.classList.add('on');$('#'+b.dataset.p).classList.add('on')});
const dlg=$('#reg');$$('[data-reg]').forEach(a=>a.onclick=e=>{e.preventDefault();dlg.showModal()});$('#regx').onclick=()=>dlg.close();
const WA='https://wa.me/2349035508695?text=';
function send(f,ok){const d=new FormData(f);const t=`Hello Ashgrove, I'm ${d.get('n')} (${d.get('c')||''}${d.get('p')||''}${d.get('e')?', '+d.get('e'):''}). Interested in: ${d.get('i')||'General enquiry'}. ${d.get('m')||''}`;ok.style.display='block';window.open(WA+encodeURIComponent(t),'_blank')}
$$('form').forEach(f=>f.onsubmit=e=>{e.preventDefault();send(f,f.querySelector('.ok'))});
const L=[{n:'Ashgrove Court',l:'Guzape',t:'Terrace',p:185,s:'Available',i:'pool'},{n:'Ashgrove Gardens',l:'Lokogoma',t:'Duplex',p:120,s:'Available',i:'int'},{n:'Ashgrove Residences',l:'Wuse 2',t:'Apartment',p:75,s:'Reserved',i:'liv'},{n:'Ashgrove Estates Plots',l:'Kuje',t:'Land',p:18,s:'Available',i:'land'},{n:'Ashgrove Terraces',l:'Lugbe',t:'Terrace',p:45,s:'Sold',i:'arch'},{n:'Ashgrove Heights',l:'Katampe',t:'Duplex',p:210,s:'Available',i:'home'}];
const g=$('#grid');if(g){const q=['#fl','#ft'].map($);const u=k=>[...new Set(L.map(x=>x[k]))];u('l').forEach(v=>q[0].add(new Option(v,v)));u('t').forEach(v=>q[1].add(new Option(v,v)));
function r(){const [a,b,c,d]=['#fl','#ft','#fb','#fs'].map(s=>$(s).value);const R=L.filter(x=>(!a||x.l===a)&&(!b||x.t===b)&&(!d||x.s===d)&&(!c||(c==='a'?x.p<50:c==='b'?x.p>=50&&x.p<=100:x.p>100)));
g.innerHTML=R.map(x=>`<article class="card"><div class="cp"><img loading="lazy" alt="${x.n}, ${x.l}" src="${IMG[x.i]}" onerror="this.remove()"><span class="tag ${x.s}">${x.s}</span></div><div class="b"><h3>${x.n}</h3><div class="m">${x.l}, Abuja &middot; ${x.t}</div><div class="p">&#8358;${x.p}M</div><a class="btn" target="_blank" rel="noopener" href="${WA+encodeURIComponent('Hello Ashgrove, I am interested in '+x.n+' ('+x.l+').')}">Enquire</a></div></article>`).join('');$('#empty').style.display=R.length?'none':'block'}
['#fl','#ft','#fb','#fs'].forEach(s=>$(s).onchange=r);r()}
