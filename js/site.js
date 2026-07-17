
const t=document.querySelector('.menu-toggle'),n=document.querySelector('.site-header nav');
t?.addEventListener('click',()=>{const o=n.classList.toggle('open');t.setAttribute('aria-expanded',String(o));});
document.querySelectorAll('.site-header nav a').forEach(a=>a.addEventListener('click',()=>n.classList.remove('open')));
document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
const f=document.getElementById('quoteForm');
f?.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(f);const s=`JFK OPERATIONS Quote Request - ${d.get('service')||'General'}`;const b=[`Name: ${d.get('name')||''}`,`Business: ${d.get('business')||''}`,`Email: ${d.get('email')||''}`,`Service: ${d.get('service')||''}`,'','Project details:',d.get('details')||''].join('\n');location.href=`mailto:johnkohnen@outlook.com?subject=${encodeURIComponent(s)}&body=${encodeURIComponent(b)}`;});
