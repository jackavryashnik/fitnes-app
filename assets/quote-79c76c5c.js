import{a as g,S as h}from"./vendor-cd480503.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();function P(){const e=document.querySelector(".mobile-menu-wrapper"),t=document.querySelectorAll(".nav-link"),n=document.querySelector(".burger-menu"),s=document.querySelector(".burger-menu-close");n.addEventListener("click",()=>{e.classList.toggle("is-open")}),s.addEventListener("click",()=>{e.classList.toggle("is-open")}),t.forEach(o=>o.addEventListener("click",()=>{e.classList.remove("is-open")}))}P();function D(){const e=document.querySelectorAll(".nav-link");window.addEventListener("load",()=>{const t=window.location.pathname;t.includes("index.html")||t=="/fitnes-app/"?(e[0].classList.add("active-link"),e[2].classList.add("active-link")):t.includes("page-2.html")&&(e[1].classList.add("active-link"),e[3].classList.add("active-link"))})}D();g.defaults.baseURL="https://energyflow.b.goit.study/api";async function u(e,t={}){try{return(await g.get(`/${e}`,{params:t})).data}catch(n){console.error(n)}}let S,x,l,q,f,v,i;if(window.location.pathname==="/index.html"){const e=document.querySelector(".buttons-filter-container");S=document.querySelector(".exercises-list"),x=document.querySelectorAll(".buttons-filter-container button"),l=document.querySelector(".pagination-exercises-box"),q=document.querySelector(".exercises-page-container"),f=innerWidth<768?8:12,v=1,i="Muscles",e.addEventListener("click",F),window.addEventListener("load",M)}async function M(){try{const e=await u(`filters?filter=${i}`,{limit:f,page:v});E(e.totalPages),L(e.results)}catch(e){console.error(e)}}async function F(e){const t=e.target.dataset.filter;if(t){i=t,k(x,e.target);try{const n=await u(`filters?filter=${i}`,{limit:f,page:v});E(n.totalPages),L(n.results)}catch(n){console.error(n)}}}function L(e){const t=e.reduce((n,{name:s,filter:o,imgUrl:r})=>n+`
  <li data-filter="${o==="Body parts"?"bodypart":o.toLowerCase()}" data-name="${s}" class="exercises-list-card" style="background: linear-gradient(0deg, rgba(16, 16, 16, 0.70) 0%, rgba(16, 16, 16, 0.70) 100%), url(${r});
background-size: cover;
background-repeat: no-repeat;">
    <div class="exercise-card-desc">
      <h2 class="exercise-card-desc-name">${s}</h2>
      <p class="exercise-card-desc-filter">${o}</p>
    </div>
  </li>
  `,"");O(t)}function O(e){S.innerHTML=e}function k(e,t){e.forEach(n=>n.classList.remove("active")),t.classList.add("active")}function E(e){l.innerHTML="";for(let t=1;t<=e;t++){const n=document.createElement("button");n.textContent=t,t===1&&n.classList.add("active"),n.addEventListener("click",s=>{const o=l.querySelectorAll("button");k(o,s.target),$(t)}),l.appendChild(n)}}async function $(e){try{q.scrollIntoView({behavior:"smooth"});const t=await u(`filters?filter=${i}`,{limit:f,page:e});L(t.results)}catch(t){console.error(t)}}if(window.location.pathname==="/index.html"){const e=document.querySelector(".footer-form");e.addEventListener("submit",function(t){t.preventDefault(),A(),e.reset()})}async function A(){const e=document.querySelector(".footer-form"),s={email:new FormData(e).get("email")};try{const r=(await g.post(e.action,s,{headers:{"Content-Type":"application/json"}})).data;r&&r.message&&T()}catch(o){o.response&&o.response.status!==409&&B(),o.response&&o.response.status===409&&N()}}function B(){h.fire({title:"Bad request",text:"Something went wrong.",icon:"error"})}function N(){h.fire({title:"Warning!",text:"Subscription already exists",icon:"warning"})}function T(){h.fire({title:"Good job!",text:"We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.",icon:"success"})}function j(){const e=document.querySelector(".foter-privacy-policy"),t=document.querySelector(".footer-terms-of-service"),n=document.querySelector(".modal-overlay"),s=document.querySelector(".privacy-modal-overlay");e.addEventListener("click",()=>s.classList.add("is-open")),t.addEventListener("click",()=>n.classList.add("is-open")),s.addEventListener("click",()=>s.classList.remove("is-open")),n.addEventListener("click",()=>n.classList.remove("is-open"))}window.location.pathname==="/index.html"&&j();const V=document.querySelector(".favorites-list"),C=document.querySelectorAll(".favorites-pagination-block button"),w=6;I(1);C.forEach(e=>{e.addEventListener("click",()=>{const t=parseInt(e.textContent);I(t)})});function I(e){const t=(e-1)*w,n=t+w;V.querySelectorAll(".favorites-list-item").forEach((o,r)=>{r>=t&&r<n?o.style.display="block":o.style.display="none"}),C.forEach(o=>{parseInt(o.textContent)===e?o.classList.add("active-btn"):o.classList.remove("active-btn")})}const d="quoteDay",a=JSON.parse(localStorage.getItem(d)),p=document.querySelector(".quote-container-text"),b=document.querySelector(".quote-container-author"),y=new Date,c={date:y.getDate(),month:y.getMonth(),year:y.getFullYear()};!localStorage.getItem(d)||c.date!=a.date.date&&c.month!=a.date.month&&c.year!=a.date.year?(localStorage.removeItem(d),u("quote").then(e=>{p.textContent=e.quote,b.textContent=e.author,localStorage.setItem(d,JSON.stringify({author:e.author,quote:e.quote,date:c}))}).catch(e=>{console.log(e),p.textContent="Sorry, there was an error on the server"})):(p.textContent=a.quote,b.textContent=a.author);
//# sourceMappingURL=quote-79c76c5c.js.map
