import{a as M,S as P}from"./vendor-cd480503.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();const z=window.location.pathname,ce=z.lastIndexOf("/"),G=z.substring(ce),ie=e=>{localStorage.setItem("theme-preference",e)},le=()=>localStorage.getItem("theme-preference")||"light";let i=le()==="dark";const A=document.querySelectorAll(".theme-toggle");A.forEach(e=>{e.checked=i,e.addEventListener("change",()=>{i=e.checked,A.forEach(t=>{t!==e&&(t.checked=i)}),document.body.setAttribute("theme",i?"dark":"light"),G==="/page-2.html"&&document.querySelector(".logo").setAttribute("theme",i?"dark":"light"),ie(i?"dark":"light")})});document.addEventListener("DOMContentLoaded",()=>{document.body.setAttribute("theme",i?"dark":"light"),G==="/page-2.html"&&document.querySelector(".logo").setAttribute("theme",i?"dark":"light")});function de(){const e=document.querySelector(".mobile-menu-wrapper"),t=document.querySelectorAll(".nav-link"),o=document.querySelector(".burger-menu"),n=document.querySelector(".burger-menu-close");o.addEventListener("click",()=>{e.classList.toggle("is-open")}),n.addEventListener("click",()=>{e.classList.toggle("is-open")}),t.forEach(r=>r.addEventListener("click",()=>{e.classList.remove("is-open")}))}de();function ue(){const e=document.querySelectorAll(".nav-link");window.addEventListener("load",()=>{const t=window.location.pathname;t.includes("index.html")||t=="/fitnes-app/"?(e[0].classList.add("active-link"),e[2].classList.add("active-link")):t.includes("page-2.html")&&(e[1].classList.add("active-link"),e[3].classList.add("active-link"))})}ue();M.defaults.baseURL="https://energyflow.b.goit.study/api";async function l(e,t={}){try{return(await M.get(`/${e}`,{params:t})).data}catch(o){console.error(o)}}function C(e,t){e.querySelectorAll("button").forEach(o=>o.classList.remove("active")),t.classList.add("active")}function K(e=[]){e.forEach(t=>t.classList.add("is-hidden"))}function R(e=[]){e.forEach(t=>t.classList.remove("is-hidden"))}const b="/fitnes-app/assets/sprite-31c6263f.svg";let E,y,f,F,B,H,T,d,h,w,k,a,c,v,x;const Q=window.location.pathname,me=Q.lastIndexOf("/"),W=Q.substring(me);(W==="/index.html"||W==="/")&&(E=document.querySelector(".buttons-filter-container"),y=document.querySelector(".cards-workout-list"),f=document.querySelector(".pagination-cards-workout-box"),F=document.querySelector(".slash"),B=document.querySelector(".exercises-subtitle"),H=document.querySelector(".form-search-exercises"),d=document.querySelector(".exercises-list"),h=document.querySelector(".pagination-exercises-box"),w=document.querySelector(".exercises-page-container"),T=[F,B,H,y],k=innerWidth<768?8:12,x=innerWidth<1440?8:9,a=1,c="Muscles",E.addEventListener("click",he),d.addEventListener("click",pe),window.addEventListener("load",fe));async function fe(){try{const e=await l(`filters?filter=${c}`,{limit:k,page:a});X(e.totalPages),O(e.results)}catch(e){console.error(e)}}async function he(e){const t=e.target.dataset.filter;if(t){c=t,a=1,C(E,e.target),K(T),R([d]);try{const o=await l(`filters?filter=${c}`,{limit:k,page:a});y.innerHTML="",f.innerHTML="",O(o.results),X(o.totalPages)}catch(o){console.error(o)}}}function O(e){const t=e.reduce((o,{name:n,filter:r,imgUrl:s})=>o+`
  <li data-filter="${r==="Body parts"?"bodypart":r.toLowerCase()}" data-name="${n}" class="exercises-list-card" style="background: linear-gradient(0deg, rgba(16, 16, 16, 0.70) 0%, rgba(16, 16, 16, 0.70) 100%), url(${s});
background-size: cover;
background-repeat: no-repeat;">
    <div class="exercise-card-desc">
      <h2 class="exercise-card-desc-name">${n}</h2>
      <p class="exercise-card-desc-filter">${r}</p>
    </div>
  </li>
  `,"");d.innerHTML=t}function X(e){h.innerHTML="";for(let t=1;t<=e&&!(t>3);t++){const o=document.createElement("button");o.textContent=t,t===1&&o.classList.add("active"),o.addEventListener("click",n=>{C(h,n.target),ge(t)}),h.appendChild(o)}}async function ge(e){a=e;try{w.scrollIntoView({behavior:"smooth"});const t=await l(`filters?filter=${c}`,{limit:k,page:a});O(t.results)}catch(t){console.error(t)}}async function pe(e){const t=e.target.dataset.filter,o=e.target.dataset.name;if(t){c=t,v=o,a=1,w.scrollIntoView({behavior:"smooth"}),K([d]),R(T);try{const n=await l(`exercises?${c}=${v}`,{limit:x,page:a});d.innerHTML="",h.innerHTML="",D(n.results),ye(n.totalPages)}catch(n){console.log(n)}}}function D(e){const t=e.reduce((o,{rating:n,target:r,bodyPart:s,burnedCalories:u,name:se,_id:ae})=>(o+=`<li class="card-workout-item" id=${ae}>
                <div class="card-menu">
                    <div class="card-menu-box">
                
                        <div class="card-menu-workout">workout</div>
                        <div class="card-workout-rating">
                        <p class="card-workout-rating-text">${Math.round(n)}.0</p>
                        <svg
                            class="card-workout-rating-icon"
                            width="18"
                            height="18"
                        >
                            <use href="${b}#icon-Star-1"></use>
                        </svg>
                        </div>
                    </div>
                
                        <button class="btn-start-workout" type="button">Start
                            <svg class="card-workout-start-icon"
                                width="16"
                                height="16"
                                >
                                <use href="${b}#icon-arrow"></use>
                            </svg>
                        </button>
                </div>
                  
                <div class="card-workout-title">
                    <div class="card-workout-title-icon-box">
                        <svg
                        class="card-workout-title-icon"
                        width="24"
                        height="24">
                        <use href="${b}#icon-human-ex"></use>
                        </svg>
                    </div>
                    <p class="card-title-text">${se}</p>
                </div>
            
                <div class="card-workout-info">
                    <div class="card-workout-info-block">
                        <p class="card-workout-info-list">Burned calories:</p>
                        <p class="card-workout-info-data card-time">${u} / 3 min</p>
                    </div>
                    <div class="card-workout-info-block">
                        <p class="card-workout-info-list">Body part:</p>
                        <p class="card-workout-info-data">${s}</p>
                    </div>
                    <div class="card-workout-info-block">
                        <p class="card-workout-info-list">Target:</p>
                        <p class="card-workout-info-data card-target">${r}</p>
                    </div>
                </div>
            </li>`,o),"");y.innerHTML=t}function ye(e){f.innerHTML="";for(let t=1;t<=e&&!(t>3);t++){const o=document.createElement("button");o.textContent=t,t===1&&o.classList.add("active"),o.addEventListener("click",n=>{C(f,n.target),ve(t)}),f.appendChild(o)}}async function ve(e){a=e;try{w.scrollIntoView({behavior:"smooth"});const t=await l(`exercises?${c}=${v}`,{limit:x,page:a});D(t.results)}catch(t){console.error(t)}}const Z=window.location.pathname,we=Z.lastIndexOf("/"),N=Z.substring(we);if(N==="/index.html"||N==="/"){const e=document.querySelector(".footer-form");e.addEventListener("submit",function(t){t.preventDefault(),ke(),e.reset()})}async function ke(){const e=document.querySelector(".footer-form"),n={email:new FormData(e).get("email")};try{const s=(await M.post(e.action,n,{headers:{"Content-Type":"application/json"}})).data;s&&s.message&&Le()}catch(r){r.response&&r.response.status!==409&&xe(),r.response&&r.response.status===409&&be()}}function xe(){P.fire({title:"Bad request",text:"Something went wrong.",icon:"error"})}function be(){P.fire({title:"Warning!",text:"Subscription already exists",icon:"warning"})}function Le(){P.fire({title:"Good job!",text:"We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.",icon:"success"})}function Se(){const e=document.querySelector(".foter-privacy-policy"),t=document.querySelector(".footer-terms-of-service"),o=document.querySelector(".modal-overlay"),n=document.querySelector(".privacy-modal-overlay");e.addEventListener("click",()=>n.classList.add("is-open")),t.addEventListener("click",()=>o.classList.add("is-open")),n.addEventListener("click",()=>n.classList.remove("is-open")),o.addEventListener("click",()=>o.classList.remove("is-open"))}const _=window.location.pathname,qe=_.lastIndexOf("/"),U=_.substring(qe);(U==="/index.html"||U==="/")&&Se();let ee,$;const V=6;window.location.pathname==="/page-2.html"&&(ee=document.querySelector(".favorites-list"),$=document.querySelectorAll(".favorites-pagination-block button"),Y(1),$.forEach(e=>{e.addEventListener("click",()=>{const t=parseInt(e.textContent);Y(t)})}));function Y(e){const t=(e-1)*V,o=t+V;ee.querySelectorAll(".favorites-list-item").forEach((r,s)=>{s>=t&&s<o?r.style.display="block":r.style.display="none"}),$.forEach(r=>{parseInt(r.textContent)===e?r.classList.add("active-btn"):r.classList.remove("active-btn")})}const p="quoteDay",m=JSON.parse(localStorage.getItem(p)),L=document.querySelector(".quote-container-text"),j=document.querySelector(".quote-container-author"),S=new Date,g={date:S.getDate(),month:S.getMonth(),year:S.getFullYear()};!localStorage.getItem(p)||g.date!=m.date.date&&g.month!=m.date.month&&g.year!=m.date.year?(localStorage.removeItem(p),l("quote").then(e=>{L.textContent=e.quote,j.textContent=e.author,localStorage.setItem(p,JSON.stringify({author:e.author,quote:e.quote,date:g}))}).catch(e=>{console.log(e),L.textContent="Sorry, there was an error on the server"})):(L.textContent=m.quote,j.textContent=m.author);const te=window.location.pathname,Ee=te.lastIndexOf("/"),J=te.substring(Ee);let q,oe,re,ne;(J==="/index.html"||J==="/")&&(q=document.querySelector(".form-search-exercises"),oe=document.querySelector(".cards-workout-list"),re=document.querySelector(".pagination-cards-workout-box"),ne=q.elements.search,q.addEventListener("submit",$e));async function $e(e){oe.innerHTML="",re.innerHTML="",e.preventDefault();try{const t=await l(`exercises?${c}=${v}`,{page:a,limit:x,keyword:ne.value});D(t.results)}catch(t){console.log(t)}}const I=document.querySelector(".scroll-top-btn");function Ie(){window.scrollY>700?I.classList.remove("is-hidden"):window.scrollY<700&&I.classList.add("is-hidden")}window.onscroll=Ie;I.onclick=()=>window.scrollTo(0,0);
//# sourceMappingURL=scrollTopBtn-2d399043.js.map
