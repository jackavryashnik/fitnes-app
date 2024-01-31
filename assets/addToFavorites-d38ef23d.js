import{a as A,S as w}from"./vendor-9a5feb6b.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const ve=window.location.pathname,Ie=ve.lastIndexOf("/"),pe=ve.substring(Ie),Me=e=>{localStorage.setItem("theme-preference",e)},Pe=()=>localStorage.getItem("theme-preference")||"light";let p=Pe()==="dark";const ie=document.querySelectorAll(".theme-toggle");ie.forEach(e=>{e.checked=p,e.addEventListener("change",()=>{p=e.checked,ie.forEach(t=>{t!==e&&(t.checked=p)}),document.body.setAttribute("theme",p?"dark":"light"),pe==="/page-2.html"&&document.querySelector(".logo").setAttribute("theme",p?"dark":"light"),Me(p?"dark":"light")})});document.addEventListener("DOMContentLoaded",()=>{document.body.setAttribute("theme",p?"dark":"light"),pe==="/page-2.html"&&document.querySelector(".logo").setAttribute("theme",p?"dark":"light")});function Oe(){const e=document.querySelector(".mobile-menu-wrapper"),t=document.querySelectorAll(".nav-link"),o=document.querySelector(".burger-menu"),r=document.querySelector(".burger-menu-close");o.addEventListener("click",()=>{e.classList.toggle("is-open")}),r.addEventListener("click",()=>{e.classList.toggle("is-open")}),t.forEach(s=>s.addEventListener("click",()=>{e.classList.remove("is-open")}))}Oe();function Be(){const e=document.querySelectorAll(".nav-link");window.addEventListener("load",()=>{const t=window.location.pathname;t.includes("index.html")||t=="/fitnes-app/"?(e[0].classList.add("active-link"),e[2].classList.add("active-link")):t.includes("page-2.html")&&(e[1].classList.add("active-link"),e[3].classList.add("active-link"))})}Be();A.defaults.baseURL="https://energyflow.b.goit.study/api";async function y(e,t={}){try{return(await A.get(`/${e}`,{params:t})).data}catch(o){console.error(o)}}async function Te(e,t={}){try{return(await A.patch(`/${e}`,{params:t})).data}catch(o){console.error(o)}}function K(e,t){e.querySelectorAll("button").forEach(o=>o.classList.remove("active")),t.classList.add("active")}function O(e=[]){e.forEach(t=>t.classList.add("is-hidden"))}function B(e=[]){e.forEach(t=>t.classList.remove("is-hidden"))}const ye=window.location.pathname,De=ye.lastIndexOf("/"),ce=ye.substring(De);let I,M,xe,T,we;(ce==="/index.html"||ce==="/")&&(I=document.querySelector(".form-search-exercises"),M=document.querySelector(".cards-workout-list"),xe=document.querySelector(".pagination-cards-workout-box"),T=document.querySelector(".search-info-message"),we=I.elements.search,I.addEventListener("submit",Ae));async function Ae(e){e.preventDefault(),O([T]),B([M]),M.innerHTML="",xe.innerHTML="";try{const t=await y(`exercises?${v}=${E}`,{page:g,limit:H,keyword:we.value});if(!t.results.length){O([M]),B([T]);return}X(t.results)}catch{S()}finally{I.reset()}}const W="/fitnes-app/assets/sprite-31c6263f.svg";let Y,D,q,le,j,de,G,b,$,F,N,g,v,E,H;const be=window.location.pathname,Fe=be.lastIndexOf("/"),ue=be.substring(Fe);(ue==="/index.html"||ue==="/")&&(Y=document.querySelector(".buttons-filter-container"),D=document.querySelector(".cards-workout-list"),q=document.querySelector(".pagination-cards-workout-box"),le=document.querySelector(".slash"),j=document.querySelector(".exercises-subtitle"),de=document.querySelector(".form-search-exercises"),b=document.querySelector(".exercises-list"),$=document.querySelector(".pagination-exercises-box"),F=document.querySelector(".exercises-page-container"),G=[le,j,de,D],N=innerWidth<768?8:12,H=innerWidth<1440?8:9,g=1,v="Muscles",Y.addEventListener("click",He),b.addEventListener("click",We),window.addEventListener("load",Ne));async function Ne(){try{const e=await y(`filters?filter=${v}`,{limit:N,page:g});Se(e.totalPages),Q(e.results)}catch{S()}}async function He(e){const t=e.target.dataset.filter;if(t){v=t,g=1,K(Y,e.target),O([...G,T]),B([b]);try{const o=await y(`filters?filter=${v}`,{limit:N,page:g});D.innerHTML="",q.innerHTML="",Q(o.results),Se(o.totalPages)}catch{S()}}}function Q(e){const t=e.reduce((o,{name:r,filter:s,imgUrl:n})=>o+`
  <li data-filter="${s==="Body parts"?"bodypart":s.toLowerCase()}" data-name="${r}" class="exercises-list-card" style="background: linear-gradient(0deg, rgba(16, 16, 16, 0.70) 0%, rgba(16, 16, 16, 0.70) 100%), url(${n});
background-size: cover;
background-repeat: no-repeat;">
    <div class="exercise-card-desc">
      <h2 class="exercise-card-desc-name">${r}</h2>
      <p class="exercise-card-desc-filter">${s}</p>
    </div>
  </li>
  `,"");b.innerHTML=t}function Se(e){$.innerHTML="";for(let t=1;t<=e&&!(t>3);t++){const o=document.createElement("button");o.textContent=t,t===1&&o.classList.add("active"),o.addEventListener("click",r=>{K($,r.target),Ue(t)}),$.appendChild(o)}}async function Ue(e){g=e;try{F.scrollIntoView({behavior:"smooth"});const t=await y(`filters?filter=${v}`,{limit:N,page:g});Q(t.results)}catch{S()}}async function We(e){const t=e.target.dataset.filter,o=e.target.dataset.name;if(t){v=t,E=o,g=1,F.scrollIntoView({behavior:"smooth"}),O([b]),j.textContent=E,B(G);try{const r=await y(`exercises?${v}=${E}`,{limit:H,page:g});b.innerHTML="",$.innerHTML="",X(r.results),Re(r.totalPages)}catch{S()}}}function X(e){const t=e.reduce((o,{rating:r,target:s,bodyPart:n,burnedCalories:c,name:f,_id:i})=>(o+=`<li class="card-workout-item" id=${i}>
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
                            <use href="${W}#icon-Star-1"></use>
                        </svg>
                        </div>
                    </div>
                
                        <button data-id=${i} class="btn-start-workout" type="button">Start
                            <svg class="card-workout-start-icon"
                                width="16"
                                height="16"
                                >
                                <use href="${W}#icon-arrow"></use>
                            </svg>
                        </button>
                </div>
                  
                <div class="card-workout-title">
                    <div class="card-workout-title-icon-box">
                        <svg
                        class="card-workout-title-icon"
                        width="24"
                        height="24">
                        <use href="${W}#icon-human-ex"></use>
                        </svg>
                    </div>
                    <p class="card-title-text">${f}</p>
                </div>
            
                <div class="card-workout-info">
                    <div class="card-workout-info-block">
                        <p class="card-workout-info-list">Burned calories:</p>
                        <p class="card-workout-info-data card-time">${c} / 3 min</p>
                    </div>
                    <div class="card-workout-info-block">
                        <p class="card-workout-info-list">Body part:</p>
                        <p class="card-workout-info-data">${n}</p>
                    </div>
                    <div class="card-workout-info-block">
                        <p class="card-workout-info-list">Target:</p>
                        <p class="card-workout-info-data card-target">${s}</p>
                    </div>
                </div>
            </li>`,o),"");D.innerHTML=t}function Re(e){q.innerHTML="";for(let t=1;t<=e&&!(t>3);t++){const o=document.createElement("button");o.textContent=t,t===1&&o.classList.add("active"),o.addEventListener("click",r=>{K(q,r.target),Ve(t)}),q.appendChild(o)}}async function Ve(e){g=e;try{F.scrollIntoView({behavior:"smooth"});const t=await y(`exercises?${v}=${E}`,{limit:H,page:g});X(t.results)}catch{S()}}function S(){w.fire({text:"Oops, it seems something went wrong.",icon:"error"})}const ke=window.location.pathname,Je=ke.lastIndexOf("/"),fe=ke.substring(Je);if(fe==="/index.html"||fe==="/"){const e=document.querySelector(".footer-form");e.addEventListener("submit",function(t){t.preventDefault(),Ye(),e.reset()})}async function Ye(){const e=document.querySelector(".footer-form"),r={email:new FormData(e).get("email")};try{const n=(await A.post(e.action,r,{headers:{"Content-Type":"application/json"}})).data;n&&n.message&&Ke()}catch(s){s.response&&s.response.status!==409&&je(),s.response&&s.response.status===409&&ze()}}function je(){w.fire({title:"Bad request",text:"Something went wrong.",icon:"error"})}function ze(){w.fire({title:"Warning!",text:"Subscription already exists",icon:"warning"})}function Ke(){w.fire({title:"Good job!",text:"We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.",icon:"success"})}function Ge(){const e=document.querySelector(".foter-privacy-policy"),t=document.querySelector(".footer-terms-of-service"),o=document.querySelector(".modal-overlay"),r=document.querySelector(".privacy-modal-overlay");e.addEventListener("click",()=>r.classList.add("is-open")),t.addEventListener("click",()=>o.classList.add("is-open")),r.addEventListener("click",()=>r.classList.remove("is-open")),o.addEventListener("click",()=>o.classList.remove("is-open"))}const Le=window.location.pathname,Qe=Le.lastIndexOf("/"),me=Le.substring(Qe);(me==="/index.html"||me==="/")&&Ge();const qe=window.location.pathname,Xe=qe.lastIndexOf("/"),Ze=qe.substring(Xe);Ze==="/page-2.html"&&document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".favorites-list"),t=document.querySelector(".favorites-pagination-block");document.querySelector(".message-info");const o=document.querySelector(".favorites-contanier-block");function r(){window.location.pathname==="/page-2.html"&&window.innerWidth<=767&&s()?t.style.display="flex":t.style.display="none"}function s(){return e&&e.offsetParent!==null}function n(){const f=window.innerWidth<=767&&s()?6:e.children.length;if(window.innerWidth>767&&s()){for(let l=0;l<e.children.length;l++)e.children[l].style.display="block";return}Math.ceil(e.children.length/f);let i=1;function x(l){const d=(l-1)*f,m=d+f;for(let a=0;a<e.children.length;a++)e.children[a].style.display="none";for(let a=d;a<m&&a<e.children.length;a++)e.children[a].style.display="block"}x(i),t.addEventListener("click",function(l){l.target.tagName==="BUTTON"&&(t.querySelectorAll("button").forEach(m=>m.classList.remove("active-btn")),l.target.classList.add("active-btn"),i=parseInt(l.target.textContent),x(i))})}function c(){window.matchMedia("(min-width: 768px)").matches?o.style.overflowY="scroll":o.style.overflowY="visible",window.matchMedia("(min-width: 1440px)").matches?o.style.maxHeight="480px":o.style.maxHeight="none"}c(),r(),window.addEventListener("resize",function(){r(),n(),c()}),s()&&e.children.length>=6&&n()});const P="quoteDay",L=JSON.parse(localStorage.getItem(P)),R=document.querySelector(".quote-container-text"),ge=document.querySelector(".quote-container-author"),V=new Date,C={date:V.getDate(),month:V.getMonth(),year:V.getFullYear()};!localStorage.getItem(P)||C.date!=L.date.date||C.month!=L.date.month||C.year!=L.date.year?(localStorage.removeItem(P),y("quote").then(e=>{R.textContent=e.quote,ge.textContent=e.author,localStorage.setItem(P,JSON.stringify({author:e.author,quote:e.quote,date:C}))}).catch(e=>{console.log(e),R.textContent="Sorry, there was an error on the server"})):(R.textContent=L.quote,ge.textContent=L.author);const z=document.querySelector(".scroll-top-btn");function _e(){window.scrollY>700?z.classList.remove("is-hidden"):window.scrollY<700&&z.classList.add("is-hidden")}window.onscroll=_e;z.onclick=()=>window.scrollTo(0,0);function J(e){const t=document.querySelector(".rating-modal"),o=document.querySelectorAll(".rating-button"),r=document.getElementById("rating-value"),s=document.querySelector(".rating-email-field"),n=document.querySelector(".rating-text-field"),c=document.querySelector(".rating-form"),f=document.querySelector(".rate-wrapper");let i;const x=d=>{i=d.target.value,isNaN(i)||(r.textContent=i+".0"),o.forEach(m=>{m.value<=i?m.classList.add("active"):m.classList.remove("active")})};f.addEventListener("click",x);const l=d=>{d.preventDefault(),t.classList.remove("active");const m=`exercises/${e}/rating`,a={rate:i,email:s.value,review:n.value};Te(m,a).then(k=>{w.fire({title:"Success!",text:"Feedback sent successfully.",icon:"success"})}).catch(k=>{w.fire({title:"Bad request",text:k.message,icon:"error"})}),c.reset(),c.removeEventListener("submit",l),f.removeEventListener("click",x)};c.addEventListener("submit",l)}const $e=window.location.pathname,et=$e.lastIndexOf("/"),he=$e.substring(et);if(he==="/index.html"||he==="/"){const e="#eea10c",t="#e8e8e8";let o,r,s="favorites",n=localStorage.getItem(s);n?n=JSON.parse(n):n=[];const c=document.querySelector(".rating-form");document.querySelector(".rate-wrapper");const f=document.querySelector(".rating-close-modal"),i=document.querySelector(".rating-modal"),x=document.querySelector(".ex-rating-button"),l=document.querySelectorAll(".ex-rate-icon"),d=document.querySelector(".ex-add-favorities"),m=document.querySelector(".cards-workout-list"),a=document.querySelector(".ex-backdrop"),k=document.querySelector(".gif-ex"),Z=document.querySelector(".exercise-name"),U=document.querySelector(".ex-current-rating"),_=document.querySelector(".ex-target"),ee=document.querySelector(".ex-body-part"),te=document.querySelector(".ex-equipment"),oe=document.querySelector(".ex-popular"),se=document.querySelector(".ex-burned-calories"),ne=document.querySelector(".ex-description");m.addEventListener("click",async h=>{(h.target.classList.contains("btn-start-workout")||h.target.classList.contains("card-workout-start-icon"))&&(o=h.target.closest(".card-workout-item").id,await y(`exercises/${o}`).then(u=>{k.src=u.gifUrl,Z.textContent=u.name,U.textContent=u.rating,_.textContent=u.target,oe.textContent=u.popularity,ee.textContent=u.bodyPart,te.textContent=u.equipment,se.textContent=`${u.burnedCalories} / ${u.time}min`,ne.textContent=u.description,r=Math.round(U.textContent),l.forEach((ae,Ce)=>{Ce<r?ae.style.fill=e:ae.style.fill=t})}),n.find(u=>u.id===o)?d.textContent="Delete from favorites":d.textContent="Add to favorities",a.classList.add("is-open"))}),d.addEventListener("click",h=>{if(d.textContent.trim()=="Add to favorities")n.push({id:o,gifUrl:k.src,name:Z.textContent,rating:U.textContent,target:_.textContent,popular:oe.textContent,bodyPart:ee.textContent,equipment:te.textContent,burnedCalories:se.textContent,description:ne.textContent}),localStorage.setItem(s,JSON.stringify(n)),d.textContent="Delete from favorites";else{const re=n.findIndex(u=>u.id==o);n.splice(re,1),localStorage.setItem(s,JSON.stringify(n)),d.textContent="Add to favorities"}}),a.addEventListener("click",h=>{(h.target==a||h.target.classList.contains("ex-close-btn-icon")||h.target.classList.contains("ex-close-btn"))&&a.classList.remove("is-open")}),document.addEventListener("keydown",h=>{h.key==="Escape"&&(a.classList.contains("is-open")?a.classList.remove("is-open"):i.classList.contains("active")&&(i.classList.remove("active"),a.classList.add("is-open"),c.removeEventListener("submit",J)))}),x.addEventListener("click",()=>{i.classList.add("active"),J(o),a.classList.remove("is-open")}),f.addEventListener("click",()=>{i.classList.remove("active"),a.classList.add("is-open"),c.removeEventListener("submit",J)})}const Ee=window.location.pathname,tt=Ee.lastIndexOf("/"),ot=Ee.substring(tt),st=document.querySelector(".message-info");if(ot==="/page-2.html"){const e=document.querySelector(".favorites-list");let t="favorites",o=localStorage.getItem(t);if(o)try{JSON.parse(o).forEach(s=>{const n=`<li class="favorites-list-item id=${s.id}">
            <div class="favorites-card-header">
                <div class="favorites-oval">
                    <span>WORKOUT</span>
                </div>
                <button class="favorites-icon-svg" aria-label="trash" type="button">
                    <svg width="16" height="16" fill="none">
                        <use href="./images/sprite.svg#icon-trash"></use>
                    </svg>
                </button>
                <button
                    data-id="${s.id}"
                    class="favorites-list-button"
                    aria-label="start"
                    type="button">Start
                        <svg class="favorites-list-button-icon" width="14" height="14" stroke="#1B1B1B">
                            <use href="./images/sprite.svg#icon-arrow"></use>
                        </svg>
                </button>
                </div>
                <div class="favorites-list-container">
                    <svg class="favorite-list-svg" width="24" height="24">
                        <use href="./images/sprite.svg#icon-human-ex"></use>
                    </svg>
                    <h3 class="favorites-list-text">${s.name}</h3>
                </div>
                <div class="favorites-card-text">
                <ul class="favorites-card-text-list">
                    <li class="favorites-card-text-item">
                        <div class="favorites-card-text-wrapper">
                            <h4 class="favorites-card-text-title">Burned calories:</h4>
                            <p class="favorites-card-text-block">${s.burnedCalories}</p>
                        </div>
                        <div class="favorites-card-text-wrapper">
                            <h4 class="favorites-card-text-title">Body part:</h4>
                            <p class="favorites-card-text-block">${s.bodyPart}</p>
                        </div>
                        <div class="favorites-card-text-wrapper">
                            <h4 class="favorites-card-text-title">Target:</h4>
                            <p class="favorites-card-text-block">${s.target}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </li>`;e.insertAdjacentHTML("beforeend",n)})}catch(r){console.log(r.name),console.log(r.message)}else(!o||parsedItem==[])&&st.classList.add("is-open-message-info")}
//# sourceMappingURL=addToFavorites-d38ef23d.js.map
