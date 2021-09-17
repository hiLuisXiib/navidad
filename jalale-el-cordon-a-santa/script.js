var pull_string = document.querySelector('#pull-string')
var santa = document.querySelector('#santa')
var audio = document.querySelector('#myAudio')

audio.volume = 0.2;
window.addEventListener('mousedown', function() {
  santa.classList.toggle('pulled')
  audio.play()
})
window.addEventListener('mouseup', function() {
  santa.classList.toggle('pulled')
})

window.addEventListener('touchstart', function() {
  santa.classList.toggle('pulled')
  audio.play()
})
window.addEventListener('touchend', function() {
  santa.classList.toggle('pulled')
})