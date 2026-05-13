/* nav.js — Deutsch Lernen Navigation Bar
   أضف هذا السطر قبل </body> في كل ملف preview:
   <script src="nav.js"></script>
*/

(function () {
  const pages = [
    {
      file: "preview (1).html",
      de: "Einkaufen im Supermarkt",
      lang: "EN",
      label: "English",
      topic: 1,
    },
    {
      file: "preview (3).html",
      de: "Einkaufen im Supermarkt",
      lang: "AR",
      label: "عربي",
      topic: 1,
    },
    {
      file: "preview (2).html",
      de: "In der Schule",
      lang: "EN",
      label: "English",
      topic: 2,
    },
    {
      file: "preview (4).html",
      de: "In der Schule",
      lang: "AR",
      label: "عربي",
      topic: 2,
    },
  ];

  const current = window.location.pathname.split("/").pop();
  const idx = pages.findIndex((p) => p.file === decodeURIComponent(current));
  if (idx === -1) return;

  const prev = pages[(idx - 1 + pages.length) % pages.length];
  const next = pages[(idx + 1) % pages.length];
  const info = pages[idx];

  const isAr = info.lang === "AR";

  const style = `
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Amiri&display=swap');
    #__de-nav {
      position: fixed;
      bottom: 0; left: 0; right: 0;
      z-index: 9999;
      background: rgba(253,250,244,0.96);
      backdrop-filter: blur(8px);
      border-top: 1px solid rgba(92,72,44,0.18);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 20px;
      gap: 8px;
      font-family: 'DM Sans', sans-serif;
      box-shadow: 0 -2px 24px rgba(28,24,20,0.07);
    }
    #__de-nav a, #__de-nav button {
      background: none;
      border: 1px solid rgba(92,72,44,0.22);
      border-radius: 4px;
      padding: 7px 14px;
      font-size: 12px;
      font-family: inherit;
      cursor: pointer;
      color: #1C1814;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-weight: 500;
      transition: background 0.15s, border-color 0.15s;
      white-space: nowrap;
    }
    #__de-nav a:hover, #__de-nav button:hover {
      background: #F0EAD8;
      border-color: rgba(92,72,44,0.4);
    }
    #__de-nav .home-btn {
      background: #1C1814;
      color: #FDFAF4;
      border-color: transparent;
    }
    #__de-nav .home-btn:hover {
      background: #3A3228;
      border-color: transparent;
    }
    #__de-nav .center {
      text-align: center;
      flex: 1;
    }
    #__de-nav .page-title {
      font-size: 13px;
      font-weight: 500;
      color: #1C1814;
      line-height: 1.2;
    }
    #__de-nav .page-lang {
      font-size: 11px;
      color: #8C7B5E;
      margin-top: 2px;
      font-family: ${isAr ? "'Amiri', serif" : "inherit"};
    }
    #__de-nav .badge {
      display: inline-block;
      padding: 1px 7px;
      border-radius: 2px;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.06em;
      background: ${isAr ? "#F0EAD8" : "#E8EFF8"};
      color: ${isAr ? "#5C3D11" : "#1A3D6E"};
      font-family: ${isAr ? "'Amiri', serif" : "inherit"};
      font-size: ${isAr ? "13px" : "10px"};
    }
    @media (max-width: 480px) {
      #__de-nav { padding: 8px 12px; }
      #__de-nav a, #__de-nav button { padding: 6px 10px; font-size: 11px; }
      #__de-nav .nav-label { display: none; }
    }
  `;

  const html = `
    <style>${style}</style>
    <nav id="__de-nav" role="navigation" aria-label="Page navigation">
      <a href="${prev.file}" title="${prev.de} — ${prev.label}">
        ← <span class="nav-label">${prev.lang === "AR" ? "السابق" : "Prev"}</span>
      </a>
      <div class="center">
        <div class="page-title">${info.de}</div>
        <div class="page-lang">
          <span class="badge">${info.label}</span>
          &nbsp;${info.lang === "AR" ? "· الصفحة " + (idx + 1) + " من 4" : "· Page " + (idx + 1) + " of 4"}
        </div>
      </div>
      <div style="display:flex;gap:6px;align-items:center;">
        <a class="home-btn" href="index.html" title="Back to home">⌂</a>
        <a href="${next.file}" title="${next.de} — ${next.label}">
          <span class="nav-label">${next.lang === "AR" ? "التالي" : "Next"}</span> →
        </a>
      </div>
    </nav>
    <div style="height:60px"></div>
  `;

  document.body.insertAdjacentHTML("beforeend", html);
})();
