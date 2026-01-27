const avatar = document.getElementById("avatar");
const nameEl = document.getElementById("name");
const subtitle = document.getElementById("subtitle");
const buttons = document.getElementById("buttons");

avatar.src = config.avatar;
nameEl.textContent = config.name;
subtitle.textContent = config.subtitle;

config.socials.forEach(s => {
  const a = document.createElement("a");
  a.href = s.url;
  a.target = "_blank";
  a.textContent = s.title;
  buttons.appendChild(a);
});

// Music
if (config.music.enabled) {
  const audio = new Audio(config.music.src);
  audio.volume = config.music.volume;
  const btn = document.getElementById("musicBtn");

  btn.onclick = () => {
    if (audio.paused) {
      audio.play();
      btn.textContent = "⏸ music";
    } else {
      audio.pause();
      btn.textContent = "▶ music";
    }
  };
} else {
  document.getElementById("musicBtn").style.display = "none";
}
