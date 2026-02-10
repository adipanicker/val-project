const noBtn = document.getElementById("no-btn");
const trollMsg = document.getElementById("troll-msg");

/* --- AUDIO ELEMENTS --- */
const noSound = document.getElementById("no-sound");
const aceSound = document.getElementById("ace-sound");
const music = document.getElementById("bg-music");

// Trash talk lines
const trashTalk = [
  "Nice aim iron 1 lol",
  "Whiffed!",
  "Precise Gunplay?",
  "Can't hit a stationary target?",
  "Uninstall pls",
  "Lag???",
  "Nt (nice try)",
];

function moveButton() {
  // 1. Play the "No" sound effect
  // Reset time to 0 so it plays immediately even if spammed
  noSound.currentTime = 0;
  noSound.play().catch((e) => console.log("Sound blocked until interaction"));

  // 2. Move the button
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 100);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 100);

  noBtn.style.position = "fixed";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  // 3. Show random trash talk
  const randomText = trashTalk[Math.floor(Math.random() * trashTalk.length)];
  trollMsg.innerText = randomText;
  trollMsg.style.opacity = "1";
}

function handleYes() {
  // 1. Hide the ENTIRE <main> container
  // This removes the Left Image, the Question Card, AND the Right Image at once
  document.querySelector("main").style.display = "none";

  // 2. Show the Success Card
  document.getElementById("success-card").style.display = "flex";

  // 3. Audio Logic (Keep your existing audio code)
  music.pause();

  aceSound.currentTime = 0;
  aceSound.volume = 1.0;
  aceSound.play();
}

/* --- BACKGROUND MUSIC SETUP --- */
function playAudio() {
  music.currentTime = 180; // Start at 3:00
  music.volume = 0.4;

  music
    .play()
    .then(() => console.log("Music started!"))
    .catch((error) => console.log("Music blocked:", error));

  // Remove listener after first click
  document.removeEventListener("click", playAudio);
}

// Wait for first interaction
document.addEventListener("click", playAudio);
