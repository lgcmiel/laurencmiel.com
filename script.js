// Typewriter for the "code box" list
const lines = [
  "▰ Documentary films",
  "▰ Environmental stories",
  "▰ Photo essays from the field",
  "▰ Experiments in code"
];

const typedEl = document.getElementById("typed");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function typeLine(line, speed = 22) {
  for (let i = 0; i < line.length; i++) {
    typedEl.textContent += line[i];
    await sleep(speed + Math.random() * 18);
  }
}

async function run() {
  typedEl.textContent = "";

  // Small “terminal prompt” vibe
  typedEl.textContent += "> ";
  await sleep(250);

  for (let i = 0; i < lines.length; i++) {
    await typeLine(lines[i]);
    if (i < lines.length - 1) {
      typedEl.textContent += "\n> ";
      await sleep(260);
    }
  }
}

run();
