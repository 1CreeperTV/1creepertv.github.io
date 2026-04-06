(function () {
  const NAV_ITEMS = [
    { key: "home", href: "https://loannnnnn2659.github.io", label: "Accueil" },
    { key: "tutoriels", href: "https://loannnnnn2659.github.io/tutoriels", label: "Tutoriels" },
    { key: "partenaires", href: "https://loannnnnn2659.github.io/partenaires", label: "Partenaires" },
    { key: "ressources", href: "https://loannnnnn2659.github.io/ressources", label: "Ressources" },
    { key: "profils", href: "https://loannnnnn2659.github.io/profils", label: "Profils" },
    { key: "a-propos", href: "https://loannnnnn2659.github.io/a-propos", label: "À Propos" },
    { key: "formulaires", href: "https://loannnnnn2659.github.io/formulaires", label: "Formulaires" }
  ];

  function renderHeader(opts) {
    const targetId = (opts && opts.targetId) || "site-header";
    const active = (opts && opts.active) || "home";
    const target = document.getElementById(targetId);
    if (!target) return;

    const navLinks = NAV_ITEMS.map((item) => {
      const activeClass = item.key === active ? " active" : "";
      return `<a href="${item.href}" class="nav-link${activeClass}">${item.label}</a>`;
    }).join("");

    target.innerHTML = `
  <header class="header">
    <div class="nav-content">
      <a class="nav-home" href="https://loannnnnn2659.github.io" aria-label="Accueil">
        <img src="https://raw.githubusercontent.com/Loannnnnn2659/loannnnnn2659.github.io/refs/heads/main/Fichiers/Mii%20%26%20Backgrounds/Mii.png" alt="Icone du site">
      </a>
      <nav class="nav-links">
        ${navLinks}
      </nav>
        <button id="playPause" class="toggle">🔈 Jouer</button>
    </div>
  </header>`;
  }

  function renderFooter(opts) {
    const targetId = (opts && opts.targetId) || "site-footer";
    const target = document.getElementById(targetId);
    if (!target) return;

    target.innerHTML = `
  <footer class="container">
    <div class="footer-section">CreeperTV - Made with &#128293; in France &#8226; Built with AI</div>
  </footer>`;
  }

  window.CreeperPartials = {
    renderHeader,
    renderFooter
  };
})();
