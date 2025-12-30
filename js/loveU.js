// Escuchar un evento 'click' en toda la página
document.addEventListener('click', function(event) {
  
  // Crear un nuevo <div>
  let miniHeart = document.createElement('div');
  
  // Asignar el estilo 'mini-heart'
  miniHeart.classList.add('mini-heart');

  // Posicionar el nuevo corazón donde hizo click el usuario
  miniHeart.style.left = (event.clientX - 10) + 'px';
  miniHeart.style.top = (event.clientY - 10) + 'px';

  // Agregar el nuevo corazón a la página
  document.body.appendChild(miniHeart);

  // Eliminar el corazón después de la animación (2 segundos)
  setTimeout(() => {
    miniHeart.remove();
  }, 2000);
});
