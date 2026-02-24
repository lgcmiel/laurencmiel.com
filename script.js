// ----- Typewriter -----
const typedEl = document.getElementById("typed");

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

async function runTypewriter() {
  if (!typedEl) return;

  typedEl.textContent = "";

  for (let i = 0; i < lines.length; i++) {
    await typeText(promptText, 8);
    await typeText(lines[i], 16);

    if (i < lines.length - 1) {
      typedEl.textContent += "\n";
      await sleep(180);
    }
  }
}

runTypewriter();

// ----- Theme toggle + persistence -----
const toggleBtn = document.getElementById("themeToggle");

function applyTheme(theme) {
  if (theme === "light") document.body.classList.add("light");
  else document.body.classList.remove("light");
}

(function initTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") {
    applyTheme(saved);
  } else {
    // default to dark (your current vibe)
    applyTheme("dark");
  }
})();

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    const isLight = document.body.classList.toggle("light");
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });
}
