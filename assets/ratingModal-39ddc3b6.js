import{a as Y,S as P}from"./vendor-9a5feb6b.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();const ne=window.location.pathname,me=ne.lastIndexOf("/"),re=ne.substring(me),he=e=>{localStorage.setItem("theme-preference",e)},ge=()=>localStorage.getItem("theme-preference")||"light";let u=ge()==="dark";const K=document.querySelectorAll(".theme-toggle");K.forEach(e=>{e.checked=u,e.addEventListener("change",()=>{u=e.checked,K.forEach(t=>{t!==e&&(t.checked=u)}),document.body.setAttribute("theme",u?"dark":"light"),re==="/page-2.html"&&document.querySelector(".logo").setAttribute("theme",u?"dark":"light"),he(u?"dark":"light")})});document.addEventListener("DOMContentLoaded",()=>{document.body.setAttribute("theme",u?"dark":"light"),re==="/page-2.html"&&document.querySelector(".logo").setAttribute("theme",u?"dark":"light")});function pe(){const e=document.querySelector(".mobile-menu-wrapper"),t=document.querySelectorAll(".nav-link"),o=document.querySelector(".burger-menu"),r=document.querySelector(".burger-menu-close");o.addEventListener("click",()=>{e.classList.toggle("is-open")}),r.addEventListener("click",()=>{e.classList.toggle("is-open")}),t.forEach(n=>n.addEventListener("click",()=>{e.classList.remove("is-open")}))}pe();function ye(){const e=document.querySelectorAll(".nav-link");window.addEventListener("load",()=>{const t=window.location.pathname;t.includes("index.html")||t=="/fitnes-app/"?(e[0].classList.add("active-link"),e[2].classList.add("active-link")):t.includes("page-2.html")&&(e[1].classList.add("active-link"),e[3].classList.add("active-link"))})}ye();Y.defaults.baseURL="https://energyflow.b.goit.study/api";async function m(e,t={}){try{return(await Y.get(`/${e}`,{params:t})).data}catch(o){console.error(o)}}function j(e,t){e.querySelectorAll("button").forEach(o=>o.classList.remove("active")),t.classList.add("active")}function q(e=[]){e.forEach(t=>t.classList.add("is-hidden"))}function $(e=[]){e.forEach(t=>t.classList.remove("is-hidden"))}const se=window.location.pathname,ve=se.lastIndexOf("/"),_=se.substring(ve);let L,S,ae,I,ie;(_==="/index.html"||_==="/")&&(L=document.querySelector(".form-search-exercises"),S=document.querySelector(".cards-workout-list"),ae=document.querySelector(".pagination-cards-workout-box"),I=document.querySelector(".search-info-message"),ie=L.elements.search,L.addEventListener("submit",we));async function we(e){e.preventDefault(),q([I]),$([S]),S.innerHTML="",ae.innerHTML="";try{const t=await m(`exercises?${c}=${w}`,{page:a,limit:B,keyword:ie.value});if(!t.results.length){q([S]),$([I]);return}R(t.results)}catch{g()}finally{L.reset()}}const A="/fitnes-app/assets/sprite-31c6263f.svg";let N,M,y,Q,U,X,z,h,v,C,T,a,c,w,B;const ce=window.location.pathname,ke=ce.lastIndexOf("/"),Z=ce.substring(ke);(Z==="/index.html"||Z==="/")&&(N=document.querySelector(".buttons-filter-container"),M=document.querySelector(".cards-workout-list"),y=document.querySelector(".pagination-cards-workout-box"),Q=document.querySelector(".slash"),U=document.querySelector(".exercises-subtitle"),X=document.querySelector(".form-search-exercises"),h=document.querySelector(".exercises-list"),v=document.querySelector(".pagination-exercises-box"),C=document.querySelector(".exercises-page-container"),z=[Q,U,X,M],T=innerWidth<768?8:12,B=innerWidth<1440?8:9,a=1,c="Muscles",N.addEventListener("click",xe),h.addEventListener("click",Se),window.addEventListener("load",be));async function be(){try{const e=await m(`filters?filter=${c}`,{limit:T,page:a});le(e.totalPages),J(e.results)}catch{g()}}async function xe(e){const t=e.target.dataset.filter;if(t){c=t,a=1,j(N,e.target),q([...z,I]),$([h]);try{const o=await m(`filters?filter=${c}`,{limit:T,page:a});M.innerHTML="",y.innerHTML="",J(o.results),le(o.totalPages)}catch{g()}}}function J(e){const t=e.reduce((o,{name:r,filter:n,imgUrl:s})=>o+`
  <li data-filter="${n==="Body parts"?"bodypart":n.toLowerCase()}" data-name="${r}" class="exercises-list-card" style="background: linear-gradient(0deg, rgba(16, 16, 16, 0.70) 0%, rgba(16, 16, 16, 0.70) 100%), url(${s});
background-size: cover;
background-repeat: no-repeat;">
    <div class="exercise-card-desc">
      <h2 class="exercise-card-desc-name">${r}</h2>
      <p class="exercise-card-desc-filter">${n}</p>
    </div>
  </li>
  `,"");h.innerHTML=t}function le(e){v.innerHTML="";for(let t=1;t<=e&&!(t>3);t++){const o=document.createElement("button");o.textContent=t,t===1&&o.classList.add("active"),o.addEventListener("click",r=>{j(v,r.target),Le(t)}),v.appendChild(o)}}async function Le(e){a=e;try{C.scrollIntoView({behavior:"smooth"});const t=await m(`filters?filter=${c}`,{limit:T,page:a});J(t.results)}catch{g()}}async function Se(e){const t=e.target.dataset.filter,o=e.target.dataset.name;if(t){c=t,w=o,a=1,C.scrollIntoView({behavior:"smooth"}),q([h]),U.textContent=w,$(z);try{const r=await m(`exercises?${c}=${w}`,{limit:B,page:a});h.innerHTML="",v.innerHTML="",R(r.results),Ee(r.totalPages)}catch{g()}}}function R(e){const t=e.reduce((o,{rating:r,target:n,bodyPart:s,burnedCalories:l,name:k,_id:f})=>(o+=`<li class="card-workout-item" data-id=${f}>
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
                            <use href="${A}#icon-Star-1"></use>
                        </svg>
                        </div>
                    </div>
                
                        <button data-id=${f} class="btn-start-workout" type="button">Start
                            <svg class="card-workout-start-icon"
                                width="16"
                                height="16"
                                >
                                <use href="${A}#icon-arrow"></use>
                            </svg>
                        </button>
                </div>
                  
                <div class="card-workout-title">
                    <div class="card-workout-title-icon-box">
                        <svg
                        class="card-workout-title-icon"
                        width="24"
                        height="24">
                        <use href="${A}#icon-human-ex"></use>
                        </svg>
                    </div>
                    <p class="card-title-text">${k}</p>
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
            </li>`,o),"");M.innerHTML=t}function Ee(e){y.innerHTML="";for(let t=1;t<=e&&!(t>3);t++){const o=document.createElement("button");o.textContent=t,t===1&&o.classList.add("active"),o.addEventListener("click",r=>{j(y,r.target),qe(t)}),y.appendChild(o)}}async function qe(e){a=e;try{C.scrollIntoView({behavior:"smooth"});const t=await m(`exercises?${c}=${w}`,{limit:B,page:a});R(t.results)}catch{g()}}function g(){P.fire({text:"Oops, it seems something went wrong.",icon:"error"})}const de=window.location.pathname,$e=de.lastIndexOf("/"),ee=de.substring($e);if(ee==="/index.html"||ee==="/"){const e=document.querySelector(".footer-form");e.addEventListener("submit",function(t){t.preventDefault(),Ie(),e.reset()})}async function Ie(){const e=document.querySelector(".footer-form"),r={email:new FormData(e).get("email")};try{const s=(await Y.post(e.action,r,{headers:{"Content-Type":"application/json"}})).data;s&&s.message&&Ce()}catch(n){n.response&&n.response.status!==409&&Me(),n.response&&n.response.status===409&&Pe()}}function Me(){P.fire({title:"Bad request",text:"Something went wrong.",icon:"error"})}function Pe(){P.fire({title:"Warning!",text:"Subscription already exists",icon:"warning"})}function Ce(){P.fire({title:"Good job!",text:"We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.",icon:"success"})}function Te(){const e=document.querySelector(".foter-privacy-policy"),t=document.querySelector(".footer-terms-of-service"),o=document.querySelector(".modal-overlay"),r=document.querySelector(".privacy-modal-overlay");e.addEventListener("click",()=>r.classList.add("is-open")),t.addEventListener("click",()=>o.classList.add("is-open")),r.addEventListener("click",()=>r.classList.remove("is-open")),o.addEventListener("click",()=>o.classList.remove("is-open"))}const ue=window.location.pathname,Be=ue.lastIndexOf("/"),te=ue.substring(Be);(te==="/index.html"||te==="/")&&Te();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".favorites-list"),t=document.querySelector(".favorites-pagination-block"),o=document.querySelector(".message-info"),r=document.querySelector(".favorites-contanier-block");function n(){window.location.pathname==="/page-2.html"&&window.innerWidth<=767&&s()?t.style.display="flex":t.style.display="none"}function s(){return e&&e.offsetParent!==null}function l(){const f=window.innerWidth<=767&&s()?6:e.children.length;if(window.innerWidth>767&&s()){for(let i=0;i<e.children.length;i++)e.children[i].style.display="block";return}Math.ceil(e.children.length/f);let O=1;function G(i){const D=(i-1)*f,F=D+f;for(let d=0;d<e.children.length;d++)e.children[d].style.display="none";for(let d=D;d<F&&d<e.children.length;d++)e.children[d].style.display="block"}G(O),t.addEventListener("click",function(i){i.target.tagName==="BUTTON"&&(t.querySelectorAll("button").forEach(F=>F.classList.remove("active-btn")),i.target.classList.add("active-btn"),O=parseInt(i.target.textContent),G(O))})}s()?o.style.display="none":o.style.display="block";function k(){window.matchMedia("(min-width: 768px)").matches?r.style.overflowY="scroll":r.style.overflowY="visible",window.matchMedia("(min-width: 1440px)").matches?r.style.maxHeight="480px":r.style.maxHeight="none"}k(),n(),window.addEventListener("resize",function(){n(),l(),k()}),s()&&e.children.length>=6&&l()});const E="quoteDay",p=JSON.parse(localStorage.getItem(E)),H=document.querySelector(".quote-container-text"),oe=document.querySelector(".quote-container-author"),W=new Date,b={date:W.getDate(),month:W.getMonth(),year:W.getFullYear()};!localStorage.getItem(E)||b.date!=p.date.date||b.month!=p.date.month||b.year!=p.date.year?(localStorage.removeItem(E),m("quote").then(e=>{H.textContent=e.quote,oe.textContent=e.author,localStorage.setItem(E,JSON.stringify({author:e.author,quote:e.quote,date:b}))}).catch(e=>{console.log(e),H.textContent="Sorry, there was an error on the server"})):(H.textContent=p.quote,oe.textContent=p.author);const V=document.querySelector(".scroll-top-btn");function Oe(){window.scrollY>700?V.classList.remove("is-hidden"):window.scrollY<700&&V.classList.add("is-hidden")}window.onscroll=Oe;V.onclick=()=>window.scrollTo(0,0);const De=document.getElementById("rating-contact-modal"),x=document.querySelectorAll(".rating-button"),Fe=document.getElementById("rating-value"),fe=()=>{De.classList.toggle("active")};document.getElementById("contact_us").addEventListener("click",fe);document.getElementById("close_modal").addEventListener("click",fe);x.forEach((e,t)=>{e.addEventListener("change",function(){Fe.textContent=e.value,e.classList.add("active");for(let o=0;o<t;o++)x[o].classList.add("active");for(let o=t+1;o<x.length;o++)x[o].classList.remove("active")})});
//# sourceMappingURL=ratingModal-39ddc3b6.js.map
