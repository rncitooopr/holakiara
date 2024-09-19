document.addEventListener('DOMContentLoaded', () => {
    const snowContainer = document.querySelector('.snow');
  
    const numberOfSnowflakes = 100; // Puedes ajustar la cantidad según lo que desees
  
    for (let i = 0; i < numberOfSnowflakes; i++) {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
      snowflake.style.width = `${Math.random() * 10 + 5}px`; // Tamaño aleatorio
      snowflake.style.height = snowflake.style.width; // Hacerlo circular
      snowflake.style.left = `${Math.random() * 100}vw`; // Posición horizontal aleatoria
      snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`; // Duración aleatoria de la animación
      snowflake.style.animationDelay = `${Math.random() * 5}s`; // Retardo aleatorio de la animación
      snowflake.style.opacity = Math.random(); // Opacidad aleatoria
  
      snowContainer.appendChild(snowflake);
    }
  });
  