<!-- ============================================================
     REV.THERAPY — SINGLE-SOURCE PRODUCT ENGINE (preview)
     This page shows the rendered result AND contains the code.

     HOW IT WORKS (read once):
     1. Everything inside the <script id="rt-products-src"> tag at the
        bottom is your ONE file. Save it as  products.js  and host it
        (GitHub Pages steps are in the chat).
     2. On EACH page in Systeme.io, paste a Raw HTML block with ONE
        mount div + ONE script tag, e.g.:

          <div class="rt-shop" data-rt-limit="4"
               data-rt-heading="Gear We Run"></div>
          <script src="https://YOURNAME.github.io/revtherapy-assets/products.js"></script>

     3. To add/remove a product later: edit products.js ONLY.
        Every page updates automatically.

     Per-page options (data-* attributes on the div):
       data-rt-limit     -> show only N products (e.g. "4" on homepage)
       data-rt-category  -> show one niche only (e.g. "Detailing")
       data-rt-heading   -> section title
       data-rt-eyebrow   -> small red label above title
       data-rt-sub       -> one-line subtitle
============================================================ -->

<div style="background:#0d0d0d;min-height:100vh;">

  <!-- Homepage example: 4 featured -->
  <div class="rt-shop" data-rt-limit="4"
       data-rt-eyebrow="Performance • Luxury • Passion"
       data-rt-heading="Gear We Actually Run"
       data-rt-sub="Hand-picked kit for the obsessed. Every pick is 4 stars or more with the reviews to back it."></div>

</div>

<!-- ============================================================
     SAVE EVERYTHING INSIDE THIS SCRIPT AS  products.js
============================================================ -->
<script id="rt-products-src">
(function(){
  /* ================================================================
     EDIT ONLY THIS LIST. One { } = one product.
       url    : plain Amazon product URL (your tag is added for you)
       img    : image URL from Amazon SiteStripe or your imgbb host
                (leave "" to show a placeholder until you add one)
       hook   : ONE line - sell the feeling, not the specs
       rating : 0-5     reviews : integer
  ================================================================ */
  var RT_PRODUCTS = [
    { name:"Foaming Snow Cannon Kit", category:"Detailing",
      url:"https://www.amazon.com/dp/REPLACE1", img:"",
      hook:"Thick clinging foam that lifts grime before you touch the paint. Swirl-free, zero effort.",
      rating:4.6, reviews:3120 },

    { name:"Magnetic Dash Phone Mount", category:"Tech",
      url:"https://www.amazon.com/dp/REPLACE2", img:"",
      hook:"Snaps in one-handed and holds through potholes and hard launches. No more sliding dash.",
      rating:4.7, reviews:8940 },

    { name:"Matte Clay Hair Paste", category:"Grooming",
      url:"https://www.amazon.com/dp/REPLACE3", img:"",
      hook:"All-day hold, dry matte finish. Restyles with water, never greasy, never crunchy.",
      rating:4.5, reviews:5210 },

    { name:"Adjustable Dumbbell (Single)", category:"Fitness",
      url:"https://www.amazon.com/dp/REPLACE4", img:"",
      hook:"A full rack in one handle. Swap weight in seconds - built for tight home setups.",
      rating:4.8, reviews:12760 }
  ];

  var RT_TAG = "revtheapy-20";  /* your Amazon store tag */

  /* ---- inject styles once ---- */
  if(!document.getElementById("rt-shop-styles")){
    var css = document.createElement("style");
    css.id = "rt-shop-styles";
    css.textContent = ""
    + "@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@400;600;700&display=swap');"
    + ".rt-shop{--b:#0d0d0d;--p:#161616;--r:#E03E2D;--i:#f0f0ee;--m:#8a8a88;"
    +   "background:var(--b);color:var(--i);font-family:'Barlow',system-ui,sans-serif;"
    +   "max-width:1120px;margin:0 auto;padding:40px 16px 32px;box-sizing:border-box;}"
    + ".rt-shop *{box-sizing:border-box;}"
    + ".rt-shop-eyebrow{font-weight:700;letter-spacing:.26em;text-transform:uppercase;font-size:11px;color:var(--r);margin:0 0 8px;}"
    + ".rt-shop-title{font-family:'Bebas Neue',sans-serif;font-size:clamp(30px,7vw,54px);line-height:.95;letter-spacing:.02em;margin:0 0 6px;text-transform:uppercase;}"
    + ".rt-shop-sub{color:var(--m);font-size:14px;line-height:1.4;margin:0 0 24px;max-width:60ch;}"
    + ".rt-shop-grid{display:grid;gap:12px;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));}"
    + ".rt-shop-card{display:flex;flex-direction:column;background:var(--p);border:1px solid #262626;text-decoration:none;color:inherit;transition:transform .18s,border-color .18s;}"
    + ".rt-shop-card:hover,.rt-shop-card:focus-within{transform:translateY(-4px);border-color:var(--r);}"
    + ".rt-shop-media{position:relative;aspect-ratio:1/1;overflow:hidden;background:linear-gradient(135deg,#1c1c1c,#0d0d0d);display:flex;align-items:center;justify-content:center;}"
    + ".rt-shop-media img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .35s;}"
    + ".rt-shop-card:hover .rt-shop-media img{transform:scale(1.05);}"
    + ".rt-shop-media .rt-ph{font-family:'Bebas Neue',sans-serif;font-size:18px;letter-spacing:.05em;color:#3a3a3a;text-transform:uppercase;padding:0 10px;text-align:center;}"
    + ".rt-shop-badge{position:absolute;top:8px;left:8px;background:var(--r);color:#0d0d0d;font-weight:700;font-size:9px;letter-spacing:.12em;text-transform:uppercase;padding:4px 7px;}"
    + ".rt-shop-body{padding:12px;display:flex;flex-direction:column;gap:6px;flex:1;}"
    + ".rt-shop-rating{display:flex;align-items:center;gap:6px;font-size:11px;color:var(--m);flex-wrap:wrap;}"
    + ".rt-shop-stars{color:var(--r);letter-spacing:1px;font-size:12px;}"
    + ".rt-shop-name{font-family:'Bebas Neue',sans-serif;font-size:20px;line-height:1.02;letter-spacing:.02em;margin:0;text-transform:uppercase;}"
    + ".rt-shop-hook{font-size:13px;line-height:1.4;color:#c9c9c7;margin:0;flex:1;}"
    + ".rt-shop-cta{margin-top:6px;display:flex;align-items:center;justify-content:center;min-height:44px;background:var(--r);color:#0d0d0d;font-weight:700;letter-spacing:.07em;text-transform:uppercase;font-size:12px;padding:8px 10px;border:1px solid var(--r);transition:background .15s,color .15s;}"
    + ".rt-shop-card:hover .rt-shop-cta{background:transparent;color:var(--r);}"
    + ".rt-shop-card:focus-visible{outline:2px solid var(--r);outline-offset:3px;}"
    + ".rt-shop-disc{margin:22px 0 0;font-size:11px;color:#6a6a68;}"
    + "@media(prefers-reduced-motion:reduce){.rt-shop-card,.rt-shop-media img{transition:none;}.rt-shop-card:hover{transform:none;}}";
    document.head.appendChild(css);
  }

  /* ---- helpers ---- */
  function withTag(url){
    try{ var u=new URL(url); if(!u.searchParams.get("tag")) u.searchParams.set("tag",RT_TAG); return u.toString(); }
    catch(e){ return url + (url.indexOf("?")>-1?"&":"?") + "tag=" + RT_TAG; }
  }
  function stars(r){ var f=Math.floor(r),h=(r-f)>=0.25&&(r-f)<0.75,o=""; for(var i=0;i<f;i++)o+="\u2605"; if(h)o+="\u00BD"; while(o.replace("\u00BD","").length<(h?4:5))o+="\u2606"; return o; }
  function esc(s){ var d=document.createElement("div"); d.textContent=String(s); return d.innerHTML; }

  function card(p){
    var link=withTag(p.url);
    var media=p.img?('<img src="'+esc(p.img)+'" alt="'+esc(p.name)+'" loading="lazy">'):('<span class="rt-ph">'+esc(p.name)+'</span>');
    return '<a class="rt-shop-card" href="'+esc(link)+'" target="_blank" rel="sponsored nofollow noopener">'
      + '<div class="rt-shop-media"><span class="rt-shop-badge">'+esc(p.category)+'</span>'+media+'</div>'
      + '<div class="rt-shop-body">'
      + '<div class="rt-shop-rating"><span class="rt-shop-stars">'+stars(p.rating)+'</span><span>'+p.rating.toFixed(1)+' \u00B7 '+p.reviews.toLocaleString()+' reviews</span></div>'
      + '<h3 class="rt-shop-name">'+esc(p.name)+'</h3>'
      + '<p class="rt-shop-hook">'+esc(p.hook)+'</p>'
      + '<span class="rt-shop-cta">View on Amazon \u2192</span>'
      + '</div></a>';
  }

  function render(el){
    var d=el.dataset, list=RT_PRODUCTS.slice();
    if(d.rtCategory) list=list.filter(function(p){return p.category.toLowerCase()===d.rtCategory.toLowerCase();});
    if(d.rtLimit) list=list.slice(0, parseInt(d.rtLimit,10)||list.length);
    var head="";
    if(d.rtEyebrow) head+='<p class="rt-shop-eyebrow">'+esc(d.rtEyebrow)+'</p>';
    if(d.rtHeading) head+='<h2 class="rt-shop-title">'+esc(d.rtHeading)+'</h2>';
    if(d.rtSub)     head+='<p class="rt-shop-sub">'+esc(d.rtSub)+'</p>';
    el.innerHTML = head
      + '<div class="rt-shop-grid">'+list.map(card).join("")+'</div>'
      + '<p class="rt-shop-disc">As an Amazon Associate, Rev.Therapy earns from qualifying purchases.</p>';
    el.setAttribute("data-rt-done","1");
  }

  function boot(){
    var nodes=document.querySelectorAll(".rt-shop:not([data-rt-done])");
    for(var i=0;i<nodes.length;i++) render(nodes[i]);
  }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",boot); else boot();
})();
</script>
