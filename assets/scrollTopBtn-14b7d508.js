import{a as q,S as E}from"./vendor-cd480503.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();function _(){const e=document.querySelector(".mobile-menu-wrapper"),t=document.querySelectorAll(".nav-link"),o=document.querySelector(".burger-menu"),s=document.querySelector(".burger-menu-close");o.addEventListener("click",()=>{e.classList.toggle("is-open")}),s.addEventListener("click",()=>{e.classList.toggle("is-open")}),t.forEach(r=>r.addEventListener("click",()=>{e.classList.remove("is-open")}))}_();function ee(){const e=document.querySelectorAll(".nav-link");window.addEventListener("load",()=>{const t=window.location.pathname;t.includes("index.html")||t=="/fitnes-app/"?(e[0].classList.add("active-link"),e[2].classList.add("active-link")):t.includes("page-2.html")&&(e[1].classList.add("active-link"),e[3].classList.add("active-link"))})}ee();q.defaults.baseURL="https://energyflow.b.goit.study/api";async function c(e,t={}){try{return(await q.get(`/${e}`,{params:t})).data}catch(o){console.error(o)}}function $(e,t){e.querySelectorAll("button").forEach(o=>o.classList.remove("active")),t.classList.add("active")}function te(e=[]){e.forEach(t=>t.classList.add("is-hidden"))}function oe(e=[]){e.forEach(t=>t.classList.remove("is-hidden"))}let L,I,f,T,O,D,M,h,m,y,l,a,i,v;const V=window.location.pathname,re=V.lastIndexOf("/"),F=V.substring(re);(F==="/index.html"||F==="/")&&(L=document.querySelector(".buttons-filter-container"),I=document.querySelector(".cards-workout-list"),f=document.querySelector(".pagination-cards-workout-box"),T=document.querySelector(".slash"),O=document.querySelector(".exercises-subtitle"),D=document.querySelector(".form-search-exercises"),h=document.querySelector(".exercises-list"),m=document.querySelector(".pagination-exercises-box"),y=document.querySelector(".exercises-page-container"),M=[T,O,D],l=innerWidth<768?8:12,a=1,i="Muscles",L.addEventListener("click",ne),h.addEventListener("click",ie),window.addEventListener("load",se));async function se(){try{const e=await c(`filters?filter=${i}`,{limit:l,page:a});Y(e.totalPages),P(e.results)}catch(e){console.error(e)}}async function ne(e){const t=e.target.dataset.filter;if(t){i=t,a=1,$(L,e.target),te(M);try{const o=await c(`filters?filter=${i}`,{limit:l,page:a});I.innerHTML="",f.innerHTML="",P(o.results),Y(o.totalPages)}catch(o){console.error(o)}}}function P(e){const t=e.reduce((o,{name:s,filter:r,imgUrl:n})=>o+`
  <li data-filter="${r==="Body parts"?"bodypart":r.toLowerCase()}" data-name="${s}" class="exercises-list-card" style="background: linear-gradient(0deg, rgba(16, 16, 16, 0.70) 0%, rgba(16, 16, 16, 0.70) 100%), url(${n});
background-size: cover;
background-repeat: no-repeat;">
    <div class="exercise-card-desc">
      <h2 class="exercise-card-desc-name">${s}</h2>
      <p class="exercise-card-desc-filter">${r}</p>
    </div>
  </li>
  `,"");h.innerHTML=t}function Y(e){m.innerHTML="";for(let t=1;t<=e;t++){const o=document.createElement("button");o.textContent=t,t===1&&o.classList.add("active"),o.addEventListener("click",s=>{$(m,s.target),ae(t)}),m.appendChild(o)}}async function ae(e){a=e;try{y.scrollIntoView({behavior:"smooth"});const t=await c(`filters?filter=${i}`,{limit:l,page:a});P(t.results)}catch(t){console.error(t)}}async function ie(e){const t=e.target.dataset.filter,o=e.target.dataset.name;if(t){i=t,v=o,a=1,y.scrollIntoView({behavior:"smooth"}),oe(M);try{const s=await c(`exercises?${i}=${v}`,{limit:l,page:a});h.innerHTML="",m.innerHTML="",C(s.results),ce(s.totalPages)}catch(s){console.log(s)}}}function C(e){const t=e.reduce((o,{rating:s,target:r,bodyPart:n,burnedCalories:d,name:X,_id:Z})=>(o+=`<li class="card-workout-item" id=${Z}>
                <div class="card-menu">
                    <div class="card-menu-box">
                
                        <div class="card-menu-workout">workout</div>
                        <div class="card-workout-rating">
                        <p class="card-workout-rating-text">${Math.round(s)}.0</p>
                        <svg
                            class="card-workout-rating-icon"
                            width="18"
                            height="18"
                        >
                            <use href="../images/sprite.svg#icon-Star-1"></use>
                        </svg>
                        </div>
                    </div>
                
                        <button class="btn-start-workout" type="button">Start
                            <svg class="card-workout-start-icon"
                                width="16"
                                height="16"
                                >
                                <use href="../images/sprite.svg#icon-arrow"></use>
                            </svg>
                        </button>
                </div>
                  
                <div class="card-workout-title">
                    <div class="card-workout-title-icon-box">
                        <svg
                        class="card-workout-title-icon"
                        width="24"
                        height="24">
                        <use href="../images/sprite.svg#icon-human"></use>
                        </svg>
                    </div>
                    <p class="card-title-text">${X}</p>
                </div>
            
                <div class="card-workout-info">
                    <div class="card-workout-info-block">
                        <p class="card-workout-info-list">Burned calories:</p>
                        <p class="card-workout-info-data card-time">${d} / 3 min</p>
                    </div>
                    <div class="card-workout-info-block">
                        <p class="card-workout-info-list">Body part:</p>
                        <p class="card-workout-info-data">${n}</p>
                    </div>
                    <div class="card-workout-info-block">
                        <p class="card-workout-info-list">Target:</p>
                        <p class="card-workout-info-data card-target">${r}</p>
                    </div>
                </div>
            </li>`,o),"");I.innerHTML=t}function ce(e){f.innerHTML="";for(let t=1;t<=e&&!(t>3);t++){const o=document.createElement("button");o.textContent=t,t===1&&o.classList.add("active"),o.addEventListener("click",s=>{$(f,s.target),le(t)}),f.appendChild(o)}}async function le(e){a=e;try{y.scrollIntoView({behavior:"smooth"});const t=await c(`exercises?${i}=${v}`,{limit:l,page:a});C(t.results)}catch(t){console.error(t)}}const j=window.location.pathname,de=j.lastIndexOf("/"),B=j.substring(de);if(B==="/index.html"||B==="/"){const e=document.querySelector(".footer-form");e.addEventListener("submit",function(t){t.preventDefault(),ue(),e.reset()})}async function ue(){const e=document.querySelector(".footer-form"),s={email:new FormData(e).get("email")};try{const n=(await q.post(e.action,s,{headers:{"Content-Type":"application/json"}})).data;n&&n.message&&ge()}catch(r){r.response&&r.response.status!==409&&fe(),r.response&&r.response.status===409&&me()}}function fe(){E.fire({title:"Bad request",text:"Something went wrong.",icon:"error"})}function me(){E.fire({title:"Warning!",text:"Subscription already exists",icon:"warning"})}function ge(){E.fire({title:"Good job!",text:"We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.",icon:"success"})}function pe(){const e=document.querySelector(".foter-privacy-policy"),t=document.querySelector(".footer-terms-of-service"),o=document.querySelector(".modal-overlay"),s=document.querySelector(".privacy-modal-overlay");e.addEventListener("click",()=>s.classList.add("is-open")),t.addEventListener("click",()=>o.classList.add("is-open")),s.addEventListener("click",()=>s.classList.remove("is-open")),o.addEventListener("click",()=>o.classList.remove("is-open"))}const J=window.location.pathname,he=J.lastIndexOf("/"),H=J.substring(he);(H==="/index.html"||H==="/")&&pe();let z,b;const W=6;window.location.pathname==="/page-2.html"&&(z=document.querySelector(".favorites-list"),b=document.querySelectorAll(".favorites-pagination-block button"),A(1),b.forEach(e=>{e.addEventListener("click",()=>{const t=parseInt(e.textContent);A(t)})}));function A(e){const t=(e-1)*W,o=t+W;z.querySelectorAll(".favorites-list-item").forEach((r,n)=>{n>=t&&n<o?r.style.display="block":r.style.display="none"}),b.forEach(r=>{parseInt(r.textContent)===e?r.classList.add("active-btn"):r.classList.remove("active-btn")})}const p="quoteDay",u=JSON.parse(localStorage.getItem(p)),w=document.querySelector(".quote-container-text"),N=document.querySelector(".quote-container-author"),k=new Date,g={date:k.getDate(),month:k.getMonth(),year:k.getFullYear()};!localStorage.getItem(p)||g.date!=u.date.date&&g.month!=u.date.month&&g.year!=u.date.year?(localStorage.removeItem(p),c("quote").then(e=>{w.textContent=e.quote,N.textContent=e.author,localStorage.setItem(p,JSON.stringify({author:e.author,quote:e.quote,date:g}))}).catch(e=>{console.log(e),w.textContent="Sorry, there was an error on the server"})):(w.textContent=u.quote,N.textContent=u.author);const G=window.location.pathname,ve=G.lastIndexOf("/"),U=G.substring(ve);let x,K,R,Q;(U==="/index.html"||U==="/")&&(x=document.querySelector(".form-search-exercises"),K=document.querySelector(".cards-workout-list"),R=document.querySelector(".pagination-cards-workout-box"),Q=x.elements.search,x.addEventListener("submit",ye));async function ye(e){K.innerHTML="",R.innerHTML="",e.preventDefault();try{const t=await c(`exercises?${i}=${v}`,{page:a,limit:l,keyword:Q.value});C(t.results)}catch(t){console.log(t)}}const S=document.querySelector(".scroll-top-btn");function we(){window.scrollY>700?S.classList.remove("is-hidden"):window.scrollY<700&&S.classList.add("is-hidden")}window.onscroll=we;S.onclick=()=>window.scrollTo(0,0);
//# sourceMappingURL=scrollTopBtn-14b7d508.js.map
