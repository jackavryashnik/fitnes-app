import{a as f}from"./vendor-a2e8d7fa.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}})();f.defaults.baseURL="https://energyflow.b.goit.study/api";async function l(r,e={}){try{return(await f.get(`/filters?filter=${r}`,{params:e})).data}catch(o){console.error(o)}}const m=document.querySelector(".exercises-list"),b=document.querySelector(".buttons-filter-container"),h=document.querySelectorAll(".buttons-filter-container button"),c=document.querySelector(".pagination-exercises-box"),L=document.querySelector(".exercises-page-container");let u=innerWidth<768?8:12,g=1,a="Muscles";b.addEventListener("click",v);window.addEventListener("load",x);async function x(){try{const r=await l(a,{limit:u,page:g});y(r.totalPages),d(r.results)}catch(r){console.error(r)}}async function v(r){const e=r.target.dataset.filter;if(e){a=e,p(h,r.target);try{const o=await l(a,{limit:u,page:g});y(o.totalPages),d(o.results)}catch(o){console.error(o)}}}function d(r){const e=r.reduce((o,{name:s,filter:t,imgUrl:n})=>o+`
  <li data-filter="${t==="Body parts"?"bodypart":t.toLowerCase()}" data-name="${s}" class="exercises-list-card" style="background: linear-gradient(0deg, rgba(16, 16, 16, 0.70) 0%, rgba(16, 16, 16, 0.70) 100%), url(${n});
background-size: cover;
background-repeat: no-repeat;">
    <div class="exercise-card-desc">
      <h2 class="exercise-card-desc-name">${s}</h2>
      <p class="exercise-card-desc-filter">${t}</p>
    </div>
  </li>
  `,"");w(e)}function w(r){m.innerHTML=r}function p(r,e){r.forEach(o=>o.classList.remove("active")),e.classList.add("active")}function y(r){c.innerHTML="";for(let e=1;e<=r;e++){const o=document.createElement("button");o.textContent=e,e===1&&o.classList.add("active"),o.addEventListener("click",s=>{const t=c.querySelectorAll("button");p(t,s.target),P(e)}),c.appendChild(o)}}async function P(r){try{L.scrollIntoView({behavior:"smooth"});const e=await l(a,{limit:u,page:r});d(e.results)}catch(e){console.error(e)}}
//# sourceMappingURL=exercisesFilter-0b32d51f.js.map