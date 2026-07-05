(function(){
  /* ================================================================
     EDIT ONLY THIS LIST. One { } = one product.
       group  : filter/section  -> "Car Accessories" | "Men Products" | "Tech"
       badge  : small label shown on the card (e.g. "Detailing")
       url    : Amazon link (full amazon.com link preferred; short amzn.to works)
       img    : image URL
       hook   : one/two lines
       price  : optional, e.g. "$35"
       rating : 0-5     reviews : integer

     PER-PAGE EMBED OPTIONS (data-* on the <div class="rt-shop">):
       data-rt-category="Tech"       show one group only
       data-rt-pick="Ridge Wallet"   show specific product(s) by name (comma-separated)
       data-rt-limit="6"             cap the number shown
       data-rt-cols="2"              force N columns (e.g. 2 per row)
       data-rt-carousel="1"          horizontal swipe row instead of a grid
       data-rt-minimal="1"           image + title + button only (no desc/price/rating/badge)
       data-rt-cta="Shop This Deal"  custom button text
       data-rt-eyebrow / data-rt-heading / data-rt-sub   section text
  ================================================================ */
  var RT_PRODUCTS = [

    /* ---------- CAR ACCESSORIES ---------- */
    { group:"Car Accessories", badge:"Detailing", name:"Meguiar's Hybrid Ceramic Wax",
      url:"https://amzn.to/44Nza4W", img:"https://m.media-amazon.com/images/I/71zG-BEZ4hL._AC_SL1500_.jpg",
      hook:"Spray it on, rinse it off. Water beads and sheets straight off the paint — six months of gloss with a hose and a towel.",
      price:"$17", rating:4.6, reviews:4600 },
    
    { group:"Car Accessories", badge:"Detailing", name:"Chemical Guys TORQ Foam Blaster 6",
      url:"https://amzn.to/3QDFf0a", img:"https://m.media-amazon.com/images/I/81V0g6EYZqL._AC_SL1500_.jpg",
      hook:"Attaches to a regular garden hose, no pressure washer needed. Consistently rated the best foam gun for home use in real testing.",
      price:"$35-40", rating:4.5, reviews:12000 },

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
      price:"$12", rating:4.2, reviews:11000 },

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

  var RT_TAG = "revtheapy-20";

  if(!document.getElementById("rt-shop-styles")){
    var css = document.createElement("style");
    css.id = "rt-shop-styles";
    css.textContent = ""
    + "@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@400;600;700&display=swap');"
    + ".rt-shop{--b:#0d0d0d;--p:#161616;--r:#E03E2D;--i:#f0f0ee;--m:#8a8a88;"
    +   "background:var(--b);color:var(--i);font-family:'Barlow',system-ui,sans-serif;"
    +   "max-width:1120px;margin:0 auto;padding:36px 16px 28px;box-sizing:border-box;}"
    + ".rt-shop *{box-sizing:border-box;}"
    + ".rt-shop-eyebrow{font-weight:700;letter-spacing:.26em;text-transform:uppercase;font-size:11px;color:var(--r);margin:0 0 8px;text-align:center;}"
    + ".rt-shop-title{font-family:'Bebas Neue',sans-serif;font-size:clamp(28px,7vw,50px);line-height:.95;letter-spacing:.02em;margin:0 0 20px;text-transform:uppercase;text-align:center;}"
    + ".rt-shop-sub{color:var(--m);font-size:14px;line-height:1.4;margin:0 auto 22px;max-width:56ch;text-align:center;}"
    + ".rt-shop-grid{display:grid;gap:12px;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));}"
    + ".rt-shop-grid.rt-solo{grid-template-columns:minmax(0,220px);justify-content:center;}"
    + ".rt-shop-carousel{display:flex;gap:12px;overflow-x:auto;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;padding-bottom:6px;}"
    + ".rt-shop-carousel .rt-shop-card{flex:0 0 46%;min-width:160px;scroll-snap-align:start;}"
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
    + ".rt-shop-card.rt-min .rt-shop-body{gap:10px;align-items:center;text-align:center;}"
    + ".rt-shop-card.rt-min .rt-shop-cta{align-self:center;width:auto;padding:11px 20px;}"
    + ".rt-shop-card:focus-visible{outline:2px solid var(--r);outline-offset:3px;}"
    + ".rt-shop-disc{margin:20px 0 0;font-size:11px;color:#6a6a68;text-align:center;}"
    + ".rt-shop-empty{color:var(--m);font-size:14px;padding:8px 0;}"
    + "@media(prefers-reduced-motion:reduce){.rt-shop-card,.rt-shop-media img{transition:none;}.rt-shop-card:hover{transform:none;}}";
    document.head.appendChild(css);
  }

  function isShort(host){ return /(^|\.)amzn\.(to|eu)$/.test(host) || host==="a.co"; }
  function withTag(url){
    try{ var u=new URL(url); if(isShort(u.hostname)) return url;
      if(!u.searchParams.get("tag")) u.searchParams.set("tag",RT_TAG); return u.toString(); }
    catch(e){ return url; }
  }
  function stars(r){ var f=Math.floor(r),h=(r-f)>=0.25&&(r-f)<0.75,o=""; for(var i=0;i<f;i++)o+="\u2605"; if(h)o+="\u00BD"; while(o.replace("\u00BD","").length<(h?4:5))o+="\u2606"; return o; }
  function esc(s){ var d=document.createElement("div"); d.textContent=String(s); return d.innerHTML; }

  function card(p,o){
    o=o||{};
    var link=withTag(p.url);
    var label=p.badge||p.group||p.category||"";
    var cta=o.cta||"View on Amazon \u2192";
    var media=p.img?('<img src="'+esc(p.img)+'" alt="'+esc(p.name)+'" loading="lazy">'):('<span class="rt-ph">'+esc(p.name)+'</span>');
    if(o.minimal){
      return '<a class="rt-shop-card rt-min" href="'+esc(link)+'" target="_blank" rel="sponsored nofollow noopener">'
        + '<div class="rt-shop-media">'+media+'</div>'
        + '<div class="rt-shop-body"><h3 class="rt-shop-name">'+esc(p.name)+'</h3>'
        + '<span class="rt-shop-cta">'+esc(cta)+'</span></div></a>';
    }
    return '<a class="rt-shop-card" href="'+esc(link)+'" target="_blank" rel="sponsored nofollow noopener">'
      + '<div class="rt-shop-media"><span class="rt-shop-badge">'+esc(label)+'</span>'+media+'</div>'
      + '<div class="rt-shop-body">'
      + '<div class="rt-shop-rating"><span class="rt-shop-stars">'+stars(p.rating)+'</span><span>'+p.rating.toFixed(1)+' \u00B7 '+p.reviews.toLocaleString()+'+ reviews</span></div>'
      + '<h3 class="rt-shop-name">'+esc(p.name)+'</h3>'
      + '<p class="rt-shop-hook">'+esc(p.hook)+'</p>'
      + (p.price?('<div class="rt-shop-price">'+esc(p.price)+' <span>on Amazon</span></div>'):'')
      + '<span class="rt-shop-cta">'+esc(cta)+'</span>'
      + '</div></a>';
  }

  function render(el){
    var d=el.dataset, list=RT_PRODUCTS.slice();
    if(d.rtCategory){ var key=d.rtCategory.toLowerCase(); list=list.filter(function(p){return String(p.group||p.category||"").toLowerCase()===key;}); }
    if(d.rtPick){
      var picks=d.rtPick.split(",").map(function(s){return s.trim().toLowerCase();});
      list=picks.map(function(nm){ for(var i=0;i<list.length;i++){ if(list[i].name.toLowerCase()===nm) return list[i]; } return null; }).filter(Boolean);
    }
    if(d.rtLimit) list=list.slice(0, parseInt(d.rtLimit,10)||list.length);
    var minimal = (d.rtMinimal==="1"||d.rtMinimal==="true");
    var cta = d.rtCta||null;
    var head="";
    if(d.rtEyebrow) head+='<p class="rt-shop-eyebrow">'+esc(d.rtEyebrow)+'</p>';
    if(d.rtHeading) head+='<h2 class="rt-shop-title">'+esc(d.rtHeading)+'</h2>';
    if(d.rtSub)     head+='<p class="rt-shop-sub">'+esc(d.rtSub)+'</p>';
    var cards=list.map(function(p){return card(p,{minimal:minimal,cta:cta});}).join("");
    var open,close;
    if(d.rtCarousel==="1"||d.rtCarousel==="true"){ open='<div class="rt-shop-carousel">'; close='</div>'; }
    else {
      var cls="rt-shop-grid", style="";
      if(d.rtCols){ var n=parseInt(d.rtCols,10)||0;
        if(n===1) cls+=" rt-solo";
        else if(n>1) style=' style="grid-template-columns:repeat('+n+',1fr)"';
      }
      open='<div class="'+cls+'"'+style+'>'; close='</div>';
    }
    var body = list.length ? (open+cards+close) : '<p class="rt-shop-empty">No products in this category yet.</p>';
    el.innerHTML = head + body + '<p class="rt-shop-disc">As an Amazon Associate, Rev.Therapy earns from qualifying purchases.</p>';
    el.setAttribute("data-rt-done","1");
  }

  /* ---- gear-card renderer: outputs the site's existing rt-gear markup ---- */
  function gearCard(p){
    var link=withTag(p.url);
    return '<div class="rt-gear-card">'
      + '<img class="rt-gear-img" src="'+esc(p.img)+'" alt="'+esc(p.name)+'" loading="lazy" />'
      + '<div class="rt-gear-badge-wrap"><span class="rt-gear-badge">'+esc(p.badge||p.group||"")+'</span></div>'
      + '<div class="rt-gear-body">'
      + '<div class="rt-gear-name">'+esc(p.name)+'</div>'
      + '<div class="rt-gear-desc">'+esc(p.hook)+'</div>'
      + '<div class="rt-gear-stars"><span class="stars">\u2605\u2605\u2605\u2605\u2605</span><span class="count">'+p.rating.toFixed(1)+' \u00B7 '+p.reviews.toLocaleString()+'+ reviews</span></div>'
      + '<div class="rt-gear-footer">'
      + (p.price?('<div class="rt-gear-price">'+esc(p.price)+' <small>on Amazon</small></div>'):'')
      + '<a href="'+esc(link)+'" target="_blank" rel="sponsored nofollow noopener" class="rt-gear-btn">View \u2192</a>'
      + '</div></div></div>';
  }
  function gearRender(el){
    var val=(el.getAttribute("data-rt-gear")||"").toLowerCase(), list=RT_PRODUCTS.slice();
    var lim=parseInt(el.getAttribute("data-rt-limit"),10); if(isNaN(lim)) lim=0;
    if(val==="featured"){ list=list.filter(function(p){return p.featured;}); }
    else if(val==="latest" || val===""){ if(!lim) lim=3; }   /* latest = top of the list */
    else { list=list.filter(function(p){return String(p.group||p.category||"").toLowerCase()===val;}); }
    if(lim>0) list=list.slice(0, lim);
    el.innerHTML=list.map(gearCard).join("");
    el.setAttribute("data-rt-done","1");
  }

  /* ---- pcard renderer: outputs the Gear page's rt-pcard markup ---- */
  function pcardCard(p, extra){
    var link=withTag(p.url);
    return '<div class="rt-pcard'+(extra?' rt-extra':'')+'">'
      + '<img class="rt-pcard-img" src="'+esc(p.img)+'" alt="'+esc(p.name)+'" loading="lazy" />'
      + '<div class="rt-pcard-badge-wrap"><span class="rt-pcard-badge">'+esc(p.badge||p.group||"")+'</span></div>'
      + '<div class="rt-pcard-body">'
      + '<div class="rt-pcard-name">'+esc(p.name)+'</div>'
      + '<div class="rt-pcard-desc">'+esc(p.hook)+'</div>'
      + '<div class="rt-pcard-stars"><span class="stars">\u2605\u2605\u2605\u2605\u2605</span><span class="count">'+p.rating.toFixed(1)+' \u00B7 '+p.reviews.toLocaleString()+'+ reviews</span></div>'
      + '<div class="rt-pcard-footer">'
      + (p.price?('<div class="rt-pcard-price">'+esc(p.price)+' <small>on Amazon</small></div>'):'')
      + '<a href="'+esc(link)+'" target="_blank" rel="sponsored nofollow noopener" class="rt-pcard-btn">View \u2192</a>'
      + '</div></div></div>';
  }
  function pcardRender(el){
    var val=(el.getAttribute("data-rt-pcards")||"").toLowerCase();
    var top=parseInt(el.getAttribute("data-rt-top"),10); if(isNaN(top)||top<0) top=3;
    var list=RT_PRODUCTS.filter(function(p){return String(p.group||p.category||"").toLowerCase()===val;});
    el.innerHTML=list.map(function(p,i){return pcardCard(p, i>=top);}).join("");
    el.setAttribute("data-rt-done","1");
  }

  function boot(){
    var n=document.querySelectorAll(".rt-shop:not([data-rt-done])"); for(var i=0;i<n.length;i++) render(n[i]);
    var g=document.querySelectorAll(".rt-gear-grid[data-rt-gear]:not([data-rt-done])"); for(var j=0;j<g.length;j++) gearRender(g[j]);
    var pc=document.querySelectorAll(".rt-pgrid[data-rt-pcards]:not([data-rt-done])"); for(var k=0;k<pc.length;k++) pcardRender(pc[k]);
  }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",boot); else boot();
})();
