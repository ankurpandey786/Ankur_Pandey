const progress=document.querySelector('.scroll-progress');
const glow=document.querySelector('.cursor-glow');
window.addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-innerHeight;progress.style.width=(scrollY/h*100)+'%'});
window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const modal=document.getElementById('modal'), modalContent=document.getElementById('modal-content');
const data={
 asn:{tag:'INTEGRATION · ITAM',title:'ASN Hardware Receiving',body:'Built an Advance Shipping Notice integration to automate hardware receiving and reduce manual asset creation. The workflow supports bulk creation of 200+ assets per shipment and connects the receiving process with enterprise asset operations.',metrics:[['200+','assets / shipment'],['ASN','integration'],['ITAM','domain']]},
 cleanup:{tag:'DATA QUALITY · CMDB',title:'Virtual Asset Cleanup',body:'Engineered a scheduled cleanup job to identify and remove 500K+ virtual asset records from production. The work focused on improving CMDB data quality while making cleanup repeatable and operationally controlled.',metrics:[['500K+','records'],['Scheduled','cleanup'],['CMDB','quality']]},
 normalization:{tag:'CMDB · NORMALIZATION',title:'Model Normalization',body:'Designed model normalization logic to reduce duplicate CI/model records and improve consistency across asset data. Built 70+ reports and dashboards to monitor asset records and support smooth processing.',metrics:[['70+','reports & dashboards'],['CI / Model','normalization'],['CMDB','data quality']]},
 ham:{tag:'HAM PRO · CSDM',title:'Asset Lifecycle Management',body:'Configured ServiceNow ITAM/HAM Pro hardware asset lifecycle using Lifecycle Stage and Lifecycle Stage Status, aligned with CSDM 5.0. Supported 10+ workflows covering asset assignment, transfer and retirement.',metrics:[['10+','HAM workflows'],['CSDM 5.0','alignment'],['HAM Pro','platform']]},
 itdad:{tag:'IMPORT · ITAD',title:'Bulk Asset Operations',body:'Streamlined bulk asset and stockroom operations using the HAM Import Utility, including large-scale data loads and ITAD vendor integration for compliant and auditable hardware disposal.',metrics:[['Bulk','operations'],['ITAD','integration'],['Audit','ready']]},
 cloud:{tag:'DISCOVERY · CLOUD',title:'Cloud & CMDB',body:'Worked with enterprise configuration data and cloud discovery concepts across AWS, Azure and OCI environments, supporting the broader goal of keeping CMDB information useful and current.',metrics:[['AWS','cloud'],['Azure','cloud'],['OCI','cloud']]}
};
document.querySelectorAll('.work-card').forEach(card=>card.addEventListener('click',()=>{const d=data[card.dataset.modal];modalContent.innerHTML=`<div class="work-tag">${d.tag}</div><h2>${d.title}</h2><p>${d.body}</p><div class="modal-metrics">${d.metrics.map(x=>`<div><strong>${x[0]}</strong><span>${x[1]}</span></div>`).join('')}</div>`;modal.classList.add('open');modal.setAttribute('aria-hidden','false')}));
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true')}
document.querySelector('.modal-close').addEventListener('click',closeModal);document.querySelector('.modal-backdrop').addEventListener('click',closeModal);document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
