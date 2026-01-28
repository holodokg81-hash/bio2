const avatar = document.getElementById("avatar");
const nameEl = document.getElementById("name");
const subtitle = document.getElementById("subtitle");
const buttons = document.getElementById("buttons");
const aboutBtn = document.getElementById("aboutBtn");
const aboutText = document.getElementById("aboutText");

avatar.src = config.avatar;
nameEl.textContent = config.name;
subtitle.textContent = config.subtitle;

// Соц-ссылки с иконками
config.socials.forEach(s => {
  const a = document.createElement("a");
  a.href = s.url;
  a.target = "_blank";
  const img = document.createElement("img");
  img.src = s.icon;
  img.alt = s.title;
  a.appendChild(img);
  a.appendChild(document.createTextNode(s.title));
  buttons.appendChild(a);
});

// Кнопка "Обо мне"
aboutBtn.onclick = () => {
  if(aboutText.style.display === "block"){
    aboutText.style.display = "none";
  } else {
    aboutText.textContent = config.aboutText;
    aboutText.style.display = "block";
  }
};

// Музыка с toggle
if(config.music.enabled){
  const audio = new Audio(config.music.src);
  audio.volume = config.music.volume;

  const musicBtn = document.createElement("button");
  musicBtn.textContent = "▶ Music";
  musicBtn.className = "music-btn";
  document.querySelector(".container").appendChild(musicBtn);

  musicBtn.onclick = () => {
    if(audio.paused){
      audio.play();
      musicBtn.textContent = "⏸ Music";
    } else {
      audio.pause();
      musicBtn.textContent = "▶ Music";
    }
  };
}
