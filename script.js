const enterBtn = document.getElementById("enterBtn");
const introScreen = document.getElementById("introScreen");
const mainContent = document.getElementById("mainContent");

const music = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const reallyNoBtn = document.getElementById("reallyNoBtn");

const msg = document.getElementById("hiddenMsg");
const yesGif = document.getElementById("yesGif");
const noGif = document.getElementById("noGif");

/* INTRO → SHOW SITE + AUTOPLAY MUSIC */
enterBtn.addEventListener("click", () => {
  introScreen.style.display = "none";
  mainContent.style.display = "block";

  music.play().catch(() => {});
  musicToggle.textContent = "⏸ THIS";
});

/* MUSIC TOGGLE */
musicToggle.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    musicToggle.textContent = "..";
  } else {
    music.pause();
    musicToggle.textContent = "THIS 🎧";
  }
});

/* NO button runs away */
function moveNoButton() {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

/* YES */
yesBtn.addEventListener("click", () => {
  msg.style.display = "block";
  yesGif.style.display = "block";
  noGif.style.display = "none";
});

/* REALLY NO */
reallyNoBtn.addEventListener("click", () => {
  noGif.style.display = "block";
  yesGif.style.display = "none";
});
