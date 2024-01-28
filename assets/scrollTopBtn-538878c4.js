import{a as I,S as M}from"./vendor-cd480503.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();const J=window.location.pathname,ae=J.lastIndexOf("/"),z=J.substring(ae),ie=e=>{localStorage.setItem("theme-preference",e)},ce=()=>localStorage.getItem("theme-preference")||"light";let c=ce()==="dark";const D=document.querySelectorAll(".theme-toggle");D.forEach(e=>{e.checked=c,e.addEventListener("change",()=>{c=e.checked,D.forEach(t=>{t!==e&&(t.checked=c)}),document.body.setAttribute("theme",c?"dark":"light"),z==="/page-2.html"&&document.querySelector(".logo").setAttribute("theme",c?"dark":"light"),ie(c?"dark":"light")})});document.addEventListener("DOMContentLoaded",()=>{document.body.setAttribute("theme",c?"dark":"light"),z==="/page-2.html"&&document.querySelector(".logo").setAttribute("theme",c?"dark":"light")});function le(){const e=document.querySelector(".mobile-menu-wrapper"),t=document.querySelectorAll(".nav-link"),o=document.querySelector(".burger-menu"),n=document.querySelector(".burger-menu-close");o.addEventListener("click",()=>{e.classList.toggle("is-open")}),n.addEventListener("click",()=>{e.classList.toggle("is-open")}),t.forEach(r=>r.addEventListener("click",()=>{e.classList.remove("is-open")}))}le();function de(){const e=document.querySelectorAll(".nav-link");window.addEventListener("load",()=>{const t=window.location.pathname;t.includes("index.html")||t=="/fitnes-app/"?(e[0].classList.add("active-link"),e[2].classList.add("active-link")):t.includes("page-2.html")&&(e[1].classList.add("active-link"),e[3].classList.add("active-link"))})}de();I.defaults.baseURL="https://energyflow.b.goit.study/api";async function l(e,t={}){try{return(await I.get(`/${e}`,{params:t})).data}catch(o){console.error(o)}}function P(e,t){e.querySelectorAll("button").forEach(o=>o.classList.remove("active")),t.classList.add("active")}function G(e=[]){e.forEach(t=>t.classList.add("is-hidden"))}function K(e=[]){e.forEach(t=>t.classList.remove("is-hidden"))}let q,v,f,A,F,B,C,d,h,w,k,a,i,y,b;const R=window.location.pathname,ue=R.lastIndexOf("/"),H=R.substring(ue);(H==="/index.html"||H==="/")&&(q=document.querySelector(".buttons-filter-container"),v=document.querySelector(".cards-workout-list"),f=document.querySelector(".pagination-cards-workout-box"),A=document.querySelector(".slash"),F=document.querySelector(".exercises-subtitle"),B=document.querySelector(".form-search-exercises"),d=document.querySelector(".exercises-list"),h=document.querySelector(".pagination-exercises-box"),w=document.querySelector(".exercises-page-container"),C=[A,F,B,v],k=innerWidth<768?8:12,b=innerWidth<1440?8:9,a=1,i="Muscles",q.addEventListener("click",fe),d.addEventListener("click",ge),window.addEventListener("load",me));async function me(){try{const e=await l(`filters?filter=${i}`,{limit:k,page:a});Q(e.totalPages),T(e.results)}catch(e){console.error(e)}}async function fe(e){const t=e.target.dataset.filter;if(t){i=t,a=1,P(q,e.target),G(C),K([d]);try{const o=await l(`filters?filter=${i}`,{limit:k,page:a});v.innerHTML="",f.innerHTML="",T(o.results),Q(o.totalPages)}catch(o){console.error(o)}}}function T(e){const t=e.reduce((o,{name:n,filter:r,imgUrl:s})=>o+`
  <li data-filter="${r==="Body parts"?"bodypart":r.toLowerCase()}" data-name="${n}" class="exercises-list-card" style="background: linear-gradient(0deg, rgba(16, 16, 16, 0.70) 0%, rgba(16, 16, 16, 0.70) 100%), url(${s});
background-size: cover;
background-repeat: no-repeat;">
    <div class="exercise-card-desc">
      <h2 class="exercise-card-desc-name">${n}</h2>
      <p class="exercise-card-desc-filter">${r}</p>
    </div>
  </li>
  `,"");d.innerHTML=t}function Q(e){h.innerHTML="";for(let t=1;t<=e&&!(t>3);t++){const o=document.createElement("button");o.textContent=t,t===1&&o.classList.add("active"),o.addEventListener("click",n=>{P(h,n.target),he(t)}),h.appendChild(o)}}async function he(e){a=e;try{w.scrollIntoView({behavior:"smooth"});const t=await l(`filters?filter=${i}`,{limit:k,page:a});T(t.results)}catch(t){console.error(t)}}async function ge(e){const t=e.target.dataset.filter,o=e.target.dataset.name;if(t){i=t,y=o,a=1,w.scrollIntoView({behavior:"smooth"}),G([d]),K(C);try{const n=await l(`exercises?${i}=${y}`,{limit:b,page:a});d.innerHTML="",h.innerHTML="",O(n.results),pe(n.totalPages)}catch(n){console.log(n)}}}function O(e){const t=e.reduce((o,{rating:n,target:r,bodyPart:s,burnedCalories:u,name:ne,_id:se})=>(o+=`<li class="card-workout-item" id=${se}>
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
                        <use href="../images/sprite.svg#icon-human-quo"></use>
                        </svg>
                    </div>
                    <p class="card-title-text">${ne}</p>
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
            </li>`,o),"");v.innerHTML=t}function pe(e){f.innerHTML="";for(let t=1;t<=e&&!(t>3);t++){const o=document.createElement("button");o.textContent=t,t===1&&o.classList.add("active"),o.addEventListener("click",n=>{P(f,n.target),ve(t)}),f.appendChild(o)}}async function ve(e){a=e;try{w.scrollIntoView({behavior:"smooth"});const t=await l(`exercises?${i}=${y}`,{limit:b,page:a});O(t.results)}catch(t){console.error(t)}}const X=window.location.pathname,ye=X.lastIndexOf("/"),W=X.substring(ye);if(W==="/index.html"||W==="/"){const e=document.querySelector(".footer-form");e.addEventListener("submit",function(t){t.preventDefault(),we(),e.reset()})}async function we(){const e=document.querySelector(".footer-form"),n={email:new FormData(e).get("email")};try{const s=(await I.post(e.action,n,{headers:{"Content-Type":"application/json"}})).data;s&&s.message&&xe()}catch(r){r.response&&r.response.status!==409&&ke(),r.response&&r.response.status===409&&be()}}function ke(){M.fire({title:"Bad request",text:"Something went wrong.",icon:"error"})}function be(){M.fire({title:"Warning!",text:"Subscription already exists",icon:"warning"})}function xe(){M.fire({title:"Good job!",text:"We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.",icon:"success"})}function Le(){const e=document.querySelector(".foter-privacy-policy"),t=document.querySelector(".footer-terms-of-service"),o=document.querySelector(".modal-overlay"),n=document.querySelector(".privacy-modal-overlay");e.addEventListener("click",()=>n.classList.add("is-open")),t.addEventListener("click",()=>o.classList.add("is-open")),n.addEventListener("click",()=>n.classList.remove("is-open")),o.addEventListener("click",()=>o.classList.remove("is-open"))}const Z=window.location.pathname,Se=Z.lastIndexOf("/"),N=Z.substring(Se);(N==="/index.html"||N==="/")&&Le();let _,E;const U=6;window.location.pathname==="/page-2.html"&&(_=document.querySelector(".favorites-list"),E=document.querySelectorAll(".favorites-pagination-block button"),V(1),E.forEach(e=>{e.addEventListener("click",()=>{const t=parseInt(e.textContent);V(t)})}));function V(e){const t=(e-1)*U,o=t+U;_.querySelectorAll(".favorites-list-item").forEach((r,s)=>{s>=t&&s<o?r.style.display="block":r.style.display="none"}),E.forEach(r=>{parseInt(r.textContent)===e?r.classList.add("active-btn"):r.classList.remove("active-btn")})}const p="quoteDay",m=JSON.parse(localStorage.getItem(p)),x=document.querySelector(".quote-container-text"),Y=document.querySelector(".quote-container-author"),L=new Date,g={date:L.getDate(),month:L.getMonth(),year:L.getFullYear()};!localStorage.getItem(p)||g.date!=m.date.date&&g.month!=m.date.month&&g.year!=m.date.year?(localStorage.removeItem(p),l("quote").then(e=>{x.textContent=e.quote,Y.textContent=e.author,localStorage.setItem(p,JSON.stringify({author:e.author,quote:e.quote,date:g}))}).catch(e=>{console.log(e),x.textContent="Sorry, there was an error on the server"})):(x.textContent=m.quote,Y.textContent=m.author);const ee=window.location.pathname,qe=ee.lastIndexOf("/"),j=ee.substring(qe);let S,te,oe,re;(j==="/index.html"||j==="/")&&(S=document.querySelector(".form-search-exercises"),te=document.querySelector(".cards-workout-list"),oe=document.querySelector(".pagination-cards-workout-box"),re=S.elements.search,S.addEventListener("submit",Ee));async function Ee(e){te.innerHTML="",oe.innerHTML="",e.preventDefault();try{const t=await l(`exercises?${i}=${y}`,{page:a,limit:b,keyword:re.value});O(t.results)}catch(t){console.log(t)}}const $=document.querySelector(".scroll-top-btn");function $e(){window.scrollY>700?$.classList.remove("is-hidden"):window.scrollY<700&&$.classList.add("is-hidden")}window.onscroll=$e;$.onclick=()=>window.scrollTo(0,0);
//# sourceMappingURL=scrollTopBtn-538878c4.js.map
