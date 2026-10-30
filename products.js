// Rev.Therapy — single-source product catalog
// Add a product here and it renders everywhere automatically.
// Schema: { group, badge, name, url, img, hook, price, rating, reviews, article }
//   - rating & reviews are RAW NUMBERS (not strings)
//   - price is a string with the $ sign
//   - url   = your Amazon affiliate link (the "View on Amazon" button)
//   - article = full URL to the product's review. Leave as "" if there is no
//               review yet — the card's "Read Review" button auto-greys out,
//               and "View on Amazon" still works.

const RT_PRODUCTS = [

  // ---------- CAR ACCESSORIES ----------
  { group:"Car Accessories", badge:"Emergency", name:"NOCO Boost Plus GB40 Jump Starter",
    url:"https://amzn.to/4gKQpLA", img:"https://m.media-amazon.com/images/I/91PF8cxu2ML._AC_SL1500_.jpg",
    hook:"1000 amps that live in your glovebox. Clamps on, green light, engine turns over — no second car, no cables, no tow.",
    price:"$100", rating:4.6, reviews:128000,
    article:"https://www.revtherapy.co/blog/noco-gb40-jump-starter" },

  { group:"Car Accessories", badge:"Safety", name:"AstroAI Digital Tire Pressure Gauge",
    url:"https://amzn.to/4gmJLu9", img:"https://i.postimg.cc/QMVKNSJf/Astro-AI-Digital-Tire-Pressure-Gauge.jpg",
    hook:"Your tires can look fine and still be dangerously low. This $8 gauge catches it in seconds. Backlit, up to 150 PSI.",
    price:"$7.99", rating:4.7, reviews:90000,
    article:"https://www.revtherapy.co/blog/tire-pressure-gauge" },

  { group:"Car Accessories", badge:"Safety", name:"Amazon Basics Emergency Escape Tool",
    url:"https://amzn.to/4e7K76M", img:"https://m.media-amazon.com/images/I/81wWdaTkjrL._AC_SX679_.jpg",
    hook:"Breaks car windows and cuts seat belts in an emergency. Spring-loaded, bright orange, with a mounting bracket. 2-pack.",
    price:"$8.99", rating:4.7, reviews:25000,
    article:"https://www.revtherapy.co/blog/emergency-escape-tool" },

  { group:"Car Accessories", badge:"Detailing", name:"PULIDIKI Car Cleaning Gel",
    url:"https://amzn.to/4tCsCA5", img:"https://m.media-amazon.com/images/I/71R0gev+0zL._AC_SL1500_.jpg",
    hook:"Gets into every vent, gap and crevice. Picks up dust, dirt and debris instantly. 2 pack — reusable.",
    price:"$9.99", rating:4.5, reviews:30000,
    article:"https://www.revtherapy.co/blog/car-cleaning-gel-hack" },

  { group:"Car Accessories", badge:"Detailing", name:"Meguiar's Hybrid Ceramic Wax",
    url:"https://amzn.to/3QYALBm", img:"https://m.media-amazon.com/images/I/81vFQ6edbOL._AC_SX679_.jpg",
    hook:"Spray-on ceramic protection in minutes. Wet, rinse, done — water beads for months, no buffing, no swirls.",
    price:"$20", rating:4.7, reviews:35000,
    article:"https://www.revtherapy.co/blog/meguiar-hybrid-ceramic-wax-review" },

  { group:"Car Accessories", badge:"Detailing", name:"Meguiar's Scratch-X 2.0",
    url:"https://amzn.to/3QYALBm", img:"https://m.media-amazon.com/images/I/81wqa5jjhCL._SL1500_.jpg",
    hook:"Removes light scratches, swirl marks and blemishes in one step. No machine needed. Works on all paint colours.",
    price:"$12", rating:4.5, reviews:18000,
    article:"" },

  { group:"Car Accessories", badge:"Detailing", name:"Foam Cannon Kit",
    url:"https://amzn.to/3QBFOro", img:"https://m.media-amazon.com/images/I/71wQ+NQlUVL._AC_SL1500_.jpg",
    hook:"Best budget detailing setup. Thick foam, easy to use, no pressure washer needed.",
    price:"$35", rating:4.7, reviews:12400,
    article:"" },

  { group:"Car Accessories", badge:"Safety", name:"Rove R2-4K Dash Cam",
    url:"https://amzn.to/4ejRp8h", img:"https://m.media-amazon.com/images/I/91AtC7jFIZL._AC_SX679_.jpg",
    hook:"Crystal clear 4K footage, night vision, loop recording. Essential for every driver.",
    price:"$109", rating:4.5, reviews:8200,
    article:"" },

  { group:"Car Accessories", badge:"Diagnostics", name:"ANCEL AD410 OBD2 Scanner",
    url:"https://amzn.to/4wjGqSX", img:"https://m.media-amazon.com/images/I/81S0XgJq1iL._AC_SL1500_.jpg",
    hook:"Read and clear engine codes instantly. Know your car better than your mechanic.",
    price:"$40", rating:4.6, reviews:21000,
    article:"" },

  // ---------- TECH ----------
  { group:"Tech", badge:"CarPlay", name:"Carlinkit Wireless CarPlay Adapter",
    url:"https://amzn.to/4gd0nFa", img:"https://m.media-amazon.com/images/I/61QCvBu+VcL._AC_SL1202_.jpg",
    hook:"Converts wired CarPlay to wireless in 2 minutes. Auto-connects every time you start the engine. No more cables.",
    price:"$43.99", rating:4.5, reviews:15000,
    article:"https://www.revtherapy.co/blog/wireless-carplay-adapter" },

  { group:"Tech", badge:"Car Tech", name:"LISEN MagSafe Car Vent Mount",
    url:"https://amzn.to/4gI62mp", img:"https://m.media-amazon.com/images/I/61E+g+pJ9dL._AC_SL1000_.jpg",
    hook:"Suction cups leave marks, clamps block your vents. This snaps your phone on with a magnet, flush and low.",
    price:"$18.99", rating:4.6, reviews:40000,
    article:"https://www.revtherapy.co/blog/magsafe-car-mount" },

  { group:"Tech", badge:"Charging", name:"Anker 30W Nano Power Bank",
    url:"https://amzn.to/4eoGk5W", img:"https://i.postimg.cc/Zq0vYjxV/Anker-Mag-Safe-Power-Bank.jpg",
    hook:"10,000mAh, built-in USB-C cable, battery display. Fast, compact and reliable on every trip.",
    price:"$70", rating:4.7, reviews:18000,
    article:"" },

  { group:"Tech", badge:"MagSafe", name:"Anker MagSafe Power Bank",
    url:"https://amzn.to/3PgS9kg", img:"https://m.media-amazon.com/images/I/51tLiKYI4DL._AC_SL1500_.jpg",
    hook:"Qi2 certified 15W wireless charging. Ultra-slim magnetic design, snaps to your iPhone instantly.",
    price:"$55", rating:4.6, reviews:12000,
    article:"" },

  { group:"Tech", badge:"Fast Charge", name:"INIU 45W Power Bank",
    url:"https://amzn.to/3P3Uwqq", img:"https://i.postimg.cc/5tjQ9pSK/INIU-45W-Power-Bank.jpg",
    hook:"10,000mAh, flight-safe, attached USB-C cable. Works with iPhone and Samsung. Small but powerful.",
    price:"$30", rating:4.6, reviews:24000,
    article:"" },

  // ---------- MEN PRODUCTS ----------
  { group:"Men Products", badge:"Grooming", name:"Manscaped Perfect Package 4.0",
    url:"https://amzn.to/4n5MzOh", img:"https://i.postimg.cc/253LjT7T/Manscaped-Perfect-Package-4-0.jpg",
    hook:"Complete body grooming kit — the Lawn Mower 4.0 trimmer, plus deodorant, body wash, nail kit and travel bag.",
    price:"$65", rating:4.6, reviews:45000,
    article:"https://www.revtherapy.co/blog/best-grooming-kits-2026" },

  { group:"Men Products", badge:"Grooming", name:"Viking Revolution Ultimate Beard Kit",
    url:"https://amzn.to/3QBbP2R", img:"https://m.media-amazon.com/images/I/71nxczoiw5L._SX679_.jpg",
    hook:"Oil, balm, boar bristle brush, comb and scissors. The best beard kit under $30 on Amazon.",
    price:"$25", rating:4.5, reviews:28000,
    article:"https://www.revtherapy.co/blog/best-grooming-kits-2026" },

  { group:"Men Products", badge:"EDC", name:"Ridge Wallet",
    url:"https://amzn.to/4cNChyI", img:"https://m.media-amazon.com/images/I/81AY4EIeK5L._AC_SL1500_.jpg",
    hook:"The wallet that put minimalist carry on the map. RFID blocking, slim, built to last a lifetime.",
    price:"$95", rating:4.5, reviews:32000,
    article:"" }

];
