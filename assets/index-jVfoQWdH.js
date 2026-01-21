(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const v of s.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&n(v)}).observe(document,{childList:!0,subtree:!0});function i(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=i(o);fetch(o.href,s)}})();const L=[{href:"#uvod",label:"Úvod"},{href:"#sluzby",label:"Služby"},{href:"#realizace",label:"Realizace"},{href:"#omne",label:"Kdo k vám přijede"},{href:"#kontakt",label:"Kontakt"}],I="+420 725 414 555",S="tel:+420725414555",P="420725414555";let u=!1;function E(){const e=document.querySelector(".nav-links");e&&(u=!u,e.classList.toggle("mobile-open",u))}function O(){return`
    <header class="navbar">
      <div class="navbar-inner">
        <div class="brand">
          <div class="brand-mark">S</div>
          <div>
            <div>Stavební práce</div>
            <div class="brand-sub">sádrokarton • zdi • povrchy</div>
          </div>
        </div>

        <nav class="nav-links">
          ${L.map(t=>`<a href="${t.href}">${t.label}</a>`).join("")}
        </nav>

        <div style="display:flex; flex-direction:column; align-items:flex-end;">
          <a href="${S}" class="nav-phone">
            <span>${I.replace(/ /g,"&nbsp;")}</span>
          </a>
          <span style="font-size:0.65rem; color:#94a3b8; margin-top:4px; font-weight:500;">Po-Pá 8:00 - 18:00</span>
        </div>

        <div class="nav-burger" id="nav-burger">
          <span></span><span></span><span></span>
        </div>
      </div>
    </header>
  `}function $(){const e=document.getElementById("nav-burger");e&&e.addEventListener("click",E),document.querySelectorAll(".nav-links a").forEach(t=>{t.addEventListener("click",()=>{u&&E()})})}const R=[{src:"images/hotovy_interier.png",alt:"Kompletní rekonstrukce"},{src:"images/koupelna-01.jpg",alt:"Nový obklad koupelny"},{src:"images/sadrokarton-06.jpg",alt:"Sádrokartonový podhled"},{src:"images/zdi-02.jpg",alt:"Zednické úpravy interiéru"}];let g;function T(){return`
    <section class="hero-container">
      <!-- 1. HEADER (Plná šířka) -->
      <div class="hero-header">
        <div class="hero-tags">STAVEBNÍ ÚPRAVY · SÁDROKARTON · ZEDNICKÉ PRÁCE</div>
        <h1>
          Stavební práce, které drží pohromadě <span class="highlight">celý byt i dům.</span>
        </h1>
        <div class="hero-subtags">
          <span class="tag-pill-hero">BYTOVÉ PŘESTAVBY</span>
          <span class="tag-pill-hero">RODINNÉ DOMY</span>
          <span class="tag-pill-hero">PODKROVÍ & SÁDROKARTON</span>
        </div>
      </div>

      <!-- 2. SPLIT LAYOUT (Desktop Grid) -->
      <div class="hero-split-layout">
        
        <!-- LEVÝ SLOUPEC: KARTY SLUŽEB -->
        <div class="hero-services-side">
          <div class="service-card-mini">
            <div class="service-icon">🏠</div>
            <div>
              <h3>Byty a domy</h3>
              <p>Jádra, podkroví</p>
            </div>
          </div>
          <div class="service-card-mini">
            <div class="service-icon">🏗️</div>
             <div>
              <h3>Sádrokarton</h3>
              <p>Podhledy, příčky</p>
            </div>
          </div>
          <div class="service-card-mini">
            <div class="service-icon">🧱</div>
             <div>
              <h3>Zednické práce</h3>
              <p>Příčky, omítky</p>
            </div>
          </div>
          
          <div class="hero-actions">
            <a href="#kontakt" class="btn-primary">Napsat poptávku</a>
            <button class="btn-secondary" id="hero-cta-gallery">Co přesně dělám →</button>
          </div>
        </div>

        <!-- PRAVÝ SLOUPEC: SLIDER -->
        <div class="hero-slider-side">
          <div class="hero-slideshow-container" id="hero-slider">
             ${R.map((e,t)=>`
               <img 
                 src="${e.src}" 
                 class="slide-img ${t===0?"active":""}" 
                 alt="${e.alt||"Realizace"}"
                 loading="${t===0?"eager":"lazy"}"
               >
             `).join("")}
             
             <div class="badge-overlay">
               <span class="badge-dot">●</span> Osobně na každé zakázce
             </div>
          </div>
        </div>
      
      </div>
    </section>
  `}function w(){const e=document.getElementById("hero-cta-gallery"),t=document.getElementById("hero-slider");if(e&&e.addEventListener("click",()=>{var i;(i=document.getElementById("realizace"))==null||i.scrollIntoView({behavior:"smooth"})}),t){const i=t.querySelectorAll(".slide-img");let n=0;g&&clearInterval(g),g=setInterval(()=>{i[n].classList.remove("active"),n=(n+1)%i.length,i[n].classList.add("active")},5e3)}}const A=[{label:"Realizace na klíč",title:"Kompletní rekonstrukce bytů",description:"Změny dispozic, nová jádra a kompletní modernizace bydlení. Cenová nabídka předem zdarma."},{label:"Zdivo & Bourání",title:"Změna dispozice a bourání",description:"Bezpečné probourání otvorů, stavba nových příček (Ytong/Porfix) a odvoz suti."},{label:"Rovné zdi",title:"Opravy zdí a nové omítky",description:"Srovnání křivých zdí, perlinka, štukování a finální výmalba. Váš byt bude jako nový."},{label:"Sádrokarton",title:"Podhledy, příčky a podkroví",description:"Snižování stropů SDK, zvuková izolace příček a kompletní realizace podkroví."},{label:"Koupelny",title:"Rekonstrukce bytových jader",description:"Kompletní přestavba umakartového jádra. Vyzdění, hydroizolace a příprava pro obklady."},{label:"Exteriér",title:"Opravy fasád a soklů",description:"Lokální opravy omítek, zateplení soklů a drobné zednické práce kolem domu."}];function B(e){return`
    <article class="service-card">
      <div class="service-label">${e.label}</div>
      <h3 class="service-title">${e.title}</h3>
      <p class="service-desc">${e.description}</p>
    </article>
  `}function C(){return`
    <section id="sluzby">
      <div class="container">
        <div class="section-header">
          <div class="section-eyebrow">Služby</div>
          <h2 class="section-title">Na co se ve stavebních pracích zaměřuji</h2>
          <p class="section-subtitle">
            Všechno, co souvisí s úpravou zdí a prostor – od hrubších zásahů po
            přípravu pro obklady, malby a další profese.
          </p>
        </div>

        <div class="services-grid">
          ${A.map(B).join("")}
        </div>
      </div>
    </section>
  `}const h={interiery:{label:"Hotové interiéry",slides:[{src:"images/hotovy_interier.png",alt:"Kompletní realizace interiéru",title:"Hotový interiér",text:"Ukázka finální podoby interiéru po kompletní rekonstrukci."}]},sadrokarton:{label:"Sádrokarton",slides:[{src:"images/sadrokarton-01 (2).jpg",title:"Sádrokarton",text:"Realizace SDK konstrukcí."},{src:"images/sadrokarton-02.jpg",title:"Sádrokarton",text:"Detail montáže."},{src:"images/sadrokarton-03 (2).jpg",title:"Podkroví",text:"Zateplení a opláštění podkroví."},{src:"images/sadrokarton-04.jpg",title:"Příčky",text:"Montáž dělících příček."},{src:"images/sadrokarton-06 (2).jpg",title:"Strop",text:"Sádrokartonový podhled."},{src:"images/sadrokarton-06.jpg",title:"Detaily",text:"Příprava pro osvětlení."},{src:"images/sadrokarton-07.jpg",title:"Finále",text:"Příprava povrchu pro malbu."}].map(e=>({...e,alt:e.title}))},zednicke:{label:"Zednické práce",slides:[{src:"images/zdi-01 (2).jpg",title:"Zdění",text:"Hrubé zednické práce."},{src:"images/zdi-01.jpg",title:"Příprava",text:"Příprava podkladu."},{src:"images/zdi-02 (2).jpg",title:"Omítky",text:"Ruční omítání stěn."},{src:"images/zdi-02.jpg",title:"Povrchy",text:"Vyrovnávání povrchů."},{src:"images/zdi-03 (3).jpg",title:"Detaily",text:"Začišťování detailů."},{src:"images/zdi-03.jpg",title:"Rekonstrukce",text:"Oprava starého zdiva."},{src:"images/zdi-04 (2).jpg",title:"Stavba",text:"Výstavba nových příček."},{src:"images/zdi-04.jpg",title:"Interiér",text:"Úpravy v interiéru."},{src:"images/zdi-05 (2).jpg",title:"Hrubá stavba",text:"Práce na hrubé stavbě."},{src:"images/zdi-05 (3).jpg",title:"Materiál",text:"Práce s tvárnicemi."},{src:"images/zdi-05.jpg",title:"Zdi",text:"Zdění nosných stěn."},{src:"images/zdi-06 (2).jpg",title:"Fasáda",text:"Úpravy fasády."},{src:"images/zdi-06.jpg",title:"Exteriér",text:"Venkovní úpravy."},{src:"images/zdi-07 (2).jpg",title:"Dokončení",text:"Finální zednické úpravy."}].map(e=>({...e,alt:e.title}))},koupelny:{label:"Koupelny",slides:[{src:"images/koupelna-01.jpg",title:"Koupelna",text:"Rekonstrukce koupelny."},{src:"images/koupelna-02.jpg",title:"Obklady",text:"Pokládka obkladů."},{src:"images/koupelna-03.jpg",title:"Dlažba",text:"Pokládka dlažby."},{src:"images/koupelna-04.jpg",title:"Sanita",text:"Příprava pro sanitu."},{src:"images/koupelna-05.jpg",title:"Hydroizolace",text:"Aplikace hydroizolace."},{src:"images/koupelna-07.jpg",title:"Detail",text:"Detailní pohled na spáry."}].map(e=>({...e,alt:e.title}))}},N="interiery";let k=N,d=0,c=[];function D(){const e=[];return Object.values(h).forEach(t=>{e.push(...t.slides)}),e}function K(){return`
    <section id="realizace" class="gallery-section">
      <div class="container">
        
        <!-- Header -->
        <div class="section-header text-center">
          <div class="section-eyebrow">Galerie</div>
          <h2 class="section-title">Ukázky práce</h2>
          <p class="section-desc">Vyberte kategorii pro zobrazení mřížky realizací.</p>
        </div>

        <div class="gallery-wrapper">
          <!-- 1. FILTRY -->
          <div class="gallery-tabs" id="gallery-tabs">
            <!-- Tabs generated via JS -->
          </div>

          <!-- 2. CONTENT CONTAINER (Grid nebo Marquee) -->
          <div class="gallery-content" id="gallery-content">
             <!-- Zde se bude měnit obsah -->
          </div>
        </div>

      </div>

      <!-- Lightbox Modal -->
      <div class="lightbox" id="lightbox">
        <button class="lightbox-close" id="lightbox-close" aria-label="Zavřít">&times;</button>
        <button class="lightbox-prev" id="lightbox-prev" aria-label="Předchozí">&#10094;</button>
        
        <div class="lightbox-content">
          <img src="" alt="" class="lightbox-img" id="lightbox-img">
        </div>
        
        <button class="lightbox-next" id="lightbox-next" aria-label="Další">&#10095;</button>
      </div>
    </section>
  `}function H(){const e=document.getElementById("gallery-tabs"),t=document.getElementById("gallery-content"),i=document.getElementById("lightbox"),n=document.getElementById("lightbox-img"),o=document.getElementById("lightbox-close"),s=document.getElementById("lightbox-prev"),v=document.getElementById("lightbox-next");if(!e||!t)return;function j(){const a=`<button class="gallery-tab ${k==="all"?"active":""}" data-category="all">Vše (Průřez)</button>`,l=Object.entries(h).map(([r,p])=>`
        <button 
          class="gallery-tab ${r===k?"active":""}" 
          data-category="${r}"
        >
          ${p.label}
        </button>
      `).join("");e.innerHTML=a+l}function y(a){if(k=a,j(),a==="all"){const l=D();c=l,t.innerHTML=`
        <div class="marquee-wrapper">
          <div class="marquee-track">
            ${[...l,...l].map((r,p)=>`
              <div 
                class="marquee-item" 
                data-index="${p%l.length}" 
                role="button"
              >
                <img src="${r.src}" alt="${r.alt||"Reference"}" loading="lazy">
              </div>
            `).join("")}
          </div>
          <!-- Gradient Masky -->
          <div class="gradient-mask left"></div>
          <div class="gradient-mask right"></div>
        </div>
      `,t.querySelectorAll(".marquee-item").forEach(r=>{r.addEventListener("click",()=>{f(parseInt(r.dataset.index,10))})})}else{const l=h[a];if(!l)return;c=l.slides,t.innerHTML=`
        <div class="gallery-grid fade-in">
          ${c.map((r,p)=>`
            <div 
              class="gallery-card" 
              data-index="${p}" 
              role="button"
            >
              <img src="${r.src}" alt="${r.alt||"Realizace"}" loading="lazy">
            </div>
          `).join("")}
        </div>
      `,t.querySelectorAll(".gallery-card").forEach(r=>{r.addEventListener("click",()=>{f(parseInt(r.dataset.index,10))})})}}function f(a){console.log("Opening lightbox index:",a),!(a<0||a>=c.length)&&(d=a,b(),i.classList.add("visible"),document.body.style.overflow="hidden")}function m(){i.classList.remove("visible"),document.body.style.overflow=""}function b(){const a=c[d];a&&(n.src=a.src,n.alt=a.alt||"")}function z(){d=(d+1)%c.length,b()}function x(){d=(d-1+c.length)%c.length,b()}e.addEventListener("click",a=>{a.target.classList.contains("gallery-tab")&&y(a.target.dataset.category)}),i&&(o.addEventListener("click",m),v.addEventListener("click",a=>{a.stopPropagation(),z()}),s.addEventListener("click",a=>{a.stopPropagation(),x()}),i.addEventListener("click",a=>{(a.target===i||a.target.classList.contains("lightbox-content"))&&m()}),document.addEventListener("keydown",a=>{i.classList.contains("visible")&&(a.key==="Escape"&&m(),a.key==="ArrowRight"&&z(),a.key==="ArrowLeft"&&x())})),y("all")}function M(){return`
    <section id="omne" class="bento-section">
      <div class="container">
        <!-- HEADER SEKCE -->
        <div class="about-header">
          <div class="section-eyebrow">O mně</div>
          <h2 class="section-title">Kdo k vám přijede</h2>
        </div>

        <div class="bento-grid">
          
          <!-- KARTA 1: HLAVNÍ VIZITKA (FULL WIDTH TOP) -->
          <div class="bento-card bento-hero-card">
            <div class="bento-hero-content">
              <div class="bento-hero-text">
                <div class="bento-hero-header">
                  <h3>Stavař, kterého potkáte na stavbě</h3>
                  <div class="icon-badge-success">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="48" height="48" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="#22c55e" 
                      stroke-width="3" 
                      stroke-linecap="round" 
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                </div>
                <p class="bento-hero-desc">
                  Zakázku řešíme napřímo – přijedu, domluvíme rozsah a držím se toho. 
                  Žádní prostředníci, jen poctivá práce a osobní přístup.
                </p>
              </div>
              <div class="bento-hero-action">
                <a href="#kontakt" class="btn-primary bento-cta-large">
                  Mám zájem o prohlídku
                </a>
              </div>
            </div>
          </div>

          <!-- KARTA 2: BENEFITY (BOTTOM LEFT) -->
          <div class="bento-card bento-benefits">
            <h4 class="bento-card-title">Proč se na mě obrátit</h4>
            <ul class="bento-benefits-list">
              <li>
                <span class="bento-icon">✅</span>
                <div>
                  <strong>Jasná domluva</strong>
                  <span>Co si řekneme a napíšeme, to platí.</span>
                </div>
              </li>
              <li>
                <span class="bento-icon">📅</span>
                <div>
                  <strong>Termíny</strong>
                  <span>Nastupuji včas a neodcházím, dokud není hotovo.</span>
                </div>
              </li>
              <li>
                <span class="bento-icon">📷</span>
                <div>
                  <strong>Průběžné info</strong>
                  <span>Posílám fotky z postupu, abyste byli v klidu.</span>
                </div>
              </li>
            </ul>
          </div>

          <!-- KARTA 3: SLUŽBY (BOTTOM RIGHT) -->
          <div class="bento-card bento-skills">
            <h4 class="bento-card-title">Co dělám nejčastěji</h4>
            <div class="bento-tags">
              ${["Kompletní rekonstrukce","Bytová jádra","Sádrokarton","Obklady a dlažba","Nové příčky","Štuky a omítky"].map(t=>`<span class="bento-tag">${t}</span>`).join("")}
            </div>
          </div>

        </div>
      </div>
    </section>
  `}function V(){return`
    <section id="kontakt">
      <div class="container">
        <div class="contact-wrapper">
          <div class="contact-intro">
            <div class="section-eyebrow">Kontakt</div>
            <h2 class="section-title">Napište mi</h2>
            <p class="contact-text-center">
              Pár fotek nebo půdorys pomůže odhadnout práci i cenu ještě před osobní
              prohlídkou. Větší zakázky vždy předchází osobní návštěva na místě.
            </p>
          </div>

          <div class="contact-card-centered">
            <div class="contact-card-header">
              <h3>Rychlá zpráva</h3>
              <small>nebo WhatsApp</small>
            </div>

            <a
              class="whatsapp-btn"
              href="https://wa.me/${P}"
              target="_blank"
              rel="noopener"
            >
              <span>💬</span> Otevřít WhatsApp
            </a>

            <div class="contact-divider">nebo klasicky formulářem</div>

            <form id="contact-form">
              <div class="input-group">
                <label for="name">Jméno</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Jak vám mám říkat?"
                  required
                />
              </div>
              <div class="input-group">
                <label for="message">Vaše zpráva</label>
                <input type="hidden" name="_to" value="formspree@example.com"> <!-- Placeholder pro Formspree -->
                <textarea
                  id="message"
                  name="message"
                  placeholder="Co chcete předělat, kde je stavba a jak to spěchá?"
                  required
                ></textarea>
              </div>
              
              <button class="btn-primary btn-full" type="submit">Odeslat poptávku</button>
              
              <div class="contact-note center">
                Ozvu se zpravidla do dvou pracovních dnů.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  `}function Z(){const e=document.getElementById("contact-form");e&&e.addEventListener("submit",t=>{t.preventDefault(),alert("Zde doplňte vlastní zpracování formuláře (e-mail, systém atd.).")})}function q(){return`
    <footer>
      <div class="container footer-inner">
        <div>&copy; ${new Date().getFullYear()} Stavební práce – všechna práva vyhrazena.</div>
        <div>Web s reálnými fotkami z vaší práce.</div>
      </div>
    </footer>
  `}function F(){return localStorage.getItem("cookie-consent")?"":`
    <div id="cookie-banner" class="cookie-banner">
      <div class="cookie-content">
        <div class="cookie-text">
          <p>
            <strong>Používáme cookies</strong>, abychom web vylepšovali. Můžete přijmout všechny, nebo jen ty nezbytné.
            Respektujeme vaše soukromí (GDPR 2026).
          </p>
        </div>
        <div class="cookie-actions">
          <button id="cookie-accept" class="btn-cookie btn-accept">Přijmout vše</button>
          <button id="cookie-reject" class="btn-cookie btn-reject">Odmítnout vše</button>
          <button id="cookie-settings" class="btn-cookie-link">Nastavení</button>
        </div>
      </div>
    </div>
  `}function G(){const e=document.getElementById("cookie-banner"),t=document.getElementById("cookie-accept"),i=document.getElementById("cookie-reject"),n=document.getElementById("cookie-settings");if(!e)return;const o=s=>{localStorage.setItem("cookie-consent",s),e.classList.add("cookie-hidden"),setTimeout(()=>e.remove(),400),s==="all"&&window.dispatchEvent(new CustomEvent("cookie-consent-all"))};t==null||t.addEventListener("click",()=>o("all")),i==null||i.addEventListener("click",()=>o("essential")),n==null||n.addEventListener("click",()=>{alert("Zde by byla podrobná nastavení cookies. Pro tento web používáme pouze technické a analytické cookies.")})}console.log("Main.js loaded");function Y(){return`
    ${O()}
    ${T()}
    ${C()}
    ${K()}
    ${M()}
    ${V()}
    ${q()}
    ${F()}
  `}function U(){$(),w(),H(),Z(),G();const e={root:null,threshold:.15,rootMargin:"0px"},t=new IntersectionObserver((i,n)=>{i.forEach(o=>{o.isIntersecting&&(o.target.classList.add("visible"),n.unobserve(o.target))})},e);document.querySelectorAll("section:not(#uvod)").forEach(i=>{i.classList.add("reveal"),t.observe(i)})}function J(){try{const e=document.getElementById("app");e&&(e.innerHTML=Y(),U())}catch(e){console.error("CRITICAL ERROR:",e),document.body.innerHTML=`<div style="color: red; padding: 20px; text-align: center;">
      <h1>Chyba při načítání webu</h1>
      <pre>${e.toString()}</pre>
    </div>`}}document.addEventListener("DOMContentLoaded",J);
