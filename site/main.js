document.addEventListener("click", (e) => {
  const t = e.target?.closest?.("a,button,[role=button]");
  if (!t) return;
  const label = (
    (t.getAttribute("href")||"") + " " +
    (t.getAttribute("data-route")||"") + " " +
    (t.textContent||"")
  ).toLowerCase();

  const routes = {
    "get started": "./get-started.html",
    "features": "./features.html",
    "pricing": "./pricing.html",
    "docs": "./docs.html",
    "documentation": "./docs.html",
    "open app": "./app/index.html",
    "launch": "./app/index.html",
    "open the app": "./app/index.html"
  };

  for (const k in routes) {
    if (label.includes(k)) { e.preventDefault(); location.href = routes[k]; return; }
  }
});
