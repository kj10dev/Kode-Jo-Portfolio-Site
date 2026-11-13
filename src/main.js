import './style.css';

/* ============ CONTENT (edit this block to change what the city says) ============ */
const CONFIG = {
  name: 'Kode-Jo',
  fullName: 'Kojo Ahyia-Osae',
  role: 'Designer / Developer',
  location: 'South Africa',
  email: 'kojoahyiaosae@gmail.com',
  phone: '+27 70 401 4410',
  cvUrl: '',                          // <- optional: link to your own PDF CV; leave empty to download the generated one
  intro: 'Walk, run and explore. Every building is a chapter of my story. Find all 22 landmarks, then team up with me.',
};

const TOOLS = [
  { n: 'Kotlin',          c: '#a97bff', d: 'Android and backend. The language I am growing into most.' },
  { n: 'Python',          c: '#3d7dd9', d: 'Scripts, automation and data work.' },
  { n: 'JavaScript',      c: '#f0c419', d: 'Interactive sites and apps, including this whole city.' },
  { n: 'HTML & CSS',      c: '#ff7a45', d: 'Fast, responsive, readable layouts on any phone.' },
  { n: 'ThreeJS & WebGL', c: '#2fd0c0', d: '3D scenes that run in the browser, like the one you are standing in.' },
  { n: 'SQL',             c: '#4aa3df', d: 'Designing tables and asking databases good questions.' },
  { n: 'Git',             c: '#f0553a', d: 'Version control for every project, every change.' },
  { n: 'VS Code',         c: '#2f95e8', d: 'Where the code gets written.' },
  { n: 'Figma',           c: '#e0458f', d: 'UI design, prototypes and clean handoff.' },
];

/* kind: 'card' opens a card, 'contact' opens the contact pop-up.
   x,z = building centre, dx,dz = where you stand to interact (the door). */
const POIS = [
  { id: 'about', ico: '⛰️', name: 'Table Mountain', tag: 'Summit · About me', rar: '#f5e9ff', color: '#f5e9ff', x: 0, z: -40, dx: 0, dz: -33, r: 7,
    title: 'Hi, I’m Kode-Jo',
    lead: 'I design and build websites that make buying feel effortless for small business owners.',
    body: ['I’m a computer scientist who graduated in 2026, based in South Africa. I build product-focused front ends: clear navigation, fast pages and visuals that make a visitor think “I want this for my business”.',
           'Before tech I worked in customer service, technical support, social media and web development, so I think about the person on the other side of the screen first.'],
    chips: ['Web & app development', 'UX/UI design', '3D on the web', 'Customer-first'] },

  { id: 'unisa', ico: '🎓', name: 'Unisa', tag: 'Education · Class of 2026', rar: '#ff8a3d', color: '#ff8a3d', x: -76, z: -26, dx: -76, dz: -16, r: 8,
    title: 'Computer Science at Unisa',
    lead: 'I completed my degree with the University of South Africa, a distance-learning university.',
    body: ['Studying remotely meant planning my own time, working through material alone and finishing what I started. That habit carries into every client project: clear plan, steady progress, delivered.'],
    chips: ['Self-discipline', 'Time management', 'Independent problem solving', 'CS fundamentals'],
    link: { t: 'unisa.ac.za', u: 'https://www.unisa.ac.za' } },

  { id: 'self', ico: '📚', name: 'Self-Taught Lab', tag: 'Learning · Self-taught', rar: '#9dff4a', color: '#9dff4a', x: -76, z: 20, dx: -76, dz: 27.5, r: 6,
    title: 'Self-taught, by building',
    lead: 'Beyond my degree, I learn a tool by shipping something with it.',
    body: ['Docs, tutorials, and projects that do not exist yet are how I picked up web design, 3D graphics and new frameworks. This city is one of the results.'],
    chips: ['Learns by shipping', 'Reads the docs', 'Side projects', 'Always improving'] },

  { id: 'luno', ico: '🏢', name: 'Luno', tag: 'Customer service · Fintech', rar: '#3ef0ff', color: '#3ef0ff', x: -28, z: -24, dx: -28, dz: -16, r: 7,
    title: 'Luno',
    lead: 'Customer service in fintech: explain complicated things in plain words.',
    body: ['Working with people and their money taught me to stay calm when someone is worried, to fix the problem and not just close the ticket, and to say “I don’t know yet, I’ll find out”.'],
    chips: ['Plain-language explaining', 'Calm under pressure', 'Empathy', 'Problem owner'] },

  { id: 'prodigy', ico: '🏦', name: 'Prodigy Finance', tag: 'Customer service · Fintech', rar: '#3ef0ff', color: '#3ef0ff', x: -28, z: 22, dx: -28, dz: 29.5, r: 7,
    title: 'Prodigy Finance',
    lead: 'A second fintech customer service role. Clear, patient answers matter most when the topic is money.',
    body: ['Every conversation was a small product test: where do people get stuck, what do they misread, what would have saved them a call? I now design interfaces with those answers in mind.'],
    chips: ['Customer empathy', 'Clear communication', 'Spotting friction', 'Follow-through'] },

  { id: 'support', ico: '🎧', name: 'Tech Support Hub', tag: 'Technical support', rar: '#3ef0ff', color: '#3ef0ff', x: -30, z: 60, dx: -30, dz: 66.5, r: 6,
    title: 'Tech Support Hub',
    lead: 'Reproduce the problem, find the cause, explain the fix to someone non-technical.',
    body: ['That is also how I debug my own code. Support work taught me to stay patient with a stubborn bug and to write error messages a real person can understand.'],
    chips: ['Debugging', 'Troubleshooting', 'Documentation', 'Patience'] },

  { id: 'tricore', ico: '🥋', name: 'Tricore MMA', tag: 'Hobby · Martial arts', rar: '#ff3ea5', color: '#ff3ea5', x: 76, z: 20, dx: 76, dz: 28.5, r: 6.5,
    title: 'Tricore MMA',
    lead: 'Martial arts is my personal hobby, and Tricore is the gym.',
    body: ['Tricore is a martial arts school in Cape Town teaching Brazilian Jiu-Jitsu, kickboxing and Muay Thai, boxing, MMA and yoga, for kids and adults.',
           'Training teaches discipline, humility and how to keep going when it is hard. Walk through the gate outside to see how that connects to coding.'],
    chips: ['Discipline', 'Resilience', 'Humility', 'Consistency'],
    link: { t: 'tricoremma.com', u: 'https://tricoremma.com/' } },

  { id: 'kaizen', ico: '⛩️', name: 'Kaizen Gate', tag: 'Philosophy · 改善', rar: '#ff3ea5', color: '#ff3ea5', x: 76, z: 37, dx: 76, dz: 37, r: 5.5, kind: 'kaizen',
    title: 'Kaizen 改善',
    lead: 'Kaizen is the Japanese idea of continuous improvement: small steps, every day.',
    body: ['In martial arts you never master a technique in one session. You fix one detail, then the next. I code the same way: ship, review, improve, repeat. Try it below.'],
    bullets: ['Refactor a little with every commit', 'Review each project: what worked, what to change', 'Small releases beat big rewrites'] },

  { id: 'room', ico: '🖼️', name: 'The Room', tag: 'Project · 3D gallery', rar: '#ff8a3d', color: '#ff8a3d', x: 28, z: -24, dx: 28, dz: -15, r: 7,
    title: 'The Room',
    lead: 'A walkable 3D art gallery you explore in first person.',
    body: ['Built with React Three Fiber, Three.js, Drei and Zustand, scaffolded with Vite. WASD to walk, artworks to discover. Currently in development.'],
    chips: ['React Three Fiber', 'Three.js', 'Zustand', 'Vite'] },

  { id: 'zuri', ico: '🌿', name: 'Zuri Studio', tag: 'Project · Agency', rar: '#9dff4a', color: '#9dff4a', x: 28, z: 22, dx: 28, dz: 29.5, r: 7,
    title: 'Zuri Studio',
    lead: 'My personal design studio showcasing premium work for small businesses.',
    body: ['Services: web design and development, graphic design and branding, 3D, motion and animation, and social media and marketing.',
           'Recent build: a one-page site for a mobile car wash with WhatsApp booking, a price estimator and a reviews section.'],
    chips: ['Web design', 'Branding', '3D & motion', 'Social media'],
    link: { t: 'zuri-studio.co.za', u: 'https://zuri-studio.co.za' } },

  { id: 'saas', ico: '🧪', name: 'Agency SaaS Lab', tag: 'Project · In progress', rar: '#ff8a3d', color: '#ff8a3d', x: 76, z: -26, dx: 76, dz: -18, r: 7,
    title: 'Agency SaaS',
    lead: 'A JavaScript tool for design agencies, in progress.',
    body: ['It generates branded proposals, invoices and welcome packages from your logo and colour palette, and finds leads by location: businesses that need a website update.',
           'Also in the lab: a dealership SaaS concept for African car dealerships, with a full interactive UI mockup.'],
    chips: ['JavaScript', 'Product thinking', 'UI mockups', 'Lead finder'] },

  { id: 'kfc', ico: '🍗', name: 'KFC', tag: 'Pit stop · Power-up', rar: '#f5e9ff', color: '#ff3ea5', x: 30, z: 60, dx: 30, dz: 67.5, r: 6, kind: 'refuel',
    title: 'Fuel stop',
    lead: 'Every long build session runs on snacks.',
    body: ['Grab a bite and get a 20-second speed boost for your next stretch of exploring.'] },

  { id: 'wheel', ico: '🎡', name: 'The Stack Wheel', tag: 'Tools · Tech stack', rar: '#f5e9ff', color: '#f5e9ff', x: 70, z: 62, dx: 70, dz: 51, r: 8, kind: 'wheel',
    title: 'The Stack Wheel',
    lead: 'Every cabin is a tool I use. Tap one to bring it to the top.',
    body: [] },

  { id: 'supply', ico: '📦', name: 'Supply Drop', tag: 'Loot · Work with me', rar: '#ff3ea5', color: '#ff3ea5', x: 0, z: 24, dx: 0, dz: 27, r: 5, kind: 'contact',
    title: 'Supply drop', lead: '', body: [] },
  { id: 'flyrank', ico: '🤖', name: 'FlyRank AI', tag: 'Experience · Current role', rar: '#3ef0ff', color: '#3ef0ff', x: -52, z: -24, dx: -52, dz: -17, r: 7,
    title: 'Front-end AI Engineering intern',
    lead: 'Since July 2026 I have been interning at FlyRank AI as an AI intern, focusing on front-end AI engineering.',
    body: ['This is my current role, and the place I am growing fastest: building the front-end side of AI-powered products.'],
    chips: ['Front-end', 'AI engineering', 'Current role'] },

  { id: 'workingants', ico: '🍽️', name: 'Working Ants', tag: 'Experience · Head waiter 2016–19', rar: '#ff8a3d', color: '#ff8a3d', x: -52, z: 20, dx: -52, dz: 26.5, r: 6,
    title: 'Head Waiter, Working Ants',
    lead: 'Three years of hospitality in Cape Town, where good service keeps a restaurant alive.',
    body: ['I worked alongside restaurant and kitchen staff to keep busy services running and every guest looked after.'],
    chips: ['Hospitality', 'Customer service', 'Teamwork'] },

  { id: 'marklin', ico: '🚂', name: 'Märklin Family Home', tag: 'Experience · Au-pair, Germany 2014–15', rar: '#f5e9ff', color: '#f5e9ff', x: -52, z: 60, dx: -52, dz: 67, r: 6,
    title: 'Au-pair in Bad Homburg',
    lead: 'A year in Germany caring for a family, helping with English and learning German.',
    body: ['Daily chores and tasks, helping the children with English, and learning German and the culture. The model-train loop outside is a nod to the family name.'],
    chips: ['Deutsch', 'Childcare', 'Culture'] },

  { id: 'houseme', ico: '🐞', name: 'HouseME Bug Lab', tag: 'Experience · Junior tester 2019–20', rar: '#9dff4a', color: '#9dff4a', x: 52, z: 22, dx: 52, dz: 29, r: 6,
    title: 'Junior Software Tester, HouseME',
    lead: 'Functional testing, technical support and user journey mapping in Cape Town.',
    body: ['This is where I learned to find bugs before users do, and to explain them clearly to the people who fix them.'],
    chips: ['Functional testing', 'User journeys', 'Technical support', 'User onboarding'] },

  { id: 'hockey', ico: '🏒', name: 'Hockey Rink', tag: 'Experience · Assistant coach 2014–15', rar: '#3ef0ff', color: '#3ef0ff', x: 0, z: -24, dx: 0, dz: -18, r: 6,
    title: 'Assistant Coach, Hockey-Club Bad Homburg',
    lead: 'Coaching a team through drills, new skills and the odd conflict.',
    body: ['I coordinated drills, taught new skills, resolved conflicts, and evaluated and scheduled players.'],
    chips: ['Coaching', 'Conflict resolution', 'Scheduling'] },

  { id: 'lazone', ico: '🎤', name: 'Lazone Stage', tag: 'Experience · Event promoter 2014', rar: '#ff3ea5', color: '#ff3ea5', x: 52, z: -24, dx: 52, dz: -17, r: 6,
    title: 'Event Promoter, Lazone Entertainment',
    lead: 'Four months building client relationships and promoting events around Cape Town.',
    body: ['I promoted events to maximise their revenue and helped with event planning.'],
    chips: ['Client relationships', 'Promotion', 'Event planning'] },

  { id: 'certs', ico: '📜', name: 'Certificate Academy', tag: 'Certificates · Five completed', rar: '#9dff4a', color: '#9dff4a', x: 0, z: 60, dx: 0, dz: 67, r: 6.5,
    title: 'Certificates',
    lead: 'Courses I have completed and certificates I hold.',
    body: ['Get Git Smart: Learn Git', 'Motion Design with Figma: Animation, Motion Graphics, UX/UI', 'Complete Kotlin Coroutines development course', 'Introduction to digital currencies', 'B1 Deutsch Zertifikat'],
    chips: ['Git', 'Figma motion', 'Kotlin', 'Web3 basics', 'Deutsch B1'] },

  { id: 'skills', ico: '🧠', name: 'Skill Tower', tag: 'Skills · Top skills', rar: '#f5e9ff', color: '#f5e9ff', x: 52, z: 60, dx: 52, dz: 66, r: 6,
    title: 'Top skills',
    lead: 'The skills I lean on most, as listed on my profile.',
    body: ['Artificial Intelligence (AI), Relational Databases and Human Computer Interaction are my top three.'],
    chips: ['Artificial Intelligence (AI)', 'Relational Databases', 'Human Computer Interaction'] },
];
const POI = Object.fromEntries(POIS.map(p => [p.id, p]));

const CV = {
  summary: 'Creative and Web3 enthusiast with a client relations background. I design and build responsive websites for small and medium businesses, focusing on branding, storytelling, micro-animations and UX/UI. Currently interning as a front-end AI engineer at FlyRank AI.',
  skills: [
    ['Top skills', 'Artificial Intelligence (AI), Relational Databases, Human Computer Interaction'],
    ['Certifications', 'Get Git Smart (Learn Git); Motion Design with Figma (Animation, Motion Graphics, UX/UI); B1 Deutsch Zertifikat; Introduction to Digital Currencies; Complete Kotlin Coroutines'],
  ],
  experience: [
    ['Front-end AI Engineer Internship, FlyRank AI (Jul 2026 - present)', 'Interning as an AI intern, focusing on front-end AI engineering.'],
    ['Graphic Web Designer, Jaws Family Dentistry (Nov 2025 - present)', 'Assisted with branding and visual identity development. Designed and developed a responsive website across all platforms, managed social media and marketing through content creation, and provided website hosting, maintenance and troubleshooting.'],
    ['Servicing Agent, Prodigy Finance (Apr 2023 - Aug 2025)', 'Educated students about the industry, risks and product offerings. Communicated loan status, terms and conditions, and addressed inquiries and concerns promptly and professionally. Onboarded and troubleshot new and existing customers on the mobile app.'],
    ['Customer Success Associate, Luno (Aug 2021 - Feb 2023)', 'Provided technical support via email, live chat and outbound calls. Collaborated with various departments to resolve customer issues and mitigate complaints. Maintained customer confidentiality and assisted with onboarding and verification.'],
    ['Junior Software Tester, HouseMe (Sep 2019 - Dec 2020)', 'Functional testing, technical support, user journey mapping, inbound and outbound calls, and user onboarding.'],
    ['Head Waiter, Working Ants (2016 - Dec 2019)', 'Provided hospitality and exceptional customer service. Collaborated with restaurant and kitchen staff.'],
    ['Au-pair, Märklin Familie (Jun 2014 - Aug 2015)', 'Performed daily chores, assisted with English learning, and learned German and the culture.'],
    ['Assistant Coach, Hockey-Club Bad Homburg (Aug 2014 - Jun 2015)', 'Coordinated drills and taught new skills, resolved conflicts, and evaluated and scheduled personnel.'],
    ['Event Promoter, Lazone Entertainment (Feb 2014 - May 2014)', 'Built and maintained client relationships, promoted events to maximise revenue, and helped with event planning.'],
  ],
  education: [["Bachelor's degree, Computer Science, University of South Africa (UNISA)", '2019 - 2025']],
  projects: [],
  interests: '',
};
/* ============ ENGINE: setup, helpers, sky, light, day/night ============ */
'use strict';
const $ = id => document.getElementById(id);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const TAU = Math.PI * 2;
let _seed = 11;
const rnd = () => { _seed = (_seed * 16807) % 2147483647; return (_seed - 1) / 2147483646; };
const isTouch = (window.matchMedia && matchMedia('(pointer:coarse)').matches) || 'ontouchstart' in window;
if (isTouch) document.body.classList.add('touch');
const safe = fn => { try { return fn(); } catch (e) { return undefined; } };

let composer = null, bloom = null;
let renderer, scene, camera, sun, hemi, amb, skyMat, stars, sunMesh, moonMesh, glowMats = [], beacons = [];
const colliders = [];
const clickables = [];
const updaters = [];            // per-frame callbacks (dt, t)
const world = { night: 0, nightTarget: 0 };

const T3 = window.THREE;
const C = h => T3 ? new T3.Color(h) : h;

/* ---------- materials ---------- */
const matCache = {};
function std(hex, o) {
  o = o || {};
  const k = hex + '|' + (o.flat ? 1 : 0) + '|' + (o.rough || .85) + '|' + (o.emi || '') + '|' + (o.side || 0);
  if (matCache[k] && !o.unique) return matCache[k];
  const m = new T3.MeshStandardMaterial({ color: C(hex), roughness: o.rough == null ? .85 : o.rough, metalness: o.metal || 0, flatShading: o.flat !== false });
  if (o.emi) { m.emissive = C(o.emi); m.emissiveIntensity = 0; glowMats.push({ m, base: o.emiI || 1 }); }
  if (o.side) m.side = o.side;
  if (o.transparent) { m.transparent = true; m.opacity = o.opacity == null ? .8 : o.opacity; }
  if (!o.unique) matCache[k] = m;
  return m;
}
function glow(hex, base) { // emissive-at-night material (lamps, signs)
  const m = new T3.MeshStandardMaterial({ color: C(hex), emissive: C(hex), emissiveIntensity: 0, roughness: .6 });
  glowMats.push({ m, base: base || 1.4, min: .25 });
  return m;
}

/* ---------- mesh helpers ---------- */
function mesh(geo, mat, x, y, z, parent, shadow) {
  const m = new T3.Mesh(geo, mat);
  m.position.set(x || 0, y || 0, z || 0);
  if (shadow !== false) { m.castShadow = true; m.receiveShadow = true; }
  if (parent) parent.add(m);
  return m;
}
const boxG = (w, h, d) => new T3.BoxGeometry(w, h, d);
function box(w, h, d, hex, x, y, z, parent, o) { return mesh(boxG(w, h, d), typeof hex === 'string' ? std(hex, o) : hex, x, y, z, parent); }
function cyl(rt, rb, h, seg, hex, x, y, z, parent, o) { return mesh(new T3.CylinderGeometry(rt, rb, h, seg || 12), typeof hex === 'string' ? std(hex, o) : hex, x, y, z, parent); }
function addCollider(cx, cz, w, d) { colliders.push({ x0: cx - w / 2, x1: cx + w / 2, z0: cz - d / 2, z1: cz + d / 2 }); }

/* ---------- canvas textures ---------- */
const DISPLAY_FONT = '"Righteous",Arial,sans-serif';
function canvasTex(w, h, draw) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const g = c.getContext('2d'); draw(g, w, h);
  const t = new T3.CanvasTexture(c);
  t.anisotropy = 4;
  return t;
}
function roundRect(g, x, y, w, h, r) {
  g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath();
}
function signTex(text, bg, fg, o) {
  o = o || {};
  const W = o.w || 512, H = o.h || 128;
  return canvasTex(W, H, (g, w, h) => {
    g.fillStyle = bg; roundRect(g, 4, 4, w - 8, h - 8, o.r == null ? 22 : o.r); g.fill();
    if (o.border) { g.lineWidth = 6; g.strokeStyle = o.border; roundRect(g, 8, 8, w - 16, h - 16, 18); g.stroke(); }
    g.fillStyle = fg; g.textAlign = 'center'; g.textBaseline = 'middle';
    let size = o.size || 64;
    g.font = size + 'px ' + DISPLAY_FONT;
    while (g.measureText(text).width > w - 40 && size > 14) { size -= 3; g.font = size + 'px ' + DISPLAY_FONT; }
    g.fillText(text, w / 2, h / 2 + 3);
  });
}
function sign(text, w, h, bg, fg, x, y, z, parent, o) {
  const tex = signTex(text, bg, fg, o);
  const m = new T3.Mesh(new T3.PlaneGeometry(w, h), new T3.MeshBasicMaterial({ map: tex, transparent: true }));
  m.position.set(x, y, z); if (parent) parent.add(m); return m;
}
/* facade: day colour map + lit-window emissive map */
function facade(wall, win, cols, rows, W, H) {
  const day = canvasTex(W, H, (g, w, h) => {
    g.fillStyle = wall; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 700; i++) { g.fillStyle = 'rgba(60,30,10,.08)'; g.fillRect(rnd() * w, rnd() * h, 1.5, 1.5); }
    const cw = w / cols, ch = h / rows;
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
      g.fillStyle = win; g.fillRect(c * cw + cw * .2, r * ch + ch * .22, cw * .6, ch * .56);
      g.fillStyle = 'rgba(255,255,255,.22)'; g.fillRect(c * cw + cw * .2, r * ch + ch * .22, cw * .6, ch * .12);
    }
  });
  const emi = canvasTex(W, H, (g, w, h) => {
    g.fillStyle = '#000'; g.fillRect(0, 0, w, h);
    const cw = w / cols, ch = h / rows;
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
      if (rnd() < .62) { g.fillStyle = rnd() < .75 ? '#ffd98a' : '#bfe6ff'; g.fillRect(c * cw + cw * .2, r * ch + ch * .22, cw * .6, ch * .56); }
    }
  });
  return { day, emi };
}
function wallMat(wall, win, cols, rows, W, H) {
  const f = facade(wall, win, cols, rows, W || 256, H || 256);
  const m = new T3.MeshStandardMaterial({ map: f.day, emissiveMap: f.emi, emissive: C('#ffffff'), emissiveIntensity: 0, roughness: .5, metalness: .08 });
  glowMats.push({ m, base: 1.15 });
  return m;
}
/* a building shell with windows. returns a Group sitting on y=0 centred on x,z */
function building(o) {
  const g = new T3.Group(); g.position.set(o.x, 0, o.z);
  const cols = o.cols || Math.max(2, Math.round(o.w / 2.6)), colsD = o.colsD || Math.max(2, Math.round(o.d / 2.6)), rows = o.rows || Math.max(1, Math.round(o.h / 3.2));
  const win = o.win || '#27465f';
  const front = wallMat(o.wall, win, cols, rows, 256, Math.min(512, 64 * rows + 64));
  const side = wallMat(o.wall, win, colsD, rows, 256, Math.min(512, 64 * rows + 64));
  const roof = std(o.roof || '#3b4650');
  const m = new T3.Mesh(boxG(o.w, o.h, o.d), [side, side, roof, roof, front, front]);
  m.position.y = o.h / 2; m.castShadow = true; m.receiveShadow = true; g.add(m);
  scene.add(g);
  if (o.collide !== false) addCollider(o.x, o.z, o.w + .6, o.d + .6);
  return g;
}

/* ---------- renderer / scene / lights / sky ---------- */
function initRenderer() {
  renderer = new T3.WebGLRenderer({ antialias: !isTouch, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isTouch ? 1.75 : 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = T3.PCFSoftShadowMap;
  $('stage').appendChild(renderer.domElement);
  scene = new T3.Scene();
  scene.fog = new T3.Fog(0xf0c4e0, 90, 340);
  camera = new T3.PerspectiveCamera(58, 1, .5, 900);
  camera.position.set(0, 8, 58);

  hemi = new T3.HemisphereLight(0xffd6f0, 0x3a2a5e, .6); scene.add(hemi);
  amb = new T3.AmbientLight(0xffffff, .1); scene.add(amb);
  sun = new T3.DirectionalLight(0xfff1d6, .85);
  sun.castShadow = true;
  const ms = isTouch ? 1024 : 2048;
  sun.shadow.mapSize.set(ms, ms);
  const sc = sun.shadow.camera; sc.left = -46; sc.right = 46; sc.top = 46; sc.bottom = -46; sc.near = 1; sc.far = 220;
  sun.shadow.bias = -.0006;
  scene.add(sun); scene.add(sun.target);

  // sky dome
  skyMat = new T3.ShaderMaterial({
    side: T3.BackSide, depthWrite: false, fog: false,
    uniforms: { top: { value: C('#e88a5a') }, bottom: { value: C('#f8dfb0') } },
    vertexShader: 'varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: 'uniform vec3 top; uniform vec3 bottom; varying vec3 vP; void main(){ float h = clamp(normalize(vP).y,0.0,1.0); gl_FragColor = vec4(mix(bottom, top, pow(h,0.55)),1.0); }',
  });
  const dome = new T3.Mesh(new T3.SphereGeometry(450, 24, 16), skyMat); dome.renderOrder = -10; dome.frustumCulled = false; dome.name = 'sky'; scene.add(dome);

  // stars
  const sp = []; for (let i = 0; i < 420; i++) { const a = rnd() * TAU, e = Math.acos(1 - rnd() * .95); const r = 430; sp.push(Math.sin(e) * Math.cos(a) * r, Math.cos(e) * r, Math.sin(e) * Math.sin(a) * r); }
  const sg = new T3.BufferGeometry(); sg.setAttribute('position', new T3.Float32BufferAttribute(sp, 3));
  stars = new T3.Points(sg, new T3.PointsMaterial({ color: 0xffffff, size: 2, sizeAttenuation: false, transparent: true, opacity: 0, fog: false, depthWrite: false }));
  stars.frustumCulled = false; scene.add(stars);

  // sun + moon discs
  sunMesh = new T3.Mesh(new T3.SphereGeometry(16, 16, 12), new T3.MeshBasicMaterial({ color: 0xfff3b0, fog: false })); sunMesh.frustumCulled = false; scene.add(sunMesh);
  moonMesh = new T3.Mesh(new T3.SphereGeometry(11, 16, 12), new T3.MeshBasicMaterial({ color: 0xe8efff, fog: false })); moonMesh.frustumCulled = false; scene.add(moonMesh);
  if (T3.EffectComposer && T3.RenderPass && T3.UnrealBloomPass) {
    try {
      composer = new T3.EffectComposer(renderer);
      composer.addPass(new T3.RenderPass(scene, camera));
      bloom = new T3.UnrealBloomPass(new T3.Vector2(256, 256), .14, .55, .9);
      composer.addPass(bloom);
    } catch (e) { composer = null; bloom = null; }
  }
}

const SKY = {
  day:   { top: C('#9b7fe0'), bot: C('#f6c6e8'), fog: C('#f0c4e0'), hs: C('#ffd6f0'), hg: C('#3a2a5e'), hi: .6, si: .9, sc: C('#ffe2f4'), ai: .12 },
  night: { top: C('#000000'), bot: C('#150a2a'), fog: C('#0a0514'), hs: C('#5a2d86'), hg: C('#1a0f2e'), hi: .55, si: .4, sc: C('#ff9fd8'), ai: .15 },
};
const SUN_DIR = T3 ? new T3.Vector3(.55, .75, .45).normalize() : null;
const MOON_DIR = T3 ? new T3.Vector3(-.45, .6, -.65).normalize() : null;
const _c = T3 ? new T3.Color() : null, _v = T3 ? new T3.Vector3() : null;

function applyTime(n, focus) {
  const D = SKY.day, N = SKY.night;
  if (bloom) { bloom.strength = lerp(.22, .95, n); bloom.threshold = lerp(.85, .55, n); }
  skyMat.uniforms.top.value.copy(D.top).lerp(N.top, n);
  skyMat.uniforms.bottom.value.copy(D.bot).lerp(N.bot, n);
  scene.fog.color.copy(D.fog).lerp(N.fog, n);
  hemi.color.copy(D.hs).lerp(N.hs, n); hemi.groundColor.copy(D.hg).lerp(N.hg, n); hemi.intensity = lerp(D.hi, N.hi, n);
  sun.color.copy(D.sc).lerp(N.sc, n); sun.intensity = lerp(D.si, N.si, n);
  amb.intensity = lerp(D.ai, N.ai, n);
  stars.material.opacity = clamp((n - .35) / .65, 0, 1);
  for (const g of glowMats) g.m.emissiveIntensity = (g.min || 0) * (1 - n) + g.base * n;
  for (const b of beacons) b.opacity = lerp(b.userData.dayO, b.userData.nightO, n);
  // light + discs follow the focus point so they feel infinitely far
  _v.copy(SUN_DIR).lerp(MOON_DIR, n).normalize();
  sun.position.copy(focus).addScaledVector(_v, 90); sun.target.position.copy(focus);
  sunMesh.position.copy(focus).addScaledVector(SUN_DIR, 400); sunMesh.visible = n < .85;
  moonMesh.position.copy(focus).addScaledVector(MOON_DIR, 400); moonMesh.visible = n > .15;
  stars.position.copy(focus);
  scene.getObjectByName('sky').position.copy(focus);
}
/* ============ WORLD: ground, roads, sea, mountain, trees, ambient life ============ */
const WORLD = { x0: -94, x1: 94, z0: -58, z1: 76 };
function paveMat(hex, speck, rep) {
  const t = canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = '#ffffff'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 1400; i++) { g.fillStyle = speck; g.fillRect(rnd() * w, rnd() * h, 1 + rnd() * 1.5, 1 + rnd() * 1.5); }
    g.strokeStyle = 'rgba(0,0,0,.08)'; g.lineWidth = 2; g.strokeRect(0, 0, w, h);
  });
  t.wrapS = t.wrapT = T3.RepeatWrapping; t.repeat.set(rep, rep);
  return new T3.MeshStandardMaterial({ color: C(hex), map: t, roughness: .38, metalness: .12 });
}

function buildGround() {
  // grass base
  const grass = mesh(new T3.PlaneGeometry(900, 900), std('#2b1d4f', { flat: false }), 0, -.02, -60, scene, false);
  grass.rotation.x = -Math.PI / 2; grass.receiveShadow = true;
  // city slab
  const slab = mesh(new T3.PlaneGeometry(204, 144), paveMat('#3a2a5e', 'rgba(0,0,0,.16)', 16), 0, .01, 10, scene, false);
  slab.rotation.x = -Math.PI / 2; slab.receiveShadow = true;
  // promenade
  const prom = mesh(new T3.PlaneGeometry(204, 32), paveMat('#4e3470', 'rgba(0,0,0,.12)', 14), 0, .03, 60, scene, false);
  prom.rotation.x = -Math.PI / 2; prom.receiveShadow = true;
  // beach + sea
  const beach = mesh(new T3.PlaneGeometry(500, 12), std('#d4c08a', { flat: false }), 0, .02, 82, scene, false);
  beach.rotation.x = -Math.PI / 2;
  // roads
  const road = paveMat('#1a1028', 'rgba(0,0,0,.28)', 10);
  const hRoad = (z) => { const r = mesh(new T3.PlaneGeometry(204, 8), road, 0, .05, z, scene, false); r.rotation.x = -Math.PI / 2; r.receiveShadow = true; };
  const vRoad = (x, z0, z1) => { const r = mesh(new T3.PlaneGeometry(8, z1 - z0), road, x, .05, (z0 + z1) / 2, scene, false); r.rotation.x = -Math.PI / 2; r.receiveShadow = true; };
  hRoad(0); hRoad(44); vRoad(0, -60, 44); vRoad(-52, -60, 44); vRoad(52, -60, 44);
  // dashed centre lines (instanced)
  const dashG = new T3.PlaneGeometry(2.4, .35), dashM = new T3.MeshBasicMaterial({ color: 0xf2e6a0 });
  const spots = [];
  for (const z of [0, 44]) for (let x = -92; x <= 92; x += 6) spots.push([x, z, 0]);
  for (const x of [-52, 0, 52]) for (let z = -56; z <= 40; z += 6) spots.push([x, z, 1]);
  const inst = new T3.InstancedMesh(dashG, dashM, spots.length), d = new T3.Object3D();
  spots.forEach((s, i) => { d.position.set(s[0], .07, s[1]); d.rotation.set(-Math.PI / 2, 0, s[2] ? Math.PI / 2 : 0); d.updateMatrix(); inst.setMatrixAt(i, d.matrix); });
  scene.add(inst);
  // plaza
  const plaza = mesh(new T3.CylinderGeometry(11, 11, .12, 36), std('#cdbf9c', { flat: false }), 0, .08, 24, scene, false); plaza.receiveShadow = true;
  const ring = mesh(new T3.TorusGeometry(10.2, .22, 6, 48), std('#ff3ea5'), 0, .2, 24, scene, false); ring.rotation.x = Math.PI / 2;
  // compass-rose spokes on the plaza
  for (let i = 0; i < 4; i++) { const s = box(.5, .02, 9.6, '#d3c3a0', 0, .15, 24, scene, { flat: false }); s.rotation.y = i * Math.PI / 4; s.castShadow = false; }
}

/* low-poly sea with waves */
let seaGeo, seaBase;
function buildSea() {
  seaGeo = new T3.PlaneGeometry(700, 360, 60, 30); seaGeo.rotateX(-Math.PI / 2);
  seaBase = Float32Array.from(seaGeo.attributes.position.array);
  const m = new T3.MeshStandardMaterial({ color: C('#1b5f8f'), roughness: .35, metalness: .1, flatShading: true });
  m.userData = { day: C('#2a7fb0'), night: C('#0b1a33') };
  const sea = new T3.Mesh(seaGeo, m); sea.position.set(0, -.5, 270); sea.receiveShadow = true; sea.name = 'sea'; scene.add(sea);
  updaters.push((dt, t) => {
    const p = seaGeo.attributes.position.array;
    for (let i = 0; i < p.length; i += 3) p[i + 1] = seaBase[i + 1] + Math.sin(seaBase[i] * .06 + t * 1.2) * .35 + Math.cos(seaBase[i + 2] * .09 + t * .9) * .3;
    seaGeo.attributes.position.needsUpdate = true;
    m.color.copy(m.userData.day).lerp(m.userData.night, world.night);
  });
}

/* Table Mountain, Lion's Head, Devil's Peak */
function peakGeo(rt, rb, h, seg, hs, sx, sz, rough, flatTop) {
  const g = new T3.CylinderGeometry(rt, rb, h, seg, hs, false);
  const p = g.attributes.position, col = [];
  for (let i = 0; i < p.count; i++) {
    let x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const edge = Math.abs(y - h / 2) < .01; // top cap vertices stay flatter
    const j = (edge && flatTop ? .25 : 1) * rough;
    x += (rnd() - .5) * j * 6; z += (rnd() - .5) * j * 6; if (!(edge && flatTop)) y += (rnd() - .5) * j * 3;
    p.setXYZ(i, x * sx, y, z * sz);
    const k = clamp((y + h / 2) / h, 0, 1);
    const c = k < .35 ? C('#4f8a55').lerp(C('#7a9a62'), k / .35) : C('#8a8f86').lerp(C('#b9a98e'), (k - .35) / .65);
    c.offsetHSL(0, 0, (rnd() - .5) * .05); col.push(c.r, c.g, c.b);
  }
  g.setAttribute('color', new T3.Float32BufferAttribute(col, 3));
  g.computeVertexNormals();
  return g;
}
function buildMountains() {
  const vm = new T3.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 1 });
  const tm = new T3.Mesh(peakGeo(34, 78, 50, 18, 5, 1.9, .55, 1, true), vm); tm.position.set(0, 25, -122); tm.castShadow = true; tm.receiveShadow = true; scene.add(tm);
  const lh = new T3.Mesh(peakGeo(4, 36, 46, 12, 4, 1.1, 1, 1, false), vm); lh.position.set(-118, 23, -100); lh.castShadow = true; scene.add(lh);
  const dp = new T3.Mesh(peakGeo(7, 40, 42, 12, 4, 1.2, .9, 1, false), vm); dp.position.set(124, 21, -106); dp.castShadow = true; scene.add(dp);
  // foothills
  const hillM = new T3.MeshStandardMaterial({ color: C('#5d9a5a'), flatShading: true, roughness: 1 });
  [[-60, -78, 24, 11], [-20, -86, 30, 14], [30, -80, 26, 10], [70, -84, 28, 13], [0, -72, 20, 7], [-95, -70, 22, 9], [100, -72, 22, 9]].forEach(h => {
    const m = new T3.Mesh(new T3.ConeGeometry(h[2], h[3], 9, 2), hillM); m.position.set(h[0], h[3] / 2 - .5, h[1]); m.rotation.y = rnd() * 3; m.castShadow = true; m.receiveShadow = true; scene.add(m);
  });
  // the "tablecloth" cloud spilling over the flat top
  const cloud = new T3.Group(); cloud.position.set(0, 52, -112);
  const cm = new T3.MeshStandardMaterial({ color: 0xffffff, roughness: 1, transparent: true, opacity: .93, flatShading: true });
  for (let i = 0; i < 16; i++) { const s = new T3.Mesh(new T3.SphereGeometry(6 + rnd() * 5, 8, 6), cm); s.position.set((rnd() - .5) * 90, rnd() * 3, (rnd() - .5) * 26); s.scale.set(1.6, .45, 1); cloud.add(s); }
  scene.add(cloud);
  updaters.push((dt, t) => { cloud.position.x = Math.sin(t * .05) * 6; cloud.position.y = 52 + Math.sin(t * .3) * .6; });
  // drifting small clouds
  const small = [];
  for (let i = 0; i < 9; i++) {
    const g = new T3.Group();
    for (let k = 0; k < 4; k++) { const s = new T3.Mesh(new T3.SphereGeometry(3 + rnd() * 2.5, 7, 5), cm); s.position.set(k * 3.2 - 5, rnd() * 1.2, rnd() * 2); s.scale.y = .6; g.add(s); }
    g.position.set((rnd() - .5) * 360, 62 + rnd() * 26, -40 + (rnd() - .5) * 220); scene.add(g); small.push(g);
  }
  updaters.push((dt) => { for (const c of small) { c.position.x += dt * 1.1; if (c.position.x > 200) c.position.x = -200; } });
}

/* trees, palms, lamps */
function buildNature() {
  const trunkG = new T3.CylinderGeometry(.25, .35, 2.2, 6), leafG = new T3.ConeGeometry(1.7, 3.8, 7);
  const trunkM = std('#6b4a2f'), leafM = std('#2f7d46');
  const spots = [];
  const ok = (x, z) => !colliders.some(c => x > c.x0 - 3 && x < c.x1 + 3 && z > c.z0 - 3 && z < c.z1 + 3) && !(Math.abs(x) < 6) && !(Math.abs(Math.abs(x) - 52) < 6) && !(Math.abs(z) < 6) && !(Math.abs(z - 44) < 6) && !(Math.hypot(x, z - 24) < 14) && !(x > 56 && z > 46 && z < 80);
  let tries = 0;
  while (spots.length < 90 && tries++ < 900) { const x = (rnd() - .5) * 188, z = -56 + rnd() * 100; if (z > 42 && z < 50) continue; if (ok(x, z)) spots.push([x, z]); }
  const tI = new T3.InstancedMesh(trunkG, trunkM, spots.length), lI = new T3.InstancedMesh(leafG, leafM, spots.length), d = new T3.Object3D();
  tI.castShadow = lI.castShadow = true;
  spots.forEach((s, i) => {
    const sc = .8 + rnd() * .7;
    d.position.set(s[0], 1.1 * sc, s[1]); d.scale.set(sc, sc, sc); d.rotation.set(0, rnd() * 3, 0); d.updateMatrix(); tI.setMatrixAt(i, d.matrix);
    d.position.set(s[0], (2.2 + 1.7) * sc, s[1]); d.updateMatrix(); lI.setMatrixAt(i, d.matrix);
  });
  scene.add(tI); scene.add(lI);
  // palms on the promenade
  for (let x = -88; x <= 88; x += 11) {
    if (x > 52 && x < 88) continue;
    const g = new T3.Group(); g.position.set(x, 0, 48.5 + (x % 2 ? 0 : 0));
    const tr = new T3.Mesh(new T3.CylinderGeometry(.22, .35, 5, 6), trunkM); tr.position.y = 2.5; tr.rotation.z = .12; tr.castShadow = true; g.add(tr);
    for (let k = 0; k < 7; k++) { const pv = new T3.Group(); pv.position.y = 5; pv.rotation.y = k * TAU / 7 + x; const dr = new T3.Group(); dr.rotation.x = .55 + (k % 2) * .25; pv.add(dr); const l = new T3.Mesh(new T3.BoxGeometry(.7, .08, 3.2), leafM); l.position.z = 1.6; l.castShadow = true; dr.add(l); g.add(pv); }
    scene.add(g);
  }
  // street lamps
  const poleM = std('#39424d'), lampM = glow('#ffe7a8', 1.8);
  const lampSpots = [];
  for (let x = -88; x <= 88; x += 22) { lampSpots.push([x, 4.8]); lampSpots.push([x, 39.2]); }
  for (let z = -50; z <= 40; z += 22) { lampSpots.push([5, z]); lampSpots.push([-47, z]); lampSpots.push([57, z]); }
  const pI = new T3.InstancedMesh(new T3.CylinderGeometry(.12, .15, 5, 6), poleM, lampSpots.length);
  const hI = new T3.InstancedMesh(new T3.SphereGeometry(.45, 8, 6), lampM, lampSpots.length);
  lampSpots.forEach((s, i) => { d.scale.set(1, 1, 1); d.rotation.set(0, 0, 0); d.position.set(s[0], 2.5, s[1]); d.updateMatrix(); pI.setMatrixAt(i, d.matrix); d.position.set(s[0], 5.1, s[1]); d.updateMatrix(); hI.setMatrixAt(i, d.matrix); });
  scene.add(pI); scene.add(hI);
}

/* life: cars, seagulls, boats, cable car, blimp */
function buildLife() {
  // cars loop the central block clockwise
  const path = [[-52, 0], [52, 0], [52, 44], [-52, 44]];
  const seg = path.map((p, i) => { const q = path[(i + 1) % 4]; return { a: p, b: q, len: Math.hypot(q[0] - p[0], q[1] - p[1]) }; });
  const total = seg.reduce((s, x) => s + x.len, 0);
  const cols = ['#ff3ea5', '#f5e9ff', '#9dff4a', '#3ef0ff', '#ff8a3d', '#f2f4f7'];
  const cars = [];
  for (let i = 0; i < 6; i++) {
    const g = new T3.Group();
    box(2.2, .7, 4.2, cols[i], 0, .7, 0, g); box(1.9, .6, 2.1, '#dfe9f2', 0, 1.3, -.2, g);
    [[-1.05, 1.4], [1.05, 1.4], [-1.05, -1.4], [1.05, -1.4]].forEach(w => { const wh = cyl(.4, .4, .3, 8, '#15191f', w[0], .4, w[1], g); wh.rotation.z = Math.PI / 2; });
    box(.5, .25, .1, '#fff3b0', -.7, .75, 2.12, g, { flat: true }); box(.5, .25, .1, '#fff3b0', .7, .75, 2.12, g);
    scene.add(g); cars.push({ g, d: (total / 6) * i });
  }
  updaters.push((dt) => {
    for (const c of cars) {
      c.d = (c.d + dt * 8) % total; let d = c.d, s = 0; while (d > seg[s].len) { d -= seg[s].len; s++; }
      const S = seg[s], t = d / S.len, dx = S.b[0] - S.a[0], dz = S.b[1] - S.a[1], l = S.len;
      const nx = -dz / l, nz = dx / l; // lane offset to the right
      c.g.position.set(S.a[0] + dx * t + nx * -2, 0, S.a[1] + dz * t + nz * -2);
      c.g.rotation.y = Math.atan2(dx, dz);
    }
  });
  // seagulls
  const gulls = [];
  for (let i = 0; i < 8; i++) {
    const g = new T3.Group(), wm = std('#ffffff');
    const L = box(1.6, .08, .5, wm, -.8, 0, 0, g), R = box(1.6, .08, .5, wm, .8, 0, 0, g); box(.4, .3, .9, wm, 0, 0, 0, g);
    scene.add(g); gulls.push({ g, L, R, a: rnd() * TAU, r: 14 + rnd() * 30, h: 22 + rnd() * 18, s: .25 + rnd() * .2, cx: 20 + rnd() * 40, cz: 78 + rnd() * 10 });
  }
  updaters.push((dt, t) => {
    for (const b of gulls) {
      b.a += dt * b.s; b.g.position.set(b.cx + Math.cos(b.a) * b.r, b.h + Math.sin(t + b.a) * 1.5, b.cz + Math.sin(b.a) * b.r * .6);
      b.g.rotation.y = -b.a; const f = Math.sin(t * 6 + b.a * 3) * .5; b.L.rotation.z = f; b.R.rotation.z = -f; b.L.position.y = f * .6; b.R.position.y = f * .6;
    }
  });
  // boats
  const boats = [];
  for (let i = 0; i < 4; i++) {
    const g = new T3.Group(); box(2.4, .8, 6, ['#f2f4f7', '#ff3ea5', '#f5e9ff', '#3ef0ff'][i], 0, .3, 0, g); box(.2, 4, .2, '#8a949e', 0, 2.8, 0, g);
    const sail = box(.08, 3, 2.2, '#fff', 0, 3, -.9, g); sail.castShadow = true;
    g.position.set(-80 + i * 55, -.2, 100 + (i % 2) * 24); scene.add(g); boats.push(g);
  }
  updaters.push((dt, t) => boats.forEach((b, i) => { b.position.y = -.1 + Math.sin(t * 1.1 + i) * .25; b.rotation.z = Math.sin(t * .9 + i) * .05; b.position.x += dt * .5 * (i % 2 ? -1 : 1); if (b.position.x > 120) b.position.x = -120; if (b.position.x < -120) b.position.x = 120; }));
  // cable car running from the base station to the summit
  const cableA = new T3.Vector3(0, 10, -44), cableB = new T3.Vector3(0, 50.5, -100);
  const wire = new T3.Line(new T3.BufferGeometry().setFromPoints([cableA, cableB]), new T3.LineBasicMaterial({ color: 0x20262d })); scene.add(wire);
  const cab = new T3.Group(); box(2.6, 1.8, 2, '#ff3ea5', 0, -1.6, 0, cab); box(.12, 1.2, .12, '#20262d', 0, -.3, 0, cab);
  const cab2 = cab.clone(); scene.add(cab); scene.add(cab2);
  updaters.push((dt, t) => { const k = (Math.sin(t * .18) + 1) / 2; cab.position.lerpVectors(cableA, cableB, k); cab2.position.lerpVectors(cableB, cableA, k); });
}

function buildBlimp() {
  const g = new T3.Group();
  const body = new T3.Mesh(new T3.SphereGeometry(4, 14, 10), std('#ff3ea5')); body.scale.set(2.4, 1, 1); body.castShadow = true; g.add(body);
  box(.4, 3, 2, '#f5e9ff', -8.2, 1.2, 0, g); box(.4, 2, 3, '#f5e9ff', -8.2, 0, 0, g);
  box(3, 1, 1.8, '#1a1028', 0, -4.4, 0, g);
  const tex = signTex('AVAILABLE FOR WORK • TAP ME', '#f5e9ff', '#2a1d00', { w: 1024, h: 160, size: 84, border: '#2a1d00' });
  const bm = new T3.MeshBasicMaterial({ map: tex, side: T3.DoubleSide });
  const banner = new T3.Mesh(new T3.PlaneGeometry(26, 4), bm); banner.position.set(-23, -.5, 0); g.add(banner);
  const hit = new T3.Mesh(new T3.SphereGeometry(16, 8, 6), new T3.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false })); hit.position.set(-10, 0, 0); g.add(hit);
  g.userData.onClick = () => openContact('blimp');
  g.traverse(o => { o.userData.root = g; });
  clickables.push(g);
  scene.add(g);
  updaters.push((dt, t) => {
    const a = t * .06; g.position.set(Math.cos(a) * 78, 46 + Math.sin(t * .5) * 1.2, 8 + Math.sin(a) * 60);
    g.rotation.y = Math.atan2(-Math.cos(a), -Math.sin(a)); banner.rotation.z = Math.sin(t * 1.4) * .03;
  });
}
/* ============ LANDMARKS (part 1): beacons, nameplates, buildings ============ */
const poiVis = {};

function drawIcon(g, emoji, color, done) {
  g.clearRect(0, 0, 128, 128);
  g.fillStyle = 'rgba(43,29,20,.88)'; g.beginPath(); g.arc(64, 64, 58, 0, TAU); g.fill();
  g.lineWidth = 7; g.strokeStyle = done ? '#9dff4a' : color; g.stroke();
  g.font = '58px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillStyle = '#fff'; g.fillText(emoji, 64, 70);
  if (done) { g.fillStyle = '#9dff4a'; g.beginPath(); g.arc(100, 26, 20, 0, TAU); g.fill(); g.strokeStyle = '#0a0518'; g.lineWidth = 5; g.beginPath(); g.moveTo(91, 26); g.lineTo(98, 33); g.lineTo(110, 19); g.stroke(); }
}
function addBeacon(p) {
  const grp = new T3.Group(); grp.position.set(p.dx, 0, p.dz);
  const pm = new T3.MeshBasicMaterial({ color: C(p.color), transparent: true, opacity: .22, depthWrite: false, blending: T3.AdditiveBlending, side: T3.DoubleSide, fog: true });
  pm.userData = { dayO: .2, nightO: .5 };
  const pillar = new T3.Mesh(new T3.CylinderGeometry(1.3, 1.3, 60, 16, 1, true), pm); pillar.position.y = 30; grp.add(pillar); beacons.push(pm);
  const rm = new T3.MeshBasicMaterial({ color: C(p.color), transparent: true, opacity: .8, side: T3.DoubleSide });
  const ring = new T3.Mesh(new T3.RingGeometry(p.r * .42, p.r * .5, 40), rm); ring.rotation.x = -Math.PI / 2; ring.position.y = .14; grp.add(ring);
  const disc = new T3.Mesh(new T3.CircleGeometry(p.r * .42, 32), new T3.MeshBasicMaterial({ color: C(p.color), transparent: true, opacity: .16, side: T3.DoubleSide })); disc.rotation.x = -Math.PI / 2; disc.position.y = .12; grp.add(disc);
  const cv = document.createElement('canvas'); cv.width = cv.height = 128; const g = cv.getContext('2d'); drawIcon(g, p.ico, p.color, false);
  const tex = new T3.CanvasTexture(cv);
  const sp = new T3.Sprite(new T3.SpriteMaterial({ map: tex, transparent: true, depthWrite: false })); sp.scale.set(4.6, 4.6, 1); sp.position.y = p.iy || 11; grp.add(sp);
  // nameplate
  const nm = canvasTex(512, 96, (g2, w, h) => {
    g2.fillStyle = 'rgba(43,29,20,.88)'; roundRect(g2, 4, 6, w - 8, h - 12, 30); g2.fill();
    g2.fillStyle = p.color; g2.beginPath(); g2.arc(40, h / 2, 12, 0, TAU); g2.fill();
    g2.fillStyle = '#eaf3f9'; g2.textAlign = 'left'; g2.textBaseline = 'middle'; let s = 50; g2.font = s + 'px ' + DISPLAY_FONT;
    while (g2.measureText(p.name).width > w - 100 && s > 18) { s -= 2; g2.font = s + 'px ' + DISPLAY_FONT; }
    g2.fillText(p.name, 66, h / 2 + 3);
  });
  const np = new T3.Sprite(new T3.SpriteMaterial({ map: nm, transparent: true, depthWrite: false })); np.scale.set(8.6, 1.6, 1); np.position.y = (p.iy || 11) - 3.6; grp.add(np);
  scene.add(grp);
  poiVis[p.id] = { grp, pm, rm, sp, tex, g, np, p, done: false, baseY: p.iy || 11 };
  updaters.push((dt, t) => {
    const v = poiVis[p.id], d = Math.hypot(player.pos.x - p.dx, player.pos.z - p.dz);
    v.sp.position.y = v.baseY + Math.sin(t * 2 + p.x) * .35;
    v.np.material.opacity = Math.min(clamp(1.4 - (d - 50) / 60, 0, 1), clamp((d - 7) / 9, 0, 1));
    v.sp.material.opacity = Math.min(clamp(1.4 - (d - 140) / 80, .35, 1), clamp((d - 4) / 8, .15, 1));
    v.rm.opacity = .55 + Math.sin(t * 3) * .25;
  });
}
function markVisited(id) {
  const v = poiVis[id]; if (!v || v.done) return; v.done = true;
  v.pm.color.set('#9dff4a'); v.rm.color.set('#9dff4a'); drawIcon(v.g, v.p.ico, v.p.color, true); v.tex.needsUpdate = true;
}

/* ---- shared prop helpers ---- */
function door(x, y, z, w, h, parent, hex) { const d = box(w, h, .12, hex || '#1a232d', x, y, z, parent, { flat: true }); d.castShadow = false; return d; }
function awning(x, y, z, w, d, c1, c2, parent, n) {
  n = n || 8; const sw = w / n;
  for (let i = 0; i < n; i++) { const a = box(sw, .15, d, i % 2 ? c1 : c2, x - w / 2 + sw * (i + .5), y, z, parent); a.rotation.x = .28; }
}
function pagodaRoof(g, w, d, y, hex) {
  const r1 = box(w + 5, .7, d + 5, hex, 0, y, 0, g); const r2 = box(w - 1, .7, d - 1, hex, 0, y + 1.8, 0, g);
  const body = box(w - 4, 1.8, d - 4, '#26303d', 0, y + .9, 0, g);
  [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(c => { const t = box(2.2, .5, 2.2, hex, c[0] * (w + 4.4) / 2, y + .5, c[1] * (d + 4.4) / 2, g); t.rotation.z = c[0] * -.35; });
  return [r1, r2, body];
}

function buildSummitStation() {
  const g = building({ x: 0, z: -40, w: 12, h: 5, d: 7, wall: '#d9d3c7', roof: '#ff3ea5', rows: 1, cols: 4, colsD: 3 });
  sign('SUMMIT STATION', 9, 1.5, '#2a1450', '#f5e9ff', 0, 3.6, 3.56, g, { border: '#f5e9ff' });
  door(0, 1.4, 3.52, 2.4, 2.8, g);
  box(.9, 10, .9, '#39424d', 0, 5, -4, g); // pylon holding the cable
  // big billboard on the mountain face
  const bb = sign('KODE-JO', 62, 14, 'rgba(0,0,0,0)', '#ffffff', 0, 34, -84, scene, { w: 1024, h: 230, size: 190, r: 0 }); bb.material.opacity = .92;
  const bb2 = sign('DESIGNER & DEVELOPER', 40, 3.6, 'rgba(0,0,0,0)', '#f5e9ff', 0, 25.2, -84, scene, { w: 1024, h: 120, size: 78, r: 0 });
}

function buildUnisa() {
  const g = building({ x: -76, z: -26, w: 22, h: 9, d: 14, wall: '#f5e9ff', roof: '#5b6672', win: '#2b4a66', cols: 8, rows: 2 });
  for (let i = 0; i < 8; i++) cyl(.55, .6, 8, 10, '#f6f2e8', -9.1 + i * 2.6, 4, 8.3, g);
  box(21.6, .7, 3, '#cfc6b3', 0, 8.3, 8.4, g);
  const ped = box(8, 2.2, 1, '#f6f2e8', 0, 9.9, 7.9, g); ped.castShadow = true;
  sign('DISTANCE UNIVERSITY', 14, 1.8, '#2a1450', '#ffffff', 0, 5.2, 7.35, g, { border: '#f5e9ff', size: 54 });
  door(0, 1.8, 7.05, 3, 3.6, g);
  box(4, 18, 4, '#d9d1be', -3, 9, -3, g);
  box(5, 1.2, 5, '#5b6672', -3, 18.6, -3, g);
  const clock = new T3.Mesh(new T3.CircleGeometry(1.5, 20), new T3.MeshBasicMaterial({ color: 0xfff5d6 })); clock.position.set(-3, 15, -.97); g.add(clock);
  // class-of-2026 banner
  sign('CLASS OF 2026', 9, 1.4, '#ff8a3d', '#0a0518', 8, 2.2, 8.9, g, { size: 56 });
  // satellite dish: learning from anywhere
  const dish = new T3.Mesh(new T3.SphereGeometry(1.6, 12, 8, 0, TAU, 0, 1.2), std('#e9edf2', { side: T3.DoubleSide })); dish.position.set(8, 10.4, 0); dish.rotation.set(.6, 0, -.5); g.add(dish); box(.2, 1.4, .2, '#8a949e', 8, 9.6, 0, g);
}

function buildSelfTaught() {
  const g = building({ x: -76, z: 20, w: 10, h: 5, d: 9, wall: '#c9a27a', roof: '#6b4a2f', win: '#3a3a32', cols: 4, colsD: 3, rows: 1 });
  const roof = new T3.Mesh(new T3.ConeGeometry(8.6, 3.4, 4), std('#8c3f3a')); roof.position.y = 6.7; roof.rotation.y = Math.PI / 4; roof.scale.set(1, 1, .9); roof.castShadow = true; g.add(roof);
  sign('SELF-TAUGHT LAB', 7.2, 1.2, '#2a2118', '#f5e9ff', 0, 3.7, 4.56, g, { size: 50 });
  door(0, 1.3, 4.53, 1.8, 2.6, g, '#4a2f1d');
  const glowW = box(2.4, 1.6, .1, glow('#ffd98a', 1.4), -3, 2.4, 4.53, g, { unique: true }); glowW.castShadow = false;
  // book stacks outside
  const bk = ['#ff3ea5', '#3ef0ff', '#f5e9ff', '#9dff4a', '#ff8a3d'];
  for (let s = 0; s < 3; s++) for (let i = 0; i < 5; i++) { const b = box(1.5 - i * .06, .32, 1, bk[(i + s) % 5], 5.8 + s * 1.7, .2 + i * .33, 6.6 + s * .3, g); b.rotation.y = (i - 2) * .12; }
  // desk with laptop
  box(2.6, .15, 1.4, '#6b4a2f', -5.8, 1.1, 6.4, g); box(.15, 1.1, .15, '#4a2f1d', -6.9, .55, 6.0, g); box(.15, 1.1, .15, '#4a2f1d', -4.7, .55, 6.0, g);
  box(1.1, .08, .8, '#aeb7c1', -5.8, 1.22, 6.4, g); const scr = box(1.1, .75, .06, glow('#3ef0ff', 1.2), -5.8, 1.62, 6.05, g, { unique: true }); scr.rotation.x = -.15;
}

function buildLuno() {
  const g = building({ x: -28, z: -24, w: 10, h: 30, d: 10, wall: '#2a1450', roof: '#150a2e', win: '#7fb5e6', cols: 4, colsD: 4, rows: 9 });
  box(10.4, .6, 10.4, '#3ef0ff', 0, 15, 0, g); box(10.4, .6, 10.4, '#3ef0ff', 0, 24, 0, g);
  sign('FINTECH TOWER', 8, 1.5, '#0a0518', '#3ef0ff', 0, 3.5, 5.06, g, { border: '#3ef0ff' });
  door(0, 1.5, 5.04, 2.6, 3, g);
  const coin = new T3.Group(); coin.position.y = 33.5; g.add(coin);
  const disc = cyl(2.2, 2.2, .45, 24, '#f5e9ff', 0, 0, 0, coin, { metal: .5, rough: .4 }); disc.rotation.x = Math.PI / 2;
  const inner = cyl(1.5, 1.5, .5, 24, '#ffdf7a', 0, 0, 0, coin); inner.rotation.x = Math.PI / 2;
  updaters.push((dt) => { coin.rotation.y += dt * 1.4; });
  box(.2, 3, .2, '#8a949e', 0, 31.5, 0, g);
}

function buildProdigy() {
  const g = building({ x: -28, z: 22, w: 12, h: 12, d: 9, wall: '#e9edf2', roof: '#59677a', win: '#4f7aa3', cols: 5, colsD: 4, rows: 3 });
  for (let i = 0; i < 4; i++) cyl(.45, .5, 5.2, 10, '#ffffff', -3.9 + i * 2.6, 2.6, 5, g);
  box(11, .5, 2.4, '#c9d2dc', 0, 5.3, 4.9, g);
  sign('STUDENT FINANCE', 8.4, 1.4, '#2a1450', '#ffffff', 0, 7.2, 4.56, g, { border: '#3ef0ff', size: 54 });
  door(0, 1.5, 4.54, 2.4, 3, g);
  // graduation cap on the roof
  const cap = new T3.Group(); cap.position.y = 13.4; g.add(cap);
  const brd = box(5, .3, 5, '#1a232d', 0, 1.1, 0, cap); brd.rotation.y = Math.PI / 4;
  cyl(1.6, 1.8, 1.2, 10, '#1a232d', 0, .4, 0, cap); box(.1, 1.8, .1, '#f5e9ff', 2.4, .4, 0, cap); box(.4, .5, .4, '#f5e9ff', 2.4, -.5, 0, cap);
  updaters.push((dt, t) => { cap.rotation.y = Math.sin(t * .8) * .35; });
}

function buildSupport() {
  const g = building({ x: -30, z: 60, w: 8, h: 6, d: 7, wall: '#2a1450', roof: '#150a2e', win: '#9fd6ff', cols: 3, colsD: 3, rows: 2 });
  sign('TECH SUPPORT', 6.6, 1.2, '#0a0518', '#3ef0ff', 0, 3.4, 3.56, g, { size: 56, border: '#3ef0ff' });
  door(0, 1.3, 3.54, 1.8, 2.6, g);
  // headset on the roof
  const hs = new T3.Mesh(new T3.TorusGeometry(2.2, .26, 8, 20, Math.PI), std('#e9edf2')); hs.position.set(0, 6.2, 0); hs.castShadow = true; g.add(hs);
  const e1 = new T3.Mesh(new T3.SphereGeometry(.75, 10, 8), std('#3ef0ff')); e1.position.set(-2.2, 6.2, 0); g.add(e1);
  const e2 = e1.clone(); e2.position.x = 2.2; g.add(e2);
  const mic = box(.1, .1, 2, '#e9edf2', 2.4, 5.6, 1, g); mic.rotation.y = .5; sphereAt(2.9, 5.4, 2, .25, '#ff3ea5', g);
  // ticket counter
  box(4.4, .9, .9, '#1a1028', -5.5, .45, 4.4, g);
  const screen = box(1.3, .9, .08, glow('#9dff4a', 1.3), -5.5, 1.5, 4.2, g, { unique: true });
}
function sphereAt(x, y, z, r, hex, parent) { return mesh(new T3.SphereGeometry(r, 10, 8), std(hex), x, y, z, parent); }

function buildTricore() {
  const g = building({ x: 76, z: 20, w: 16, h: 6, d: 12, wall: '#1f1040', roof: '#26303d', win: '#4d6a86', cols: 6, colsD: 4, rows: 1 });
  const rg = new T3.Group(); rg.position.y = 6.2; g.add(rg); pagodaRoof(rg, 16, 12, 0, '#d6455f');
  sign('TRICORE MMA', 11, 2, '#d6455f', '#ffffff', 0, 4.1, 6.06, g, { size: 78, border: '#ffffff' });
  door(0, 1.5, 6.04, 3, 3, g);
  // training mats + hanging bags
  box(14, .12, 4, '#1a1028', 0, .06, 8.2, g, { flat: true }).castShadow = false;
  for (let i = 0; i < 3; i++) { box(.08, 2, .08, '#8a949e', -5.4 + i * 1.8, 5.4, 7.6, g); const bag = cyl(.5, .5, 1.8, 10, i % 2 ? '#ff3ea5' : '#f5e9ff', -5.4 + i * 1.8, 3.9, 7.6, g); updaters.push((dt, t) => { bag.rotation.z = Math.sin(t * 1.6 + i) * .08; }); }
  box(.15, 5.6, .15, '#8a949e', -6.2, 2.8, 7.6, g); box(.15, 5.6, .15, '#8a949e', -.4, 2.8, 7.6, g); box(6, .15, .15, '#8a949e', -3.3, 5.5, 7.6, g);
  // boxing ring beside the gym
  const ring = new T3.Group(); ring.position.set(90, 0, 14); scene.add(ring);
  box(7, .5, 7, '#1a1028', 0, .25, 0, ring); box(6.4, .1, 6.4, '#3ef0ff', 0, .55, 0, ring);
  [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(c => { cyl(.14, .14, 2.4, 8, '#e9edf2', c[0] * 3.1, 1.7, c[1] * 3.1, ring); });
  [1.3, 1.9, 2.5].forEach((y, k) => { const rc = ['#ff3ea5', '#ffffff', '#ff3ea5'][k]; box(6.2, .07, .07, rc, 0, y, -3.1, ring); box(6.2, .07, .07, rc, 0, y, 3.1, ring); box(.07, .07, 6.2, rc, -3.1, y, 0, ring); box(.07, .07, 6.2, rc, 3.1, y, 0, ring); });
  addCollider(90, 14, 7.6, 7.6);
}

function buildKaizen() {
  const g = new T3.Group(); g.position.set(76, 0, 37); scene.add(g);
  const red = '#e8344f';
  [-3.4, 3.4].forEach(x => { cyl(.5, .6, 7.2, 10, red, x, 3.6, 0, g); });
  box(10, .55, 1.1, '#1a232d', 0, 7.7, 0, g); box(9.4, .45, 1, red, 0, 7.4, 0, g);
  box(7.6, .4, .6, red, 0, 6.0, 0, g);
  addCollider(72.6, 37, 1.4, 1.4); addCollider(79.4, 37, 1.4, 1.4);
  const plaque = canvasTex(256, 192, (c, w, h) => {
    c.fillStyle = '#2a1450'; roundRect(c, 4, 4, w - 8, h - 8, 18); c.fill(); c.lineWidth = 6; c.strokeStyle = '#f5e9ff'; roundRect(c, 10, 10, w - 20, h - 20, 14); c.stroke();
    c.fillStyle = '#ffffff'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.font = '92px "Hiragino Sans","Noto Sans JP","Yu Gothic","Meiryo","Noto Sans CJK JP",sans-serif'; c.fillText('改善', w / 2, h / 2 - 8);
    c.font = '30px ' + DISPLAY_FONT; c.fillStyle = '#f5e9ff'; c.fillText('KAIZEN', w / 2, h - 34);
  });
  const pl = new T3.Mesh(new T3.PlaneGeometry(2.6, 1.95), new T3.MeshBasicMaterial({ map: plaque, side: T3.DoubleSide })); pl.position.set(0, 6.9, 0); pl.scale.set(1.2, 1.2, 1); g.add(pl);
  // the staircase of small improvements, west of the gate
  let h = .8;
  for (let i = 0; i < 7; i++) { const s = box(2.1, h, 4, i === 6 ? '#f5e9ff' : (i % 2 ? '#9dff4a' : '#3ef0ff'), 57 + i * 2.1, h / 2, 37, scene); h *= 1.42; }
  addCollider(63.3, 37, 14.8, 4.2);
  sign('1% BETTER EVERY DAY', 12, 1.5, '#2a1450', '#f5e9ff', 63, 1.4, 39.2, scene, { size: 56 });
}

function buildRoom() {
  const g = building({ x: 28, z: -24, w: 14, h: 8, d: 12, wall: '#eef0f4', roof: '#cfd5de', win: '#cfd8e3', cols: 3, colsD: 3, rows: 1 });
  [['#ff3ea5', -4.4], ['#3ef0ff', 0], ['#f5e9ff', 4.4]].forEach((a, i) => {
    box(3.2, 3.6, .15, '#1a232d', a[1], 4.4, 6.06, g);
    const art = canvasTex(128, 144, (c, w, h) => { c.fillStyle = a[0]; c.fillRect(0, 0, w, h); c.fillStyle = 'rgba(255,255,255,.55)'; c.beginPath(); c.arc(w * (.3 + i * .2), h * .4, 30, 0, TAU); c.fill(); c.fillStyle = 'rgba(43,29,20,.5)'; c.fillRect(0, h * .65, w, h * .35); });
    const pn = new T3.Mesh(new T3.PlaneGeometry(2.8, 3.2), new T3.MeshBasicMaterial({ map: art })); pn.position.set(a[1], 4.4, 6.15); g.add(pn);
  });
  sign('THE ROOM', 6, 1.3, '#2a1450', '#ffffff', 0, 7, 6.08, g, { size: 72, border: '#ff8a3d' });
  door(0, 1.6, 6.04, 3.2, 3.2, g);
  const lite = box(3, .2, 3, glow('#ff8a3d', 1.2), 0, 8.1, 0, g, { unique: true });
}

function buildZuri() {
  const g = building({ x: 28, z: 22, w: 11, h: 8, d: 9, wall: '#2a1450', roof: '#123826', win: '#cfe8d6', cols: 4, colsD: 3, rows: 2 });
  box(11.4, .6, 9.4, '#ff3ea5', 0, 8.3, 0, g);
  awning(0, 3.1, 5.2, 7, 1.6, '#ff3ea5', '#fff3e0', g, 7);
  sign('ZURI STUDIO', 7.4, 1.5, '#ff3ea5', '#ffffff', 0, 6.2, 4.56, g, { size: 66 });
  door(0, 1.4, 4.54, 2.2, 2.8, g);
  // leaf cut-outs
  [-4.2, 4.2].forEach(x => { const lf = new T3.Mesh(new T3.SphereGeometry(.9, 8, 6), std('#9dff4a')); lf.scale.set(1, 1.6, .3); lf.position.set(x, 3, 4.6); lf.rotation.z = x > 0 ? -.5 : .5; g.add(lf); });
}

function buildSaas() {
  const g = building({ x: 76, z: -26, w: 12, h: 9, d: 10, wall: '#1f1040', roof: '#150a2e', win: '#6f7bb8', cols: 4, colsD: 3, rows: 2 });
  const draw = [
    (c, w, h) => { c.fillStyle = '#fff'; c.fillRect(0, 0, w, h); c.fillStyle = '#ff8a3d'; c.fillRect(8, 8, w - 16, 14); c.fillStyle = '#cfd5de'; for (let i = 0; i < 6; i++) c.fillRect(8, 32 + i * 14, w - 16 - (i % 3) * 20, 7); },
    (c, w, h) => { c.fillStyle = '#2a1450'; c.fillRect(0, 0, w, h); c.fillStyle = '#9dff4a'; c.fillRect(10, 10, 50, 10); c.fillStyle = '#eaf3f9'; for (let i = 0; i < 5; i++) { c.fillRect(10, 30 + i * 16, w - 20, 8); } c.fillStyle = '#f5e9ff'; c.fillRect(w - 50, h - 22, 40, 12); },
    (c, w, h) => { c.fillStyle = '#1a3a52'; c.fillRect(0, 0, w, h); c.strokeStyle = '#3ef0ff'; c.lineWidth = 2; for (let i = 0; i < 6; i++) { c.beginPath(); c.moveTo(0, i * 22); c.lineTo(w, i * 22 + 16); c.stroke(); } c.fillStyle = '#ff3ea5'; c.beginPath(); c.arc(w / 2, h / 2, 12, 0, TAU); c.fill(); },
  ];
  draw.forEach((d, i) => {
    const t = canvasTex(128, 160, d); const sc = new T3.Mesh(new T3.PlaneGeometry(3, 3.7), new T3.MeshBasicMaterial({ map: t }));
    sc.position.set(-3.8 + i * 3.8, 5.2, 5.07); g.add(sc);
  });
  sign('AGENCY LAB', 7, 1.3, '#0a0518', '#ff8a3d', 0, 8.1, 5.06, g, { size: 62, border: '#ff8a3d' });
  door(0, 1.4, 5.04, 2.2, 2.8, g);
  const dish = new T3.Mesh(new T3.SphereGeometry(1.5, 12, 8, 0, TAU, 0, 1.2), std('#e9edf2', { side: T3.DoubleSide })); dish.position.set(3, 10.4, 0); dish.rotation.set(.7, 0, 0); g.add(dish);
  box(.12, 5, .12, '#8a949e', -3, 11.5, 0, g);
}

function buildKfc() {
  const g = building({ x: 30, z: 60, w: 12, h: 6, d: 9, wall: '#f4f1ea', roof: '#c92a3e', win: '#7aa2c2', cols: 4, colsD: 3, rows: 1 });
  box(12.2, 1.6, 9.2, '#d6354a', 0, 5.2, 0, g);
  awning(0, 3.6, 5.2, 11, 2, '#d6354a', '#ffffff', g, 10);
  sign('FRIED CHICKEN', 8, 1.4, '#ffffff', '#c92a3e', 0, 5.4, 4.62, g, { size: 60, border: '#c92a3e' });
  door(0, 1.4, 4.54, 2.4, 2.8, g);
  // giant drumstick on the roof
  const dr = new T3.Group(); dr.position.set(0, 9.2, 0); dr.rotation.z = -.5; g.add(dr);
  const meat = new T3.Mesh(new T3.SphereGeometry(1.7, 12, 10), std('#d9822b', { flat: false })); meat.scale.set(1, 1.2, 1); meat.position.y = 1.4; meat.castShadow = true; dr.add(meat);
  cyl(.28, .28, 1.8, 8, '#f6f0e0', 0, -.6, 0, dr); sphereAt(-.3, -1.6, 0, .35, '#f6f0e0', dr); sphereAt(.3, -1.6, 0, .35, '#f6f0e0', dr);
  updaters.push((dt, t) => { dr.rotation.y = t * .9; });
  // outdoor tables
  [-4, 0, 4].forEach(x => { cyl(.9, .9, .1, 12, '#e9edf2', x, 1.1, 7, g); cyl(.1, .1, 1.1, 6, '#8a949e', x, .55, 7, g); });
}

/* neon signage: glowing text plates that bloom at night */
function neonText(text, hex) {
  return canvasTex(512, 160, (g, w, h) => {
    g.clearRect(0, 0, w, h);
    g.font = '700 86px ' + DISPLAY_FONT; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.shadowColor = hex; g.shadowBlur = 34; g.fillStyle = hex; g.fillText(text, w / 2, h / 2 + 4);
    g.shadowBlur = 0; g.fillStyle = 'rgba(255,255,255,.9)'; g.fillText(text, w / 2, h / 2 + 4);
  });
}
/* ---------- experience, certificate and skill landmarks ---------- */
function buildFlyRank() {
  const g = building({ x: -52, z: -24, w: 10, h: 16, d: 10, wall: '#1d2a4a', roof: '#0c1426', win: '#3ef0ff', cols: 4, colsD: 4, rows: 5 });
  sign('FLYRANK AI', 8.2, 1.3, '#0a0518', '#3ef0ff', 0, 12.6, 5.06, g, { border: '#3ef0ff', size: 56 });
  door(0, 1.4, 5.04, 2.4, 2.8, g);
  const scr = box(5, 3, .1, glow('#3ef0ff', 1.3), 0, 7.4, 5.06, g, { unique: true }); scr.castShadow = false;
  const orb = new T3.Group(); orb.position.y = 17.6; g.add(orb);
  const ring = new T3.Mesh(new T3.TorusGeometry(2.2, .14, 8, 24), glow('#3ef0ff', 1.2)); ring.rotation.x = Math.PI / 2; orb.add(ring);
  box(.9, .9, .9, '#ff3ea5', 2.2, 0, 0, orb);
  updaters.push((dt, t) => { orb.rotation.y = t * 1.6; });
}

function buildWorkingAnts() {
  const g = building({ x: -52, z: 20, w: 10, h: 6, d: 9, wall: '#7a3b2e', roof: '#3b2a24', win: '#ffd98a', cols: 4, colsD: 3, rows: 2 });
  sign('WORKING ANTS', 8.4, 1.3, '#1a0f0a', '#ffd98a', 0, 5, 4.56, g, { border: '#ff8a3d', size: 50 });
  awning(0, 3.2, 5.0, 8, 2, '#ff3ea5', '#ffd98a', g, 8);
  door(0, 1.3, 4.53, 1.8, 2.6, g, '#2a1810');
  for (const tx of [-2.6, 2.6]) { box(1.6, .12, 1.6, '#e9edf2', tx, 1.6, 7.2, g); cyl(.1, .1, 1.5, 6, '#2a1810', tx, .75, 7.2, g); }
}

function buildMarklin() {
  const g = building({ x: -52, z: 60, w: 10, h: 7, d: 10, wall: '#f0e2c8', roof: '#8c3f3a', win: '#27465f', cols: 4, colsD: 4, rows: 2 });
  const roof = new T3.Mesh(new T3.ConeGeometry(7.6, 3.2, 4), std('#8c3f3a')); roof.position.y = 8.6; roof.rotation.y = Math.PI / 4; roof.castShadow = true; g.add(roof);
  sign('WILLKOMMEN', 7.6, 1.2, '#1a2a4a', '#ffd98a', 0, 4.4, 5.06, g, { size: 50 });
  door(0, 1.4, 5.04, 2.4, 2.8, g, '#5b2a1a');
  // model-train loop beside the house (local x = 10 is the loop centre)
  for (let i = 0; i < 16; i++) {
    const a = i / 16 * TAU;
    const tr = box(.9, .12, .45, '#8a949e', 10 + Math.cos(a) * 3.6, .08, Math.sin(a) * 3.6, g); tr.rotation.y = -a - Math.PI / 2;
  }
  const train = new T3.Group(); g.add(train);
  box(1.8, .9, .7, '#c1272d', 0, .6, 0, train); box(.9, .6, .6, '#1a232d', .6, 1.2, 0, train);
  updaters.push((dt, t) => { const a = t * .6; train.position.set(10 + Math.cos(a) * 3.6, 0, Math.sin(a) * 3.6); train.rotation.y = -a - Math.PI / 2; });
}

function buildHockey() {
  const g = building({ x: 0, z: -24, w: 12, h: 5, d: 8, wall: '#dfe9f2', roof: '#2b3a4a', win: '#3ef0ff', cols: 5, colsD: 3, rows: 1 });
  sign('HOCKEY', 7, 1.2, '#0a0518', '#ff8a3d', 0, 4.1, 4.06, g, { size: 56 });
  door(0, 1.4, 4.04, 2.4, 2.8, g);
  // ice rink in front of the clubhouse
  box(12, .12, 7, '#bfefff', 0, .07, 9, g, { flat: true });
  box(12.6, .5, .3, '#ff3ea5', 0, .25, 12.7, g); box(12.6, .5, .3, '#ff3ea5', 0, .25, 5.3, g);
  box(.3, .5, 7.4, '#ff3ea5', -6.3, .25, 9, g); box(.3, .5, 7.4, '#ff3ea5', 6.3, .25, 9, g);
  box(.2, 1, 1.4, '#ff8a3d', -5.6, .6, 9, g); box(.2, 1, 1.4, '#ff8a3d', 5.6, .6, 9, g);
  const puck = cyl(.5, .5, .14, 12, '#0a0518', 0, .2, 9, g);
  updaters.push((dt, t) => { puck.rotation.y = t * 3; });
}

function buildLazone() {
  const g = building({ x: 52, z: -24, w: 10, h: 8, d: 10, wall: '#2a1450', roof: '#150a2e', win: '#ff3ea5', cols: 4, colsD: 4, rows: 2 });
  sign('LAZONE LIVE', 9, 1.6, '#0a0518', '#ff3ea5', 0, 6.4, 5.06, g, { border: '#ff3ea5', size: 60 });
  door(0, 1.4, 5.04, 2.6, 2.8, g);
  box(8, .4, 3, '#ffd98a', 0, .2, 9, g, { flat: true });
  const beams = [];
  for (let i = 0; i < 3; i++) {
    const grp = new T3.Group(); grp.position.set(-3 + i * 3, 8, 1); g.add(grp);
    const cone = new T3.Mesh(new T3.ConeGeometry(1.4, 4, 12, 1, true), glow('#ff3ea5', .6)); cone.position.y = -2; grp.add(cone);
    beams.push(grp);
  }
  updaters.push((dt, t) => { beams.forEach((b, i) => { b.rotation.z = Math.sin(t * 1.6 + i * 2) * .45; b.rotation.x = Math.cos(t * 1.2 + i) * .25; }); });
}

function buildHouseme() {
  const g = building({ x: 52, z: 22, w: 10, h: 7, d: 10, wall: '#1f3a2a', roof: '#0f1d15', win: '#9dff4a', cols: 4, colsD: 4, rows: 2 });
  sign('BUG LAB', 7.6, 1.3, '#0a0518', '#9dff4a', 0, 5.8, 5.06, g, { border: '#9dff4a', size: 56 });
  door(0, 1.4, 5.04, 2.4, 2.8, g);
  box(3.6, 1.6, .12, glow('#9dff4a', 1.1), 0, 3.6, 5.1, g, { unique: true }).castShadow = false;
  const bug = new T3.Group(); bug.position.y = 9.4; g.add(bug);
  const body = new T3.Mesh(new T3.SphereGeometry(1.2, 14, 10), glow('#9dff4a', 1.1)); body.scale.set(1, .8, 1.3); bug.add(body);
  const head = new T3.Mesh(new T3.SphereGeometry(.55, 10, 8), glow('#9dff4a', 1.1)); head.position.set(0, 0, 1.6); bug.add(head);
  for (let i = 0; i < 6; i++) box(.12, .12, 1.4, '#0f1d15', (i % 2 ? .9 : -.9), -.3, -.6 + Math.floor(i / 2) * .6, bug);
  updaters.push((dt, t) => { bug.rotation.y = t * .8; bug.position.y = 9.4 + Math.sin(t * 2) * .25; });
}

function buildCerts() {
  const g = building({ x: 0, z: 60, w: 10, h: 6, d: 10, wall: '#f5e9ff', roof: '#2b1d4f', win: '#ffd98a', cols: 4, colsD: 4, rows: 2 });
  sign('CERTIFIED', 7.6, 1.3, '#2a1450', '#ffd98a', 0, 4.4, 5.06, g, { border: '#ffd98a', size: 56 });
  door(0, 1.4, 5.04, 2.4, 2.8, g);
  for (let i = 0; i < 5; i++) {
    const x = -3.2 + i * 1.6;
    box(1.1, .3, 1.1, '#2b1d4f', x, 6.15, 0, g);
    cyl(.32, .22, .7, 10, '#ffd98a', x, 6.7, 0, g, { metal: .6, rough: .3 });
  }
  const scrolls = new T3.Group(); scrolls.position.y = 9.4; g.add(scrolls);
  for (let i = 0; i < 5; i++) {
    const a = i / 5 * TAU;
    const sc = box(1.3, .9, .06, '#fff5d6', Math.cos(a) * 3.2, 0, Math.sin(a) * 3.2, scrolls); sc.rotation.y = -a;
  }
  updaters.push((dt, t) => { scrolls.rotation.y = t * .5; });
}

function buildSkills() {
  const g = building({ x: 52, z: 60, w: 8, h: 10, d: 8, wall: '#1d2a4a', roof: '#0c1426', win: '#f5e9ff', cols: 3, colsD: 3, rows: 3 });
  sign('TOP SKILLS', 6.8, 1.2, '#0a0518', '#f5e9ff', 0, 8.6, 4.06, g, { border: '#f5e9ff', size: 50 });
  door(0, 1.4, 4.04, 2.2, 2.8, g);
  for (const y of [3.2, 6.2]) { const r = new T3.Mesh(new T3.TorusGeometry(4.6, .14, 8, 28), glow('#3ef0ff', 1.1)); r.rotation.x = Math.PI / 2; r.position.y = y; g.add(r); }
  const cubes = new T3.Group(); cubes.position.y = 12.2; g.add(cubes);
  ['#3ef0ff', '#9dff4a', '#ff3ea5'].forEach((c, i) => {
    const a = i / 3 * TAU;
    box(1.4, 1.4, 1.4, glow(c, 1.2), Math.cos(a) * 3.4, 0, Math.sin(a) * 3.4, cubes);
  });
  updaters.push((dt, t) => { cubes.rotation.y = t * .9; cubes.position.y = 12.2 + Math.sin(t * 1.5) * .3; });
}

function buildNeon() {
  [['LUNO', '#3ef0ff', -28, 19.5, -18.8, 6.2, 1.9], ['ZURI', '#ff3ea5', 28, 11.2, 26.75, 5.2, 1.6], ['TRICORE', '#9dff4a', 76, 10.6, 26.4, 6.2, 1.9]].forEach(n => {
    const m = new T3.Mesh(new T3.PlaneGeometry(n[5], n[6]), new T3.MeshBasicMaterial({ map: neonText(n[0], n[1]), transparent: true, depthWrite: false, fog: false }));
    m.position.set(n[2], n[3], n[4]); scene.add(m);
  });
}
/* ============ LANDMARKS (part 2): Stack Wheel + supply drop ============ */
const wheel = { cx: 70, cy: 15.5, cz: 62, R: 12, angle: 0, vel: 0, base: .12, goto: null, hold: 0, cabins: [], top: 0, boardIdx: -1, ride: false, rideAngle0: 0 };
const NT = TOOLS.length;
const wrapPI = a => { a = (a + Math.PI) % TAU; if (a < 0) a += TAU; return a - Math.PI; };

function strut(p0, p1, th, hex, parent) {
  const len = p0.distanceTo(p1);
  const m = new T3.Mesh(boxG(th, th, len), std(hex)); m.position.copy(p0).add(p1).multiplyScalar(.5);
  m.quaternion.setFromUnitVectors(new T3.Vector3(0, 0, 1), p1.clone().sub(p0).normalize()); m.castShadow = true; parent.add(m); return m;
}

function buildWheel() {
  const W = wheel, root = new T3.Group(); root.position.set(W.cx, 0, W.cz); scene.add(root);
  // A-frame legs on both faces
  const hub = new T3.Vector3(0, W.cy, 0);
  [-2.2, 2.2].forEach(z => {
    strut(new T3.Vector3(-9, 0, z * 1.6), new T3.Vector3(0, W.cy, z), .7, '#d8dee6', root);
    strut(new T3.Vector3(9, 0, z * 1.6), new T3.Vector3(0, W.cy, z), .7, '#d8dee6', root);
  });
  cyl(1.1, 1.1, 5.8, 14, '#f5e9ff', 0, W.cy, 0, root).rotation.x = Math.PI / 2;
  box(5, .6, 7, '#8a949e', -9, .3, 0, root); box(5, .6, 7, '#8a949e', 9, .3, 0, root);
  addCollider(W.cx - 9, W.cz, 5, 7); addCollider(W.cx + 9, W.cz, 5, 7);
  // rotating rim + spokes
  const rim = new T3.Group(); rim.position.set(0, W.cy, 0); root.add(rim); W.rim = rim;
  [-2.4, 2.4].forEach(z => {
    const tr = new T3.Mesh(new T3.TorusGeometry(W.R, .28, 6, 48), std('#f2f4f7')); tr.position.z = z; tr.castShadow = true; rim.add(tr);
    for (let i = 0; i < 12; i++) { const a = i * TAU / 12; const p = new T3.Vector3(Math.cos(a) * W.R, Math.sin(a) * W.R, z); strut(new T3.Vector3(0, 0, z), p, .16, '#c3ccd6', rim); }
  });
  for (let i = 0; i < 12; i++) { const a = i * TAU / 12; box(.14, .14, 4.8, '#c3ccd6', Math.cos(a) * W.R, Math.sin(a) * W.R, 0, rim); }
  // rim bulbs (instanced, glow at night)
  const bm = glow('#ffe7a8', 2), bg = new T3.SphereGeometry(.28, 6, 5), bi = new T3.InstancedMesh(bg, bm, 72), d = new T3.Object3D();
  for (let i = 0; i < 72; i++) { const a = (i % 36) * TAU / 36, z = i < 36 ? -2.4 : 2.4; d.position.set(Math.cos(a) * (W.R + .35), Math.sin(a) * (W.R + .35), z); d.updateMatrix(); bi.setMatrixAt(i, d.matrix); }
  rim.add(bi);
  // cabins (stay upright; positioned in code each frame)
  TOOLS.forEach((tool, i) => {
    const cab = new T3.Group();
    box(.14, 1.2, .14, '#6b7683', 0, -.6, 0, cab);
    const body = box(3.6, 2.2, 3, tool.c, 0, -2.3, 0, cab);
    box(3.9, .35, 3.3, '#f2f4f7', 0, -1.1, 0, cab);
    [1.52, -1.52].forEach((z, k) => {
      const t = sign(tool.n, 3.1, 1.1, '#0a0518', '#ffffff', 0, -2.55, z, cab, { size: 54, border: tool.c });
      if (k) t.rotation.y = Math.PI;
      const w = box(1.5, .7, .06, glow('#ffe7a8', 1.1), 0, -1.75, z * .995, cab, { unique: true }); w.castShadow = false;
    });
    cab.userData.onClick = () => { focusTool(i); toast(tool.n + ': ' + tool.d); };
    scene.add(cab); clickables.push(cab); W.cabins.push(cab);
  });
  // status board
  const bc = document.createElement('canvas'); bc.width = 1024; bc.height = 200; const bctx = bc.getContext('2d'); const btex = new T3.CanvasTexture(bc);
  const board = new T3.Mesh(new T3.PlaneGeometry(14, 2.7), new T3.MeshBasicMaterial({ map: btex, side: T3.DoubleSide })); board.position.set(W.cx, W.cy + W.R + 6.2, W.cz); scene.add(board);
  box(.3, 4, .3, '#8a949e', W.cx - 4, W.cy + W.R + 3.6, W.cz, scene); box(.3, 4, .3, '#8a949e', W.cx + 4, W.cy + W.R + 3.6, W.cz, scene);
  W.drawBoard = (i) => {
    const t = TOOLS[i];
    bctx.clearRect(0, 0, 1024, 200); bctx.fillStyle = '#0a0518'; roundRect(bctx, 6, 6, 1012, 188, 34); bctx.fill(); bctx.lineWidth = 8; bctx.strokeStyle = t.c; roundRect(bctx, 14, 14, 996, 172, 28); bctx.stroke();
    bctx.textAlign = 'center'; bctx.textBaseline = 'middle'; bctx.fillStyle = '#9fb6c8'; bctx.font = '36px ' + DISPLAY_FONT; bctx.fillText('NOW SHIPPING WITH', 512, 56);
    let s = 92; bctx.font = s + 'px ' + DISPLAY_FONT; while (bctx.measureText(t.n).width > 900 && s > 30) { s -= 4; bctx.font = s + 'px ' + DISPLAY_FONT; }
    bctx.fillStyle = t.c; bctx.fillText(t.n, 512, 128); btex.needsUpdate = true;
  };
  W.drawBoard(0); W.boardIdx = 0;
  // hit target so the wheel can be tapped to spin
  const hit = new T3.Mesh(new T3.CylinderGeometry(W.R + 2, W.R + 2, 7, 16), new T3.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false })); hit.rotation.x = Math.PI / 2; hit.position.set(W.cx, W.cy, W.cz);
  hit.userData.onClick = () => { spinWheel(); toast('Wheee! Tap a cabin to bring that tool to the top.'); };
  scene.add(hit); clickables.push(hit);
  updaters.push(updateWheel);
}

function wheelCabinPos(i, out) {
  const a = wheel.angle + i * TAU / NT;
  return out.set(wheel.cx + Math.cos(a) * wheel.R, wheel.cy + Math.sin(a) * wheel.R, wheel.cz);
}
const _wp = new T3.Vector3();
function topIndex() {
  let best = 0, bs = -9;
  for (let i = 0; i < NT; i++) { const s = Math.sin(wheel.angle + i * TAU / NT); if (s > bs) { bs = s; best = i; } }
  return best;
}
function updateWheel(dt, t) {
  const W = wheel;
  if (W.ride) { W.angle += dt * .32; }
  else if (W.goto != null) {
    const diff = wrapPI(W.goto - W.angle), step = clamp(diff, -dt * 2.4, dt * 2.4); W.angle += step;
    if (Math.abs(diff) < .003) { W.goto = null; W.hold = 3; }
  } else if (W.hold > 0) { W.hold -= dt; }
  else { W.angle += (W.vel + W.base) * dt; W.vel *= Math.exp(-dt * .9); }
  W.rim.rotation.z = W.angle;
  for (let i = 0; i < NT; i++) { wheelCabinPos(i, _wp); W.cabins[i].position.copy(_wp); W.cabins[i].rotation.z = Math.sin(t * 1.5 + i) * .04; }
  const ti = topIndex(); if (ti !== W.boardIdx) { W.boardIdx = ti; W.drawBoard(ti); if (W.onTop) W.onTop(ti); }
}
function focusTool(i) { wheel.goto = wrapPI(Math.PI / 2 - i * TAU / NT); wheel.vel = 0; }
function spinWheel() { wheel.goto = null; wheel.hold = 0; wheel.vel = 1.6 + Math.random() * .6; }

/* the floating supply crate: tap it or walk up to it */
function buildSupply() {
  const g = new T3.Group(); g.position.set(0, 3.4, 24); scene.add(g);
  const wood = canvasTex(128, 128, (c, w, h) => { c.fillStyle = '#b8864b'; c.fillRect(0, 0, w, h); c.fillStyle = '#8f6330'; for (let i = 0; i < 5; i++) c.fillRect(0, i * 26, w, 4); c.strokeStyle = '#6b4a2f'; c.lineWidth = 10; c.strokeRect(5, 5, w - 10, h - 10); });
  const crate = new T3.Mesh(boxG(2.4, 2.4, 2.4), new T3.MeshStandardMaterial({ map: wood, roughness: .9 })); crate.castShadow = true; g.add(crate);
  box(2.5, .5, 2.5, '#ff3ea5', 0, 0, 0, g); box(.5, 2.5, 2.5, '#ff3ea5', 0, 0, 0, g);
  const cm = glow('#f5e9ff', 1.6), star = new T3.Mesh(new T3.OctahedronGeometry(.5), cm); star.position.y = 2.1; g.add(star);
  const stripes = canvasTex(256, 64, (c, w, h) => { for (let i = 0; i < 12; i++) { c.fillStyle = i % 2 ? '#ffffff' : '#ff3ea5'; c.fillRect(i * w / 12, 0, w / 12, h); } });
  const chute = new T3.Mesh(new T3.SphereGeometry(4.2, 18, 8, 0, TAU, 0, Math.PI / 2), new T3.MeshStandardMaterial({ map: stripes, side: T3.DoubleSide, roughness: .8 })); chute.position.y = 7.4; chute.castShadow = true; g.add(chute);
  const pts = []; for (let i = 0; i < 8; i++) { const a = i * TAU / 8; pts.push(new T3.Vector3(Math.cos(a) * 4.1, 7.4, Math.sin(a) * 4.1), new T3.Vector3(Math.cos(a) * .9, 1.2, Math.sin(a) * .9)); }
  g.add(new T3.LineSegments(new T3.BufferGeometry().setFromPoints(pts), new T3.LineBasicMaterial({ color: 0xf2e6d0 })));
  const hit = new T3.Mesh(new T3.SphereGeometry(6, 8, 6), new T3.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false })); hit.position.y = 4; g.add(hit);
  g.userData.onClick = () => openContact('crate');
  clickables.push(g);
  updaters.push((dt, t) => { g.position.y = 3.4 + Math.sin(t * 1.6) * .35; g.rotation.y = Math.sin(t * .5) * .25; star.rotation.y = t * 2; });
}
/* ============ PLAYER, INPUT, CAMERA ============ */
const player = { pos: new T3.Vector3(0, 0, 46), vy: 0, yaw: Math.PI, moving: 0, grounded: true, boostUntil: 0, model: null, parts: {}, walk: 0 };
const LOOK_H = 3.6;
const cam = { yaw: 0, pitch: .3, dist: 15, targetDist: 15, look: new T3.Vector3() };
const input = { keys: {}, jx: 0, jy: 0, jump: false, run: false };
let uiLock = 0;         // >0 when a modal is open
let rideCam = null;

function buildPlayer() {
  const g = new T3.Group();
  const skin = '#c68b5b', hood = '#ff3ea5', pants = '#2c3a52', shoe = '#f2f4f7';
  const body = box(.9, 1.1, .55, hood, 0, 1.75, 0, g);
  const head = box(.62, .62, .62, skin, 0, 2.7, 0, g);
  box(.7, .22, .7, '#1a232d', 0, 3.05, 0, g);                  // cap
  box(.7, .1, .35, '#1a232d', 0, 2.95, .45, g);                // brim
  box(.1, .1, .05, '#1a232d', -.15, 2.72, .32, g); box(.1, .1, .05, '#1a232d', .15, 2.72, .32, g);
  box(.7, .85, .3, '#1f1040', 0, 1.75, -.42, g);               // backpack
  box(.5, .12, .05, '#f5e9ff', 0, 1.9, -.58, g);
  const mk = (x, hex, y, w, h) => { const pv = new T3.Group(); pv.position.set(x, y, 0); box(w, h, w, hex, 0, -h / 2, 0, pv); g.add(pv); return pv; };
  player.parts.armL = mk(-.62, hood, 2.25, .26, .95); player.parts.armR = mk(.62, hood, 2.25, .26, .95);
  player.parts.legL = mk(-.24, pants, 1.2, .38, 1.2); player.parts.legR = mk(.24, pants, 1.2, .38, 1.2);
  box(.4, .2, .55, shoe, -.24, .1, .08, g); box(.4, .2, .55, shoe, .24, .1, .08, g);
  scene.add(g); player.model = g;
}

function resolveCollisions(p, rad) {
  for (let k = 0; k < 2; k++) {
    for (const c of colliders) {
      const cx = clamp(p.x, c.x0, c.x1), cz = clamp(p.z, c.z0, c.z1);
      let dx = p.x - cx, dz = p.z - cz; const d2 = dx * dx + dz * dz;
      if (d2 < rad * rad) {
        if (d2 > 1e-6) { const d = Math.sqrt(d2), push = rad - d; p.x += dx / d * push; p.z += dz / d * push; }
        else { const l = p.x - c.x0, r = c.x1 - p.x, t = p.z - c.z0, b = c.z1 - p.z, m = Math.min(l, r, t, b); if (m === l) p.x = c.x0 - rad; else if (m === r) p.x = c.x1 + rad; else if (m === t) p.z = c.z0 - rad; else p.z = c.z1 + rad; }
      }
    }
  }
  p.x = clamp(p.x, WORLD.x0, WORLD.x1); p.z = clamp(p.z, WORLD.z0, WORLD.z1);
}

function updatePlayer(dt, t) {
  const P = player;
  // gather input
  let ix = input.jx, iy = input.jy;
  const K = input.keys;
  if (K.KeyW || K.ArrowUp) iy += 1; if (K.KeyS || K.ArrowDown) iy -= 1; if (K.KeyD || K.ArrowRight) ix += 1; if (K.KeyA || K.ArrowLeft) ix -= 1;
  if (uiLock > 0 || wheel.ride) { ix = 0; iy = 0; }
  const raw = Math.hypot(ix, iy), mag = Math.min(1, raw);
  if (raw > 1e-4) { ix = ix / raw * mag; iy = iy / raw * mag; }
  const fx = -Math.sin(cam.yaw), fz = -Math.cos(cam.yaw), rx = Math.cos(cam.yaw), rz = -Math.sin(cam.yaw);
  const mx = fx * iy + rx * ix, mz = fz * iy + rz * ix;
  const boosted = performance.now() < P.boostUntil;
  const joyMag = (uiLock > 0 || wheel.ride) ? 0 : Math.hypot(input.jx, input.jy);
  const keyMove = !!(K.KeyW || K.KeyA || K.KeyS || K.KeyD || K.ArrowUp || K.ArrowDown || K.ArrowLeft || K.ArrowRight);
  const run = (K.ShiftLeft || K.ShiftRight || joyMag > .9) ? 1 : 0;
  const speed = (7 + run * 5) * (boosted ? 1.55 : 1) * (joyMag > .05 && !keyMove ? Math.max(.5, joyMag) : 1);
  P.moving = mag;
  if (mag > .05) {
    P.pos.x += mx * speed * dt; P.pos.z += mz * speed * dt;
    const target = Math.atan2(mx, mz); P.yaw += wrapPI(target - P.yaw) * Math.min(1, dt * 12);
  }
  // jump + gravity
  if ((input.jump || K.Space) && P.grounded && uiLock === 0 && !wheel.ride) { P.vy = 8.4; P.grounded = false; }
  input.jump = false;
  P.vy -= 26 * dt; P.pos.y += P.vy * dt; if (P.pos.y <= 0) { P.pos.y = 0; P.vy = 0; P.grounded = true; }
  resolveCollisions(P.pos, .8);
  // pose
  P.walk += dt * (mag > .05 ? (run ? 13 : 9) * (boosted ? 1.3 : 1) : 0);
  const sw = mag > .05 ? Math.sin(P.walk) * (run ? .9 : .65) : 0, air = P.grounded ? 0 : -.7;
  P.parts.legL.rotation.x = sw; P.parts.legR.rotation.x = -sw; P.parts.armL.rotation.x = -sw + air; P.parts.armR.rotation.x = sw + air;
  P.model.position.set(P.pos.x, P.pos.y + (mag > .05 ? Math.abs(Math.sin(P.walk)) * .09 : Math.sin(t * 2) * .02), P.pos.z);
  P.model.rotation.y = P.yaw;
}

const _look = new T3.Vector3(), _wantPos = new T3.Vector3(), _gp = new T3.Vector3();
function updateCamera(dt, t) {
  cam.dist += (cam.targetDist - cam.dist) * Math.min(1, dt * 8);
  if (wheel.ride) {
    wheelCabinPos(wheel.rideIdx, _gp); _gp.y -= 2.4; _gp.z += 1.8;
    camera.position.lerp(_gp, Math.min(1, dt * 6));
    _look.set(wheel.cx - 6 + Math.sin(t * .2) * 10, Math.max(4, _gp.y - 7), wheel.cz - 38);
    cam.look.lerp(_look, Math.min(1, dt * 3)); camera.lookAt(cam.look); return;
  }
  const cp = Math.cos(cam.pitch), sp = Math.sin(cam.pitch);
  _wantPos.set(player.pos.x + Math.sin(cam.yaw) * cp * cam.dist, player.pos.y + 2.4 + sp * cam.dist, player.pos.z + Math.cos(cam.yaw) * cp * cam.dist);
  _wantPos.y = Math.max(.9, _wantPos.y);
  camera.position.lerp(_wantPos, Math.min(1, dt * 9));
  _look.set(player.pos.x, player.pos.y + LOOK_H, player.pos.z);
  cam.look.lerp(_look, Math.min(1, dt * 12)); camera.lookAt(cam.look);
}

/* ---- pointer / keyboard / joystick ---- */
function bindInput() {
  const stage = $('stage');
  addEventListener('keydown', e => {
    if (e.target && /INPUT|TEXTAREA/.test(e.target.tagName)) return;
    input.keys[e.code] = true;
    if (e.code === 'KeyE' || e.code === 'Enter') doAction();
    else if (e.code === 'KeyN') toggleNight();
    else if (e.code === 'KeyM') togglePanel('mapPanel');
    else if (e.code === 'KeyH') showIntro();
    else if (e.code === 'Escape') closeAll();
    if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code) && uiLock === 0) e.preventDefault();
  });
  addEventListener('keyup', e => { input.keys[e.code] = false; });
  addEventListener('blur', () => { input.keys = {}; });

  // camera drag (mouse or touch on the canvas) + pinch zoom + tap to click objects
  const ptrs = new Map(); let pinch = 0, down = null;
  stage.addEventListener('pointerdown', e => {
    ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
    down = { x: e.clientX, y: e.clientY, t: performance.now(), moved: 0 };
    try { stage.setPointerCapture(e.pointerId); } catch (_) { }
    if (ptrs.size === 2) { const [a, b] = [...ptrs.values()]; pinch = Math.hypot(a.x - b.x, a.y - b.y); }
  });
  stage.addEventListener('pointermove', e => {
    const p = ptrs.get(e.pointerId); if (!p) return;
    const dx = e.clientX - p.x, dy = e.clientY - p.y; p.x = e.clientX; p.y = e.clientY;
    if (down) down.moved += Math.abs(dx) + Math.abs(dy);
    if (ptrs.size === 2) {
      const [a, b] = [...ptrs.values()], d = Math.hypot(a.x - b.x, a.y - b.y); cam.targetDist = clamp(cam.targetDist - (d - pinch) * .04, 6, 26); pinch = d;
    } else if (!wheel.ride) {
      cam.yaw -= dx * .0065; cam.pitch = clamp(cam.pitch + dy * .0045, .08, 1.15);
    }
  });
  const end = e => {
    const had = ptrs.delete(e.pointerId);
    if (had && down && ptrs.size === 0 && down.moved < 8 && performance.now() - down.t < 380) pickAt(e.clientX, e.clientY);
    if (ptrs.size === 0) down = null;
  };
  stage.addEventListener('pointerup', end); stage.addEventListener('pointercancel', end);
  stage.addEventListener('wheel', e => { cam.targetDist = clamp(cam.targetDist + e.deltaY * .01, 6, 26); e.preventDefault(); }, { passive: false });

  // joystick
  const joy = $('joy'), knob = $('joyKnob'); let jid = null, jc = null;
  const jmove = e => {
    const r = joy.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    let dx = e.clientX - cx, dy = e.clientY - cy; const m = r.width / 2 - 8, d = Math.hypot(dx, dy) || 1, k = Math.min(1, d / m);
    input.jx = dx / d * k; input.jy = -dy / d * k; knob.style.transform = 'translate(' + (dx / d * k * m) + 'px,' + (dy / d * k * m) + 'px)';
  };
  joy.addEventListener('pointerdown', e => { jid = e.pointerId; try { joy.setPointerCapture(jid); } catch (_) { } jmove(e); e.preventDefault(); });
  joy.addEventListener('pointermove', e => { if (e.pointerId === jid) jmove(e); });
  const jend = e => { if (e.pointerId !== jid) return; jid = null; input.jx = input.jy = 0; knob.style.transform = ''; };
  joy.addEventListener('pointerup', jend); joy.addEventListener('pointercancel', jend);

  $('btnJump').addEventListener('pointerdown', e => { input.jump = true; e.preventDefault(); });
  $('btnAct').addEventListener('click', doAction);
}

const _rc = new T3.Raycaster(), _nd = new T3.Vector2();
function pickAt(x, y) {
  if (uiLock > 0 || wheel.ride) return;
  const r = renderer.domElement.getBoundingClientRect();
  _nd.set(((x - r.left) / r.width) * 2 - 1, -((y - r.top) / r.height) * 2 + 1);
  _rc.setFromCamera(_nd, camera);
  const hits = _rc.intersectObjects(clickables, true);
  for (const h of hits) { let o = h.object; while (o) { if (o.userData && o.userData.onClick) { o.userData.onClick(); return; } o = o.parent; } }
}
/* ============ UI: HUD, cards, map, contact, CV ============ */
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const visited = new Set();
let nearPOI = null, waypoint = null, victoryShown = false, toastTimer = 0, afterCard = null;

function toast(msg) {
  const t = $('toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3600);
}
function syncLock() { uiLock = document.querySelectorAll('.modal:not([hidden])').length; if (uiLock) { input.jx = input.jy = 0; $('joyKnob').style.transform = ''; } }
function showModal(id) { $(id).hidden = false; syncLock(); }
function hideModal(id) { $(id).hidden = true; syncLock(); }
function closeAll() { document.querySelectorAll('.modal').forEach(m => { m.hidden = true; }); syncLock(); afterModal(); }
function togglePanel(id) { if ($(id).hidden) { if (id === 'mapPanel') renderMap(); closeAll(); showModal(id); } else hideModal(id); }
function afterModal() {
  if (visited.size === POIS.length && !victoryShown && uiLock === 0) {
    victoryShown = true; setTimeout(() => { if (uiLock === 0) showModal('victory'); else victoryShown = false; }, 500);
  }
}

/* ---------- quest + prompt ---------- */
function updateQuest() {
  $('questText').textContent = visited.size + '/' + POIS.length;
  $('questFill').style.width = (visited.size / POIS.length * 100) + '%';
}
function visit(id) {
  if (visited.has(id)) return; visited.add(id); markVisited(id); updateQuest();
  toast('Discovered: ' + POI[id].name + '  (' + visited.size + '/' + POIS.length + ')');
  if (waypoint && waypoint.id === id) waypoint = null;
}
function verb(p) { return p.kind === 'contact' ? 'Open the supply drop' : p.kind === 'refuel' ? 'Grab a bite at ' + p.name : p.kind === 'kaizen' ? 'Walk the Kaizen gate' : p.kind === 'wheel' ? 'Visit the Stack Wheel' : 'Enter ' + p.name; }
function updateNear() {
  let best = null, bd = 1e9;
  if (uiLock === 0 && !wheel.ride) for (const p of POIS) { const d = Math.hypot(player.pos.x - p.dx, player.pos.z - p.dz); if (d < p.r && d < bd) { bd = d; best = p; } }
  if (best !== nearPOI) {
    nearPOI = best;
    const pr = $('prompt'), ab = $('btnAct');
    if (best) { $('promptText').textContent = verb(best); pr.hidden = false; ab.hidden = false; ab.classList.add('pulse'); ab.textContent = best.kind === 'contact' ? 'Open' : 'Enter'; }
    else { pr.hidden = true; ab.hidden = true; ab.classList.remove('pulse'); }
  }
}
function doAction() { if (uiLock === 0 && nearPOI && !wheel.ride) openPOI(nearPOI.id); }
function openPOI(id) {
  const p = POI[id]; visit(id);
  if (p.kind === 'contact') { openContact('supply'); return; }
  openCard(p);
}

/* ---------- cards ---------- */
function openCard(p) {
  const sheet = $('cardSheet'); sheet.style.setProperty('--rar', p.rar);
  let h = '<div class="sheet-head"><div class="sheet-ico">' + p.ico + '</div><div><span class="tag">' + esc(p.tag) + '</span><h2 id="cardTitle">' + esc(p.title) + '</h2></div></div><div class="sheet-body">';
  if (p.lead) h += '<p class="lead">' + esc(p.lead) + '</p>';
  (p.body || []).forEach(b => { h += '<p>' + esc(b) + '</p>'; });
  if (p.chips) h += '<div class="chips">' + p.chips.map(c => '<span class="chip" style="cursor:default">' + esc(c) + '</span>').join('') + '</div>';
  if (p.bullets) h += '<ul>' + p.bullets.map(b => '<li>' + esc(b) + '</li>').join('') + '</ul>';
  if (p.kind === 'kaizen') h += '<div class="stat"><b id="kzMult">1.00x</b><span id="kzDays" class="note">after 0 days of getting 1% better</span></div><div class="meter"><i id="kzBar"></i></div><div class="chips"><button class="chip" id="kz1" type="button">+1 day</button><button class="chip" id="kz30" type="button">+30 days</button><button class="chip" id="kz0" type="button">Reset</button></div><p class="note">1.01 multiplied by itself 365 times is about 37.8. Small, steady improvements compound.</p>';
  if (p.kind === 'wheel') h += '<div class="chips" id="toolChips">' + TOOLS.map((t, i) => '<button class="chip" type="button" data-i="' + i + '" style="--rar:' + t.c + '">' + esc(t.n) + '</button>').join('') + '</div><div class="mini-card" id="toolDesc"></div>';
  if (p.link && p.id !== 'zuri') h += '<p class="note">Visit: <a href="' + esc(p.link.u) + '" target="_blank" rel="noopener">' + esc(p.link.t) + '</a></p>';
  h += '</div><div class="sheet-foot">';
  if (p.kind === 'refuel') h += '<button class="cta gold" id="fuelBtn" type="button">Refuel (+20 s speed)</button>';
  if (p.kind === 'wheel') h += '<button class="cta gold" id="spinBtn" type="button">Spin it</button><button class="cta primary" id="rideBtn" type="button">Ride the wheel</button>';
  if (p.id === 'zuri') {
    h += '<div class="zuri-cta-group"><a class="cta gold zuri-cta" href="' + esc(p.link.u) + '" target="_blank" rel="noopener">Explore Zuri Studio</a><button class="cta primary zuri-cta" id="cardContact" type="button">Contact me</button></div>';
    h += '<button class="cta ghost" id="cardNext" type="button">Next stop</button><button class="cta ghost" id="cardClose" type="button">Close</button></div>';
  } else {
    h += '<button class="cta ' + (p.kind === 'wheel' || p.kind === 'refuel' ? 'ghost' : 'primary') + '" id="cardNext" type="button">Next stop</button><button class="cta ghost" id="cardContact" type="button">Contact me</button><button class="cta ghost" id="cardClose" type="button">Close</button></div>';
  }
  sheet.innerHTML = h;
  $('cardClose').onclick = closeAll; $('cardContact').onclick = () => { closeAll(); openContact('card'); }; $('cardNext').onclick = () => { closeAll(); nextStop(); };
  if (p.kind === 'kaizen') kaizenWidget();
  if (p.kind === 'wheel') wheelWidget();
  if (p.kind === 'refuel') $('fuelBtn').onclick = () => { player.boostUntil = performance.now() + 20000; closeAll(); toast('Fully fuelled: speed boost for 20 seconds'); };
  closeAllExcept('card'); showModal('card'); $('cardSheet').scrollTop = 0;
}
function closeAllExcept(id) { document.querySelectorAll('.modal').forEach(m => { if (m.id !== id) m.hidden = true; }); syncLock(); }

function kaizenWidget() {
  let days = 0; const mult = () => Math.pow(1.01, days);
  const upd = () => { const m = mult(); $('kzMult').textContent = m.toFixed(2) + 'x'; $('kzDays').textContent = 'after ' + days + ' day' + (days === 1 ? '' : 's') + ' of getting 1% better'; $('kzBar').style.width = Math.max(2, Math.log(m) / Math.log(37.78) * 100) + '%'; };
  $('kz1').onclick = () => { days = Math.min(days + 1, 365); upd(); }; $('kz30').onclick = () => { days = Math.min(days + 30, 365); upd(); }; $('kz0').onclick = () => { days = 0; upd(); }; upd();
}
function wheelWidget() {
  const show = i => {
    const t = TOOLS[i]; $('toolDesc').innerHTML = '<b style="color:' + t.c + '">' + esc(t.n) + '</b><span>' + esc(t.d) + '</span>';
    document.querySelectorAll('#toolChips .chip').forEach(c => c.classList.toggle('on', +c.dataset.i === i));
  };
  document.querySelectorAll('#toolChips .chip').forEach(c => { c.onclick = () => { const i = +c.dataset.i; focusTool(i); show(i); }; });
  show(topIndex());
  $('spinBtn').onclick = () => { spinWheel(); closeAll(); toast('Wheee! Tap a cabin to bring that tool to the top.'); };
  $('rideBtn').onclick = startRide;
}

/* ---------- ride the wheel ---------- */
function startRide() {
  closeAll();
  let bi = 0, bs = 9; for (let i = 0; i < NT; i++) { const s = Math.sin(wheel.angle + i * TAU / NT); if (s < bs) { bs = s; bi = i; } }
  wheel.rideIdx = bi; wheel.goto = null; wheel.ride = true; wheel.rideStart = wheel.angle;
  wheel.onTop = i => { $('rideText').innerHTML = 'Top of the wheel: <span>' + esc(TOOLS[i].n) + '</span>'; };
  wheel.onTop(topIndex()); $('ride').hidden = false; $('prompt').hidden = true; $('btnAct').hidden = true; nearPOI = null;
  toast('Enjoy the view. Each cabin is a tool I use.');
}
function endRide() { wheel.ride = false; wheel.onTop = null; $('ride').hidden = true; wheel.hold = 2; }

/* ---------- map / fast travel ---------- */
function renderMap() {
  $('mapList').innerHTML = POIS.map(p => '<button class="maprow" type="button" data-id="' + p.id + '"><span class="ico">' + p.ico + '</span><span class="t"><b>' + esc(p.name) + '</b><span>' + esc(p.tag) + '</span></span>' + (visited.has(p.id) ? '<span class="ok">Seen</span>' : '') + '</button>').join('');
  document.querySelectorAll('#mapList .maprow').forEach(b => { b.onclick = () => travel(b.dataset.id); });
}
function teleport(x, z) {
  player.pos.set(x, 0, z); player.vy = 0; cam.yaw = 0; cam.pitch = .3;
  const cp = Math.cos(cam.pitch), sp = Math.sin(cam.pitch);
  camera.position.set(x, 2.4 + sp * cam.dist, z + cp * cam.dist); cam.look.set(x, LOOK_H, z);
}
function travel(id) { const p = POI[id]; closeAll(); teleport(p.dx, p.dz + 1.5); setTimeout(() => openPOI(id), 250); }
function nextStop() {
  let best = null, bd = 1e9; for (const p of POIS) { if (visited.has(p.id)) continue; const d = Math.hypot(player.pos.x - p.dx, player.pos.z - p.dz); if (d < bd) { bd = d; best = p; } }
  if (!best) { toast('You have seen every landmark. Open the supply drop to team up.'); return; }
  waypoint = best;
  const dx = best.dx - player.pos.x, dz = best.dz - player.pos.z; const dir = (Math.abs(dz) > Math.abs(dx) * .6 ? (dz < 0 ? 'north' : 'south') : '') + (Math.abs(dx) > Math.abs(dz) * .6 ? (dx < 0 ? 'west' : 'east') : '');
  toast('Next stop: ' + best.name + ', ' + Math.round(bd) + ' m ' + dir + '. Follow the glowing beam.');
}

/* ---------- day / night ---------- */
function toggleNight() {
  world.nightTarget = world.nightTarget ? 0 : 1;
  const b = $('btnDay'); b.textContent = world.nightTarget ? '🌙' : '☀'; b.setAttribute('aria-label', world.nightTarget ? 'Switch to day' : 'Switch to night');
  toast(world.nightTarget ? 'Night in the city' : 'Daytime');
}

/* ---------- intro ---------- */
function showIntro() {
  $('introLead').textContent = CONFIG.intro;
  const keys = isTouch
    ? [['Move', 'Left stick'], ['Look', 'Drag the screen'], ['Interact', 'Gold button'], ['Zoom', 'Pinch'], ['Jump', 'Jump button'], ['Fast travel', 'Map button']]
    : [['Move', 'W A S D / arrows'], ['Run', 'Hold Shift'], ['Jump', 'Space'], ['Interact', 'E'], ['Look / zoom', 'Drag / scroll'], ['Day / night', 'N']];
  $('introKeys').innerHTML = keys.map(k => '<div class="mini-card"><b>' + k[0] + '</b><span>' + k[1] + '</span></div>').join('');
  closeAllExcept('intro'); showModal('intro');
}

/* ---------- contact ---------- */
function msgText() {
  const n = $('cname').value.trim(), b = $('cbiz').value.trim(), m = $('cmsg').value.trim();
  return 'Hi ' + CONFIG.name + ',\n\nMy name is ' + (n || '[your name]') + '. My website: ' + (b || '(none yet)') + '.\n\n' + (m || 'Here is what is frustrating me about it: ...') + '\n\nThanks!';
}
function mailHref() { return 'mailto:' + CONFIG.email + '?subject=' + encodeURIComponent('Website project enquiry') + '&body=' + encodeURIComponent(msgText()); }
function copyText(text, okMsg) {
  const fallback = () => {
    const ta = document.createElement('textarea'); ta.value = text; ta.style.cssText = 'position:fixed;left:-999px;top:0'; document.body.appendChild(ta); ta.select();
    let ok = false; try { ok = document.execCommand('copy'); } catch (_) { } ta.remove(); toast(ok ? okMsg : 'Could not copy automatically. Press and hold to select the text.');
  };
  try { navigator.clipboard.writeText(text).then(() => toast(okMsg), fallback); } catch (_) { fallback(); }
}
function openContact(src) {
  $('cemail').textContent = CONFIG.email; $('cmail').href = mailHref();
  closeAllExcept('contact'); showModal('contact');
  if (src === 'crate' || src === 'supply') toast('Loot unlocked: a conversation about your website');
  visit('supply');
}
function bindContact() {
  ['cname', 'cbiz', 'cmsg'].forEach(id => $(id).addEventListener('input', () => { $('cmail').href = mailHref(); }));
  $('cform').addEventListener('submit', e => e.preventDefault());
  $('ccopyEmail').onclick = () => copyText(CONFIG.email, 'Email address copied');
  $('ccopyMsg').onclick = () => copyText(msgText(), 'Message copied. Paste it into an email to me.');
  $('ccancel').onclick = closeAll;
}

/* ---------- CV (generated PDF, saved through the downloads capability) ---------- */
let _mctx;
function measure(text, size, bold) {
  if (!_mctx) { const c = document.createElement('canvas'); _mctx = c.getContext('2d'); }
  if (!_mctx || !_mctx.measureText) return text.length * size * .5;
  _mctx.font = (bold ? 'bold ' : '') + size + 'px Helvetica, Arial, sans-serif';
  return _mctx.measureText(text).width;
}
const ascii = s => String(s).replace(/[‘’]/g, "'").replace(/[“”]/g, '"').replace(/[–—]/g, '-').replace(/[•·]/g, '-').replace(/…/g, '...').replace(/[^\x20-\x7E]/g, '').replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
function wrapLines(text, size, bold, maxW) {
  const words = String(text).split(/\s+/), lines = []; let cur = '';
  words.forEach(w => { const t = cur ? cur + ' ' + w : w; if (measure(t, size, bold) > maxW && cur) { lines.push(cur); cur = w; } else cur = t; });
  if (cur) lines.push(cur); return lines;
}
function buildCvPages() {
  const M = 52, W = 595 - M * 2, pages = [[]]; let y = 842 - M;
  const ops = () => pages[pages.length - 1];
  const need = h => { if (y - h < M) { pages.push([]); y = 842 - M; } };
  const text = (s, size, bold, x, color) => { ops().push('BT /' + (bold ? 'F2' : 'F1') + ' ' + size + ' Tf ' + (color || '0.10 0.14 0.20') + ' rg ' + x + ' ' + y.toFixed(1) + ' Td (' + ascii(s) + ') Tj ET'); };
  const para = (s, size, bold, color, indent) => { wrapLines(s, size, bold, W - (indent || 0)).forEach(l => { need(size + 4); y -= size + 3; text(l, size, bold, M + (indent || 0), color); }); };
  const rule = () => { need(10); y -= 6; ops().push('0.84 0.87 0.90 RG 0.8 w ' + M + ' ' + y.toFixed(1) + ' m ' + (M + W) + ' ' + y.toFixed(1) + ' l S'); y -= 4; };
  const head = s => { need(34); y -= 12; y -= 12; text(s.toUpperCase(), 11, true, M, '0.82 0.21 0.30'); rule(); };
  need(60); y -= 24; text(CONFIG.fullName, 22, true, M); para(CONFIG.role, 12, false, '0.35 0.42 0.50'); para(CONFIG.location + '  |  ' + CONFIG.phone + '  |  ' + CONFIG.email + '  |  kode-jo.co.za', 10, false, '0.35 0.42 0.50'); rule();
  head('Profile'); para(CV.summary, 10, false);
  head('Skills'); CV.skills.forEach(s => { para(s[0] + ': ' + s[1], 10, false); });
  head('Experience'); CV.experience.forEach(e => { para(e[0], 10.5, true); para(e[1], 10, false, '0.25 0.31 0.38', 8); y -= 3; });
  head('Education'); CV.education.forEach(e => { para(e[0], 10.5, true); para(e[1], 10, false, '0.25 0.31 0.38', 8); });
  return pages;
}
function makePdf(pages) {
  const objs = []; const add = s => { objs.push(s); return objs.length; };
  add('<< /Type /Catalog /Pages 2 0 R >>'); add('');
  add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>');
  add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>');
  const kids = [];
  pages.forEach(o => {
    const stream = o.join('\n'); const cid = add('<< /Length ' + stream.length + ' >>\nstream\n' + stream + '\nendstream');
    const pid = add('<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ' + cid + ' 0 R >>'); kids.push(pid + ' 0 R');
  });
  objs[1] = '<< /Type /Pages /Kids [' + kids.join(' ') + '] /Count ' + kids.length + ' >>';
  let out = '%PDF-1.4\n'; const offs = [];
  objs.forEach((o, i) => { offs.push(out.length); out += (i + 1) + ' 0 obj\n' + o + '\nendobj\n'; });
  const xref = out.length; out += 'xref\n0 ' + (objs.length + 1) + '\n0000000000 65535 f \n';
  offs.forEach(o => { out += String(o).padStart(10, '0') + ' 00000 n \n'; });
  out += 'trailer\n<< /Size ' + (objs.length + 1) + ' /Root 1 0 R >>\nstartxref\n' + xref + '\n%%EOF';
  const u8 = new Uint8Array(out.length); for (let i = 0; i < out.length; i++) u8[i] = out.charCodeAt(i) & 255; return u8;
}
function cvCard() {
  const p = { ico: '📄', tag: 'Curriculum vitae', title: CONFIG.name + ' – CV', rar: '#f5e9ff', lead: CV.summary, body: [], kind: 'cv' };
  const sheet = $('cardSheet'); sheet.style.setProperty('--rar', p.rar);
  let h = '<div class="sheet-head"><div class="sheet-ico">' + p.ico + '</div><div><span class="tag">' + p.tag + '</span><h2 id="cardTitle">' + esc(p.title) + '</h2></div></div><div class="sheet-body"><p class="lead">' + esc(CV.summary) + '</p>';
  h += '<div class="grid2">' + CV.skills.map(s => '<div class="mini-card"><b>' + esc(s[0]) + '</b><span>' + esc(s[1]) + '</span></div>').join('') + '</div>';
  h += CV.experience.concat(CV.education).map(e => '<div class="mini-card"><b>' + esc(e[0]) + '</b><span>' + esc(e[1]) + '</span></div>').join('');
  h += '</div><div class="sheet-foot"><button class="cta primary" id="cvContact" type="button">Contact me</button><button class="cta ghost" id="cvClose" type="button">Close</button></div>';
  sheet.innerHTML = h; $('cvClose').onclick = closeAll; $('cvContact').onclick = () => { closeAll(); openContact('cv'); };
  closeAllExcept('card'); showModal('card');
}
async function downloadCV() {
  if (CONFIG.cvUrl) { const a = document.createElement('a'); a.href = CONFIG.cvUrl; a.target = '_blank'; a.rel = 'noopener'; document.body.appendChild(a); a.click(); a.remove(); return; }
  let dl = null; try { dl = await window.claude.use('downloads'); } catch (_) { dl = null; }
  if (!dl) { toast('Downloads are not available in this view, so here is my CV on screen.'); cvCard(); return; }
  try {
    await dl.save({ filename: 'Kode-Jo-CV.pdf', data: makePdf(buildCvPages()) });
    toast('CV saved. Thanks for taking a look!');
  } catch (e) {
    if (e && e.code === 'declined') return;
    toast('Could not save the file here, so here is my CV on screen.'); cvCard();
  }
}

/* ---------- minimap ---------- */
let miniT = 0;
function drawMini(dt) {
  miniT -= dt; if (miniT > 0) return; miniT = .1;
  const cv = $('miniCanvas'), g = cv.getContext('2d'); if (!g) return;
  const W = cv.width, H = cv.height, sx = W / 204, ox = W / 2, oy = H / 2 + 6 * sx, X = x => ox + x * sx, Z = z => oy + (z - 10) * sx;
  g.clearRect(0, 0, W, H);
  g.fillStyle = '#2b1d4f'; g.fillRect(0, 0, W, H);
  g.fillStyle = '#3a2a5e'; g.fillRect(X(-102), Z(-62), 204 * sx, 144 * sx);
  g.fillStyle = '#4e3470'; g.fillRect(X(-102), Z(44), 204 * sx, 34 * sx);
  g.fillStyle = '#1b5f8f'; g.fillRect(0, Z(80), W, H);
  g.fillStyle = '#1a1028'; [0, 44].forEach(z => g.fillRect(X(-102), Z(z - 4), 204 * sx, 8 * sx)); [-52, 0, 52].forEach(x => g.fillRect(X(x - 4), Z(-60), 8 * sx, 104 * sx));
  g.fillStyle = '#8a8f86'; g.fillRect(X(-60), Z(-64), 120 * sx, 6 * sx);
  POIS.forEach(p => {
    const v = visited.has(p.id); g.fillStyle = v ? '#9dff4a' : p.color; g.beginPath(); g.arc(X(p.dx), Z(p.dz), 5.2 * sx, 0, TAU); g.fill(); g.lineWidth = 2; g.strokeStyle = '#0a0518'; g.stroke();
  });
  if (waypoint) { const k = (performance.now() % 1200) / 1200; g.strokeStyle = '#f5e9ff'; g.lineWidth = 3; g.beginPath(); g.arc(X(waypoint.dx), Z(waypoint.dz), (6 + k * 12) * sx, 0, TAU); g.stroke(); }
  g.save(); g.translate(X(player.pos.x), Z(player.pos.z)); g.rotate(Math.PI - player.yaw);
  g.fillStyle = '#fff'; g.strokeStyle = '#0a0518'; g.lineWidth = 3; g.beginPath(); g.moveTo(0, -9 * sx); g.lineTo(6 * sx, 7 * sx); g.lineTo(0, 3 * sx); g.lineTo(-6 * sx, 7 * sx); g.closePath(); g.fill(); g.stroke(); g.restore();
  if (world.night > .02) { g.fillStyle = 'rgba(26,16,48,' + (world.night * .5) + ')'; g.fillRect(0, 0, W, H); }
}

function showNoGL() {
  $('loader').classList.add('done');
  let h = '<div class="sheet-head"><div class="sheet-ico">🏙️</div><div><span class="tag">3D view unavailable</span><h2>' + esc(CONFIG.name) + ' – ' + esc(CONFIG.role) + '</h2></div></div><div class="sheet-body"><p class="lead">Your browser could not start the 3D city, so here are the highlights.</p>';
  h += POIS.filter(p => p.lead).map(p => '<div class="mini-card"><b>' + p.ico + ' ' + esc(p.name) + '</b><span>' + esc(p.lead) + '</span></div>').join('');
  h += '<div class="emailbox"><code>' + esc(CONFIG.email) + '</code></div></div><div class="sheet-foot"><button class="cta gold" id="glCv" type="button">View CV</button></div>';
  $('noglSheet').innerHTML = h; $('nogl').hidden = false; $('glCv').onclick = () => { $('nogl').hidden = true; cvCard(); };
}

/* ---------- light / dark interface (separate from the day/night world) ---------- */
function applyUiTheme(mode) {
  try { if (mode) document.documentElement.setAttribute('data-theme', mode); else document.documentElement.removeAttribute('data-theme'); } catch (_) { }
}
function currentUiTheme() {
  const a = document.documentElement.getAttribute('data-theme');
  if (a) return a;
  return window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
function toggleUiTheme() {
  const next = currentUiTheme() === 'dark' ? 'light' : 'dark';
  applyUiTheme(next); try { localStorage.setItem('kj-ui-theme', next); } catch (_) { }
  toast(next === 'dark' ? 'Dark interface' : 'Light interface');
}
function restoreUiTheme() { try { const s = localStorage.getItem('kj-ui-theme'); if (s === 'dark' || s === 'light') applyUiTheme(s); } catch (_) { } }
/* ============ MAIN LOOP + BOOT ============ */
let lastT = 0, clockT = 0;
function resize() {
  const w = window.innerWidth || 800, h = window.innerHeight || 600;
  renderer.setSize(w, h); if (composer) composer.setSize(w, h); camera.aspect = w / h; camera.fov = w < h ? 66 : 58; camera.updateProjectionMatrix();
}
function frame(now) {
  requestAnimationFrame(frame);
  const dt = Math.min(.05, Math.max(0, (now - lastT) / 1000) || .016); lastT = now; clockT += dt;
  const dn = world.nightTarget - world.night; world.night += clamp(dn, -dt / 1.6, dt / 1.6);
  updatePlayer(dt, clockT);
  player.model.visible = !wheel.ride;
  for (let i = 0; i < updaters.length; i++) updaters[i](dt, clockT);
  if (wheel.ride && wheel.angle - wheel.rideStart > TAU) endRide();
  updateCamera(dt, clockT);
  updateNear();
  applyTime(world.night, wheel.ride ? camera.position : player.pos);
  drawMini(dt);
  if (composer) composer.render(); else renderer.render(scene, camera);
}
const tick = () => new Promise(r => setTimeout(r, 24));
function setLoad(p, msg) { $('loadbar').style.width = p + '%'; if (msg) $('loadmsg').textContent = msg; }

async function start() {
  if (!window.THREE) { showNoGL(); return; }
  try { initRenderer(); } catch (e) { showNoGL(); return; }
  try {
    if (document.fonts && document.fonts.load) await Promise.race([document.fonts.load('28px "Righteous"').catch(() => { }), new Promise(r => setTimeout(r, 1800))]);
    setLoad(18, 'Paving the roads...'); await tick();
    player.pos = new T3.Vector3(0, 0, 46);
    buildGround(); buildSea(); buildMountains();
    setLoad(40, 'Raising the buildings...'); await tick();
    buildSummitStation(); buildUnisa(); buildSelfTaught(); buildLuno(); buildProdigy(); buildSupport();
    buildTricore(); buildKaizen(); buildRoom(); buildZuri(); buildSaas(); buildKfc(); buildFlyRank(); buildWorkingAnts(); buildMarklin(); buildHockey(); buildLazone(); buildHouseme(); buildCerts(); buildSkills(); buildNeon();
    setLoad(65, 'Building the Stack Wheel...'); await tick();
    buildWheel(); buildSupply();
    POIS.forEach(addBeacon);
    setLoad(82, 'Planting trees, launching the blimp...'); await tick();
    buildNature(); buildLife(); buildBlimp(); buildPlayer();
    bindInput(); bindContact();
    restoreUiTheme(); $('btnTheme').onclick = toggleUiTheme;
    $('btnDay').onclick = toggleNight; $('btnMap').onclick = () => togglePanel('mapPanel'); $('btnHelp').onclick = showIntro;
    $('btnCV').onclick = downloadCV; $('btnContact').onclick = () => openContact('button');
    $('mapClose').onclick = closeAll; $('introGo').onclick = closeAll; $('introMap').onclick = () => { closeAll(); togglePanel('mapPanel'); };
    $('victoryContact').onclick = () => { closeAll(); openContact('victory'); }; $('victoryClose').onclick = closeAll;
    $('rideExit').onclick = endRide;
    document.querySelectorAll('.modal').forEach(m => m.addEventListener('pointerdown', e => { if (e.target === m) closeAll(); }));
    addEventListener('resize', resize); resize();
    teleport(0, 46); applyTime(0, player.pos); updateQuest();
    setLoad(100, 'Ready'); await tick();
    $('loader').classList.add('done'); setTimeout(() => { $('loader').hidden = true; }, 700);
    showIntro();
    requestAnimationFrame(frame);
  } catch (err) {
    console.error(err); showNoGL();
  }
}
start();
