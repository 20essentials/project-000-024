console.log(
  "sable",
  "https://e7.pngegg.com/pngimages/108/492/png-clipart-obi-wan-kenobi-luke-skywalker-lightsaber-anakin-skywalker-r2-d2-laser-angle-sith.png"
);
console.log("audio", "https://youtu.be/Qlh6uLK12so?si=mMI6VyK5NyurCR94");

const d = document;
let $audio1 = d.createElement("audio"),
$audio2 = d.createElement("audio");

d.addEventListener("click", (e) => {
  if (e.target.matches(".bara")) {
    e.target.parentElement.classList.add("alumbrar");
    let container = null;

    if ($audio1.currentTime !== 0) {
      setTimeout(() => e.target.parentElement.classList.remove("alumbrar"), 1700)
      clearTimeout(containerAudio);
      $audio1.pause();
      $audio1.currentTime = 0;
      $audio2.src = "assets/fin.mp3";
      $audio2.play();

      $audio2.onended = function() {
        location.reload();
      }
    }

    if (!$audio1.src) {
      containerAudio = setTimeout(() => {
        e.target.parentElement.classList.remove("alumbrar");
      }, 8700); 
      $audio1.src = "assets/yoda.mp3";
      $audio1.play();

      
      $audio1.onended = function() {
        location.reload();
      }
    }
  }
});
