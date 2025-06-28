import{a as L,S as w,i as n}from"./assets/vendor-DqB7j7Ix.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();async function S(t,a=1){const o="51029899-783448441a91da68c2eb1f079",r=new URLSearchParams({key:o,q:t,page:a,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0});return(await L.get("https://pixabay.com/api/",{params:r})).data}const m=document.querySelector(".loader"),f=document.querySelector(".gallery"),h=document.querySelector(".load-more-btn"),q=new w(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"});function x(t){const a=t.map(({webformatURL:o,largeImageURL:r,tags:e,likes:s,views:i,comments:v,downloads:b})=>`
    <li class="image-box">
        <a href="${r}">
        <img src="${o}" alt="${e}" width="300">
        </a>
        <div class="image-stats">
            <div class="image-stat">
                <span class="label">Likes</span>
                <span class="value">${s}</span>
            </div>
            <div class="image-stat">
                <span class="label">Views</span>
                <span class="value">${i}</span>
            </div>
            <div class="image-stat">
                <span class="label">Comments</span>
                <span class="value">${v}</span>
            </div>
            <div class="image-stat">
                <span class="label">Downloads</span>
                <span class="value">${b}</span>
            </div>
        </div>
    </li>`).join("");f.insertAdjacentHTML("beforeend",a),q.refresh()}function B(){f.innerHTML=""}function g(){m.classList.remove("hidden")}function O(){m.classList.add("hidden")}function P(){h.classList.remove("hidden")}function u(){h.classList.add("hidden")}const $=document.querySelector(".form"),M=document.querySelector(".load-more-btn");let c="",l=1,p=0,d=0;$.addEventListener("submit",async t=>{if(t.preventDefault(),c=t.target.elements["search-text"].value.trim(),c===""){n.error({message:"Please, fill in the field!",closeOnClick:!0,position:"topRight"});return}l=1,d=0,B(),g(),await y()});M.addEventListener("click",async()=>{g(),await y();const t=document.querySelectorAll(".image-box");if(t.length){const o=t[0].getBoundingClientRect().height;console.log(o),window.scrollBy({top:o*2,behavior:"smooth"})}});const y=async()=>{try{u();const t=await S(c,l);if(l===1&&(p=t.totalHits,!t.hits.length)){n.error({message:"Sorry, there are no images matching your search query. Please try again!",closeOnClick:!0,position:"topRight"});return}x(t.hits),l++,d+=t.hits.length,d>=p?(u(),n.error({message:"We're sorry, but you've reached the end of search results.",closeOnClick:!0,position:"topRight"})):P()}catch(t){n.error({message:`${t}`})}finally{O()}};
//# sourceMappingURL=index.js.map
