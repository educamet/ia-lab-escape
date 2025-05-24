// Chronomètre pour toutes les salles (15 minutes)
function startTimer(duration, display) {
  let timer = duration, minutes, seconds;
  const interval = setInterval(() => {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = minutes + ":" + seconds;
    if (--timer < 0) {
      alert("Temps écoulé !");
      window.location.href = "index.html";
      clearInterval(interval);
    }
  }, 1000);
}

// Afficher/masquer les instructions
function toggleInstructions() {
  const instructions = document.getElementById('instructions');
  instructions.style.display = instructions.style.display === 'none' ? 'block' : 'none';
}

// Initialisation du chronomètre
window.onload = () => {
  const fifteenMinutes = 15 * 60;
  const display = document.querySelector('#timer');
  if (display) startTimer(fifteenMinutes, display);
};