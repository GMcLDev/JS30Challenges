  // remove playing class once audio plays
  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  // plays sound 
  function playSound(e) {

    // Grabs audio file associated with key pressed
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    // Grabs which key was pressed 
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    // If key pressed doesn't have audio file do nothing 
    if (!audio) return;

    // Adds playing class to key pressed div
    key.classList.add('playing');

    // Resets audio so can play on demand 
    audio.currentTime = 0;

    // Plays audio
    audio.play();
  }
  // Creates array of keys with audio associated 'key' divs
  const keys = Array.from(document.querySelectorAll('.key'));

  // removes 'playing' buy calling removeTransition on any key pressed  
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));

  // When Key is pressed call playSound function 
  window.addEventListener('keydown', playSound);