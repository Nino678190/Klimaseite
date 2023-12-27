const slider = document.getElementById('fontSlider');
const textElements = document.getElementsByClassName('texte');

slider.addEventListener('input', () => {
  for (let i = 0; i < textElements.length; i++) {
    textElements[i].style.fontSize = slider.value + 'px';
  }
});

