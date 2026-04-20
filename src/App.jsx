import { useState, useEffect } from "react";

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
:root {
  --g1: #1a1a1a;
  --g2: #333;
  --g3: #666;
  --g4: #f8f8f8;
  --g5: #fafafa;
  --border: #e0e0e0;
  --muted: #888;
  --green: #22c55e;
  --green-dark: #16a34a;
  --red: #ef4444;
  --blue: #3b82f6;
  --yellow: #eab308;
  --orange: #f97316;
  --pink: #ec4899;
  --purple: #a855f7;
  --teal: #14b8a6;
  --cyan: #06b6d4;
  --lime: #84cc16;
  --indigo: #6366f1;
  --rose: #f43f5e;
  --emerald: #10b981;
  --violet: #8b5cf6;
  --fuchsia: #d946ef;
  --sky: #0ea5e9;
  --slate: #64748b;
  --zinc: #71717a;
  --neutral: #737373;
  --stone: #78716c;
  --amber: #f59e0b;
  --gray: #6b7280;
  --white: #fff;
  --black: #000;
  --shadow: 0 2px 8px rgba(0,0,0,0.1);
  --shadow-lg: 0 4px 16px rgba(0,0,0,0.15);
  --shadow-xl: 0 8px 32px rgba(0,0,0,0.2);
  --radius: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --transition: all 0.2s ease;
  --font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: var(--font-family);
  line-height: 1.6;
  color: var(--g1);
  background: var(--white);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  max-width: 100%;
  height: auto;
}

a {
  color: var(--blue);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

button {
  font-family: inherit;
  border: none;
  background: none;
  cursor: pointer;
  transition: var(--transition);
}

input, textarea, select {
  font-family: inherit;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 0.75rem;
  font-size: 0.9rem;
  transition: var(--transition);
}

input:focus, textarea:focus, select:focus {
  outline: none;
  border-color: var(--green);
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
}

.sec {
  padding: 4rem 0;
}

.sec-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.sec-tag {
  font-size: 0.75rem;
  font-weight: 900;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 0.5rem;
}

.sec-h2 {
  font-size: 2.5rem;
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 2rem;
}

.sec-h2 em {
  color: var(--green);
  font-style: normal;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius);
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: var(--transition);
  white-space: nowrap;
}

.btn:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow);
}

.btn-ghost {
  background: transparent;
  color: var(--g2);
  border: 1px solid var(--border);
}

.btn-ghost:hover {
  background: var(--g1);
  color: var(--white);
}

.btn-green {
  background: var(--green);
  color: var(--white);
}

.btn-green:hover {
  background: var(--green-dark);
}

.btn-sm {
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--g2);
  font-weight: 600;
  margin-bottom: 2rem;
  transition: var(--transition);
}

.back-btn:hover {
  color: var(--green);
}

.trust {
  background: var(--g4);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: 2rem 0;
}

.trust-inner {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.ti {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 600;
  color: var(--g2);
}

.ti-icon {
  font-size: 1.5rem;
}

.ti-txt {
  font-size: 0.9rem;
}

.cat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.cat-tile {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: var(--transition);
  cursor: pointer;
}

.cat-tile:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.cat-tile img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.cat-lbl {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  padding: 2rem 1.5rem 1.5rem;
  color: var(--white);
}

.cat-lbl-name {
  font-size: 1.5rem;
  font-weight: 900;
  margin-bottom: 0.25rem;
}

.cat-lbl-sub {
  font-size: 0.9rem;
  color: rgba(255,255,255,0.8);
  margin-bottom: 1rem;
}

.cat-lbl-btn {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--green);
}

.fbanner {
  position: relative;
  background: var(--g4);
  border-radius: var(--radius-xl);
  overflow: hidden;
  margin: 4rem 0;
  cursor: pointer;
}

.fbanner img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.fbanner-cnt {
  position: absolute;
  top: 50%;
  left: 4rem;
  transform: translateY(-50%);
  color: var(--white);
  max-width: 400px;
}

.fbanner-tag {
  font-size: 0.75rem;
  font-weight: 900;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--green);
  margin-bottom: 0.5rem;
}

.fbanner-h2 {
  font-size: 2rem;
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 1rem;
}

.fbanner-p {
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  opacity: 0.9;
}

.prod-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.prod-card {
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: var(--transition);
  cursor: pointer;
}

.prod-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}

.prod-img {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.prod-badge {
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  background: var(--green);
  color: var(--white);
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius);
  font-size: 0.75rem;
  font-weight: 600;
}

.prod-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.prod-body {
  padding: 1.5rem;
}

.prod-pet {
  font-size: 0.75rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 0.5rem;
}

.prod-name {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.prod-desc {
  font-size: 0.9rem;
  color: var(--muted);
  line-height: 1.5;
  margin-bottom: 1rem;
}

.prod-foot {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.prod-price {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--g1);
}

.prod-add {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: var(--green);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 600;
  transition: var(--transition);
}

.prod-add:hover {
  background: var(--green-dark);
  transform: scale(1.1);
}

.split-wrap {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.split-tile {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  cursor: pointer;
  transition: var(--transition);
}

.split-tile:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}

.split-tile img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.split-cnt {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  padding: 2rem 1.5rem 1.5rem;
  color: var(--white);
}

.split-name {
  font-size: 1.5rem;
  font-weight: 900;
  margin-bottom: 0.25rem;
}

.split-sub {
  font-size: 0.9rem;
  opacity: 0.9;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
}

.blog-card {
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: var(--transition);
  cursor: pointer;
}

.blog-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}

.blog-img {
  height: 200px;
  overflow: hidden;
}

.blog-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.blog-body {
  padding: 1.5rem;
}

.blog-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  color: var(--muted);
  margin-bottom: 0.75rem;
}

.blog-pet {
  background: var(--g4);
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius);
  font-weight: 600;
}

.blog-date {
  font-weight: 500;
}

.blog-title {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.blog-exc {
  font-size: 0.9rem;
  color: var(--muted);
  line-height: 1.5;
}

.pills {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.pill {
  padding: 0.5rem 1rem;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--g2);
  transition: var(--transition);
}

.pill:hover {
  background: var(--g4);
}

.pill.on {
  background: var(--green);
  color: var(--white);
  border-color: var(--green);
}

.det-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

.det-img img {
  width: 100%;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow);
}

.det-price {
  font-size: 1.5rem;
  font-weight: 900;
  color: var(--green);
  margin-bottom: 0.5rem;
}

.det-desc {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.det-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}

.det-tag {
  background: var(--g4);
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius);
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--g2);
}

.det-sec {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 1rem;
  margin-top: 2rem;
}

.det-rc {
  border-bottom: 1px solid var(--border);
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
}

.det-rc:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

.art-img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: var(--radius-lg);
  margin-bottom: 2rem;
}

.art-title {
  font-size: 2.5rem;
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 1rem;
}

.art-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border);
}

.art-body h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  margin-top: 2rem;
}

.art-body p {
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.adopt-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.adopt-card {
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: var(--transition);
}

.adopt-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}

.adopt-img {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.adopt-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.adopt-status {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
}

.st-av {
  background: var(--green);
  color: var(--white);
}

.st-pe {
  background: var(--orange);
  color: var(--white);
}

.adopt-body {
  padding: 1.5rem;
}

.adopt-name {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.adopt-breed {
  font-size: 0.9rem;
  color: var(--muted);
  margin-bottom: 1rem;
}

.adopt-meta {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.adopt-mi {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background: var(--g4);
  border-radius: var(--radius);
}

.adopt-mi-lbl {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--muted);
}

.adopt-mi-val {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--g2);
}

.groom-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.groom-card {
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 2rem;
  position: relative;
  transition: var(--transition);
}

.groom-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}

.groom-pop {
  position: absolute;
  top: -0.5rem;
  left: 50%;
  transform: translateX(-50%);
  background: var(--green);
  color: var(--white);
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius);
  font-size: 0.75rem;
  font-weight: 600;
}

.groom-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.groom-name {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.groom-desc {
  font-size: 0.9rem;
  color: var(--muted);
  line-height: 1.5;
  margin-bottom: 1.5rem;
}

.groom-list {
  list-style: none;
  margin-bottom: 1.5rem;
}

.groom-list li {
  font-size: 0.85rem;
  color: var(--g2);
  margin-bottom: 0.25rem;
  position: relative;
  padding-left: 1rem;
}

.groom-list li:before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--green);
  font-weight: 600;
}

.groom-price {
  font-size: 1.5rem;
  font-weight: 900;
  color: var(--green);
  margin-bottom: 0.5rem;
}

.groom-price span {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--muted);
}

.rev-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.rev-sum {
  text-align: center;
  padding: 2rem;
  background: var(--g4);
  border-radius: var(--radius-lg);
}

.rev-big {
  font-size: 3rem;
  font-weight: 900;
  color: var(--green);
  margin-bottom: 0.5rem;
}

.rev-stars {
  font-size: 1.5rem;
  color: var(--yellow);
  margin-bottom: 0.5rem;
}

.rev-cnt {
  font-size: 0.9rem;
  color: var(--muted);
  margin-bottom: 1.5rem;
}

.rbar {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}

.rbar-l {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--g2);
  width: 2rem;
}

.rbar-t {
  flex: 1;
  height: 0.5rem;
  background: var(--g4);
  border-radius: var(--radius);
  overflow: hidden;
}

.rbar-f {
  height: 100%;
  background: var(--green);
  border-radius: var(--radius);
}

.rbar-n {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--muted);
  width: 2rem;
  text-align: right;
}

.rev-form {
  background: var(--g4);
  padding: 2rem;
  border-radius: var(--radius-lg);
}

.rev-form-h {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.star-row {
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1.5rem;
}

.sstar {
  font-size: 1.5rem;
  color: var(--g4);
  transition: var(--transition);
}

.sstar.on {
  color: var(--yellow);
}

.fgrp {
  margin-bottom: 1.5rem;
}

.flbl {
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--g2);
}

.finp {
  width: 100%;
}

.ftxt {
  width: 100%;
  resize: vertical;
  min-height: 100px;
}

.fsel {
  width: 100%;
}

.rev-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.rev-card {
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
}

.rev-ct {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;
}

.rev-author {
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.rev-loc {
  font-size: 0.8rem;
  color: var(--muted);
}

.rev-date {
  font-size: 0.8rem;
  color: var(--muted);
}

.rev-s {
  font-size: 1.2rem;
  color: var(--yellow);
  margin-bottom: 0.75rem;
}

.rev-txt {
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 0.75rem;
}

.rev-ptag {
  display: inline-block;
  background: var(--g4);
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius);
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--muted);
}

.cg {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.ci {
  padding: 2rem;
  background: var(--g4);
  border-radius: var(--radius-lg);
}

.ci h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.ci p {
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: var(--muted);
}

.map-lnk {
  display: inline-block;
  color: var(--blue);
  font-weight: 600;
  margin-bottom: 1rem;
  transition: var(--transition);
}

.map-lnk:hover {
  color: var(--blue);
  text-decoration: underline;
}

.cdet {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.cdet-icon {
  font-size: 1.2rem;
  margin-top: 0.1rem;
}

.cdet-l {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--g2);
}

.cdet-v {
  font-size: 0.9rem;
  color: var(--muted);
}

.wa-btn {
  display: inline-block;
  background: var(--green);
  color: var(--white);
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius);
  font-weight: 600;
  transition: var(--transition);
}

.wa-btn:hover {
  background: var(--green-dark);
  transform: translateY(-1px);
}

.cform {
  padding: 2rem;
  background: var(--g4);
  border-radius: var(--radius-lg);
}

.cform-h {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.ann-bar {
  background: var(--green);
  color: var(--white);
  padding: 0.5rem 0;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 600;
}

.nav {
  background: var(--white);
  border-bottom: 1px solid var(--border);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.nav-logo {
  font-size: 1.5rem;
  font-weight: 900;
  color: var(--g1);
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  font-weight: 600;
  color: var(--g2);
  transition: var(--transition);
}

.nav-link:hover, .nav-link.active {
  color: var(--green);
}

.nav-cart {
  position: relative;
  font-size: 1.2rem;
  cursor: pointer;
  transition: var(--transition);
}

.nav-cart:hover {
  color: var(--green);
}

.nav-cart-count {
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  background: var(--red);
  color: var(--white);
  border-radius: 50%;
  width: 1.2rem;
  height: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 600;
}

.footer {
  background: var(--g1);
  color: var(--white);
  padding: 3rem 0 2rem;
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-col h4 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.footer-col p {
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(255,255,255,0.8);
  margin-bottom: 1rem;
}

.footer-links {
  list-style: none;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: rgba(255,255,255,0.8);
  transition: var(--transition);
}

.footer-links a:hover {
  color: var(--white);
}

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 2rem;
  text-align: center;
  font-size: 0.9rem;
  color: rgba(255,255,255,0.6);
}

.toast {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background: var(--g1);
  color: var(--white);
  padding: 1rem 1.5rem;
  border-radius: var(--radius);
  box-shadow: var(--shadow-lg);
  z-index: 1000;
  animation: toastIn 0.3s ease;
}

@keyframes toastIn {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(1rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.cart-panel {
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  height: 100vh;
  background: var(--white);
  box-shadow: var(--shadow-xl);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

.cart-header {
  padding: 1.5rem;
  border-bottom: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cart-title {
  font-size: 1.2rem;
  font-weight: 700;
}

.cart-close {
  font-size: 1.5rem;
  cursor: pointer;
  transition: var(--transition);
}

.cart-close:hover {
  color: var(--red);
}

.cart-items {
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
}

.cart-item {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--border);
}

.cart-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.cart-item-img {
  width: 60px;
  height: 60px;
  border-radius: var(--radius);
  overflow: hidden;
  flex-shrink: 0;
}

.cart-item-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cart-item-body {
  flex: 1;
}

.cart-item-name {
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.cart-item-price {
  color: var(--green);
  font-weight: 600;
}

.cart-item-remove {
  background: var(--red);
  color: var(--white);
  border: none;
  border-radius: var(--radius);
  padding: 0.25rem 0.5rem;
  font-size: 0.8rem;
  cursor: pointer;
  transition: var(--transition);
}

.cart-item-remove:hover {
  background: #dc2626;
}

.cart-footer {
  padding: 1.5rem;
  border-top: 1px solid var(--border);
}

.cart-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.cart-checkout {
  width: 100%;
  background: var(--green);
  color: var(--white);
  border: none;
  padding: 0.75rem;
  border-radius: var(--radius);
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
}

.cart-checkout:hover {
  background: var(--green-dark);
}

.fu {
  animation: fadeUp 0.6s ease backwards;
}

.d1 { animation-delay: 0.1s; }
.d2 { animation-delay: 0.2s; }
.d3 { animation-delay: 0.3s; }
.d4 { animation-delay: 0.4s; }

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(2rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .sec-h2 {
    font-size: 2rem;
  }

  .det-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .rev-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .cg {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .nav-links {
    display: none;
  }

  .cart-panel {
    width: 100%;
  }

  .fbanner-cnt {
    left: 2rem;
    max-width: 300px;
  }

  .fbanner-h2 {
    font-size: 1.5rem;
  }

  .art-title {
    font-size: 2rem;
  }

  .trust-inner {
    flex-direction: column;
    gap: 1rem;
  }
}
`;

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

function CartSVG(){
  return(
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1"/>
      <circle cx="20" cy="21" r="1"/>
      <path d="m1 1 4 4h15l-1 7H6"/>
    </svg>
  );
}

function AnnBar(){
  return(
    <div className="ann-bar">
      🐾 Free shipping on orders above ₹999 • Same-day delivery in Mysuru • Expert pet advice available
    </div>
  );
}

function Nav({page,setPage,cartCount,openCart}){
  return(
    <nav className="nav">
      <div className="nav-inner">
        <div className="nav-logo">PawPatrol</div>
        <div className="nav-links">
          <button className={`nav-link${page==="Home"?" active":""}`} onClick={()=>setPage("Home")}>Home</button>
          <button className={`nav-link${page==="Products"?" active":""}`} onClick={()=>setPage("Products")}>Products</button>
          <button className={`nav-link${page==="Blog"?" active":""}`} onClick={()=>setPage("Blog")}>Blog</button>
          <button className={`nav-link${page==="Adoption"?" active":""}`} onClick={()=>setPage("Adoption")}>Adoption</button>
          <button className={`nav-link${page==="Grooming"?" active":""}`} onClick={()=>setPage("Grooming")}>Grooming</button>
          <button className={`nav-link${page==="Reviews"?" active":""}`} onClick={()=>setPage("Reviews")}>Reviews</button>
          <button className={`nav-link${page==="Contact"?" active":""}`} onClick={()=>setPage("Contact")}>Contact</button>
          <button className="nav-cart" onClick={openCart}>
            <CartSVG/>
            {cartCount>0&&<span className="nav-cart-count">{cartCount}</span>}
          </button>
        </div>
      </div>
    </nav>
  );
}

function Footer({setPage}){
  return(
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>PawPatrol</h4>
            <p>Mysuru's premier pet store since 2018. We provide premium products, expert grooming, and loving adoption services for all your pet needs.</p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><button onClick={()=>setPage("Products")}>Shop Products</button></li>
              <li><button onClick={()=>setPage("Grooming")}>Book Grooming</button></li>
              <li><button onClick={()=>setPage("Adoption")}>Adopt a Pet</button></li>
              <li><button onClick={()=>setPage("Blog")}>Read Blog</button></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><button onClick={()=>setPage("Grooming")}>Pet Grooming</button></li>
              <li><button onClick={()=>setPage("Adoption")}>Pet Adoption</button></li>
              <li><button onClick={()=>setPage("Blog")}>Pet Care Tips</button></li>
              <li><button onClick={()=>setPage("Contact")}>Contact Us</button></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <ul className="footer-links">
              <li><a href="https://wa.me/919876543210" target="_blank" rel="noreferrer">WhatsApp</a></li>
              <li><a href="https://instagram.com/pawpatrolmysuru" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="mailto:hello@pawpatrol.in">Email</a></li>
              <li><a href="tel:+919876543210">Phone</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          © 2026 PawPatrol. All rights reserved. Made with 🐾 for pets everywhere.
        </div>
      </div>
    </footer>
  );
}

function Toast({msg}){
  if(!msg)return null;
  return(
    <div className="toast">
      {msg}
    </div>
  );
}

function CartPanel({cart,onClose,onRemove,toast}){
  const total=cart.reduce((s,p)=>s+p.priceN,0);
  return(
    <div className="cart-panel">
      <div className="cart-header">
        <div className="cart-title">Your Cart ({cart.length})</div>
        <button className="cart-close" onClick={onClose}>×</button>
      </div>
      <div className="cart-items">
        {cart.length===0?<div style={{textAlign:"center",padding:"2rem",color:"var(--muted)"}}>Your cart is empty</div>:
          cart.map((p,i)=>(
            <div key={i} className="cart-item">
              <div className="cart-item-img"><img src={p.img} alt={p.name}/></div>
              <div className="cart-item-body">
                <div className="cart-item-name">{p.name}</div>
                <div className="cart-item-price">{p.price}</div>
              </div>
              <button className="cart-item-remove" onClick={()=>onRemove(i)}>Remove</button>
            </div>
          ))
        }
      </div>
      {cart.length>0&&(
        <div className="cart-footer">
          <div className="cart-total">
            <span>Total:</span>
            <span>₹{total.toLocaleString()}</span>
          </div>
          <button className="cart-checkout" onClick={()=>toast("Checkout coming soon! 🛒")}>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
}

const SLIDES = [
  {img:IMG.hero1,title:"Premium Pet Food",sub:"Nutritionally balanced meals for happy, healthy pets",btn:"Shop Food →"},
  {img:IMG.hero2,title:"Expert Grooming Services",sub:"Professional grooming by certified pet stylists",btn:"Book Now →"},
  {img:IMG.hero3,title:"Pet Adoption Center",sub:"Find your forever companion from our rescued pets",btn:"Adopt Today →"},
  {img:IMG.hero4,title:"Complete Pet Care",sub:"Everything your pet needs under one roof",btn:"Explore →"},
];

function HeroSlider({setPage}){
  const [slide,setSlide]=useState(0);
  useEffect(()=>{const t=setInterval(()=>{setSlide(p=>(p+1)%SLIDES.length);},5000);return()=>clearInterval(t);},[]);
  return(
    <div style={{position:"relative",height:"500px",overflow:"hidden",borderRadius:"var(--radius-xl)",marginBottom:"4rem"}}>
      {SLIDES.map((s,i)=>(
        <div key={i} style={{position:"absolute",top:0,left:0,width:"100%",height:"100%",opacity:i===slide?1:0,transition:"opacity 0.5s ease",background:`linear-gradient(to right, rgba(0,0,0,0.6), transparent), url(${s.img})`,backgroundSize:"cover",backgroundPosition:"center",display:"flex",alignItems:"center",padding:"0 4rem"}}>
          <div style={{color:"var(--white)",maxWidth:"500px"}}>
            <h1 style={{fontSize:"3rem",fontWeight:900,lineHeight:1.1,marginBottom:"1rem"}}>{s.title}</h1>
            <p style={{fontSize:"1.2rem",lineHeight:1.6,marginBottom:"2rem",opacity:0.9}}>{s.sub}</p>
            <button className="btn btn-green" onClick={()=>setPage("Products")}>{s.btn}</button>
          </div>
        </div>
      ))}
      <div style={{position:"absolute",bottom:"2rem",left:"50%",transform:"translateX(-50%)",display:"flex",gap:"0.5rem"}}>
        {SLIDES.map((_,i)=><button key={i} onClick={()=>setSlide(i)} style={{width:"12px",height:"12px",borderRadius:"50%",background:i===slide?"var(--white)":"rgba(255,255,255,0.5)",border:"none",cursor:"pointer"}}/>)}
      </div>
    </div>
  );
}

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
              <div key={b.id} className={`blog-card fu d${i+1}`} onClick={()=>setPage("Blog")}>
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
        <div style={{marginTop:"2.5rem",paddingTop:"1.4rem",borderTop:"1px solid var(--border)"}}><button className="btn btn-ghost" onClick={()=>setPage("Blog")}>← More Articles</button></div>
      </div>
    </section>
  );
}

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
            <div className="rev-list">{reviews.map(r=>(((
              <div key={r.id} className="rev-card">
                <div className="rev-ct"><div><div className="rev-author">{r.author}</div><div className="rev-loc">{r.location}</div></div><div className="rev-date">{r.date}</div></div>
                <div className="rev-s">{"★".repeat(r.rating)}{"☆".repeat(5-r.rating)}</div>
                <div className="rev-txt">{r.text}</div>
                <span className="rev-ptag">{r.pet}</span>
              </div>
            ))))}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact({toast}){
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
            <a href="https://wa.me/919876543210?text=Hello%20PawPatrol!" target="_blank" rel="noreferrer" className="wa-btn">💬 Chat on WhatsApp</a>
          </div>
          <div className="cform">
            <div className="cform-h">Send an Inquiry</div>
            <div className="fgrp"><label className="flbl">Your Name</label><input className="finp" placeholder="Rahul Sharma"/></div>
            <div className="fgrp"><label className="flbl">Email</label><input className="finp" type="email" placeholder="rahul@email.com"/></div>
            <div className="fgrp"><label className="flbl">Topic</label><select className="fsel"><option>Product Inquiry</option><option>Grooming Booking</option><option>Adoption Inquiry</option><option>Feedback</option><option>Other</option></select></div>
            <div className="fgrp"><label className="flbl">Message</label><textarea className="ftxt" placeholder="How can we help you and your pet today?"/></div>
            <button className="btn btn-green" style={{width:"100%",justifyContent:"center"}} onClick={()=>toast("Message sent! We'll reply within 24 hours ✓")}>Send Message →</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App(){
  const [page,setPage]=useState("Home");
  const [selProd,setSelProd]=useState(null);
  const [selBlog,setSelBlog]=useState(null);
  const [reviews,setReviews]=useState(INIT_REVIEWS);
  const [toastMsg,setToastMsg]=useState("");
  const [cart,setCart]=useState([]);
  const [cartOpen,setCartOpen]=useState(false);
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
    case"Contact":return<Contact toast={toast}/>;
    default:return<Home setPage={setPage} setSelProd={setSelProd} addToCart={addToCart}/>;
  }};
  return(
    <><style dangerouslySetInnerHTML={{__html:CSS}}/><AnnBar/><Nav page={page} setPage={setPage} cartCount={cart.length} openCart={()=>setCartOpen(true)}/><main key={page}>{render()}</main><Footer setPage={setPage}/><Toast msg={toastMsg}/>{cartOpen&&<CartPanel cart={cart} onClose={()=>setCartOpen(false)} onRemove={removeFromCart} toast={toast}/>}</>
  );
}
