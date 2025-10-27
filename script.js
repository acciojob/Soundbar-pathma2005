const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const buttons = document.getElementById("buttons");

// Add sound buttons
sounds.forEach((sound) => {
  const btn = document.querySelector(`button:contains('${sound}')`);
  if (btn) {
    btn.addEventListener("click", () => {
      stopSounds();
      const audio = new Audio(`sounds/${sound}.mp3`);
      audio.play();
      audio.id = "playingSound";
    });
  }
});

// Stop button functionality
document.querySelector(".stop").addEventListener("click", stopSounds);

function stopSounds() {
  const playing = document.getElementById("playingSound");
  if (playing) {
    playing.pause();
    playing.currentTime = 0;
    playing.remove();
  }
}

