import{a as U,S as L}from"./vendor-9a5feb6b.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const be=window.location.pathname,De=be.lastIndexOf("/"),Le=be.substring(De),Fe=e=>{localStorage.setItem("theme-preference",e)},We=()=>localStorage.getItem("theme-preference")||"light";let v=We()==="dark";const ue=document.querySelectorAll(".theme-toggle");ue.forEach(e=>{e.checked=v,e.addEventListener("change",()=>{v=e.checked,ue.forEach(t=>{t!==e&&(t.checked=v)}),document.body.setAttribute("theme",v?"dark":"light"),Le==="/page-2.html"&&document.querySelector(".logo").setAttribute("theme",v?"dark":"light"),Fe(v?"dark":"light")})});document.addEventListener("DOMContentLoaded",()=>{document.body.setAttribute("theme",v?"dark":"light"),Le==="/page-2.html"&&document.querySelector(".logo").setAttribute("theme",v?"dark":"light")});function He(){const e=document.querySelector(".mobile-menu-wrapper"),t=document.querySelectorAll(".nav-link"),o=document.querySelector(".burger-menu"),n=document.querySelector(".burger-menu-close");o.addEventListener("click",()=>{e.classList.toggle("is-open")}),n.addEventListener("click",()=>{e.classList.toggle("is-open")}),t.forEach(s=>s.addEventListener("click",()=>{e.classList.remove("is-open")}))}He();function Ne(){const e=document.querySelectorAll(".nav-link");window.addEventListener("load",()=>{const t=window.location.pathname;t.includes("index.html")||t=="/fitnes-app/"?(e[0].classList.add("active-link"),e[2].classList.add("active-link")):t.includes("page-2.html")&&(e[1].classList.add("active-link"),e[3].classList.add("active-link"))})}Ne();function Z(e,t){e.querySelectorAll("button").forEach(o=>o.classList.remove("active")),t.classList.add("active")}function D(e=[]){e.forEach(t=>t.classList.add("is-hidden"))}function F(e=[]){e.forEach(t=>t.classList.remove("is-hidden"))}const W=document.querySelector(".loader-wrapper");U.defaults.baseURL="https://energyflow.b.goit.study/api";async function y(e,t={}){W.classList.remove("hidden");try{return(await U.get(`/${e}`,{params:t})).data}catch(o){console.error(o)}finally{W.classList.add("hidden")}}async function Ue(e,t={}){W.classList.remove("hidden");try{return(await U.patch(`/${e}`,{params:t})).data}catch(o){console.error(o)}finally{W.classList.add("hidden")}}const ke=window.location.pathname,Re=ke.lastIndexOf("/"),fe=ke.substring(Re);let B,T,Se,H,qe;(fe==="/index.html"||fe==="/")&&(B=document.querySelector(".form-search-exercises"),T=document.querySelector(".cards-workout-list"),Se=document.querySelector(".pagination-cards-workout-box"),H=document.querySelector(".search-info-message"),qe=B.elements.search,B.addEventListener("submit",Ve));async function Ve(e){e.preventDefault(),D([H]),F([T]),T.innerHTML="",Se.innerHTML="";try{const t=await y(`exercises?${p}=${P}`,{page:h,limit:Y,keyword:qe.value});if(!t.results.length){D([T]),F([H]);return}te(t.results)}catch{S()}finally{B.reset()}}const b="/fitnes-app/assets/sprite-31c6263f.svg";let G,N,I,me,Q,he,_,k,M,R,V,h,p,P,Y;const $e=window.location.pathname,Ye=$e.lastIndexOf("/"),ge=$e.substring(Ye);(ge==="/index.html"||ge==="/")&&(G=document.querySelector(".buttons-filter-container"),N=document.querySelector(".cards-workout-list"),I=document.querySelector(".pagination-cards-workout-box"),me=document.querySelector(".slash"),Q=document.querySelector(".exercises-subtitle"),he=document.querySelector(".form-search-exercises"),k=document.querySelector(".exercises-list"),M=document.querySelector(".pagination-exercises-box"),R=document.querySelector(".exercises-page-container"),_=[me,Q,he,N],V=innerWidth<768?8:12,Y=innerWidth<1440?8:9,h=1,p="Muscles",G.addEventListener("click",je),k.addEventListener("click",Ke),window.addEventListener("load",Je));async function Je(){try{const e=await y(`filters?filter=${p}`,{limit:V,page:h});Ee(e.totalPages),ee(e.results)}catch{S()}}async function je(e){const t=e.target.dataset.filter;if(t){p=t,h=1,Z(G,e.target),D([..._,H]),F([k]);try{const o=await y(`filters?filter=${p}`,{limit:V,page:h});N.innerHTML="",I.innerHTML="",ee(o.results),Ee(o.totalPages)}catch{S()}}}function ee(e){const t=e.reduce((o,{name:n,filter:s,imgUrl:r})=>o+`
  <li data-filter="${s==="Body parts"?"bodypart":s.toLowerCase()}" data-name="${n}" class="exercises-list-card" style="background: linear-gradient(0deg, rgba(16, 16, 16, 0.70) 0%, rgba(16, 16, 16, 0.70) 100%), url(${r});
background-size: cover;
background-repeat: no-repeat;">
    <div class="exercise-card-desc">
      <h2 data-filter="${s==="Body parts"?"bodypart":s.toLowerCase()}" data-name="${n}"  class="exercise-card-desc-name">${n}</h2>
      <p data-filter="${s==="Body parts"?"bodypart":s.toLowerCase()}" data-name="${n}"  class="exercise-card-desc-filter">${s}</p>
    </div>
  </li>
  `,"");k.innerHTML=t}function Ee(e){M.innerHTML="";for(let t=1;t<=e&&!(t>3);t++){const o=document.createElement("button");o.textContent=t,t===1&&o.classList.add("active"),o.addEventListener("click",n=>{Z(M,n.target),ze(t)}),M.appendChild(o)}}async function ze(e){h=e;try{R.scrollIntoView({behavior:"smooth"});const t=await y(`filters?filter=${p}`,{limit:V,page:h});ee(t.results)}catch{S()}}async function Ke(e){const t=e.target.dataset.filter,o=e.target.dataset.name;if(t){p=t,P=o,h=1,R.scrollIntoView({behavior:"smooth"}),D([k]),Q.textContent=P,F(_);try{const n=await y(`exercises?${p}=${P}`,{limit:Y,page:h});k.innerHTML="",M.innerHTML="",te(n.results),Ge(n.totalPages)}catch{S()}}}function te(e){const t=e.reduce((o,{rating:n,target:s,bodyPart:r,burnedCalories:c,name:f,_id:i})=>(o+=`<li class="card-workout-item" id=${i}>
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
                
                        <button data-id=${i} class="btn-start-workout" type="button">Start
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
                    <p class="card-title-text">${f}</p>
                </div>
            
                <div class="card-workout-info">
                    <div class="card-workout-info-block">
                        <p class="card-workout-info-list">Burned calories:</p>
                        <p class="card-workout-info-data card-time">${c} / 3 min</p>
                    </div>
                    <div class="card-workout-info-block">
                        <p class="card-workout-info-list">Body part:</p>
                        <p class="card-workout-info-data">${r}</p>
                    </div>
                    <div class="card-workout-info-block">
                        <p class="card-workout-info-list">Target:</p>
                        <p class="card-workout-info-data card-target">${s}</p>
                    </div>
                </div>
            </li>`,o),"");N.innerHTML=t}function Ge(e){I.innerHTML="";for(let t=1;t<=e&&!(t>3);t++){const o=document.createElement("button");o.textContent=t,t===1&&o.classList.add("active"),o.addEventListener("click",n=>{Z(I,n.target),Qe(t)}),I.appendChild(o)}}async function Qe(e){h=e;try{R.scrollIntoView({behavior:"smooth"});const t=await y(`exercises?${p}=${P}`,{limit:Y,page:h});te(t.results)}catch{S()}}function S(){L.fire({text:"Oops, it seems something went wrong.",icon:"error"})}const Ce=window.location.pathname,Xe=Ce.lastIndexOf("/"),pe=Ce.substring(Xe);if(pe==="/index.html"||pe==="/"){const e=document.querySelector(".footer-form");e.addEventListener("submit",function(t){t.preventDefault(),Ze(),e.reset()})}async function Ze(){const e=document.querySelector(".footer-form"),n={email:new FormData(e).get("email")};try{const r=(await U.post(e.action,n,{headers:{"Content-Type":"application/json"}})).data;r&&r.message&&tt()}catch(s){s.response&&s.response.status!==409&&_e(),s.response&&s.response.status===409&&et()}}function _e(){L.fire({title:"Bad request",text:"Something went wrong.",icon:"error"})}function et(){L.fire({title:"Warning!",text:"Subscription already exists",icon:"warning"})}function tt(){L.fire({title:"Good job!",text:"We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.",icon:"success"})}function ot(){const e=document.querySelector(".foter-privacy-policy"),t=document.querySelector(".footer-terms-of-service"),o=document.querySelector(".modal-overlay"),n=document.querySelector(".privacy-modal-overlay");e.addEventListener("click",()=>n.classList.add("is-open")),t.addEventListener("click",()=>o.classList.add("is-open")),n.addEventListener("click",()=>n.classList.remove("is-open")),o.addEventListener("click",()=>o.classList.remove("is-open"))}const Ie=window.location.pathname,st=Ie.lastIndexOf("/"),ve=Ie.substring(st);(ve==="/index.html"||ve==="/")&&ot();const Me=window.location.pathname,nt=Me.lastIndexOf("/"),rt=Me.substring(nt);rt==="/page-2.html"&&document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".favorites-list"),t=document.querySelector(".favorites-pagination-block");document.querySelector(".message-info");const o=document.querySelector(".favorites-contanier-block");function n(){window.location.pathname==="/page-2.html"&&window.innerWidth<=767&&s()?t.style.display="flex":t.style.display="none"}function s(){return e&&e.offsetParent!==null}function r(){const f=window.innerWidth<=767&&s()?6:e.children.length;if(window.innerWidth>767&&s()){for(let l=0;l<e.children.length;l++)e.children[l].style.display="block";return}Math.ceil(e.children.length/f);let i=1;function x(l){const d=(l-1)*f,m=d+f;for(let a=0;a<e.children.length;a++)e.children[a].style.display="none";for(let a=d;a<m&&a<e.children.length;a++)e.children[a].style.display="block"}x(i),t.addEventListener("click",function(l){l.target.tagName==="BUTTON"&&(t.querySelectorAll("button").forEach(m=>m.classList.remove("active-btn")),l.target.classList.add("active-btn"),i=parseInt(l.target.textContent),x(i))})}function c(){window.matchMedia("(min-width: 768px)").matches?o.style.overflowY="scroll":o.style.overflowY="visible",window.matchMedia("(min-width: 1440px)").matches?o.style.maxHeight="480px":o.style.maxHeight="none"}c(),n(),window.addEventListener("resize",function(){n(),r(),c()}),s()&&e.children.length>=6&&r()});const A="quoteDay",$=JSON.parse(localStorage.getItem(A)),j=document.querySelector(".quote-container-text"),ye=document.querySelector(".quote-container-author"),z=new Date,O={date:z.getDate(),month:z.getMonth(),year:z.getFullYear()};!localStorage.getItem(A)||O.date!=$.date.date||O.month!=$.date.month||O.year!=$.date.year?(localStorage.removeItem(A),y("quote").then(e=>{j.textContent=e.quote,ye.textContent=e.author,localStorage.setItem(A,JSON.stringify({author:e.author,quote:e.quote,date:O}))}).catch(e=>{console.log(e),j.textContent="Sorry, there was an error on the server"})):(j.textContent=$.quote,ye.textContent=$.author);const X=document.querySelector(".scroll-top-btn");function Pe(){window.scrollY>700?X.classList.remove("is-hidden"):window.scrollY<700&&X.classList.add("is-hidden")}window.onscroll=Pe;X.onclick=()=>window.scrollTo(0,0);function K(e){const t=document.querySelector(".rating-modal"),o=document.querySelectorAll(".rating-button"),n=document.getElementById("rating-value"),s=document.querySelector(".rating-email-field"),r=document.querySelector(".rating-text-field"),c=document.querySelector(".rating-form"),f=document.querySelector(".rate-wrapper");let i;const x=d=>{i=d.target.value,isNaN(i)||(n.textContent=i+".0"),o.forEach(m=>{m.value<=i?m.classList.add("active"):m.classList.remove("active")})};f.addEventListener("click",x);const l=d=>{d.preventDefault(),t.classList.remove("active");const m=`exercises/${e}/rating`,a={rate:i,email:s.value,review:r.value};Ue(m,a).then(q=>{L.fire({title:"Success!",text:"Feedback sent successfully.",icon:"success"})}).catch(q=>{L.fire({title:"Bad request",text:q.message,icon:"error"})}),c.reset(),c.removeEventListener("submit",l),f.removeEventListener("click",x)};c.addEventListener("submit",l)}const Oe=window.location.pathname,at=Oe.lastIndexOf("/"),xe=Oe.substring(at);if(xe==="/index.html"||xe==="/"){const e="#eea10c",t="#e8e8e8";let o,n,s="favorites",r=localStorage.getItem(s);r?r=JSON.parse(r):r=[];const c=document.querySelector(".rating-form");document.querySelector(".rate-wrapper");const f=document.querySelector(".rating-close-modal"),i=document.querySelector(".rating-modal"),x=document.querySelector(".ex-rating-button"),l=document.querySelectorAll(".ex-rate-icon"),d=document.querySelector(".ex-add-favorities"),m=document.querySelector(".cards-workout-list"),a=document.querySelector(".ex-backdrop"),q=document.querySelector(".gif-ex"),oe=document.querySelector(".exercise-name"),J=document.querySelector(".ex-current-rating"),se=document.querySelector(".ex-target"),ne=document.querySelector(".ex-body-part"),re=document.querySelector(".ex-equipment"),ae=document.querySelector(".ex-popular"),ie=document.querySelector(".ex-burned-calories"),ce=document.querySelector(".ex-description");m.addEventListener("click",async g=>{(g.target.classList.contains("btn-start-workout")||g.target.classList.contains("card-workout-start-icon"))&&(o=g.target.closest(".card-workout-item").id,await y(`exercises/${o}`).then(u=>{q.src=u.gifUrl,oe.textContent=u.name,J.textContent=u.rating,se.textContent=u.target,ae.textContent=u.popularity,ne.textContent=u.bodyPart,re.textContent=u.equipment,ie.textContent=`${u.burnedCalories} / ${u.time}min`,ce.textContent=u.description,n=Math.round(J.textContent),l.forEach((de,Ae)=>{Ae<n?de.style.fill=e:de.style.fill=t})}),r.find(u=>u.id===o)?d.textContent="Delete from favorites":d.textContent="Add to favorities",a.classList.add("is-open"))}),d.addEventListener("click",g=>{if(d.textContent.trim()=="Add to favorities")r.push({id:o,gifUrl:q.src,name:oe.textContent,rating:J.textContent,target:se.textContent,popular:ae.textContent,bodyPart:ne.textContent,equipment:re.textContent,burnedCalories:ie.textContent,description:ce.textContent}),localStorage.setItem(s,JSON.stringify(r)),d.textContent="Delete from favorites";else{const le=r.findIndex(u=>u.id==o);r.splice(le,1),localStorage.setItem(s,JSON.stringify(r)),d.textContent="Add to favorities"}}),a.addEventListener("click",g=>{(g.target==a||g.target.classList.contains("ex-close-btn-icon")||g.target.classList.contains("ex-close-btn"))&&a.classList.remove("is-open")}),document.addEventListener("keydown",g=>{g.key==="Escape"&&(a.classList.contains("is-open")?a.classList.remove("is-open"):i.classList.contains("active")&&(i.classList.remove("active"),a.classList.add("is-open"),c.removeEventListener("submit",K)))}),x.addEventListener("click",()=>{i.classList.add("active"),K(),a.classList.remove("is-open")}),f.addEventListener("click",()=>{i.classList.remove("active"),a.classList.add("is-open"),c.removeEventListener("submit",K)})}const Be=window.location.pathname,it=Be.lastIndexOf("/"),ct=Be.substring(it),lt=document.querySelector(".message-info");if(ct==="/page-2.html"){const e=document.querySelector(".favorites-list");let t="favorites",o=localStorage.getItem(t);if(o)try{JSON.parse(o).forEach(s=>{const r=`<li class="favorites-list-item id=${s.id}">
            <div class="favorites-card-header">
                <div class="favorites-oval">
                    <span>WORKOUT</span>
                </div>
                <button class="favorites-icon-svg" aria-label="trash" type="button">
                    <svg width="16" height="16" fill="none">
                        <use href="${b}#icon-trash"></use>
                    </svg>
                </button>
                <button
                    data-id="${s.id}"
                    class="favorites-list-button"
                    aria-label="start"
                    type="button">Start
                        <svg class="favorites-list-button-icon" width="14" height="14" stroke="#1B1B1B">
                            <use href="${b}#icon-arrow"></use>
                        </svg>
                </button>
                </div>
                <div class="favorites-list-container">
                    <svg class="favorite-list-svg" width="24" height="24">
                        <use href="${b}#icon-human-ex"></use>
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
        </li>`;e.insertAdjacentHTML("beforeend",r)})}catch(n){console.log(n.name),console.log(n.message)}else(!o||o==[])&&lt.classList.add("is-open-message-info")}const Te=window.location.pathname,dt=Te.lastIndexOf("/"),we=Te.substring(dt);let w,E,C;if(we==="/index.html"||we==="/"){let t=function(){window.scrollY>700&&w.classList.add("is-hidden")},o=function(){t(),Pe()};w=document.querySelector(".inf-wrapper"),E=document.querySelector(".wrapper-text"),C=document.querySelector(".wrapper-span");const e=document.querySelector(".hero-list");e.addEventListener("click",ut),document.addEventListener("click",n=>{e.contains(n.target)||w.classList.add("is-hidden")}),window.onscroll=o}function ut(e){switch(e.target.id){case"li1":w.classList.remove("is-hidden"),C.textContent="#Sport",E.textContent="this is an important aspect of a healthy lifestyle, which can positively affect your well-being. It helps reduce stress, increase energy, and boost self-confidence. Sport also strengthens your body and improves your cardiovascular health, while increasing your self-esteem.";break;case"li2":w.classList.remove("is-hidden"),C.textContent="#Healthy ",E.textContent="lifestyle this is the key to success in any area of life. It includes a balanced diet, regular exercise, a harmonious lifestyle, and a healthy mindset. A healthy lifestyle helps reduce the risk of chronic diseases, increase energy, and boost self-confidence.";break;case"li3":w.classList.remove("is-hidden"),C.textContent="#Workout",E.textContent="this is an important part of a healthy lifestyle. It helps strengthen your body, increase energy, and reduce stress. Workout also strengthens your heart and lungs, while increasing your self-esteem.";break;case"li4":w.classList.remove("is-hidden"),C.textContent="#Diet",E.textContent="this is the key to success in any area of life. A balanced diet includes a variety of foods, a balance of proteins, carbohydrates, and fats, and sufficient water intake. A balanced diet helps reduce the risk of chronic diseases, increase energy, and boost self-confidence.";break}}
//# sourceMappingURL=tags-2ee4d002.js.map
