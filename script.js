const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const music = document.getElementById("music");

// Música (obligatorio tocar pantalla primero en celular)
document.body.addEventListener("click", () => {
  music.play();
}, { once: true });

// Botón "Uy no" se escapa
function moveButton() {
  const maxX = window.innerWidth - noBtn.offsetWidth - 20;
  const maxY = window.innerHeight - noBtn.offsetHeight - 20;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

noBtn.addEventListener("touchstart", moveButton);
noBtn.addEventListener("mouseover", moveButton);

// Botón Sí
yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      justify-content:center;
      align-items:center;
      text-align:center;
      font-size:24px;
      padding:20px;
      background:#ffe6eb;">
      💖 Sabía que dirías que sí 💖<br><br>
      Nuestra cita está pendiente 😏
    </div>
  `;
});