import{a as q,S as $,i as l}from"./assets/vendor-D8_O3--j.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const v="https://pixabay.com/api/",M="51029899-783448441a91da68c2eb1f079";async function m(n,t=1){return await q.get(v,{params:{key:M,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})}const h=document.querySelector(".button-more");function P(n){return n.map(({id:t,webformatURL:r,largeImageURL:i,tags:e,likes:o,views:a,comments:S,downloads:x})=>`
    <li class="list-item" data-id="${t}">
  <a href="${i}">
    <img class="image" src="${r}" alt="${e}" width="360" />
  </a>
  <ul class="info">
    <li>
      <h3>Likes</h3>
      <p class="info-text">${o}</p>
    </li>
    <li>
      <h3>Views</h3>
      <p class="info-text">${a}</p>
    </li>
    <li>
      <h3>Comments</h3>
      <p class="info-text">${S}</p>
    </li>
    <li>
      <h3>Downloads</h3>
      <p class="info-text">${x}</p>
    </li>
  </ul>
</li>

    `).join("")}function g(n){document.querySelector(".gallery").insertAdjacentHTML("beforeend",P(n)),new $(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const y=document.querySelector(".loader");function L(){y.style.display="block"}function b(){y.style.display="none"}function O(){h.classList.remove("hiddenbtn")}function c(){h.classList.add("hiddenbtn")}const d=document.querySelector(".form"),R=document.querySelector(".gallery"),u=document.querySelector(".button-more");let f="",s=1;const w=15;let p=0;d.addEventListener("submit",B);u.addEventListener("click",E);async function B(n){n.preventDefault();const t=d.elements["search-text"].value.trim();if(f=t,s=1,t===""){l.warning({message:"Введіть назву зображення!",position:"topRight"});return}R.innerHTML="",c(),L();try{const r=await m(f,s),i=r.data.hits;p=r.data.totalHits,i.length===0?l.info({message:"Зображень не знайдено.",position:"topRight"}):(g(i),s*w<p?O():c())}catch(r){l.error({message:"Сталася помилка при запиті!",position:"topRight"}),console.error("Помилка:",r)}finally{b()}d.reset()}async function E(){s+=1,L(),u.disabled=!0;try{const t=(await m(f,s)).data.hits;g(t),s*w>=p&&(c(),l.info({message:"Усі результати завантажено.",position:"bottomCenter",timeout:3e3}));const e=document.querySelector(".list-item ").getBoundingClientRect().height;window.scrollBy({left:0,top:e*3,behavior:"smooth"})}catch{l.error({message:"Помилка при завантаженні додаткових зображень",position:"topRight"})}finally{u.disabled=!1,b()}}
//# sourceMappingURL=index.js.map
