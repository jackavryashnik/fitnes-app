import{a as f}from"./vendor-1b0a9daf.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();function m(){const t=document.querySelector(".wrapper"),e=document.querySelector(".burger-menu"),o=document.querySelector(".burger-menu-close");e.addEventListener("click",()=>{t.classList.add("is-open")}),o.addEventListener("click",()=>{t.classList.remove("is-open")})}m();f.defaults.baseURL="https://energyflow.b.goit.study/api";async function l(t,e={}){try{return(await f.get(`/${t}`,{params:e})).data}catch(o){console.error(o)}}const b=document.querySelector(".exercises-list"),v=document.querySelector(".buttons-filter-container"),L=document.querySelectorAll(".buttons-filter-container button"),a=document.querySelector(".pagination-exercises-box"),h=document.querySelector(".exercises-page-container");let u=innerWidth<768?8:12,p=1,c="Muscles";v.addEventListener("click",S);window.addEventListener("load",x);async function x(){try{const t=await l(`filters?filter=${c}`,{limit:u,page:p});g(t.totalPages),d(t.results)}catch(t){console.error(t)}}async function S(t){const e=t.target.dataset.filter;if(e){c=e,y(L,t.target);try{const o=await l(`filters?filter=${c}`,{limit:u,page:p});g(o.totalPages),d(o.results)}catch(o){console.error(o)}}}function d(t){const e=t.reduce((o,{name:s,filter:r,imgUrl:n})=>o+`
  <li data-filter="${r==="Body parts"?"bodypart":r.toLowerCase()}" data-name="${s}" class="exercises-list-card" style="background: linear-gradient(0deg, rgba(16, 16, 16, 0.70) 0%, rgba(16, 16, 16, 0.70) 100%), url(${n});
background-size: cover;
background-repeat: no-repeat;">
    <div class="exercise-card-desc">
      <h2 class="exercise-card-desc-name">${s}</h2>
      <p class="exercise-card-desc-filter">${r}</p>
    </div>
  </li>
  `,"");q(e)}function q(t){b.innerHTML=t}function y(t,e){t.forEach(o=>o.classList.remove("active")),e.classList.add("active")}function g(t){a.innerHTML="";for(let e=1;e<=t;e++){const o=document.createElement("button");o.textContent=e,e===1&&o.classList.add("active"),o.addEventListener("click",s=>{const r=a.querySelectorAll("button");y(r,s.target),w(e)}),a.appendChild(o)}}async function w(t){try{h.scrollIntoView({behavior:"smooth"});const e=await l(`filters?filter=${c}`,{limit:u,page:t});d(e.results)}catch(e){console.error(e)}}function k(){const t=document.querySelector(".foter-privacy-policy"),e=document.querySelector(".modal-overlay");t.addEventListener("click",()=>e.classList.add("is-open")),e.addEventListener("click",()=>e.classList.remove("is-open"))}k();
//# sourceMappingURL=privacyPolicy-830e019b.js.map
