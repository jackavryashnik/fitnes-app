import{a as $,S as I}from"./vendor-cd480503.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();function oe(){const e=document.querySelector(".mobile-menu-wrapper"),t=document.querySelectorAll(".nav-link"),o=document.querySelector(".burger-menu"),s=document.querySelector(".burger-menu-close");o.addEventListener("click",()=>{e.classList.toggle("is-open")}),s.addEventListener("click",()=>{e.classList.toggle("is-open")}),t.forEach(r=>r.addEventListener("click",()=>{e.classList.remove("is-open")}))}oe();function re(){const e=document.querySelectorAll(".nav-link");window.addEventListener("load",()=>{const t=window.location.pathname;t.includes("index.html")||t=="/fitnes-app/"?(e[0].classList.add("active-link"),e[2].classList.add("active-link")):t.includes("page-2.html")&&(e[1].classList.add("active-link"),e[3].classList.add("active-link"))})}re();$.defaults.baseURL="https://energyflow.b.goit.study/api";async function c(e,t={}){try{return(await $.get(`/${e}`,{params:t})).data}catch(o){console.error(o)}}function M(e,t){e.querySelectorAll("button").forEach(o=>o.classList.remove("active")),t.classList.add("active")}function Y(e=[]){e.forEach(t=>t.classList.add("is-hidden"))}function j(e=[]){e.forEach(t=>t.classList.remove("is-hidden"))}let S,h,f,O,D,F,P,l,m,y,w,a,i,v,k;const J=window.location.pathname,se=J.lastIndexOf("/"),B=J.substring(se);(B==="/index.html"||B==="/")&&(S=document.querySelector(".buttons-filter-container"),h=document.querySelector(".cards-workout-list"),f=document.querySelector(".pagination-cards-workout-box"),O=document.querySelector(".slash"),D=document.querySelector(".exercises-subtitle"),F=document.querySelector(".form-search-exercises"),l=document.querySelector(".exercises-list"),m=document.querySelector(".pagination-exercises-box"),y=document.querySelector(".exercises-page-container"),P=[O,D,F,h],w=innerWidth<768?8:12,k=innerWidth<1440?8:9,a=1,i="Muscles",S.addEventListener("click",ae),l.addEventListener("click",ce),window.addEventListener("load",ne));async function ne(){try{const e=await c(`filters?filter=${i}`,{limit:w,page:a});z(e.totalPages),C(e.results)}catch(e){console.error(e)}}async function ae(e){const t=e.target.dataset.filter;if(t){i=t,a=1,M(S,e.target),Y(P),j([l]);try{const o=await c(`filters?filter=${i}`,{limit:w,page:a});h.innerHTML="",f.innerHTML="",C(o.results),z(o.totalPages)}catch(o){console.error(o)}}}function C(e){const t=e.reduce((o,{name:s,filter:r,imgUrl:n})=>o+`
  <li data-filter="${r==="Body parts"?"bodypart":r.toLowerCase()}" data-name="${s}" class="exercises-list-card" style="background: linear-gradient(0deg, rgba(16, 16, 16, 0.70) 0%, rgba(16, 16, 16, 0.70) 100%), url(${n});
background-size: cover;
background-repeat: no-repeat;">
    <div class="exercise-card-desc">
      <h2 class="exercise-card-desc-name">${s}</h2>
      <p class="exercise-card-desc-filter">${r}</p>
    </div>
  </li>
  `,"");l.innerHTML=t}function z(e){m.innerHTML="";for(let t=1;t<=e&&!(t>3);t++){const o=document.createElement("button");o.textContent=t,t===1&&o.classList.add("active"),o.addEventListener("click",s=>{M(m,s.target),ie(t)}),m.appendChild(o)}}async function ie(e){a=e;try{y.scrollIntoView({behavior:"smooth"});const t=await c(`filters?filter=${i}`,{limit:w,page:a});C(t.results)}catch(t){console.error(t)}}async function ce(e){const t=e.target.dataset.filter,o=e.target.dataset.name;if(t){i=t,v=o,a=1,y.scrollIntoView({behavior:"smooth"}),Y([l]),j(P);try{const s=await c(`exercises?${i}=${v}`,{limit:k,page:a});l.innerHTML="",m.innerHTML="",T(s.results),le(s.totalPages)}catch(s){console.log(s)}}}function T(e){const t=e.reduce((o,{rating:s,target:r,bodyPart:n,burnedCalories:d,name:ee,_id:te})=>(o+=`<li class="card-workout-item" id=${te}>
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
                            <use href="./images/sprite.svg#icon-Star-1"></use>
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
                    <p class="card-title-text">${ee}</p>
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
            </li>`,o),"");h.innerHTML=t}function le(e){f.innerHTML="";for(let t=1;t<=e&&!(t>3);t++){const o=document.createElement("button");o.textContent=t,t===1&&o.classList.add("active"),o.addEventListener("click",s=>{M(f,s.target),de(t)}),f.appendChild(o)}}async function de(e){a=e;try{y.scrollIntoView({behavior:"smooth"});const t=await c(`exercises?${i}=${v}`,{limit:k,page:a});T(t.results)}catch(t){console.error(t)}}const G=window.location.pathname,ue=G.lastIndexOf("/"),H=G.substring(ue);if(H==="/index.html"||H==="/"){const e=document.querySelector(".footer-form");e.addEventListener("submit",function(t){t.preventDefault(),fe(),e.reset()})}async function fe(){const e=document.querySelector(".footer-form"),s={email:new FormData(e).get("email")};try{const n=(await $.post(e.action,s,{headers:{"Content-Type":"application/json"}})).data;n&&n.message&&pe()}catch(r){r.response&&r.response.status!==409&&me(),r.response&&r.response.status===409&&ge()}}function me(){I.fire({title:"Bad request",text:"Something went wrong.",icon:"error"})}function ge(){I.fire({title:"Warning!",text:"Subscription already exists",icon:"warning"})}function pe(){I.fire({title:"Good job!",text:"We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.",icon:"success"})}function he(){const e=document.querySelector(".foter-privacy-policy"),t=document.querySelector(".footer-terms-of-service"),o=document.querySelector(".modal-overlay"),s=document.querySelector(".privacy-modal-overlay");e.addEventListener("click",()=>s.classList.add("is-open")),t.addEventListener("click",()=>o.classList.add("is-open")),s.addEventListener("click",()=>s.classList.remove("is-open")),o.addEventListener("click",()=>o.classList.remove("is-open"))}const K=window.location.pathname,ve=K.lastIndexOf("/"),W=K.substring(ve);(W==="/index.html"||W==="/")&&he();let R,q;const A=6;window.location.pathname==="/page-2.html"&&(R=document.querySelector(".favorites-list"),q=document.querySelectorAll(".favorites-pagination-block button"),N(1),q.forEach(e=>{e.addEventListener("click",()=>{const t=parseInt(e.textContent);N(t)})}));function N(e){const t=(e-1)*A,o=t+A;R.querySelectorAll(".favorites-list-item").forEach((r,n)=>{n>=t&&n<o?r.style.display="block":r.style.display="none"}),q.forEach(r=>{parseInt(r.textContent)===e?r.classList.add("active-btn"):r.classList.remove("active-btn")})}const p="quoteDay",u=JSON.parse(localStorage.getItem(p)),x=document.querySelector(".quote-container-text"),U=document.querySelector(".quote-container-author"),L=new Date,g={date:L.getDate(),month:L.getMonth(),year:L.getFullYear()};!localStorage.getItem(p)||g.date!=u.date.date&&g.month!=u.date.month&&g.year!=u.date.year?(localStorage.removeItem(p),c("quote").then(e=>{x.textContent=e.quote,U.textContent=e.author,localStorage.setItem(p,JSON.stringify({author:e.author,quote:e.quote,date:g}))}).catch(e=>{console.log(e),x.textContent="Sorry, there was an error on the server"})):(x.textContent=u.quote,U.textContent=u.author);const Q=window.location.pathname,ye=Q.lastIndexOf("/"),V=Q.substring(ye);let b,X,Z,_;(V==="/index.html"||V==="/")&&(b=document.querySelector(".form-search-exercises"),X=document.querySelector(".cards-workout-list"),Z=document.querySelector(".pagination-cards-workout-box"),_=b.elements.search,b.addEventListener("submit",we));async function we(e){X.innerHTML="",Z.innerHTML="",e.preventDefault();try{const t=await c(`exercises?${i}=${v}`,{page:a,limit:k,keyword:_.value});T(t.results)}catch(t){console.log(t)}}const E=document.querySelector(".scroll-top-btn");function ke(){window.scrollY>700?E.classList.remove("is-hidden"):window.scrollY<700&&E.classList.add("is-hidden")}window.onscroll=ke;E.onclick=()=>window.scrollTo(0,0);
//# sourceMappingURL=scrollTopBtn-eeab5e90.js.map
