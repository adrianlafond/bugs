const btnTickToggle = document.querySelector('.btn-tick-toggle');

function togglePlay() {
  toggleTicker();
  updateUIState();
}

function updateUIState() {
  btnTickToggle.innerHTML = ticker.started ? 'Pause' : 'Play';
}

btnTickToggle.addEventListener('click', togglePlay);
window.addEventListener('keydown', event => {
  if (event.key === ' ') {
    togglePlay();
  }
});
updateUIState();