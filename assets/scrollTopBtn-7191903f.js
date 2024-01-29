import{a as B,S as F}from"./vendor-cd480503.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();const X=window.location.pathname,le=X.lastIndexOf("/"),Z=X.substring(le),de=e=>{localStorage.setItem("theme-preference",e)},ue=()=>localStorage.getItem("theme-preference")||"light";let u=ue()==="dark";const V=document.querySelectorAll(".theme-toggle");V.forEach(e=>{e.checked=u,e.addEventListener("change",()=>{u=e.checked,V.forEach(t=>{t!==e&&(t.checked=u)}),document.body.setAttribute("theme",u?"dark":"light"),Z==="/page-2.html"&&document.querySelector(".logo").setAttribute("theme",u?"dark":"light"),de(u?"dark":"light")})});document.addEventListener("DOMContentLoaded",()=>{document.body.setAttribute("theme",u?"dark":"light"),Z==="/page-2.html"&&document.querySelector(".logo").setAttribute("theme",u?"dark":"light")});function fe(){const e=document.querySelector(".mobile-menu-wrapper"),t=document.querySelectorAll(".nav-link"),o=document.querySelector(".burger-menu"),r=document.querySelector(".burger-menu-close");o.addEventListener("click",()=>{e.classList.toggle("is-open")}),r.addEventListener("click",()=>{e.classList.toggle("is-open")}),t.forEach(n=>n.addEventListener("click",()=>{e.classList.remove("is-open")}))}fe();function me(){const e=document.querySelectorAll(".nav-link");window.addEventListener("load",()=>{const t=window.location.pathname;t.includes("index.html")||t=="/fitnes-app/"?(e[0].classList.add("active-link"),e[2].classList.add("active-link")):t.includes("page-2.html")&&(e[1].classList.add("active-link"),e[3].classList.add("active-link"))})}me();B.defaults.baseURL="https://energyflow.b.goit.study/api";async function f(e,t={}){try{return(await B.get(`/${e}`,{params:t})).data}catch(o){console.error(o)}}function H(e,t){e.querySelectorAll("button").forEach(o=>o.classList.remove("active")),t.classList.add("active")}function _(e=[]){e.forEach(t=>t.classList.add("is-hidden"))}function ee(e=[]){e.forEach(t=>t.classList.remove("is-hidden"))}const P="/fitnes-app/assets/sprite-31c6263f.svg";let O,b,p,Y,j,z,W,h,y,L,S,i,c,x,q;const te=window.location.pathname,he=te.lastIndexOf("/"),J=te.substring(he);(J==="/index.html"||J==="/")&&(O=document.querySelector(".buttons-filter-container"),b=document.querySelector(".cards-workout-list"),p=document.querySelector(".pagination-cards-workout-box"),Y=document.querySelector(".slash"),j=document.querySelector(".exercises-subtitle"),z=document.querySelector(".form-search-exercises"),h=document.querySelector(".exercises-list"),y=document.querySelector(".pagination-exercises-box"),L=document.querySelector(".exercises-page-container"),W=[Y,j,z,b],S=innerWidth<768?8:12,q=innerWidth<1440?8:9,i=1,c="Muscles",O.addEventListener("click",pe),h.addEventListener("click",we),window.addEventListener("load",ge));async function ge(){try{const e=await f(`filters?filter=${c}`,{limit:S,page:i});oe(e.totalPages),A(e.results)}catch(e){console.error(e)}}async function pe(e){const t=e.target.dataset.filter;if(t){c=t,i=1,H(O,e.target),_(W),ee([h]);try{const o=await f(`filters?filter=${c}`,{limit:S,page:i});b.innerHTML="",p.innerHTML="",A(o.results),oe(o.totalPages)}catch(o){console.error(o)}}}function A(e){const t=e.reduce((o,{name:r,filter:n,imgUrl:s})=>o+`
  <li data-filter="${n==="Body parts"?"bodypart":n.toLowerCase()}" data-name="${r}" class="exercises-list-card" style="background: linear-gradient(0deg, rgba(16, 16, 16, 0.70) 0%, rgba(16, 16, 16, 0.70) 100%), url(${s});
background-size: cover;
background-repeat: no-repeat;">
    <div class="exercise-card-desc">
      <h2 class="exercise-card-desc-name">${r}</h2>
      <p class="exercise-card-desc-filter">${n}</p>
    </div>
  </li>
  `,"");h.innerHTML=t}function oe(e){y.innerHTML="";for(let t=1;t<=e&&!(t>3);t++){const o=document.createElement("button");o.textContent=t,t===1&&o.classList.add("active"),o.addEventListener("click",r=>{H(y,r.target),ye(t)}),y.appendChild(o)}}async function ye(e){i=e;try{L.scrollIntoView({behavior:"smooth"});const t=await f(`filters?filter=${c}`,{limit:S,page:i});A(t.results)}catch(t){console.error(t)}}async function we(e){const t=e.target.dataset.filter,o=e.target.dataset.name;if(t){c=t,x=o,i=1,L.scrollIntoView({behavior:"smooth"}),_([h]),ee(W);try{const r=await f(`exercises?${c}=${x}`,{limit:q,page:i});h.innerHTML="",y.innerHTML="",N(r.results),ve(r.totalPages)}catch(r){console.log(r)}}}function N(e){const t=e.reduce((o,{rating:r,target:n,bodyPart:s,burnedCalories:l,name:w,_id:m})=>(o+=`<li class="card-workout-item" id=${m}>
                <div class="card-menu">
                    <div class="card-menu-box">
                
                        <div class="card-menu-workout">workout</div>
                        <div class="card-workout-rating">
                        <p class="card-workout-rating-text">${Math.round(r)}.0</p>
                        <svg
                            class="card-workout-rating-icon"
                            width="18"
                            height="18"
                        >
                            <use href="${P}#icon-Star-1"></use>
                        </svg>
                        </div>
                    </div>
                
                        <button class="btn-start-workout" type="button">Start
                            <svg class="card-workout-start-icon"
                                width="16"
                                height="16"
                                >
                                <use href="${P}#icon-arrow"></use>
                            </svg>
                        </button>
                </div>
                  
                <div class="card-workout-title">
                    <div class="card-workout-title-icon-box">
                        <svg
                        class="card-workout-title-icon"
                        width="24"
                        height="24">
                        <use href="${P}#icon-human-ex"></use>
                        </svg>
                    </div>
                    <p class="card-title-text">${w}</p>
                </div>
            
                <div class="card-workout-info">
                    <div class="card-workout-info-block">
                        <p class="card-workout-info-list">Burned calories:</p>
                        <p class="card-workout-info-data card-time">${l} / 3 min</p>
                    </div>
                    <div class="card-workout-info-block">
                        <p class="card-workout-info-list">Body part:</p>
                        <p class="card-workout-info-data">${s}</p>
                    </div>
                    <div class="card-workout-info-block">
                        <p class="card-workout-info-list">Target:</p>
                        <p class="card-workout-info-data card-target">${n}</p>
                    </div>
                </div>
            </li>`,o),"");b.innerHTML=t}function ve(e){p.innerHTML="";for(let t=1;t<=e&&!(t>3);t++){const o=document.createElement("button");o.textContent=t,t===1&&o.classList.add("active"),o.addEventListener("click",r=>{H(p,r.target),ke(t)}),p.appendChild(o)}}async function ke(e){i=e;try{L.scrollIntoView({behavior:"smooth"});const t=await f(`exercises?${c}=${x}`,{limit:q,page:i});N(t.results)}catch(t){console.error(t)}}const ne=window.location.pathname,be=ne.lastIndexOf("/"),G=ne.substring(be);if(G==="/index.html"||G==="/"){const e=document.querySelector(".footer-form");e.addEventListener("submit",function(t){t.preventDefault(),xe(),e.reset()})}async function xe(){const e=document.querySelector(".footer-form"),r={email:new FormData(e).get("email")};try{const s=(await B.post(e.action,r,{headers:{"Content-Type":"application/json"}})).data;s&&s.message&&qe()}catch(n){n.response&&n.response.status!==409&&Le(),n.response&&n.response.status===409&&Se()}}function Le(){F.fire({title:"Bad request",text:"Something went wrong.",icon:"error"})}function Se(){F.fire({title:"Warning!",text:"Subscription already exists",icon:"warning"})}function qe(){F.fire({title:"Good job!",text:"We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.",icon:"success"})}function Ee(){const e=document.querySelector(".foter-privacy-policy"),t=document.querySelector(".footer-terms-of-service"),o=document.querySelector(".modal-overlay"),r=document.querySelector(".privacy-modal-overlay");e.addEventListener("click",()=>r.classList.add("is-open")),t.addEventListener("click",()=>o.classList.add("is-open")),r.addEventListener("click",()=>r.classList.remove("is-open")),o.addEventListener("click",()=>o.classList.remove("is-open"))}const re=window.location.pathname,$e=re.lastIndexOf("/"),K=re.substring($e);(K==="/index.html"||K==="/")&&Ee();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".favorites-list"),t=document.querySelector(".favorites-pagination-block"),o=document.querySelector(".message-info"),r=document.querySelector(".favorites-contanier-block");function n(){window.location.pathname==="/page-2.html"&&window.innerWidth<=767&&s()?t.style.display="flex":t.style.display="none"}function s(){return e&&e.offsetParent!==null}function l(){const m=window.innerWidth<=767&&s()?6:e.children.length;if(window.innerWidth>767&&s()){for(let a=0;a<e.children.length;a++)e.children[a].style.display="block";return}Math.ceil(e.children.length/m);let E=1;function U(a){const $=(a-1)*m,I=$+m;for(let d=0;d<e.children.length;d++)e.children[d].style.display="none";for(let d=$;d<I&&d<e.children.length;d++)e.children[d].style.display="block"}U(E),t.addEventListener("click",function(a){a.target.tagName==="BUTTON"&&(t.querySelectorAll("button").forEach(I=>I.classList.remove("active-btn")),a.target.classList.add("active-btn"),E=parseInt(a.target.textContent),U(E))})}s()?o.style.display="none":o.style.display="block";function w(){window.matchMedia("(min-width: 768px)").matches?r.style.overflowY="scroll":r.style.overflowY="visible",window.matchMedia("(min-width: 1440px)").matches?r.style.maxHeight="480px":r.style.maxHeight="none"}w(),n(),window.addEventListener("resize",function(){n(),l(),w()}),s()&&e.children.length>=6&&l()});const k="quoteDay",g=JSON.parse(localStorage.getItem(k)),M=document.querySelector(".quote-container-text"),R=document.querySelector(".quote-container-author"),T=new Date,v={date:T.getDate(),month:T.getMonth(),year:T.getFullYear()};!localStorage.getItem(k)||v.date!=g.date.date&&v.month!=g.date.month&&v.year!=g.date.year?(localStorage.removeItem(k),f("quote").then(e=>{M.textContent=e.quote,R.textContent=e.author,localStorage.setItem(k,JSON.stringify({author:e.author,quote:e.quote,date:v}))}).catch(e=>{console.log(e),M.textContent="Sorry, there was an error on the server"})):(M.textContent=g.quote,R.textContent=g.author);const se=window.location.pathname,Ie=se.lastIndexOf("/"),Q=se.substring(Ie);let C,ie,ae,ce;(Q==="/index.html"||Q==="/")&&(C=document.querySelector(".form-search-exercises"),ie=document.querySelector(".cards-workout-list"),ae=document.querySelector(".pagination-cards-workout-box"),ce=C.elements.search,C.addEventListener("submit",Pe));async function Pe(e){ie.innerHTML="",ae.innerHTML="",e.preventDefault();try{const t=await f(`exercises?${c}=${x}`,{page:i,limit:q,keyword:ce.value});N(t.results)}catch(t){console.log(t)}}const D=document.querySelector(".scroll-top-btn");function Me(){window.scrollY>700?D.classList.remove("is-hidden"):window.scrollY<700&&D.classList.add("is-hidden")}window.onscroll=Me;D.onclick=()=>window.scrollTo(0,0);
//# sourceMappingURL=scrollTopBtn-7191903f.js.map
