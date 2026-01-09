let score = 0;

function spawnFlower() {
  const flower = document.createElement("img");
  flower.src = "assets/flower.png";
  flower.style.position = "absolute";
  flower.style.bottom = "30%";
  flower.style.left = Math.random() * 80 + "%";
  flower.style.width = "32px";
  flower.style.animation = "float 2s infinite";

  document.getElementById("game").appendChild(flower);

  setTimeout(() => {
    flower.remove();
    score += 10;
    document.getElementById("score").innerText =
      score.toString().padStart(3, "0");
  }, 1500);
}

setInterval(spawnFlower, 2000);
