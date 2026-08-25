document.getElementById("year").textContent=new Date().getFullYear();
const nav=document.getElementById("main-nav"),menu=document.querySelector(".menu-button");
menu?.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open));});
nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const events=window.SITE_DATA?.events||[],list=document.getElementById("event-list");
list.innerHTML=events.length?events.map(e=>`<article class="event-card"><div class="event-date"><span>${e.dateTop}</span><strong>${e.dateBottom}</strong></div><div><h3>${e.title}</h3><p>${e.details}</p></div><span class="event-tag">${e.tag}</span></article>`).join(""):"<p>New events will be announced soon.</p>";
if(events[0])document.getElementById("quick-event").textContent=events[0].title;
const sponsors=window.SITE_DATA?.sponsors||[];
document.getElementById("sponsor-list").innerHTML=sponsors.map(s=>`<div class="sponsor-chip">${s}</div>`).join("");
