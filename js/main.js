function initMusic() {
  const audio = document.getElementById("bgm");
  const playing = localStorage.getItem("music");

  if (!playing) {
    audio.volume = 0.6;
    audio.play();
    localStorage.setItem("music", "on");
  } else {
    audio.play();
  }
}
