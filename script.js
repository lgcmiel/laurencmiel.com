document.addEventListener("DOMContentLoaded", () => {
  console.log("script.js loaded ✅");

  // ----- Theme toggle + persistence -----
  const toggleBtn = document.getElementById("themeToggle");

  const setTheme = (theme) => {
    document.body.classList.toggle("light", theme === "light");
    localStorage.setItem("theme", theme);

    // Optional: make it obvious it's working
    if (toggleBtn) toggleBtn.textContent = theme === "light" ? "Dark mode" : "Light mode";
  };

  // Init theme (default dark)
  const saved = localStorage.getItem("theme");
  setTheme(saved === "light" ? "light" : "dark");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const isLight = document.body.classList.contains("light");
      setTheme(isLight ? "dark" : "light");
    });
  } else {
    console.warn("themeToggle button not found ❌");
  }

  // ----- Typewriter -----
  const typedEl = document.getElementById("typed");
  if (!typedEl) {
    console.warn("typed element not found ❌");
    return;
  }

  const lines = [
    "Documentary films",
    "Environmental stories",
    "Photo essays from the field",
    "Experiments in code"
  ];

  const promptText = "> ";
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  async function typeText(text, baseSpeed = 18) {
    for (const ch of text) {
      typedEl.textContent += ch;
      await sleep(baseSpeed + Math.random() * 18);
    }
  }

  (async function runTypewriter() {
    typedEl.textContent = "";
    for (let i = 0; i < lines.length; i++) {
      await typeText(promptText, 8);
      await typeText(lines[i], 16);
      if (i < lines.length - 1) {
        typedEl.textContent += "\n";
        await sleep(180);
      }
    }
  })();
});
