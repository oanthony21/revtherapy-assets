(function(){
  /* ================================================================
     EDIT ONLY THIS LIST. One { } = one product.
       group  : filter/section  -> "Car Accessories" | "Men Products" | "Tech"
       badge  : small label shown on the card (e.g. "Detailing")
       url    : Amazon link (full amazon.com link preferred; short amzn.to works)
       img    : image URL
       hook   : one/two lines - sell it
       price  : optional, e.g. "$35"  (see note about keeping these current)
       rating : 0-5     reviews : integer
  ================================================================ */
  var RT_PRODUCTS = [

    /* ---------- CAR ACCESSORIES ---------- */
    { group:"Car Accessories", badge:"Detailing", name:"Foam Cannon Kit",
      url:"https://amzn.to/3QBFOro", img:"https://m.media-amazon.com/images/I/71wQ+NQlUVL._AC_SL1500_.jpg",
      hook:"Best budget detailing setup. Thick foam, easy to use, no pressure washer needed.",
      price:"$35", rating:4.7, reviews:12400 },

    { group:"Car Accessories", badge:"Safety", name:"Rove R2-4K Dash Cam",
      url:"https://amzn.to/4ejRp8h", img:"https://m.media-amazon.com/images/I/91AtC7jFIZL._AC_SX679_.jpg",
      hook:"Crystal clear 4K footage, night vision, loop recording. Essential for every driver.",
      price:"$109", rating:4.5, reviews:8200 },

    { group:"Car Accessories", badge:"Diagnostics", name:"ANCEL AD410 OBD2 Scanner",
      url:"https://amzn.to/4wjGqSX", img:"https://m.media-amazon.com/images/I/81S0XgJq1iL._AC_SL1500_.jpg",
      hook:"Read and clear engine codes instantly. Know your car better than your mechanic.",
      price:"$40", rating:4.6, reviews:21000 },

    { group:"Car Accessories", badge:"Detailing", name:"Meguiar's Scratch-X 2.0",
      url:"https://amzn.to/49hVtCs", img:"https://m.media-amazon.com/images/I/81wqa5jjhCL._SL1500_.jpg",
      hook:"Removes light scratches, swirl marks and blemishes in one step. No machine needed. Works on all paint colours.",
      price:"$12", rating:4.5, reviews:18000 },

    { group:"Car Accessories", badge:"Detailing", name:"PULIDIKI Car Cleaning Gel",
      url:"https://amzn.to/4tCsCA5", img:"https://m.media-amazon.com/images/I/71R0gev+0zL._AC_SL1500_.jpg",
      hook:"Gets into every vent, gap and crevice. Picks up dust and debris instantly. 2 pack, reusable.",
      price:"$9.99", rating:4.5, reviews:30000 },

    { group:"Car Accessories", badge:"Safety", name:"Amazon Basics Emergency Escape Tool",
      url:"https://amzn.to/4e7K76M", img:"https://m.media-amazon.com/images/I/81wWdaTkjrL._AC_SX679_.jpg",
      hook:"Breaks car windows and cuts seat belts in emergencies. Spring-loaded, includes mounting bracket. 2-pack.",
      price:"$8.99", rating:4.7, reviews:25000 },

    /* ---------- MEN PRODUCTS ---------- */
    { group:"Men Products", badge:"Grooming", name:"Manscaped Luxury Package 4.0",
      url:"https://amzn.to/4n5MzOh", img:"https://m.media-amazon.com/images/I/71UIONutv3L._AC_SL1500_.jpg",
      hook:"The complete men's grooming kit. Trimmer, body wash, deodorant and nail clippers, all in one.",
      price:"$80", rating:4.6, reviews:45000 },

    { group:"Men Products", badge:"EDC", name:"Ridge Wallet",
      url:"https://amzn.to/4cNChyI", img:"https://m.media-amazon.com/images/I/81AY4EIeK5L._AC_SL1500_.jpg",
      hook:"The wallet that put minimalist carry on the map. RFID blocking, slim, built to last.",
      price:"$95", rating:4.5, reviews:32000 },

    { group:"Men Products", badge:"Grooming", name:"Viking Revolution Beard Kit",
      url:"https://amzn.to/3QBbP2R", img:"https://m.media-amazon.com/images/I/71nxczoiw5L._SX679_.jpg",
      hook:"Everything you need to keep your beard sharp. Oil, balm, brush, comb and scissors included.",
      price:"$25", rating:4.5, reviews:28000 },

    /* ---------- TECH ---------- */
    { group:"Tech", badge:"CarPlay", name:"Carlinkit Wireless CarPlay Adapter",
      url:"https://amzn.to/4gd0nFa", img:"https://m.media-amazon.com/images/I/61QCvBu+VcL._AC_SL1202_.jpg",
      hook:"Converts wired CarPlay to wireless in 2 minutes. Auto-connects every start. No more cables.",
      price:"$43.99", rating:4.5, reviews:15000 },

    { group:"Tech", badge:"MagSafe", name:"Anker MagSafe Power Bank",
      url:"https://amzn.to/3PgS9kg", img:"https://m.media-amazon.com/images/I/51tLiKYI4DL._AC_SL1500_.jpg",
      hook:"Qi2 certified 15W wireless charging. Ultra-slim magnetic design, snaps to your iPhone.",
      price:"$55", rating:4.6, reviews:12000 },

    { group:"Tech", badge:"Fast Charge", name:"INIU 45W Power Bank",
      url:"https://amzn.to/3P3Uwqq", img:"https://m.media-amazon.com/images/I/71jwU6KZMiL._AC_SL1500_.jpg",
      hook:"10,000mAh, flight-safe, attached USB-C cable. Works with iPhone and Samsung. Small but powerful.",
      price:"$30", rating:4.6, reviews:24000 },

    { group:"Tech", badge:"Charging", name:"Anker 30W Nano Power Bank",
      url:"https://amzn.to/4eoGk5W", img:"https://m.media-amazon.com/images/I/51YYKgven8L._AC_SL1450_.jpg",
      hook:"10,000mAh, built-in USB-C cable, battery display. Fast, compact and reliable on every trip.",
      price:"$70", rating:4.7, reviews:18000 }
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
    + ".rt-shop-media{position:relative;aspect-ratio:1/1;overflow:hidden;background:#fff;display:flex;align-items:center;justify-content:center;}"
    + ".rt-shop-media img{width:100%;height:100%;object-fit:contain;display:block;transition:transform .35s;}"
    + ".rt-shop-card:hover .rt-shop-media img{transform:scale(1.05);}"
    + ".rt-shop-media .rt-ph{font-family:'Bebas Neue',sans-serif;font-size:18px;letter-spacing:.05em;color:#bbb;text-transform:uppercase;padding:0 10px;text-align:center;}"
    + ".rt-shop-badge{position:absolute;top:8px;left:8px;background:var(--r);color:#0d0d0d;font-weight:700;font-size:9px;letter-spacing:.12em;text-transform:uppercase;padding:4px 7px;}"
    + ".rt-shop-body{padding:12px;display:flex;flex-direction:column;gap:6px;flex:1;}"
    + ".rt-shop-rating{display:flex;align-items:center;gap:6px;font-size:11px;color:var(--m);flex-wrap:wrap;}"
    + ".rt-shop-stars{color:var(--r);letter-spacing:1px;font-size:12px;}"
    + ".rt-shop-name{font-family:'Bebas Neue',sans-serif;font-size:20px;line-height:1.02;letter-spacing:.02em;margin:0;text-transform:uppercase;}"
    + ".rt-shop-hook{font-size:13px;line-height:1.4;color:#c9c9c7;margin:0;flex:1;}"
    + ".rt-shop-price{font-family:'Bebas Neue',sans-serif;font-size:20px;letter-spacing:.03em;color:var(--i);margin-top:2px;}"
    + ".rt-shop-price span{font-family:'Barlow';font-size:11px;font-weight:600;color:var(--m);letter-spacing:.04em;}"
    + ".rt-shop-cta{margin-top:6px;display:flex;align-items:center;justify-content:center;min-height:44px;background:var(--r);color:#0d0d0d;font-weight:700;letter-spacing:.07em;text-transform:uppercase;font-size:12px;padding:8px 10px;border:1px solid var(--r);transition:background .15s,color .15s;}"
    + ".rt-shop-card:hover .rt-shop-cta{background:transparent;color:var(--r);}"
    + ".rt-shop-card:focus-visible{outline:2px solid var(--r);outline-offset:3px;}"
    + ".rt-shop-disc{margin:22px 0 0;font-size:11px;color:#6a6a68;}"
    + ".rt-shop-empty{color:var(--m);font-size:14px;padding:8px 0;}"
    + "@media(prefers-reduced-motion:reduce){.rt-shop-card,.rt-shop-media img{transition:none;}.rt-shop-card:hover{transform:none;}}";
    document.head.appendChild(css);
  }

  /* ---- helpers ---- */
  function isShort(host){ return /(^|\.)amzn\.(to|eu)$/.test(host) || host==="a.co"; }
  function withTag(url){
    try{
      var u=new URL(url);
      if(isShort(u.hostname)) return url;          /* short links are already tagged */
      if(!u.searchParams.get("tag")) u.searchParams.set("tag",RT_TAG);
      return u.toString();
    }catch(e){ return url; }
  }
  function stars(r){ var f=Math.floor(r),h=(r-f)>=0.25&&(r-f)<0.75,o=""; for(var i=0;i<f;i++)o+="\u2605"; if(h)o+="\u00BD"; while(o.replace("\u00BD","").length<(h?4:5))o+="\u2606"; return o; }
  function esc(s){ var d=document.createElement("div"); d.textContent=String(s); return d.innerHTML; }

  function card(p){
    var link=withTag(p.url);
    var label=p.badge||p.group||p.category||"";
    var media=p.img?('<img src="'+esc(p.img)+'" alt="'+esc(p.name)+'" loading="lazy">'):('<span class="rt-ph">'+esc(p.name)+'</span>');
    return '<a class="rt-shop-card" href="'+esc(link)+'" target="_blank" rel="sponsored nofollow noopener">'
      + '<div class="rt-shop-media"><span class="rt-shop-badge">'+esc(label)+'</span>'+media+'</div>'
      + '<div class="rt-shop-body">'
      + '<div class="rt-shop-rating"><span class="rt-shop-stars">'+stars(p.rating)+'</span><span>'+p.rating.toFixed(1)+' \u00B7 '+p.reviews.toLocaleString()+'+ reviews</span></div>'
      + '<h3 class="rt-shop-name">'+esc(p.name)+'</h3>'
      + '<p class="rt-shop-hook">'+esc(p.hook)+'</p>'
      + (p.price?('<div class="rt-shop-price">'+esc(p.price)+' <span>on Amazon</span></div>'):'')
      + '<span class="rt-shop-cta">View on Amazon \u2192</span>'
      + '</div></a>';
  }

  function render(el){
    var d=el.dataset, list=RT_PRODUCTS.slice();
    if(d.rtCategory){ var key=d.rtCategory.toLowerCase(); list=list.filter(function(p){return String(p.group||p.category||"").toLowerCase()===key;}); }
    if(d.rtLimit) list=list.slice(0, parseInt(d.rtLimit,10)||list.length);
    var head="";
    if(d.rtEyebrow) head+='<p class="rt-shop-eyebrow">'+esc(d.rtEyebrow)+'</p>';
    if(d.rtHeading) head+='<h2 class="rt-shop-title">'+esc(d.rtHeading)+'</h2>';
    if(d.rtSub)     head+='<p class="rt-shop-sub">'+esc(d.rtSub)+'</p>';
    var body = list.length ? ('<div class="rt-shop-grid">'+list.map(card).join("")+'</div>')
                           : ('<p class="rt-shop-empty">No products in this category yet.</p>');
    el.innerHTML = head + body
      + '<p class="rt-shop-disc">As an Amazon Associate, Rev.Therapy earns from qualifying purchases.</p>';
    el.setAttribute("data-rt-done","1");
  }

  function boot(){
    var nodes=document.querySelectorAll(".rt-shop:not([data-rt-done])");
    for(var i=0;i<nodes.length;i++) render(nodes[i]);
  }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",boot); else boot();
})();
