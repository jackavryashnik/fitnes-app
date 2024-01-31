import{a as z,S as B}from"./vendor-9a5feb6b.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();const fe=window.location.pathname,Le=fe.lastIndexOf("/"),me=fe.substring(Le),qe=e=>{localStorage.setItem("theme-preference",e)},Ee=()=>localStorage.getItem("theme-preference")||"light";let p=Ee()==="dark";const ne=document.querySelectorAll(".theme-toggle");ne.forEach(e=>{e.checked=p,e.addEventListener("change",()=>{p=e.checked,ne.forEach(t=>{t!==e&&(t.checked=p)}),document.body.setAttribute("theme",p?"dark":"light"),me==="/page-2.html"&&document.querySelector(".logo").setAttribute("theme",p?"dark":"light"),qe(p?"dark":"light")})});document.addEventListener("DOMContentLoaded",()=>{document.body.setAttribute("theme",p?"dark":"light"),me==="/page-2.html"&&document.querySelector(".logo").setAttribute("theme",p?"dark":"light")});function $e(){const e=document.querySelector(".mobile-menu-wrapper"),t=document.querySelectorAll(".nav-link"),o=document.querySelector(".burger-menu"),s=document.querySelector(".burger-menu-close");o.addEventListener("click",()=>{e.classList.toggle("is-open")}),s.addEventListener("click",()=>{e.classList.toggle("is-open")}),t.forEach(n=>n.addEventListener("click",()=>{e.classList.remove("is-open")}))}$e();function Ce(){const e=document.querySelectorAll(".nav-link");window.addEventListener("load",()=>{const t=window.location.pathname;t.includes("index.html")||t=="/fitnes-app/"?(e[0].classList.add("active-link"),e[2].classList.add("active-link")):t.includes("page-2.html")&&(e[1].classList.add("active-link"),e[3].classList.add("active-link"))})}Ce();z.defaults.baseURL="https://energyflow.b.goit.study/api";async function y(e,t={}){try{return(await z.get(`/${e}`,{params:t})).data}catch(o){console.error(o)}}function R(e,t){e.querySelectorAll("button").forEach(o=>o.classList.remove("active")),t.classList.add("active")}function O(e=[]){e.forEach(t=>t.classList.add("is-hidden"))}function T(e=[]){e.forEach(t=>t.classList.remove("is-hidden"))}const ge=window.location.pathname,Ie=ge.lastIndexOf("/"),re=ge.substring(Ie);let I,P,he,D,pe;(re==="/index.html"||re==="/")&&(I=document.querySelector(".form-search-exercises"),P=document.querySelector(".cards-workout-list"),he=document.querySelector(".pagination-cards-workout-box"),D=document.querySelector(".search-info-message"),pe=I.elements.search,I.addEventListener("submit",Pe));async function Pe(e){e.preventDefault(),O([D]),T([P]),P.innerHTML="",he.innerHTML="";try{const t=await y(`exercises?${h}=${E}`,{page:d,limit:W,keyword:pe.value});if(!t.results.length){O([P]),T([D]);return}Q(t.results)}catch{k()}finally{I.reset()}}const N="/fitnes-app/assets/sprite-31c6263f.svg";let Y,A,L,se,J,ie,G,w,q,F,H,d,h,E,W;const ye=window.location.pathname,Me=ye.lastIndexOf("/"),ae=ye.substring(Me);(ae==="/index.html"||ae==="/")&&(Y=document.querySelector(".buttons-filter-container"),A=document.querySelector(".cards-workout-list"),L=document.querySelector(".pagination-cards-workout-box"),se=document.querySelector(".slash"),J=document.querySelector(".exercises-subtitle"),ie=document.querySelector(".form-search-exercises"),w=document.querySelector(".exercises-list"),q=document.querySelector(".pagination-exercises-box"),F=document.querySelector(".exercises-page-container"),G=[se,J,ie,A],H=innerWidth<768?8:12,W=innerWidth<1440?8:9,d=1,h="Muscles",Y.addEventListener("click",Te),w.addEventListener("click",Ae),window.addEventListener("load",Oe));async function Oe(){try{const e=await y(`filters?filter=${h}`,{limit:H,page:d});ve(e.totalPages),K(e.results)}catch{k()}}async function Te(e){const t=e.target.dataset.filter;if(t){h=t,d=1,R(Y,e.target),O([...G,D]),T([w]);try{const o=await y(`filters?filter=${h}`,{limit:H,page:d});A.innerHTML="",L.innerHTML="",K(o.results),ve(o.totalPages)}catch{k()}}}function K(e){const t=e.reduce((o,{name:s,filter:n,imgUrl:r})=>o+`
  <li data-filter="${n==="Body parts"?"bodypart":n.toLowerCase()}" data-name="${s}" class="exercises-list-card" style="background: linear-gradient(0deg, rgba(16, 16, 16, 0.70) 0%, rgba(16, 16, 16, 0.70) 100%), url(${r});
background-size: cover;
background-repeat: no-repeat;">
    <div class="exercise-card-desc">
      <h2 class="exercise-card-desc-name">${s}</h2>
      <p class="exercise-card-desc-filter">${n}</p>
    </div>
  </li>
  `,"");w.innerHTML=t}function ve(e){q.innerHTML="";for(let t=1;t<=e&&!(t>3);t++){const o=document.createElement("button");o.textContent=t,t===1&&o.classList.add("active"),o.addEventListener("click",s=>{R(q,s.target),De(t)}),q.appendChild(o)}}async function De(e){d=e;try{F.scrollIntoView({behavior:"smooth"});const t=await y(`filters?filter=${h}`,{limit:H,page:d});K(t.results)}catch{k()}}async function Ae(e){const t=e.target.dataset.filter,o=e.target.dataset.name;if(t){h=t,E=o,d=1,F.scrollIntoView({behavior:"smooth"}),O([w]),J.textContent=E,T(G);try{const s=await y(`exercises?${h}=${E}`,{limit:W,page:d});w.innerHTML="",q.innerHTML="",Q(s.results),Be(s.totalPages)}catch{k()}}}function Q(e){const t=e.reduce((o,{rating:s,target:n,bodyPart:r,burnedCalories:u,name:c,_id:m})=>(o+=`<li class="card-workout-item" data-id=${m}>
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
                            <use href="${N}#icon-Star-1"></use>
                        </svg>
                        </div>
                    </div>
                
                        <button data-id=${m} class="btn-start-workout" type="button">Start
                            <svg class="card-workout-start-icon"
                                width="16"
                                height="16"
                                >
                                <use href="${N}#icon-arrow"></use>
                            </svg>
                        </button>
                </div>
                  
                <div class="card-workout-title">
                    <div class="card-workout-title-icon-box">
                        <svg
                        class="card-workout-title-icon"
                        width="24"
                        height="24">
                        <use href="${N}#icon-human-ex"></use>
                        </svg>
                    </div>
                    <p class="card-title-text">${c}</p>
                </div>
            
                <div class="card-workout-info">
                    <div class="card-workout-info-block">
                        <p class="card-workout-info-list">Burned calories:</p>
                        <p class="card-workout-info-data card-time">${u} / 3 min</p>
                    </div>
                    <div class="card-workout-info-block">
                        <p class="card-workout-info-list">Body part:</p>
                        <p class="card-workout-info-data">${r}</p>
                    </div>
                    <div class="card-workout-info-block">
                        <p class="card-workout-info-list">Target:</p>
                        <p class="card-workout-info-data card-target">${n}</p>
                    </div>
                </div>
            </li>`,o),"");A.innerHTML=t}function Be(e){L.innerHTML="";for(let t=1;t<=e&&!(t>3);t++){const o=document.createElement("button");o.textContent=t,t===1&&o.classList.add("active"),o.addEventListener("click",s=>{R(L,s.target),Fe(t)}),L.appendChild(o)}}async function Fe(e){d=e;try{F.scrollIntoView({behavior:"smooth"});const t=await y(`exercises?${h}=${E}`,{limit:W,page:d});Q(t.results)}catch{k()}}function k(){B.fire({text:"Oops, it seems something went wrong.",icon:"error"})}const xe=window.location.pathname,He=xe.lastIndexOf("/"),ce=xe.substring(He);if(ce==="/index.html"||ce==="/"){const e=document.querySelector(".footer-form");e.addEventListener("submit",function(t){t.preventDefault(),We(),e.reset()})}async function We(){const e=document.querySelector(".footer-form"),s={email:new FormData(e).get("email")};try{const r=(await z.post(e.action,s,{headers:{"Content-Type":"application/json"}})).data;r&&r.message&&Ve()}catch(n){n.response&&n.response.status!==409&&Ne(),n.response&&n.response.status===409&&Ue()}}function Ne(){B.fire({title:"Bad request",text:"Something went wrong.",icon:"error"})}function Ue(){B.fire({title:"Warning!",text:"Subscription already exists",icon:"warning"})}function Ve(){B.fire({title:"Good job!",text:"We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.",icon:"success"})}function Ye(){const e=document.querySelector(".foter-privacy-policy"),t=document.querySelector(".footer-terms-of-service"),o=document.querySelector(".modal-overlay"),s=document.querySelector(".privacy-modal-overlay");e.addEventListener("click",()=>s.classList.add("is-open")),t.addEventListener("click",()=>o.classList.add("is-open")),s.addEventListener("click",()=>s.classList.remove("is-open")),o.addEventListener("click",()=>o.classList.remove("is-open"))}const we=window.location.pathname,Je=we.lastIndexOf("/"),le=we.substring(Je);(le==="/index.html"||le==="/")&&Ye();const ke=window.location.pathname,je=ke.lastIndexOf("/"),ze=ke.substring(je);ze==="/page-2.html"&&document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".favorites-list"),t=document.querySelector(".favorites-pagination-block"),o=document.querySelector(".message-info"),s=document.querySelector(".favorites-contanier-block");function n(){window.location.pathname==="/page-2.html"&&window.innerWidth<=767&&r()?t.style.display="flex":t.style.display="none"}function r(){return e&&e.offsetParent!==null}function u(){const m=window.innerWidth<=767&&r()?6:e.children.length;if(window.innerWidth>767&&r()){for(let a=0;a<e.children.length;a++)e.children[a].style.display="block";return}Math.ceil(e.children.length/m);let g=1;function b(a){const v=(a-1)*m,x=v+m;for(let l=0;l<e.children.length;l++)e.children[l].style.display="none";for(let l=v;l<x&&l<e.children.length;l++)e.children[l].style.display="block"}b(g),t.addEventListener("click",function(a){a.target.tagName==="BUTTON"&&(t.querySelectorAll("button").forEach(x=>x.classList.remove("active-btn")),a.target.classList.add("active-btn"),g=parseInt(a.target.textContent),b(g))})}r()?o.style.display="none":o.style.display="block";function c(){window.matchMedia("(min-width: 768px)").matches?s.style.overflowY="scroll":s.style.overflowY="visible",window.matchMedia("(min-width: 1440px)").matches?s.style.maxHeight="480px":s.style.maxHeight="none"}c(),n(),window.addEventListener("resize",function(){n(),u(),c()}),r()&&e.children.length>=6&&u()});const M="quoteDay",S=JSON.parse(localStorage.getItem(M)),U=document.querySelector(".quote-container-text"),de=document.querySelector(".quote-container-author"),V=new Date,$={date:V.getDate(),month:V.getMonth(),year:V.getFullYear()};!localStorage.getItem(M)||$.date!=S.date.date||$.month!=S.date.month||$.year!=S.date.year?(localStorage.removeItem(M),y("quote").then(e=>{U.textContent=e.quote,de.textContent=e.author,localStorage.setItem(M,JSON.stringify({author:e.author,quote:e.quote,date:$}))}).catch(e=>{console.log(e),U.textContent="Sorry, there was an error on the server"})):(U.textContent=S.quote,de.textContent=S.author);const j=document.querySelector(".scroll-top-btn");function Re(){window.scrollY>700?j.classList.remove("is-hidden"):window.scrollY<700&&j.classList.add("is-hidden")}window.onscroll=Re;j.onclick=()=>window.scrollTo(0,0);document.getElementById("rating-contact-modal");const C=document.querySelectorAll(".rating-button"),Ge=document.getElementById("rating-value");C.forEach((e,t)=>{e.addEventListener("change",function(){Ge.textContent=e.value,e.classList.add("active");for(let o=0;o<t;o++)C[o].classList.add("active");for(let o=t+1;o<C.length;o++)C[o].classList.remove("active")})});const be=window.location.pathname,Ke=be.lastIndexOf("/"),ue=be.substring(Ke);if(ue==="/index.html"||ue==="/"){const e="#eea10c",t="#e8e8e8";let o,s,n="favorites",r=localStorage.getItem(n);r?r=JSON.parse(r):r=[];const u=document.querySelectorAll(".ex-rate-icon"),c=document.querySelector(".ex-add-favorities"),m=document.querySelector(".cards-workout-list"),g=document.querySelector(".ex-backdrop"),b=document.querySelector(".gif-ex"),a=document.querySelector(".exercise-name"),v=document.querySelector(".ex-current-rating"),x=document.querySelector(".ex-target"),l=document.querySelector(".ex-body-part"),X=document.querySelector(".ex-equipment"),Z=document.querySelector(".ex-popular"),_=document.querySelector(".ex-burned-calories"),ee=document.querySelector(".ex-description");m.addEventListener("click",async f=>{f.target.classList.contains("btn-start-workout")|f.target.classList.contains("card-workout-start-icon")&&(o=f.target.closest(".card-workout-item").id,await y(`exercises/${o}`).then(i=>{b.src=i.gifUrl,a.textContent=i.name,v.textContent=i.rating,x.textContent=i.target,Z.textContent=i.popularity,l.textContent=i.bodyPart,X.textContent=i.equipment,_.textContent=`${i.burnedCalories} / ${i.time}min`,ee.textContent=i.description,s=Math.round(v.textContent),u.forEach((oe,Se)=>{Se<s?oe.style.fill=e:oe.style.fill=t})}),r.find(i=>i.id===o)?c.textContent="Delete from favorites":c.textContent="Add to favorities",g.classList.add("is-open"))}),c.addEventListener("click",f=>{if(c.textContent.trim()=="Add to favorities")r.push({id:o,gifUrl:b.src,name:a.textContent,rating:v.textContent,target:x.textContent,popular:Z.textContent,bodyPart:l.textContent,equipment:X.textContent,burnedCalories:_.textContent,description:ee.textContent}),localStorage.setItem(n,JSON.stringify(r)),c.textContent="Delete from favorites";else{const te=r.findIndex(i=>i.id==o);r.splice(te,1),localStorage.setItem(n,JSON.stringify(r)),c.textContent="Add to favorities"}}),g.addEventListener("click",f=>{(f.target==g||f.target.classList.contains("ex-close-btn-icon")||f.target.classList.contains("ex-close-btn"))&&g.classList.remove("is-open")}),document.addEventListener("keydown",f=>{f.key==="Escape"&&g.classList.remove("is-open")})}
//# sourceMappingURL=cardModal-7c6a5a3f.js.map
