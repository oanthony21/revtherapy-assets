// Rev.Therapy — single-source product catalog
// Add a product here and it renders everywhere automatically.
// Schema: { group, badge, name, url, img, hook, price, rating, reviews, article }
//   - rating & reviews are RAW NUMBERS (not strings)
//   - price is a string with the $ sign
//   - article is the full URL to that product's review (card links here)

const RT_PRODUCTS = [

  // ---------- CAR ACCESSORIES ----------
  { group:"Car Accessories", badge:"Emergency", name:"NOCO Boost Plus GB40 Jump Starter",
    url:"https://amzn.to/4gKQpLA", img:"https://m.media-amazon.com/images/I/91PF8cxu2ML._AC_SL1500_.jpg",
    hook:"1000 amps that live in your glovebox. Clamps on, green light, engine turns over — no second car, no cables, no waiting for a tow.",
    price:"$100", rating:4.6, reviews:128000,
    article:"https://www.revtherapy.co/blog/noco-gb40-jump-starter" },

  { group:"Car Accessories", badge:"Detailing", name:"Meguiar's Hybrid Ceramic Wax",
    url:"https://amzn.to/3QYALBm", img:"https://m.media-amazon.com/images/I/61a2y1FCTDL._AC_SL1500_.jpg",
    hook:"Spray-on ceramic protection in minutes. Wet, rinse, done — water beads for months, no buffing, no swirls.",
    price:"$20", rating:4.7, reviews:35000,
    article:"https://www.revtherapy.co/blog/meguiar-hybrid-ceramic-wax-review" },

  { group:"Car Accessories", badge:"Detailing", name:"PULIDIKI Car Cleaning Gel",
    url:"https://amzn.to/4tCsCA5", img:"https://m.media-amazon.com/images/I/71R0gev+0zL._AC_SL1500_.jpg",
    hook:"Gets into every vent, gap and crevice. Picks up dust, dirt and debris instantly. 2 pack — reusable and biodegradable.",
    price:"$9.99", rating:4.5, reviews:30000,
    article:"https://www.revtherapy.co/blog/car-cleaning-gel-hack" },

  { group:"Car Accessories", badge:"Safety", name:"Amazon Basics Emergency Escape Tool",
    url:"https://amzn.to/4e7K76M", img:"https://m.media-amazon.com/images/I/81wWdaTkjrL._AC_SX679_.jpg",
    hook:"Breaks car windows and cuts seat belts in emergencies. Spring-loaded, bright orange, includes mounting bracket. 2-pack.",
    price:"$8.99", rating:4.7, reviews:25000,
    article:"https://www.revtherapy.co/blog/emergency-escape-tool" },

  { group:"Car Accessories", badge:"Safety", name:"AstroAI Digital Tire Pressure Gauge",
    url:"https://amzn.to/4gmJLu9", img:"https://m.media-amazon.com/images/I/71k7ETf0DAL._SL1500_.jpg",
    hook:"Your tires can look fine and still be dangerously low. This $8 gauge catches it in seconds — backlit screen, lighted nozzle, reads up to 150 PSI.",
    price:"$7.99", rating:4.7, reviews:90000,
    article:"https://www.revtherapy.co/blog/tire-pressure-gauge" },

  // ---------- TECH ----------
  { group:"Tech", badge:"CarPlay", name:"Carlinkit Wireless CarPlay Adapter",
    url:"https://amzn.to/4gd0nFa", img:"https://m.media-amazon.com/images/I/61QCvBu+VcL._AC_SL1202_.jpg",
    hook:"Converts wired CarPlay to wireless in 2 minutes. Auto-connects every time you start the engine. No more cables.",
    price:"$43.99", rating:4.5, reviews:15000,
    article:"https://www.revtherapy.co/blog/wireless-carplay-adapter" },

  { group:"Tech", badge:"Car Tech", name:"LISEN MagSafe Car Vent Mount",
    url:"https://amzn.to/4gI62mp", img:"https://m.media-amazon.com/images/I/61E+g+pJ9dL._AC_SL1000_.jpg",
    hook:"Suction cups leave marks, clamps block your vents. This one snaps your phone on with a magnet, sits flush and low, and keeps your dashboard clean.",
    price:"$18.99", rating:4.6, reviews:40000,
    article:"https://www.revtherapy.co/blog/magsafe-car-mount" },

  // ---------- MEN PRODUCTS ----------
  { group:"Men Products", badge:"Grooming", name:"Manscaped Perfect Package 4.0",
    url:"https://amzn.to/4n5MzOh", img:"https://m.media-amazon.com/images/I/71UIONutv3L._AC_SL1500_.jpg",
    hook:"Complete body grooming kit — the Lawn Mower 4.0 trimmer with SkinSafe ceramic blades, plus deodorant, body wash, nail kit and travel bag.",
    price:"$65", rating:4.6, reviews:45000,
    article:"https://www.revtherapy.co/blog/best-grooming-kits-2026" },

  { group:"Men Products", badge:"Grooming", name:"Viking Revolution Ultimate Beard Kit",
    url:"https://amzn.to/3QBbP2R", img:"https://m.media-amazon.com/images/I/71nxczoiw5L._SX679_.jpg",
    hook:"Everything for a sharp beard — oil, balm, boar bristle brush, wooden comb and scissors. The best beard kit under $30 on Amazon.",
    price:"$25", rating:4.5, reviews:28000,
    article:"https://www.revtherapy.co/blog/best-grooming-kits-2026" }

];
