import { useState, useEffect, useRef } from "react";

const IMG = {
  hero1:"https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1600&q=85",
  hero2:"https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=1600&q=85",
  hero3:"https://images.unsplash.com/photo-1552053831-71594a27632d?w=1600&q=85",
  catDog:"https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=900&q=80",
  catCat:"https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=900&q=80",
  catBird:"https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?w=900&q=80",
  catFish:"https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=900&q=80",
  food1:"https://plus.unsplash.com/premium_photo-1683134386510-ea7b2395fb37?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  toy1:"https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&q=80",
  fish2:"https://images.unsplash.com/photo-1579967327980-2a4117da0e4a?q=80&w=849&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  groom1:"https://images.unsplash.com/photo-1727510190155-51abda425a82?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhhaXJCcnVzaCUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D",
  bird1:"https://images.unsplash.com/photo-1603529387711-5de5b3e6e799?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2FuYXJ5JTIwU2VlZCUyME1peHxlbnwwfHwwfHx8MA%3D%3D",
  cat2:"https://images.unsplash.com/photo-1736331552081-e716cfe8cf25?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2F0bmlwJTIwUGx1c2glMjBNb3VzZXxlbnwwfHwwfHx8MA%3D%3D",
  dog3:"https://images.unsplash.com/photo-1658418171785-6effc7240676?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  adopt3:"https://plus.unsplash.com/premium_photo-1664543649513-c21242431e6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW5kaWFuJTIwcGFycm90fGVufDB8fDB8fHww",
  adopt1:"https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=700&q=80",
  adopt2:"https://images.unsplash.com/photo-1574158622682-e40e69881006?w=700&q=80",
  adopt4:"https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=700&q=80",
  adopt5:"https://images.unsplash.com/photo-1513245543132-31f507417b26?w=700&q=80",
  adopt6:"https://images.unsplash.com/photo-1539236754983-085fe1449ba4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdvbGQlMjBmaXNofGVufDB8fDB8fHww",
  blog1:"https://images.unsplash.com/photo-1544568100-847a948585b9?w=800&q=80",
  blog2:"https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=800&q=80",
  blog3:"https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=800&q=80",
  blog4:"https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?w=800&q=80",
  blog5:"https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=800&q=80",
  blog6:"https://images.unsplash.com/photo-1570824104453-508955ab713e?w=800&q=80",
  bannerGroom:"https://images.unsplash.com/photo-1615751072497-5f5169febe17?w=1600&q=80",
  bannerAdopt:"https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=1600&q=80",
};

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,700;1,500&display=swap');

/* ── LIGHT MODE (default) ── */
:root {
  --g1:#1e6e14;--g2:#2a8c1e;--g3:#34a827;--g4:#e8f5e2;--g5:#f4fbf0;--g6:#c5e8b5;
  --dark:#1a2b16;--mid:#3a5c32;--muted:rgba(26,43,22,.54);
  --border:rgba(30,110,20,.15);--border2:rgba(30,110,20,.3);
  --white:#fff;--off:#f7fbf3;
  --nav-bg:rgba(255,255,255,.97);--nav-border:rgba(30,110,20,.15);
  --card-bg:#fff;--card-border:rgba(30,110,20,.15);
  --input-bg:#f4fbf0;--input-border:rgba(30,110,20,.15);
  --footer-bg:#1a2b16;
  --ff:'Nunito',system-ui,sans-serif;--ffd:'Playfair Display',Georgia,serif;
  --ease:cubic-bezier(.4,0,.2,1);
  --sh:0 2px 16px rgba(26,43,22,.09);--shg:0 8px 40px rgba(30,110,20,.22);
  --r:10px;--rl:16px;--rxl:22px;
  color-scheme: light;
}

/* ── DARK MODE ── */
[data-theme="dark"] {
  --g1:#4dc93a;--g2:#3db52c;--g3:#5ee04a;--g4:#0d1f0a;--g5:#0a1808;--g6:#1a3515;
  --dark:#e8f5e2;--mid:#a5d498;--muted:rgba(200,240,190,.55);
  --border:rgba(77,201,58,.15);--border2:rgba(77,201,58,.28);
  --white:#121f0e;--off:#0d1a09;
  --nav-bg:rgba(13,26,9,.97);--nav-border:rgba(77,201,58,.15);
  --card-bg:#111e0d;--card-border:rgba(77,201,58,.15);
  --input-bg:#0a1808;--input-border:rgba(77,201,58,.18);
  --footer-bg:#060e04;
  color-scheme: dark;
}

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:var(--ff);background:var(--off);color:var(--dark);overflow-x:hidden;line-height:1.6;font-size:15px;transition:background .3s,color .3s}
img{display:block}
::-webkit-scrollbar{width:4px}::-webkit-scrollbar-thumb{background:var(--g2);border-radius:2px}

/* scroll lock */
body.scroll-locked{overflow:hidden}

.ann{background:var(--g1);color:#fff;text-align:center;padding:.44rem 1rem;font-size:.7rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase;overflow:hidden;position:relative}
[data-theme="dark"] .ann{background:#1a3a12}
.ann-track{display:inline-block;white-space:nowrap;animation:annslide 28s linear infinite}
@keyframes annslide{0%{transform:translateX(100vw)}100%{transform:translateX(-100%)}}

.nav{position:sticky;top:0;z-index:900;background:var(--nav-bg);backdrop-filter:blur(16px);border-bottom:1.5px solid var(--nav-border);padding:0 2.5rem;transition:background .3s,border-color .3s}
.nav-inner{max-width:1400px;margin:0 auto;display:flex;align-items:center;height:66px;gap:1.8rem}
.nav-logo{font-family:var(--ffd);font-size:1.65rem;font-weight:700;color:var(--dark);cursor:pointer;flex-shrink:0;transition:color .3s}
.nav-logo span{color:var(--g1)}
.nav-links{display:flex;gap:.15rem;list-style:none;flex:1;align-items:center}
.nav-links button{background:none;border:none;cursor:pointer;font-family:var(--ff);font-size:.8rem;font-weight:700;color:var(--mid);padding:.48rem .85rem;border-radius:7px;transition:all .22s;letter-spacing:.01em}
.nav-links button:hover,.nav-links button.active{background:var(--g4);color:var(--g1)}
.nav-right{display:flex;align-items:center;gap:.7rem;flex-shrink:0}

/* ── THEME TOGGLE ── */
.theme-toggle{display:flex;align-items:center;background:var(--g4);border:1.5px solid var(--border2);border-radius:30px;padding:.18rem;gap:.12rem;transition:all .25s}
.tt-btn{background:none;border:none;cursor:pointer;font-size:.7rem;font-weight:900;padding:.3rem .7rem;border-radius:24px;font-family:var(--ff);letter-spacing:.04em;transition:all .22s;color:var(--mid);white-space:nowrap;display:flex;align-items:center;gap:.28rem}
.tt-btn.active{background:var(--g1);color:#fff;box-shadow:0 2px 8px rgba(30,110,20,.3)}
[data-theme="dark"] .tt-btn.active{box-shadow:0 2px 8px rgba(77,201,58,.25)}

.nav-cart{display:flex;align-items:center;gap:.45rem;background:var(--g1);color:#fff;border:none;padding:.52rem 1.2rem;border-radius:8px;cursor:pointer;font-family:var(--ff);font-size:.8rem;font-weight:900;transition:all .22s;flex-shrink:0}
.nav-cart:hover{background:var(--g2);transform:translateY(-1px);box-shadow:var(--shg)}
.cart-badge{background:#fff;color:var(--g1);font-size:.58rem;font-weight:900;width:18px;height:18px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0}
[data-theme="dark"] .cart-badge{background:#0d1f0a;color:var(--g1)}

.hero{position:relative;width:100%;overflow:hidden;background:#0d2009}
.hero-slides{display:flex;transition:transform .75s var(--ease)}
.hero-slide{min-width:100%;position:relative;height:86vh;max-height:700px}
.hero-slide img{width:100%;height:100%;object-fit:cover;object-position:center 35%}
.hero-slide::after{content:'';position:absolute;inset:0;background:linear-gradient(100deg,rgba(0,0,0,.62) 0%,rgba(0,0,0,.18) 55%,transparent 100%)}
.hero-content{position:absolute;top:50%;left:9%;transform:translateY(-50%);z-index:2;max-width:540px}
.hero-tag{font-size:.65rem;font-weight:900;letter-spacing:.32em;text-transform:uppercase;color:#9be07c;margin-bottom:.85rem;display:flex;align-items:center;gap:.5rem}
.hero-h1{font-family:var(--ffd);font-size:clamp(2.4rem,5vw,4.2rem);font-weight:700;color:#fff;line-height:1.06;margin-bottom:1rem}
.hero-h1 em{font-style:italic;color:#9be07c}
.hero-sub{font-size:.98rem;color:rgba(255,255,255,.8);line-height:1.85;margin-bottom:1.8rem;font-weight:500}
.hero-btns{display:flex;gap:.8rem;flex-wrap:wrap}
.hero-dots{position:absolute;bottom:1.6rem;left:50%;transform:translateX(-50%);display:flex;gap:.5rem;z-index:3}
.hero-dot{width:8px;height:8px;border-radius:50%;background:rgba(255,255,255,.4);border:none;cursor:pointer;transition:all .3s;padding:0}
.hero-dot.on{background:#fff;width:26px;border-radius:4px}
.hero-arr{position:absolute;top:50%;transform:translateY(-50%);z-index:3;background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.28);color:#fff;width:46px;height:46px;border-radius:50%;cursor:pointer;font-size:1.3rem;display:flex;align-items:center;justify-content:center;transition:all .22s;backdrop-filter:blur(8px)}
.hero-arr:hover{background:rgba(255,255,255,.28)}
.hero-arr-l{left:1.5rem}.hero-arr-r{right:1.5rem}

.trust{background:var(--g1);padding:.85rem 2.5rem}
[data-theme="dark"] .trust{background:#1a3a12}
.trust-inner{max-width:1400px;margin:0 auto;display:flex;gap:2.5rem;justify-content:center;flex-wrap:wrap}
.ti{display:flex;align-items:center;gap:.55rem;color:#fff}
.ti-icon{font-size:1.05rem}
.ti-txt{font-size:.7rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase}

.sec{padding:4.5rem 2.5rem;transition:background .3s}
.sec-inner{max-width:1400px;margin:0 auto}
.sec-hd{margin-bottom:2rem}
.sec-tag{font-size:.6rem;font-weight:900;letter-spacing:.3em;text-transform:uppercase;color:var(--g1);display:inline-flex;align-items:center;gap:.45rem;margin-bottom:.35rem}
.sec-tag::before{content:'';width:16px;height:2px;background:var(--g1);border-radius:2px;flex-shrink:0}
.sec-h2{font-family:var(--ffd);font-size:clamp(1.65rem,3vw,2.5rem);font-weight:700;color:var(--dark);line-height:1.1}
.sec-h2 em{font-style:italic;color:var(--g1)}

.cat-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem}
.cat-tile{position:relative;border-radius:var(--rl);overflow:hidden;aspect-ratio:3/4;cursor:pointer;box-shadow:var(--sh);transition:transform .35s var(--ease),box-shadow .35s var(--ease)}
.cat-tile:hover{transform:translateY(-7px);box-shadow:var(--shg)}
.cat-tile img{width:100%;height:100%;object-fit:cover;object-position:center 15%;transition:transform .5s var(--ease)}
.cat-tile:hover img{transform:scale(1.08)}
.cat-tile::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,transparent 38%,rgba(0,0,0,.7) 100%)}
.cat-lbl{position:absolute;bottom:1.3rem;left:0;right:0;text-align:center;z-index:2;color:#fff}
.cat-lbl-name{font-size:1.25rem;font-weight:900;text-shadow:0 2px 8px rgba(0,0,0,.4)}
.cat-lbl-sub{font-size:.65rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;opacity:.82;margin-top:.12rem}
.cat-lbl-btn{display:inline-flex;align-items:center;gap:.28rem;margin-top:.65rem;background:rgba(255,255,255,.16);border:1px solid rgba(255,255,255,.38);color:#fff;padding:.28rem .9rem;border-radius:20px;font-size:.65rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;backdrop-filter:blur(6px)}

.prod-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:1.2rem}
.prod-card{background:var(--card-bg);border:1px solid var(--card-border);border-radius:var(--rl);overflow:hidden;cursor:pointer;transition:all .3s var(--ease),background .3s,border-color .3s;box-shadow:var(--sh)}
.prod-card:hover{transform:translateY(-5px);border-color:var(--border2);box-shadow:var(--shg)}
.prod-img{height:220px;overflow:hidden;position:relative;background:var(--g4)}
.prod-img img{width:100%;height:100%;object-fit:cover;object-position:center;transition:transform .5s var(--ease)}
.prod-card:hover .prod-img img{transform:scale(1.08)}
.prod-badge{position:absolute;top:10px;left:10px;background:var(--g1);color:#fff;font-size:.57rem;font-weight:900;letter-spacing:.12em;text-transform:uppercase;padding:.27rem .7rem;border-radius:20px}
.prod-body{padding:1.1rem 1.2rem 1.2rem}
.prod-pet{font-size:.58rem;font-weight:900;letter-spacing:.22em;text-transform:uppercase;color:var(--g2);margin-bottom:.22rem}
.prod-name{font-size:1rem;font-weight:800;color:var(--dark);margin-bottom:.28rem;line-height:1.25}
.prod-desc{font-size:.8rem;color:var(--muted);line-height:1.6;margin-bottom:.85rem}
.prod-foot{display:flex;align-items:center;justify-content:space-between}
.prod-price{font-size:1.2rem;font-weight:900;color:var(--g1);font-family:var(--ffd)}
.prod-add{width:36px;height:36px;border-radius:50%;background:var(--g1);border:none;cursor:pointer;color:#fff;font-size:1.3rem;display:flex;align-items:center;justify-content:center;transition:all .22s}
.prod-add:hover{background:var(--g3);transform:rotate(90deg) scale(1.12)}

.pills{display:flex;gap:.5rem;flex-wrap:wrap;margin-bottom:1.5rem}
.pill{padding:.38rem 1.1rem;border-radius:20px;border:1.5px solid var(--border2);background:transparent;color:var(--mid);cursor:pointer;font-family:var(--ff);font-size:.72rem;font-weight:700;transition:all .2s;letter-spacing:.04em}
.pill:hover,.pill.on{background:var(--g1);border-color:var(--g1);color:#fff}

.fbanner{position:relative;width:100%;overflow:hidden}
.fbanner img{width:100%;height:440px;object-fit:cover;object-position:center 40%;display:block}
.fbanner::after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.62) 0%,rgba(0,0,0,.22) 58%,transparent 100%)}
.fbanner-cnt{position:absolute;top:50%;left:8%;transform:translateY(-50%);z-index:2;max-width:500px}
.fbanner-tag{font-size:.6rem;font-weight:900;letter-spacing:.32em;text-transform:uppercase;color:#9be07c;margin-bottom:.6rem}
.fbanner-h2{font-family:var(--ffd);font-size:clamp(1.8rem,3.5vw,3rem);font-weight:700;color:#fff;line-height:1.1;margin-bottom:.8rem}
.fbanner-h2 em{font-style:italic;color:#9be07c}
.fbanner-p{font-size:.9rem;color:rgba(255,255,255,.82);line-height:1.8;margin-bottom:1.4rem}

.btn{display:inline-flex;align-items:center;gap:.45rem;padding:.72rem 1.7rem;border-radius:8px;border:none;cursor:pointer;font-family:var(--ff);font-size:.76rem;font-weight:900;letter-spacing:.08em;text-transform:uppercase;transition:all .22s var(--ease)}
.btn-green{background:var(--g1);color:#fff}
.btn-green:hover{background:var(--g2);transform:translateY(-2px);box-shadow:var(--shg)}
.btn-outline{background:transparent;border:2px solid rgba(255,255,255,.65);color:#fff}
.btn-outline:hover{background:rgba(255,255,255,.14)}
.btn-ghost{background:transparent;border:2px solid var(--border2);color:var(--g1)}
.btn-ghost:hover{background:var(--g1);color:#fff}
.btn-sm{padding:.46rem 1.2rem;font-size:.68rem}

.split-wrap{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
.split-tile{position:relative;border-radius:var(--rl);overflow:hidden;height:340px;cursor:pointer}
.split-tile img{width:100%;height:100%;object-fit:cover;object-position:center 22%;transition:transform .5s var(--ease)}
.split-tile:hover img{transform:scale(1.07)}
.split-tile::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,transparent 28%,rgba(0,0,0,.65) 100%)}
.split-cnt{position:absolute;bottom:1.5rem;left:1.5rem;z-index:2;color:#fff}
.split-name{font-size:1.45rem;font-weight:900;margin-bottom:.28rem}
.split-sub{font-size:.7rem;letter-spacing:.1em;text-transform:uppercase;opacity:.84;font-weight:600}

.blog-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:1.2rem}
.blog-card{background:var(--card-bg);border:1px solid var(--card-border);border-radius:var(--rl);overflow:hidden;cursor:pointer;transition:all .3s,background .3s;box-shadow:var(--sh)}
.blog-card:hover{transform:translateY(-5px);box-shadow:var(--shg);border-color:var(--border2)}
.blog-img{height:200px;overflow:hidden;background:var(--g4)}
.blog-img img{width:100%;height:100%;object-fit:cover;object-position:center;transition:transform .5s;display:block}
.blog-card:hover .blog-img img{transform:scale(1.07)}
.blog-body{padding:1.3rem}
.blog-meta{display:flex;align-items:center;gap:.8rem;margin-bottom:.5rem}
.blog-pet{font-size:.58rem;font-weight:900;letter-spacing:.16em;text-transform:uppercase;color:var(--g1);background:var(--g4);padding:.18rem .65rem;border-radius:20px}
.blog-date{font-size:.6rem;color:var(--muted)}
.blog-title{font-size:1rem;font-weight:800;color:var(--dark);line-height:1.3;margin-bottom:.45rem}
.blog-exc{font-size:.8rem;color:var(--muted);line-height:1.7}

.adopt-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(270px,1fr));gap:1.2rem}
.adopt-card{background:var(--card-bg);border:1px solid var(--card-border);border-radius:var(--rl);overflow:hidden;transition:all .3s,background .3s;box-shadow:var(--sh)}
.adopt-card:hover{transform:translateY(-5px);box-shadow:var(--shg);border-color:var(--border2)}
.adopt-img{height:240px;overflow:hidden;position:relative;background:var(--g4)}
.adopt-img img{width:100%;height:100%;object-fit:cover;object-position:center 15%;transition:transform .5s;display:block}
.adopt-card:hover .adopt-img img{transform:scale(1.07)}
.adopt-status{position:absolute;top:10px;right:10px;padding:.28rem .75rem;border-radius:20px;font-size:.58rem;font-weight:900;letter-spacing:.1em;text-transform:uppercase}
.st-av{background:rgba(30,110,20,.14);border:1px solid rgba(30,110,20,.32);color:#145c0a}
[data-theme="dark"] .st-av{background:rgba(77,201,58,.12);border-color:rgba(77,201,58,.3);color:#7dcc65}
.st-pe{background:rgba(180,130,0,.12);border:1px solid rgba(180,130,0,.32);color:#7a5500}
[data-theme="dark"] .st-pe{background:rgba(230,180,50,.1);border-color:rgba(230,180,50,.3);color:#d4a835}
.adopt-body{padding:1.2rem}
.adopt-name{font-size:1.3rem;font-weight:900;color:var(--dark);margin-bottom:.16rem}
.adopt-breed{font-size:.74rem;color:var(--g1);font-weight:700;letter-spacing:.08em;margin-bottom:.75rem}
.adopt-meta{display:grid;grid-template-columns:1fr 1fr;gap:.4rem;margin-bottom:1.1rem}
.adopt-mi{background:var(--g4);border-radius:8px;padding:.4rem .7rem;transition:background .3s}
.adopt-mi-lbl{font-size:.55rem;letter-spacing:.14em;text-transform:uppercase;color:var(--muted)}
.adopt-mi-val{font-size:.8rem;font-weight:700;color:var(--dark)}

.groom-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:1.2rem}
.groom-card{background:var(--card-bg);border:1.5px solid var(--card-border);border-radius:var(--rl);padding:1.8rem;transition:all .3s,background .3s;position:relative;overflow:hidden;box-shadow:var(--sh)}
.groom-card::before{content:'';position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,var(--g1),var(--g3));opacity:0;transition:opacity .3s}
.groom-card:hover{transform:translateY(-5px);box-shadow:var(--shg);border-color:var(--border2)}
.groom-card:hover::before{opacity:1}
.groom-icon{font-size:2.2rem;margin-bottom:.7rem}
.groom-name{font-size:1.2rem;font-weight:900;color:var(--dark);margin-bottom:.32rem}
.groom-desc{font-size:.82rem;color:var(--muted);line-height:1.7;margin-bottom:1.1rem}
.groom-list{list-style:none;margin-bottom:1.2rem}
.groom-list li{font-size:.78rem;color:var(--dark);padding:.2rem 0;display:flex;align-items:center;gap:.42rem;font-weight:600}
.groom-list li::before{content:'✔';color:var(--g2);font-size:.58rem}
.groom-price{font-size:1.7rem;font-weight:900;color:var(--g1);font-family:var(--ffd)}
.groom-price span{font-size:.8rem;font-family:var(--ff);color:var(--muted);font-weight:400}
.groom-pop{position:absolute;top:1rem;right:1rem;background:var(--g1);color:#fff;font-size:.55rem;font-weight:900;letter-spacing:.12em;text-transform:uppercase;padding:.24rem .65rem;border-radius:20px}

.rev-layout{display:grid;grid-template-columns:340px 1fr;gap:3rem;align-items:start}
.rev-sum{background:var(--g4);border-radius:var(--rxl);padding:2.2rem;border:1px solid var(--border);margin-bottom:1.5rem;transition:background .3s}
.rev-big{font-family:var(--ffd);font-size:4.5rem;font-weight:700;color:var(--g1);line-height:1}
.rev-stars{font-size:1.55rem;color:var(--g2);margin:.4rem 0}
.rev-cnt{font-size:.78rem;color:var(--muted);margin-bottom:1.3rem}
.rbar{display:flex;align-items:center;gap:.8rem;margin-bottom:.48rem}
.rbar-l{font-size:.75rem;color:var(--muted);width:46px;font-weight:700}
.rbar-t{flex:1;height:7px;background:var(--g6);border-radius:4px;overflow:hidden}
.rbar-f{height:100%;background:var(--g2);border-radius:4px;transition:width .6s}
.rbar-n{font-size:.72rem;color:var(--muted);width:22px;text-align:right;font-weight:700}
.rev-form{background:var(--card-bg);border:1px solid var(--card-border);border-radius:var(--rl);padding:1.8rem;box-shadow:var(--sh);margin-bottom:1.5rem;transition:background .3s}
.rev-form-h{font-size:1.1rem;font-weight:900;color:var(--dark);margin-bottom:1rem}
.star-row{display:flex;gap:.3rem;margin-bottom:.9rem}
.sstar{background:none;border:none;font-size:1.7rem;cursor:pointer;color:#bde0a8;transition:color .18s,transform .18s;padding:0;line-height:1}
.sstar.on{color:var(--g2);transform:scale(1.12)}
.fgrp{margin-bottom:.9rem}
.flbl{display:block;font-size:.62rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin-bottom:.38rem}
.finp,.fsel,.ftxt{width:100%;padding:.65rem .85rem;background:var(--input-bg);border:1.5px solid var(--input-border);border-radius:8px;color:var(--dark);font-family:var(--ff);font-size:.86rem;outline:none;transition:border-color .2s,background .3s,color .3s}
.finp:focus,.fsel:focus,.ftxt:focus{border-color:var(--g2)}
.fsel option{background:var(--card-bg);color:var(--dark)}
.ftxt{min-height:88px;resize:vertical}
.rev-list{display:flex;flex-direction:column;gap:.9rem}
.rev-card{background:var(--card-bg);border:1px solid var(--card-border);border-radius:var(--r);padding:1.2rem;box-shadow:var(--sh);transition:background .3s}
.rev-ct{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:.4rem}
.rev-author{font-size:.86rem;font-weight:800;color:var(--dark)}
.rev-loc{font-size:.66rem;color:var(--muted)}
.rev-date{font-size:.64rem;color:var(--muted)}
.rev-s{color:var(--g2);font-size:.8rem;margin-bottom:.32rem}
.rev-txt{font-size:.82rem;color:var(--muted);line-height:1.7}
.rev-ptag{display:inline-flex;margin-top:.5rem;background:var(--g4);padding:.16rem .65rem;border-radius:20px;font-size:.6rem;color:var(--g1);font-weight:900;letter-spacing:.08em;text-transform:uppercase}

.cg{display:grid;grid-template-columns:1fr 1fr;gap:3.5rem}
.ci h3{font-family:var(--ffd);font-size:1.5rem;font-weight:700;color:var(--dark);margin-bottom:.65rem}
.ci p{color:var(--muted);line-height:1.9;margin-bottom:1.5rem;font-size:.9rem}
.cdet{display:flex;align-items:flex-start;gap:.8rem;margin-bottom:.9rem}
.cdet-icon{font-size:1.1rem;margin-top:.04rem}
.cdet-l{font-size:.58rem;font-weight:900;letter-spacing:.16em;text-transform:uppercase;color:var(--g1);margin-bottom:.1rem}
.cdet-v{font-size:.86rem;color:var(--dark);font-weight:700}
.cform{background:var(--card-bg);border:1px solid var(--card-border);border-radius:var(--rl);padding:2rem;box-shadow:var(--sh);transition:background .3s}
.cform-h{font-family:var(--ffd);font-size:1.3rem;font-weight:700;color:var(--dark);margin-bottom:1.2rem}
.wa-btn{display:inline-flex;align-items:center;gap:.55rem;padding:.72rem 1.6rem;border-radius:8px;border:none;cursor:pointer;background:#25d366;color:#fff;font-family:var(--ff);font-size:.8rem;font-weight:900;margin-top:1rem;transition:all .22s;text-decoration:none}
.wa-btn:hover{background:#1dae55;transform:translateY(-2px)}
.map-lnk{display:inline-flex;align-items:center;gap:.5rem;padding:.68rem 1.4rem;border-radius:8px;border:1px solid var(--border2);background:var(--g4);color:var(--dark);font-family:var(--ff);font-size:.8rem;font-weight:700;text-decoration:none;transition:all .2s;margin-bottom:1.1rem}
.map-lnk:hover{border-color:var(--g1);color:var(--g1)}

.det-grid{display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:start}
.det-img{aspect-ratio:1;border-radius:var(--rxl);overflow:hidden;border:1px solid var(--border);background:var(--g4)}
.det-img img{width:100%;height:100%;object-fit:cover;object-position:center}
.det-name{font-family:var(--ffd);font-size:clamp(1.7rem,3vw,2.5rem);font-weight:700;color:var(--dark);line-height:1.1;margin-bottom:.32rem}
.det-price{font-size:1.9rem;font-weight:900;color:var(--g1);margin:.65rem 0;font-family:var(--ffd)}
.det-desc{color:var(--muted);line-height:1.9;font-size:.9rem;margin-bottom:1.1rem}
.det-tags{display:flex;gap:.4rem;flex-wrap:wrap;margin-bottom:1.6rem}
.det-tag{padding:.24rem .8rem;background:var(--g4);border:1px solid var(--border);border-radius:20px;font-size:.65rem;color:var(--g1);letter-spacing:.08em;font-weight:700}
.det-sec{font-size:.94rem;font-weight:900;color:var(--dark);margin-top:1.3rem;margin-bottom:.48rem}
.det-rc{background:var(--g4);border-radius:10px;padding:.9rem 1.1rem;border:1px solid var(--border);margin-bottom:.55rem;transition:background .3s}

.art-img{width:100%;height:400px;object-fit:cover;object-position:center;border-radius:var(--rl);display:block;margin-bottom:2.2rem;border:1px solid var(--border)}
.art-title{font-family:var(--ffd);font-size:clamp(1.7rem,3vw,2.7rem);font-weight:700;color:var(--dark);line-height:1.1;margin-bottom:.9rem}
.art-meta{display:flex;gap:1.4rem;margin-bottom:1.8rem;padding-bottom:1.4rem;border-bottom:1px solid var(--border)}
.art-body{font-size:.93rem;color:var(--muted);line-height:2;max-width:720px}
.art-body h3{font-family:var(--ffd);font-size:1.25rem;font-weight:700;color:var(--dark);margin:1.8rem 0 .65rem}
.art-body p{margin-bottom:1.1rem}

.cart-ov{position:fixed;inset:0;background:rgba(26,43,22,.38);z-index:1000}
[data-theme="dark"] .cart-ov{background:rgba(0,0,0,.65)}
.cart-pan{position:fixed;top:0;right:0;width:400px;height:100vh;background:var(--card-bg);border-left:1px solid var(--card-border);z-index:1001;display:flex;flex-direction:column;box-shadow:-8px 0 48px rgba(26,43,22,.18);transition:background .3s}
.cp-hd{display:flex;align-items:center;justify-content:space-between;padding:1.3rem 1.6rem;border-bottom:1px solid var(--card-border)}
.cp-title{font-size:1.1rem;font-weight:900;color:var(--dark);font-family:var(--ffd)}
.cp-close{background:none;border:none;cursor:pointer;font-size:1.5rem;color:var(--muted);line-height:1;padding:0}
.cp-close:hover{color:var(--dark)}
.cp-items{flex:1;overflow-y:auto;padding:1.1rem 1.6rem}
.cp-empty{text-align:center;padding:3rem 0;color:var(--muted);font-size:.88rem;line-height:2}
.cp-item{display:flex;gap:.85rem;align-items:center;padding:.85rem 0;border-bottom:1px solid var(--card-border)}
.cp-item img{width:60px;height:60px;border-radius:10px;object-fit:cover;border:1px solid var(--card-border);flex-shrink:0}
.cp-item-name{font-size:.84rem;font-weight:700;color:var(--dark);margin-bottom:.1rem}
.cp-item-price{font-size:.8rem;color:var(--g1);font-weight:900}
.cp-rm{background:none;border:none;cursor:pointer;color:var(--muted);font-size:1.1rem;padding:0;margin-left:auto;flex-shrink:0;transition:color .2s}
.cp-rm:hover{color:#c0392b}
.cp-ft{padding:1.4rem 1.6rem;border-top:1px solid var(--card-border)}
.cp-total{display:flex;justify-content:space-between;font-size:.95rem;font-weight:800;color:var(--dark);margin-bottom:1rem}
.cp-total span:last-child{color:var(--g1);font-family:var(--ffd);font-size:1.2rem}

.toast{position:fixed;bottom:2rem;left:50%;transform:translateX(-50%);background:var(--dark);color:var(--off);padding:.72rem 1.8rem;border-radius:8px;font-size:.8rem;font-weight:800;z-index:9999;box-shadow:0 4px 24px rgba(0,0,0,.2);white-space:nowrap;letter-spacing:.02em}

.footer{background:var(--footer-bg);padding:3rem 2.5rem 1.8rem;transition:background .3s}
.ft-inner{max-width:1400px;margin:0 auto}
.ft-top{display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:3rem;padding-bottom:2rem;border-bottom:1px solid rgba(255,255,255,.1)}
.f-brand{font-family:var(--ffd);font-size:1.75rem;font-weight:700;color:#fff;margin-bottom:.45rem}
.f-brand span{color:#7dcc65}
.f-tag{font-size:.68rem;letter-spacing:.22em;text-transform:uppercase;color:#7dcc65;margin-bottom:1rem;font-weight:800}
.f-about{font-size:.8rem;color:rgba(255,255,255,.5);line-height:1.8}
.f-col-h{font-size:.68rem;font-weight:900;letter-spacing:.22em;text-transform:uppercase;color:#7dcc65;margin-bottom:1rem}
.f-links{list-style:none;display:flex;flex-direction:column;gap:.48rem}
.f-links button{background:none;border:none;color:rgba(255,255,255,.55);cursor:pointer;font-family:var(--ff);font-size:.82rem;text-align:left;padding:0;transition:color .2s;font-weight:600}
.f-links button:hover{color:#fff}
.ft-bot{padding-top:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:.5rem}
.f-copy{font-size:.72rem;color:rgba(255,255,255,.32)}
.f-social{display:flex;gap:.7rem}
.f-social a{width:34px;height:34px;border-radius:50%;border:1px solid rgba(255,255,255,.18);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.5);text-decoration:none;font-size:.9rem;transition:all .2s}
.f-social a:hover{border-color:#7dcc65;color:#7dcc65}

.back-btn{background:none;border:none;color:var(--g1);cursor:pointer;font-family:var(--ff);font-size:.74rem;font-weight:900;letter-spacing:.1em;text-transform:uppercase;display:flex;align-items:center;gap:.45rem;margin-bottom:1.8rem;padding:0;transition:gap .2s}
.back-btn:hover{gap:.7rem}

@keyframes fu{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
.fu{animation:fu .5s var(--ease) both}
.d1{animation-delay:.05s}.d2{animation-delay:.12s}.d3{animation-delay:.2s}.d4{animation-delay:.28s}

@media(max-width:1024px){
  .cat-grid{grid-template-columns:1fr 1fr}
  .nav-links{display:none}
  .nav{padding:0 1.5rem}
}
@media(max-width:768px){
  .det-grid,.cg,.rev-layout{grid-template-columns:1fr}
  .split-wrap{grid-template-columns:1fr}
  .ft-top{grid-template-columns:1fr 1fr}
  .hero-slide{height:58vh}
  .sec{padding:3rem 1.2rem}
  .fbanner img{height:320px}
  .hero-content{left:6%;max-width:90%}
  .trust-inner{gap:1.2rem}
  .footer{padding:2.5rem 1.5rem 1.5rem}
  .tt-btn{font-size:.62rem;padding:.28rem .55rem}
}
@media(max-width:480px){
  .nav-right{gap:.4rem}
  .theme-toggle{padding:.14rem}
}
`;

/* ── DATA ── */
const PRODUCTS = [
  {id:1,name:"Royal Canin Maxi Adult",pet:"dog",cat:"food",img:IMG.food1,price:"₹2,400",priceN:2400,desc:"Premium dry food for large breed adult dogs. Enriched with glucosamine.",badge:"Bestseller",tags:["Large Breed","Adult","Dry Food"]},
  {id:2,name:"Feather Tease Wand",pet:"cat",cat:"toys",img:IMG.toy1,price:"₹450",priceN:450,desc:"Interactive feather wand toy that keeps your cat engaged for hours.",badge:null,tags:["Interactive","Handmade"]},
  {id:3,name:"Aquarium Starter Kit",pet:"fish",cat:"accessories",img:IMG.fish2,price:"₹3,200",priceN:3200,desc:"Complete 20-litre tank setup with filter, LED lighting & thermometer.",badge:"New",tags:["Beginner","Complete Kit"]},
  {id:4,name:"ProGroomer Slicker Brush",pet:"dog",cat:"grooming",img:IMG.groom1,price:"₹680",priceN:680,desc:"Professional slicker brush for daily grooming. Ergonomic anti-slip grip.",badge:null,tags:["All Breeds","Daily Use"]},
  {id:5,name:"Canary Seed Mix",pet:"bird",cat:"food",img:IMG.bird1,price:"₹320",priceN:320,desc:"Vitamin-rich seed blend formulated for canaries and finches.",badge:null,tags:["Canary","Finch"]},
  {id:6,name:"Catnip Plush Mouse",pet:"cat",cat:"toys",img:IMG.cat2,price:"₹220",priceN:220,desc:"Organic catnip-stuffed plush toy. Irresistible for curious cats.",badge:"Hot",tags:["Organic","Plush"]},
  {id:7,name:"Pedigree Adult Chicken",pet:"dog",cat:"food",img:IMG.dog3,price:"₹1,850",priceN:1850,desc:"Real chicken & rice formula for healthy muscle maintenance.",badge:null,tags:["Chicken","Adult"]},
  {id:8,name:"Bird Swing Perch",pet:"bird",cat:"accessories",img:IMG.adopt3,price:"₹380",priceN:380,desc:"Natural wooden swing for parakeets and cockatiels. Easy cage mount.",badge:null,tags:["Parakeet","Cockatiel"]},
];
const BLOGS=[
  {id:1,pet:"dog",img:IMG.blog1,title:"10 Signs Your Dog is Bored and How to Fix It",date:"Apr 12, 2026",excerpt:"Boredom in dogs leads to destructive behaviour. Here's how to spot it early and keep your pup mentally stimulated...",content:[{h:"Why Dogs Get Bored"},{p:"Dogs are intelligent creatures that require mental and physical stimulation to stay happy. Without adequate activity, they resort to chewing furniture, excessive barking, or digging."},{h:"The 10 Signs to Watch"},{p:"1. Excessive barking. 2. Destructive chewing. 3. Digging. 4. Escaping. 5. Over-excitement. 6. Attention-seeking. 7. Pacing. 8. Lethargy. 9. Excessive grooming. 10. Depression."},{h:"How to Fix It"},{p:"Daily walks of 30+ minutes combined with puzzle feeders and training sessions dramatically reduce boredom. Consider agility classes or dog playdates."}]},
  {id:2,pet:"cat",img:IMG.blog2,title:"Why Cats Knock Things Off Tables: The Science",date:"Apr 8, 2026",excerpt:"It's not spite — your cat's table-clearing habits are rooted in predatory instincts and curiosity. We break it down...",content:[{h:"The Predator Instinct"},{p:"Batting objects off surfaces mimics the motion of swatting prey — it's deeply hardwired behaviour."},{h:"What You Can Do"},{p:"Provide crinkle balls, wand toys, and puzzle feeders. Two scheduled play sessions daily drastically reduce this behaviour."}]},
  {id:3,pet:"fish",img:IMG.blog3,title:"Cycling Your Fish Tank: A Beginner's Complete Guide",date:"Mar 28, 2026",excerpt:"New to fishkeeping? The nitrogen cycle is the most important concept you'll ever learn. Here's everything...",content:[{h:"What is the Nitrogen Cycle?"},{p:"The nitrogen cycle converts harmful ammonia from fish waste into less harmful substances through beneficial bacteria. Without a cycled tank, fish die within days."},{h:"Stage 3: Nitrates Appear"},{p:"Once ammonia and nitrite read zero and nitrate is detectable, your tank is cycled. This typically takes 4–6 weeks."}]},
  {id:4,pet:"bird",img:IMG.blog4,title:"Teaching Your Parrot to Talk: Realistic Expectations",date:"Mar 20, 2026",excerpt:"Not all parrots talk, but all can communicate. Here's how to build a vocabulary bond with your feathered friend...",content:[{h:"Which Parrots Talk Best?"},{p:"African Grey Parrots are widely considered the most gifted talkers, capable of hundreds of words and understanding context."},{h:"Realistic Expectations"},{p:"Build trust first, language will follow naturally. Some birds may never talk regardless of breed."}]},
  {id:5,pet:"dog",img:IMG.blog5,title:"Best Diets for Senior Dogs (7 Years and Above)",date:"Mar 15, 2026",excerpt:"As dogs age, their nutritional needs shift dramatically. Learn about the best senior-friendly diets available in India...",content:[{h:"How Nutritional Needs Change"},{p:"Senior dogs need fewer calories but higher quality protein. Glucosamine, chondroitin, and omega-3 fatty acids become crucial."},{h:"Top Picks in India"},{p:"Royal Canin Senior 8+ and Hills Science Diet Senior are vet-recommended. Drools Focus Senior is a great budget option."}]},
  {id:6,pet:"cat",img:IMG.blog6,title:"Indoor vs Outdoor Cats: Which is Healthier?",date:"Mar 5, 2026",excerpt:"The great debate settled — indoor cats live longer, but outdoor cats may be happier. How do you choose?...",content:[{h:"Lifespan Differences"},{p:"Indoor cats live 12–18 years on average; outdoor cats average 2–5. Vehicles, predators and disease are major threats."},{h:"The Compromise"},{p:"A catio or harness-and-leash training offers the best of both worlds — fresh air without mortality risks."}]},
];
const ADOPTIONS=[
  {id:1,name:"Bruno",breed:"Labrador Mix",age:"2 years",gender:"Male",img:IMG.adopt1,status:"available",color:"Golden"},
  {id:2,name:"Whiskers",breed:"Persian Cat",age:"1 year",gender:"Female",img:IMG.adopt2,status:"pending",color:"White"},
  {id:3,name:"Mango",breed:"Indian Parrot",age:"8 months",gender:"Male",img:IMG.adopt3,status:"available",color:"Green"},
  {id:4,name:"Simba",breed:"Indie Dog",age:"4 months",gender:"Male",img:IMG.adopt4,status:"available",color:"Brown"},
  {id:5,name:"Luna",breed:"Siamese Cat",age:"3 years",gender:"Female",img:IMG.adopt5,status:"available",color:"Cream"},
  {id:6,name:"Nemo",breed:"Goldfish",age:"6 months",gender:"N/A",img:IMG.adopt6,status:"available",color:"Orange"},
];
const GROOMING=[
  {name:"Essential Bath",icon:"🛁",price:"₹499",period:"/session",desc:"Gentle, thorough bath using premium pet shampoos. Perfect for regular maintenance.",includes:["Shampoo & Conditioner","Blow Dry & Brush","Ear Cleaning","Nail Trim"],popular:false},
  {name:"Full Pamper Package",icon:"✨",price:"₹1,199",period:"/session",desc:"The complete luxury grooming experience — from tip to tail. Our most loved service.",includes:["Everything in Essential","Cologne Spritz","Teeth Brushing","Bandana or Bow","Paw Balm Massage"],popular:true},
  {name:"Haircut & Styling",icon:"✂️",price:"₹699",period:"/session",desc:"Breed-specific cuts by our certified groomers. Style your pet the way you love.",includes:["Breed-Specific Cut","Shape & Trim","Post-cut Bath","Finish Brush"],popular:false},
  {name:"Dental Care",icon:"🦷",price:"₹349",period:"/session",desc:"Professional teeth brushing and oral hygiene care to keep bad breath away.",includes:["Teeth Brushing","Oral Rinse","Gum Check","Dental Chew Gift"],popular:false},
];
const INIT_REVIEWS=[
  {id:1,author:"Priya Reddy",location:"Mysuru",rating:5,text:"PawPatrol is simply the best pet store in Mysuru. The grooming service transformed my Labrador — Bruno came back looking incredible!",pet:"Dog Owner",date:"Apr 15, 2026"},
  {id:2,author:"Karthik Murthy",location:"Hubballi",rating:5,text:"We adopted Whiskers here last year. The team was so caring in matching us with the right pet. She's been a joy every single day.",pet:"Cat Owner",date:"Apr 8, 2026"},
  {id:3,author:"Meena Sharma",location:"Bangalore",rating:4,text:"Great selection and knowledgeable staff. They helped me set up my first aquarium perfectly. Only 4 stars because weekend parking is tricky.",pet:"Fish Keeper",date:"Mar 28, 2026"},
  {id:4,author:"Arjun Nair",location:"Mysuru",rating:5,text:"Buying Royal Canin here for two years. Prices fair, delivery fast, staff always remember my dog's name. That personal touch means everything.",pet:"Dog Owner",date:"Mar 20, 2026"},
  {id:5,author:"Sunita Patil",location:"Dharwad",rating:5,text:"The blog articles are genuinely useful. Followed the senior dog diet guide and my 9-year-old Indie mix has been so much more energetic!",pet:"Dog Owner",date:"Mar 10, 2026"},
];

/* ── WHATSAPP NUMBER ── */
const WA_NUMBER = "918088147241"; // Your WhatsApp number in international format (no + or spaces)

/* ── HELPERS ── */
function CartSVG(){return(<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>);}
function Toast({msg}){return msg?<div className="toast">{msg}</div>:null;}
function AnnBar(){
  const t="🐾 Free delivery on orders above ₹999  ✦  Use code PAWS10 for 10% off  ✦  New arrivals every week  ✦  Mysuru's #1 Pet Store  ✦  ";
  return(<div className="ann"><div className="ann-track">{t+t+t}</div></div>);
}

/* ── SCROLL LOCK HOOK ── */
function useScrollLock(locked) {
  useEffect(() => {
    if (locked) {
      document.body.classList.add("scroll-locked");
    } else {
      document.body.classList.remove("scroll-locked");
    }
    return () => document.body.classList.remove("scroll-locked");
  }, [locked]);
}

/* ── HERO SLIDER ── */
const SLIDES=[
  {img:IMG.hero1,tag:"Premium Pet Boutique · Mysuru",h1a:"Your Pet Deserves",h1b:" Only the Finest",sub:"Curated nutrition, luxury grooming & heartfelt adoption — all under one roof.",cta:"Shop Now",cta2:"Adopt a Pet",pg:"Products",pg2:"Adoption"},
  {img:IMG.hero2,tag:"Grooming & Wellness",h1a:"Luxury Spa Day",h1b:" for Your Pet",sub:"Professional groomers, premium products, and a stress-free environment your pet will love.",cta:"Book Grooming",cta2:"View All Services",pg:"Grooming",pg2:"Grooming"},
  {img:IMG.hero3,tag:"Adoption Drive",h1a:"Every Paw Deserves",h1b:" a Home",sub:"Meet adorable pets waiting for their forever family. Adoption is always free.",cta:"Meet Pets",cta2:"Read Our Blog",pg:"Adoption",pg2:"Blog"},
];
function HeroSlider({setPage}){
  const [cur,setCur]=useState(0);
  useEffect(()=>{const t=setInterval(()=>setCur(p=>(p+1)%3),5500);return()=>clearInterval(t);},[]);
  return(
    <div className="hero">
      <div className="hero-slides" style={{transform:`translateX(-${cur*100}%)`}}>
        {SLIDES.map((s,i)=>(
          <div key={i} className="hero-slide">
            <img src={s.img} alt="" loading={i===0?"eager":"lazy"}/>
            <div className="hero-content">
              <p className="hero-tag fu d1">✦ {s.tag}</p>
              <h1 className="hero-h1 fu d2">{s.h1a}<br/><em>{s.h1b}</em></h1>
              <p className="hero-sub fu d3">{s.sub}</p>
              <div className="hero-btns fu d4">
                <button className="btn btn-green" onClick={()=>setPage(s.pg)}>{s.cta}</button>
                <button className="btn btn-outline" onClick={()=>setPage(s.pg2)}>{s.cta2}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="hero-arr hero-arr-l" onClick={()=>setCur(p=>(p-1+3)%3)}>‹</button>
      <button className="hero-arr hero-arr-r" onClick={()=>setCur(p=>(p+1)%3)}>›</button>
      <div className="hero-dots">{SLIDES.map((_,i)=><button key={i} className={`hero-dot${cur===i?" on":""}`} onClick={()=>setCur(i)}/>)}</div>
    </div>
  );
}

/* ── NAV (with theme toggle) ── */
function Nav({page,setPage,cartCount,openCart,theme,setTheme}){
  const pgs=["Home","Products","Blog","Adoption","Grooming","Reviews","Contact"];
  return(
    <nav className="nav">
      <div className="nav-inner">
        <div className="nav-logo" onClick={()=>setPage("Home")}>Paw<span>Patrol</span></div>
        <ul className="nav-links">{pgs.map(p=><li key={p}><button className={page===p?"active":""} onClick={()=>setPage(p)}>{p}</button></li>)}</ul>
        <div className="nav-right">
          {/* ── THEME TOGGLE ── */}
          <div className="theme-toggle" title="Toggle theme">
            <button
              className={`tt-btn${theme==="light"?" active":""}`}
              onClick={()=>setTheme("light")}
            >
              ☀️ Light
            </button>
            <button
              className={`tt-btn${theme==="dark"?" active":""}`}
              onClick={()=>setTheme("dark")}
            >
              🌙 Dark
            </button>
          </div>
          <button className="nav-cart" onClick={openCart}><CartSVG/>Cart{cartCount>0&&<span className="cart-badge">{cartCount}</span>}</button>
        </div>
      </div>
    </nav>
  );
}

/* ── HOME ── */
function Home({setPage,setSelProd,addToCart}){
  return(
    <div>
      <HeroSlider setPage={setPage}/>
      <div className="trust">
        <div className="trust-inner">
          {[["🚚","Free delivery ₹999+"],["✅","100% Natural Ingredients"],["🐾","1,200+ Happy Pets"],["💚","Mysuru's #1 Pet Store"]].map(([ic,tx])=>(
            <div key={tx} className="ti"><span className="ti-icon">{ic}</span><span className="ti-txt">{tx}</span></div>
          ))}
        </div>
      </div>
      <section className="sec">
        <div className="sec-inner">
          <div className="sec-hd" style={{display:"flex",alignItems:"flex-end",justifyContent:"space-between",flexWrap:"wrap",gap:"1rem"}}>
            <div><div className="sec-tag">Shop by Pet</div><h2 className="sec-h2">Find Your <em>Companion's Corner</em></h2></div>
            <button className="btn btn-ghost" onClick={()=>setPage("Products")}>Shop All →</button>
          </div>
          <div className="cat-grid">
            {[[IMG.catDog,"Dogs","200+ products"],[IMG.catCat,"Cats","180+ products"],[IMG.catBird,"Birds","60+ products"],[IMG.catFish,"Fish","45+ products"]].map(([img,name,sub])=>(
              <div key={name} className="cat-tile" onClick={()=>setPage("Products")}>
                <img src={img} alt={name} loading="lazy"/>
                <div className="cat-lbl">
                  <div className="cat-lbl-name">{name}</div>
                  <div className="cat-lbl-sub">{sub}</div>
                  <div className="cat-lbl-btn">Shop {name} →</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="fbanner" style={{cursor:"pointer"}} onClick={()=>setPage("Grooming")}>
        <img src={IMG.bannerGroom} alt="Grooming Banner"/>
        <div className="fbanner-cnt">
          <div className="fbanner-tag">✦ In-store Spa</div>
          <h2 className="fbanner-h2">Luxury Grooming<br/><em>Your Pet Will Love</em></h2>
          <p className="fbanner-p">Expert groomers. Premium products. Stress-free environment. Starting from just ₹349.</p>
          <button className="btn btn-green" onClick={e=>{e.stopPropagation();setPage("Grooming");}}>Book a Session →</button>
        </div>
      </div>
      <section className="sec" style={{background:"var(--g4)",borderTop:"1px solid var(--border)",borderBottom:"1px solid var(--border)"}}>
        <div className="sec-inner">
          <div className="sec-hd" style={{display:"flex",alignItems:"flex-end",justifyContent:"space-between",flexWrap:"wrap",gap:"1rem"}}>
            <div><div className="sec-tag">Featured</div><h2 className="sec-h2">Products Worth <em>Wagging For</em></h2></div>
            <button className="btn btn-ghost" onClick={()=>setPage("Products")}>View All →</button>
          </div>
          <div className="prod-grid">
            {PRODUCTS.slice(0,4).map((p,i)=>(
              <div key={p.id} className={`prod-card fu d${i+1}`} onClick={()=>{setSelProd(p);setPage("ProductDetail");}}>
                <div className="prod-img">
                  {p.badge&&<span className="prod-badge">{p.badge}</span>}
                  <img src={p.img} alt={p.name} loading="lazy"/>
                </div>
                <div className="prod-body">
                  <div className="prod-pet">{p.pet}</div>
                  <div className="prod-name">{p.name}</div>
                  <div className="prod-desc">{p.desc}</div>
                  <div className="prod-foot"><div className="prod-price">{p.price}</div><button className="prod-add" onClick={e=>{e.stopPropagation();addToCart(p);}}>+</button></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="sec-inner">
          <div className="split-wrap">
            <div className="split-tile" onClick={()=>setPage("Adoption")}>
              <img src={IMG.bannerAdopt} alt="Adopt"/>
              <div className="split-cnt"><div className="split-name">Adopt a Pet</div><div className="split-sub">Give a home · Change a life</div></div>
            </div>
            <div className="split-tile" onClick={()=>setPage("Blog")}>
              <img src={IMG.blog1} alt="Blog" style={{objectPosition:"center 20%"}}/>
              <div className="split-cnt"><div className="split-name">Pet Care Blog</div><div className="split-sub">Tips, guides & expert advice</div></div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec" style={{background:"var(--g5)",borderTop:"1px solid var(--border)"}}>
        <div className="sec-inner">
          <div className="sec-hd" style={{display:"flex",alignItems:"flex-end",justifyContent:"space-between",flexWrap:"wrap",gap:"1rem"}}>
            <div><div className="sec-tag">Blog</div><h2 className="sec-h2">Tips for <em>Happy Pets</em></h2></div>
            <button className="btn btn-ghost" onClick={()=>setPage("Blog")}>All Articles →</button>
          </div>
          <div className="blog-grid">
            {BLOGS.slice(0,3).map((b,i)=>(
              <div key={b.id} className={`blog-card fu d${i+1}`}>
                <div className="blog-img"><img src={b.img} alt={b.title} loading="lazy"/></div>
                <div className="blog-body">
                  <div className="blog-meta"><span className="blog-pet">{b.pet}</span><span className="blog-date">{b.date}</span></div>
                  <div className="blog-title">{b.title}</div>
                  <div className="blog-exc">{b.excerpt}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ── PRODUCTS ── */
function Products({setPage,setSelProd,addToCart}){
  const [pet,setPet]=useState("all");
  const [cat,setCat]=useState("all");
  const f=PRODUCTS.filter(p=>(pet==="all"||p.pet===pet)&&(cat==="all"||p.cat===cat));
  return(
    <section className="sec" style={{paddingTop:"3rem"}}>
      <div className="sec-inner">
        <div className="sec-hd"><div className="sec-tag">All Products</div><h2 className="sec-h2">Our <em>Collection</em></h2></div>
        <div style={{fontSize:".6rem",fontWeight:900,letterSpacing:".2em",textTransform:"uppercase",color:"var(--muted)",marginBottom:".45rem"}}>Pet Type</div>
        <div className="pills">{["all","dog","cat","bird","fish"].map(p=><button key={p} className={`pill${pet===p?" on":""}`} onClick={()=>setPet(p)}>{p==="all"?"All Pets":p[0].toUpperCase()+p.slice(1)+"s"}</button>)}</div>
        <div style={{fontSize:".6rem",fontWeight:900,letterSpacing:".2em",textTransform:"uppercase",color:"var(--muted)",marginBottom:".45rem"}}>Category</div>
        <div className="pills">{["all","food","toys","grooming","accessories"].map(c=><button key={c} className={`pill${cat===c?" on":""}`} onClick={()=>setCat(c)}>{c[0].toUpperCase()+c.slice(1)}</button>)}</div>
        {f.length===0?<div style={{textAlign:"center",padding:"5rem",color:"var(--muted)"}}>No products found.</div>:
          <div className="prod-grid">{f.map((p,i)=>(
            <div key={p.id} className={`prod-card fu d${(i%4)+1}`} onClick={()=>{setSelProd(p);setPage("ProductDetail");}}>
              <div className="prod-img">{p.badge&&<span className="prod-badge">{p.badge}</span>}<img src={p.img} alt={p.name} loading="lazy"/></div>
              <div className="prod-body">
                <div className="prod-pet">{p.pet}</div>
                <div className="prod-name">{p.name}</div>
                <div className="prod-desc">{p.desc}</div>
                <div className="prod-foot"><div className="prod-price">{p.price}</div><button className="prod-add" onClick={e=>{e.stopPropagation();addToCart(p);}}>+</button></div>
              </div>
            </div>
          ))}</div>
        }
      </div>
    </section>
  );
}

/* ── PRODUCT DETAIL ── */
function ProductDetail({product,setPage,addToCart,toast}){
  if(!product)return null;
  const revs=[{s:5,t:"My dog absolutely loves this! Great quality.",a:"Priya R. — Bangalore"},{s:5,t:"Excellent product, fast delivery. Packaging was premium.",a:"Arjun M. — Mumbai"},{s:4,t:"Really good quality. My pet took a few days to adjust.",a:"Sunita K. — Pune"}];
  return(
    <section className="sec" style={{paddingTop:"3rem"}}>
      <div className="sec-inner">
        <button className="back-btn" onClick={()=>setPage("Products")}>← Back to Products</button>
        <div className="det-grid">
          <div className="det-img"><img src={product.img} alt={product.name}/></div>
          <div>
            <div className="sec-tag">{product.pet} · {product.cat}</div>
            <h1 className="det-name">{product.name}</h1>
            <div style={{display:"flex",alignItems:"center",gap:".5rem",marginBottom:".3rem"}}><span style={{color:"var(--g2)",fontSize:"1rem"}}>★★★★★</span><span style={{fontSize:".75rem",color:"var(--muted)"}}>4.9 (128 reviews)</span></div>
            <div className="det-price">{product.price}</div>
            <p className="det-desc">{product.desc}</p>
            <div className="det-tags">{product.tags.map(t=><span key={t} className="det-tag">{t}</span>)}</div>
            <div style={{display:"flex",gap:".8rem",marginBottom:"1.8rem",flexWrap:"wrap"}}>
              <button className="btn btn-green" onClick={()=>addToCart(product)}>Add to Cart</button>
              <button className="btn btn-ghost" onClick={()=>toast("Saved to wishlist ♡")}>Save ♡</button>
            </div>
            <div className="det-sec">Breed Compatibility</div>
            <p style={{fontSize:".82rem",color:"var(--muted)",lineHeight:1.8}}>Suitable for all breeds. Consult your vet before switching diets for pets with known allergies.</p>
            <div className="det-sec">Customer Reviews</div>
            {revs.map((r,i)=>(
              <div key={i} className="det-rc">
                <div style={{color:"var(--g2)",fontSize:".8rem",marginBottom:".22rem"}}>{"★".repeat(r.s)}{"☆".repeat(5-r.s)}</div>
                <div style={{fontSize:".82rem",color:"var(--muted)",lineHeight:1.6}}>{r.t}</div>
                <div style={{fontSize:".66rem",color:"var(--g1)",fontWeight:900,marginTop:".3rem"}}>{r.a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── BLOG ── */
function Blog({setPage,setSelBlog}){
  const [f,setF]=useState("all");
  const bl=f==="all"?BLOGS:BLOGS.filter(b=>b.pet===f);
  return(
    <section className="sec" style={{paddingTop:"3rem"}}>
      <div className="sec-inner">
        <div className="sec-hd"><div className="sec-tag">Pet Care Blog</div><h2 className="sec-h2">Tips for <em>Happy Pets</em></h2></div>
        <div className="pills">{["all","dog","cat","fish","bird"].map(p=><button key={p} className={`pill${f===p?" on":""}`} onClick={()=>setF(p)}>{p==="all"?"All":p[0].toUpperCase()+p.slice(1)+"s"}</button>)}</div>
        <div className="blog-grid">{bl.map((b,i)=>(
          <div key={b.id} className={`blog-card fu d${(i%3)+1}`}>
            <div className="blog-img"><img src={b.img} alt={b.title} loading="lazy"/></div>
            <div className="blog-body">
              <div className="blog-meta"><span className="blog-pet">{b.pet}</span><span className="blog-date">{b.date}</span></div>
              <div className="blog-title">{b.title}</div>
              <div className="blog-exc">{b.excerpt}</div>
              <button className="btn btn-ghost btn-sm" style={{marginTop:"1rem"}} onClick={()=>{setSelBlog(b);setPage("BlogArticle");}}>Read More →</button>
            </div>
          </div>
        ))}</div>
      </div>
    </section>
  );
}

/* ── BLOG ARTICLE ── */
function BlogArticle({blog,setPage}){
  if(!blog)return null;
  return(
    <section className="sec" style={{paddingTop:"3rem"}}>
      <div className="sec-inner" style={{maxWidth:"780px"}}>
        <button className="back-btn" onClick={()=>setPage("Blog")}>← Back to Blog</button>
        <img src={blog.img} alt={blog.title} className="art-img"/>
        <div className="sec-tag">{blog.pet}</div>
        <h1 className="art-title">{blog.title}</h1>
        <div className="art-meta">
          <span style={{fontSize:".75rem",color:"var(--muted)"}}>{blog.date}</span>
          <span style={{fontSize:".75rem",color:"var(--g1)",fontWeight:900}}>PawPatrol Editorial</span>
        </div>
        <div className="art-body">{blog.content.map((b,i)=>b.h?<h3 key={i}>{b.h}</h3>:<p key={i}>{b.p}</p>)}</div>
        <div style={{marginTop:"2.5rem",paddingTop:"1.8rem",borderTop:"1px solid var(--border)"}}><button className="btn btn-ghost" onClick={()=>setPage("Blog")}>← More Articles</button></div>
      </div>
    </section>
  );
}

/* ── ADOPTION ── */
function Adoption({toast}){
  return(
    <section className="sec" style={{paddingTop:"3rem"}}>
      <div className="sec-inner">
        <div className="sec-hd"><div className="sec-tag">Adoption Board</div><h2 className="sec-h2">Find Your <em>Forever Friend</em></h2><p style={{color:"var(--muted)",marginTop:".4rem",maxWidth:500,fontSize:".88rem",lineHeight:1.8}}>Every pet deserves a loving home. Adoption is free — all we ask is unconditional love.</p></div>
        <div className="adopt-grid">{ADOPTIONS.map((a,i)=>(
          <div key={a.id} className={`adopt-card fu d${(i%3)+1}`}>
            <div className="adopt-img"><img src={a.img} alt={a.name} loading="lazy"/><span className={`adopt-status ${a.status==="available"?"st-av":"st-pe"}`}>{a.status==="available"?"Available":"Pending"}</span></div>
            <div className="adopt-body">
              <div className="adopt-name">{a.name}</div>
              <div className="adopt-breed">{a.breed}</div>
              <div className="adopt-meta">{[["Age",a.age],["Gender",a.gender],["Color",a.color],["Health","Vaccinated"]].map(([l,v])=><div key={l} className="adopt-mi"><div className="adopt-mi-lbl">{l}</div><div className="adopt-mi-val">{v}</div></div>)}</div>
              <button className="btn btn-green" style={{width:"100%",justifyContent:"center"}} disabled={a.status==="pending"} onClick={()=>a.status==="available"&&toast(`Inquiry sent for ${a.name} ✓`)}>{a.status==="available"?"Inquire to Adopt":"Adoption Pending"}</button>
            </div>
          </div>
        ))}</div>
      </div>
    </section>
  );
}

/* ── GROOMING ── */
function Grooming({toast}){
  return(
    <section className="sec" style={{paddingTop:"3rem"}}>
      <div className="sec-inner">
        <div className="sec-hd"><div className="sec-tag">Grooming Services</div><h2 className="sec-h2">Pamper Your Pet <em>Royally</em></h2><p style={{color:"var(--muted)",marginTop:".4rem",fontSize:".88rem"}}>Walk-in or by appointment at our in-store spa. All breeds welcome.</p></div>
        <div className="groom-grid">{GROOMING.map((g,i)=>(
          <div key={g.name} className={`groom-card fu d${i+1}`}>
            {g.popular&&<span className="groom-pop">Most Popular</span>}
            <div className="groom-icon">{g.icon}</div>
            <div className="groom-name">{g.name}</div>
            <div className="groom-desc">{g.desc}</div>
            <ul className="groom-list">{g.includes.map(it=><li key={it}>{it}</li>)}</ul>
            <div className="groom-price">{g.price} <span>{g.period}</span></div>
            <button className="btn btn-green" style={{marginTop:"1.1rem",width:"100%",justifyContent:"center"}} onClick={()=>toast("Booking request sent ✓")}>Book Now</button>
          </div>
        ))}</div>
      </div>
    </section>
  );
}

/* ── REVIEWS ── */
function Reviews({reviews,setReviews,toast}){
  const [rating,setRating]=useState(0);
  const [hover,setHover]=useState(0);
  const [name,setName]=useState(""); const [petType,setPetType]=useState("Dog Owner"); const [text,setText]=useState("");
  const total=reviews.length; const avg=reviews.reduce((s,r)=>s+r.rating,0)/total;
  const dist=[5,4,3,2,1].map(s=>({stars:s,count:reviews.filter(r=>r.rating===s).length}));
  const submit=()=>{
    if(!name.trim()||!text.trim()){toast("Please fill in name and review");return;}
    if(!rating){toast("Please select a star rating");return;}
    const now=new Date(),mo=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    setReviews([{id:Date.now(),author:name.trim(),location:"Mysuru",rating,text:text.trim(),pet:petType,date:`${mo[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`},...reviews]);
    setRating(0);setName("");setText("");toast("Review submitted. Thank you! ✓");
  };
  return(
    <section className="sec" style={{paddingTop:"3rem"}}>
      <div className="sec-inner">
        <div className="sec-hd"><div className="sec-tag">Customer Reviews</div><h2 className="sec-h2">What Pet Owners <em>Say About Us</em></h2></div>
        <div className="rev-layout">
          <div>
            <div className="rev-sum">
              <div className="rev-big">{avg.toFixed(1)}</div>
              <div className="rev-stars">★★★★★</div>
              <div className="rev-cnt">{total} verified reviews</div>
              {dist.map(d=><div key={d.stars} className="rbar"><span className="rbar-l">{d.stars} ★</span><div className="rbar-t"><div className="rbar-f" style={{width:`${Math.round(d.count/total*100)}%`}}/></div><span className="rbar-n">{d.count}</span></div>)}
            </div>
            <div className="rev-form">
              <div className="rev-form-h">Leave Your Review</div>
              <div className="star-row">{Array.from({length:5},(_,i)=><button key={i} className={`sstar${i<(hover||rating)?" on":""}`} onClick={()=>setRating(i+1)} onMouseEnter={()=>setHover(i+1)} onMouseLeave={()=>setHover(0)}>★</button>)}</div>
              <div className="fgrp"><label className="flbl">Your Name</label><input className="finp" value={name} onChange={e=>setName(e.target.value)} placeholder="e.g. Ananya Sharma"/></div>
              <div className="fgrp"><label className="flbl">Pet Type</label><select className="fsel" value={petType} onChange={e=>setPetType(e.target.value)}><option>Dog Owner</option><option>Cat Owner</option><option>Bird Owner</option><option>Fish Keeper</option><option>Other</option></select></div>
              <div className="fgrp"><label className="flbl">Your Review</label><textarea className="ftxt" value={text} onChange={e=>setText(e.target.value)} placeholder="Tell us about your experience at PawPatrol..."/></div>
              <button className="btn btn-green" style={{width:"100%",justifyContent:"center"}} onClick={submit}>Submit Review →</button>
            </div>
          </div>
          <div>
            <div style={{fontSize:".68rem",fontWeight:900,letterSpacing:".18em",textTransform:"uppercase",color:"var(--muted)",marginBottom:".9rem"}}>{total} Reviews</div>
            <div className="rev-list">{reviews.map(r=>(
              <div key={r.id} className="rev-card">
                <div className="rev-ct"><div><div className="rev-author">{r.author}</div><div className="rev-loc">{r.location}</div></div><div className="rev-date">{r.date}</div></div>
                <div className="rev-s">{"★".repeat(r.rating)}{"☆".repeat(5-r.rating)}</div>
                <div className="rev-txt">{r.text}</div>
                <span className="rev-ptag">{r.pet}</span>
              </div>
            ))}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── CONTACT (with WhatsApp form integration) ── */
function Contact(){
  const [cName, setCName] = useState("");
  const [cEmail, setCEmail] = useState("");
  const [cTopic, setCTopic] = useState("Product Inquiry");
  const [cMsg, setCMsg] = useState("");

  // Opens WhatsApp with all contact form details pre-filled
  const handleSendMessage = () => {
    if (!cName.trim() || !cEmail.trim() || !cMsg.trim()) {
      alert("Please fill in your name, email, and message before sending.");
      return;
    }
    const text =
      `🐾 *PawPatrol Enquiry*\n\n` +
      `*Name:* ${cName.trim()}\n` +
      `*Email:* ${cEmail.trim()}\n` +
      `*Topic:* ${cTopic}\n\n` +
      `*Message:*\n${cMsg.trim()}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${WA_NUMBER}?text=${encoded}`, "_blank", "noopener,noreferrer");
  };

  return(
    <section className="sec" style={{paddingTop:"3rem"}}>
      <div className="sec-inner">
        <div className="sec-hd"><div className="sec-tag">Contact Us</div><h2 className="sec-h2">We'd Love to <em>Hear from You</em></h2></div>
        <div className="cg">
          <div className="ci">
            <h3>Visit Our Store</h3>
            <p>Come say hello — and meet the in-store pets! Open 7 days a week, ready to help you find exactly what your pet needs.</p>
            <a href="https://www.google.com/maps/search/pet+store+Mysuru+Karnataka" target="_blank" rel="noreferrer" className="map-lnk">📍 Open in Google Maps</a>
            {[{ic:"📍",l:"Address",v:"12, MG Road, Mysuru – 570001, Karnataka"},{ic:"📞",l:"Phone",v:"+91 98765 43210"},{ic:"✉️",l:"Email",v:"hello@pawpatrol.in"},{ic:"🕐",l:"Hours",v:"Mon – Sun: 10:00 AM – 8:00 PM"}].map(d=>(
              <div key={d.l} className="cdet"><div className="cdet-icon">{d.ic}</div><div><div className="cdet-l">{d.l}</div><div className="cdet-v">{d.v}</div></div></div>
            ))}
            {/* Direct WhatsApp button — opens chat without form data */}
            <a href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hello PawPatrol! I'd like to know more about your services.")}`} target="_blank" rel="noreferrer" className="wa-btn">
              💬 Chat on WhatsApp
            </a>
          </div>

          <div className="cform">
            <div className="cform-h">Send an Inquiry via WhatsApp</div>
            <p style={{fontSize:".78rem",color:"var(--muted)",marginBottom:"1.2rem",lineHeight:1.7}}>
              Fill in the details below and click <strong>Send Message</strong> — it will open WhatsApp with your enquiry pre-filled and ready to send directly to us.
            </p>
            <div className="fgrp">
              <label className="flbl">Your Name</label>
              <input className="finp" placeholder="Rahul Sharma" value={cName} onChange={e=>setCName(e.target.value)}/>
            </div>
            <div className="fgrp">
              <label className="flbl">Email</label>
              <input className="finp" type="email" placeholder="rahul@email.com" value={cEmail} onChange={e=>setCEmail(e.target.value)}/>
            </div>
            <div className="fgrp">
              <label className="flbl">Topic</label>
              <select className="fsel" value={cTopic} onChange={e=>setCTopic(e.target.value)}>
                <option>Product Inquiry</option>
                <option>Grooming Booking</option>
                <option>Adoption Inquiry</option>
                <option>Feedback</option>
                <option>Other</option>
              </select>
            </div>
            <div className="fgrp">
              <label className="flbl">Message</label>
              <textarea className="ftxt" placeholder="How can we help you and your pet today?" value={cMsg} onChange={e=>setCMsg(e.target.value)}/>
            </div>
            <button
              className="btn btn-green"
              style={{width:"100%",justifyContent:"center",gap:".6rem"}}
              onClick={handleSendMessage}
            >
              💬 Send Message on WhatsApp →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── FOOTER ── */
function Footer({setPage}){
  const pgs=["Home","Products","Blog","Adoption","Grooming","Reviews","Contact"];
  return(
    <footer className="footer">
      <div className="ft-inner">
        <div className="ft-top">
          <div><div className="f-brand">Paw<span>Patrol</span></div><div className="f-tag">Premium Pet Store · Mysuru</div><p className="f-about">Curated nutrition, luxury grooming & heartfelt adoption services. Because every paw deserves the finest care.</p></div>
          <div><div className="f-col-h">Navigate</div><ul className="f-links">{pgs.slice(0,4).map(p=><li key={p}><button onClick={()=>setPage(p)}>{p}</button></li>)}</ul></div>
          <div><div className="f-col-h">Services</div><ul className="f-links">{pgs.slice(4).map(p=><li key={p}><button onClick={()=>setPage(p)}>{p}</button></li>)}</ul></div>
          <div><div className="f-col-h">Contact</div><ul className="f-links">{["📍 Mysuru, Karnataka","📞 +91 98765 43210","✉️ hello@pawpatrol.in","🕐 10 AM – 8 PM Daily"].map(t=><li key={t}><button style={{cursor:"default"}}>{t}</button></li>)}</ul></div>
        </div>
        <div className="ft-bot">
          <div className="f-copy">© 2026 PawPatrol. All rights reserved. Made with 🐾 in Mysuru.</div>
          <div className="f-social"><a href="#" aria-label="Instagram">📷</a><a href="#" aria-label="Facebook">📘</a><a href="#" aria-label="WhatsApp">💬</a></div>
        </div>
      </div>
    </footer>
  );
}

/* ── CART PANEL ── */
function CartPanel({cart,onClose,onRemove,toast}){
  // Scroll lock when cart is open
  useScrollLock(true);
  const total=cart.reduce((s,i)=>s+i.priceN,0);
  return(
    <>
      <div className="cart-ov" onClick={onClose}/>
      <div className="cart-pan">
        <div className="cp-hd"><div className="cp-title">Shopping Bag ({cart.length})</div><button className="cp-close" onClick={onClose}>×</button></div>
        <div className="cp-items">
          {cart.length===0?<div className="cp-empty">🛒<br/><br/>Your bag is empty.<br/>Add something your pet will love!</div>:
            cart.map((item,i)=>(
              <div key={i} className="cp-item">
                <img src={item.img} alt={item.name}/>
                <div style={{flex:1}}><div className="cp-item-name">{item.name}</div><div className="cp-item-price">{item.price}</div></div>
                <button className="cp-rm" onClick={()=>onRemove(i)}>×</button>
              </div>
            ))
          }
        </div>
        {cart.length>0&&<div className="cp-ft"><div className="cp-total"><span>Total</span><span>₹{total.toLocaleString("en-IN")}</span></div><button className="btn btn-green" style={{width:"100%",justifyContent:"center"}} onClick={()=>{toast("Order placed! We'll confirm shortly ✓");onClose();}}>Checkout →</button></div>}
      </div>
    </>
  );
}

/* ── APP ── */
export default function App(){
  const [page,setPage]=useState("Home");
  const [selProd,setSelProd]=useState(null);
  const [selBlog,setSelBlog]=useState(null);
  const [reviews,setReviews]=useState(INIT_REVIEWS);
  const [toastMsg,setToastMsg]=useState("");
  const [cart,setCart]=useState([]);
  const [cartOpen,setCartOpen]=useState(false);
  const [theme,setTheme]=useState("light"); // "light" | "dark"

  // Apply theme to <html> element
  useEffect(()=>{
    document.documentElement.setAttribute("data-theme", theme);
  },[theme]);

  const toast=msg=>{setToastMsg(msg);setTimeout(()=>setToastMsg(""),2800);};
  const addToCart=p=>{setCart(prev=>[...prev,p]);toast(`${p.name} added to bag ✓`);};
  const removeFromCart=i=>setCart(prev=>prev.filter((_,idx)=>idx!==i));

  useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"});},[page]);

  const render=()=>{switch(page){
    case"Home":return<Home setPage={setPage} setSelProd={setSelProd} addToCart={addToCart}/>;
    case"Products":return<Products setPage={setPage} setSelProd={setSelProd} addToCart={addToCart}/>;
    case"ProductDetail":return<ProductDetail product={selProd} setPage={setPage} addToCart={addToCart} toast={toast}/>;
    case"Blog":return<Blog setPage={setPage} setSelBlog={setSelBlog}/>;
    case"BlogArticle":return<BlogArticle blog={selBlog} setPage={setPage}/>;
    case"Adoption":return<Adoption toast={toast}/>;
    case"Grooming":return<Grooming toast={toast}/>;
    case"Reviews":return<Reviews reviews={reviews} setReviews={setReviews} toast={toast}/>;
    case"Contact":return<Contact/>;
    default:return<Home setPage={setPage} setSelProd={setSelProd} addToCart={addToCart}/>;
  }};

  return(
    <>
      <style>{CSS}</style>
      <AnnBar/>
      <Nav page={page} setPage={setPage} cartCount={cart.length} openCart={()=>setCartOpen(true)} theme={theme} setTheme={setTheme}/>
      <main key={page}>{render()}</main>
      <Footer setPage={setPage}/>
      <Toast msg={toastMsg}/>
      {cartOpen&&<CartPanel cart={cart} onClose={()=>setCartOpen(false)} onRemove={removeFromCart} toast={toast}/>}
    </>
  );
}