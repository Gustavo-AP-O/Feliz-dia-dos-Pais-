const surpriseButton = document.getElementById("surpriseButton");
const surprise = document.getElementById("surprise");

surpriseButton.addEventListener("click", () => {
  surprise.classList.toggle("show");

  if (surprise.classList.contains("show")) {
    surpriseButton.textContent = "❤️ Agora você sabe";
    createHearts(14);
  } else {
    surpriseButton.textContent = "Uma última surpresa ✨";
  }
});

function createHearts(amount = 5) {
  for (let i = 0; i < amount; i++) {
    setTimeout(() => {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.textContent = Math.random() > .35 ? "♥" : "❤";
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.bottom = "-20px";
      heart.style.fontSize = `${12 + Math.random() * 18}px`;
      heart.style.animationDuration = `${3 + Math.random() * 2}s`;
      document.body.appendChild(heart);

      setTimeout(() => heart.remove(), 5500);
    }, i * 120);
  }
}

// Pequena chuva de corações ao carregar, sem exagerar.
setTimeout(() => createHearts(5), 900);
