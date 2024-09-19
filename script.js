function revealMessage() {
    const message = document.getElementById('message');
    message.style.display = 'block';
    message.classList.remove('hidden');
  }
  
  // Juego: Clic en el corazón correcto
  function checkHeart(isCorrect) {
    const result = document.getElementById('game-result');
    if (isCorrect) {
      result.textContent = '¡Correcto! ❤️';
    } else {
      result.textContent = 'Inténtalo de nuevo...';
    }
    result.style.display = 'block';
    result.classList.remove('hidden');
  }
  
  // Respuesta de la carta
  function submitResponse() {
    const responseMessage = document.getElementById('response-message');
    responseMessage.style.display = 'block';
    responseMessage.classList.remove('hidden');
  }
  
  // Mostrar Fuegos Artificiales
  function showFireworks() {
    const fireworks = document.getElementById('fireworks');
    fireworks.classList.add('fireworks-show');
  }
  