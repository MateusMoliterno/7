const mainImage = document.getElementById('mainImage');
const thumbnails = document.querySelectorAll('.thumbnail');

let currentIndex = 0;
let startX = 0;
let currentX = 0;
let isDragging = false;

// Função para atualizar a imagem principal e o estado ativo da miniatura
function updateMainImage(index) {
  mainImage.src = thumbnails[index].src;
  thumbnails.forEach(thumb => thumb.classList.remove('active'));
  thumbnails[index].classList.add('active');
}

// Evento de clique nas miniaturas
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    currentIndex = index;
    updateMainImage(currentIndex);
  });
});

// Funções para dispositivos de DESKTOP
mainImage.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX;
});

window.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  currentX = e.clientX;

  // Movendo para a direita
  if (currentX - startX > 50) {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : thumbnails.length - 1;
    updateMainImage(currentIndex);
    isDragging = false;
  }

  // Movendo para a esquerda
  if (currentX - startX < -50) {
    currentIndex = currentIndex < thumbnails.length - 1 ? currentIndex + 1 : 0;
    updateMainImage(currentIndex);
    isDragging = false;
  }
});

window.addEventListener('mouseup', () => {
  isDragging = false;
});

// Funções para dispositivos de CELULAR
mainImage.addEventListener('touchstart', (e) => {
  isDragging = true;
  startX = e.touches[0].clientX;
});

mainImage.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  currentX = e.touches[0].clientX;

  // Movendo para a direita
  if (currentX - startX > 50) {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : thumbnails.length - 1;
    updateMainImage(currentIndex);
    isDragging = false;
  }

  // Movendo para a esquerda
  if (currentX - startX < -50) {
    currentIndex = currentIndex < thumbnails.length - 1 ? currentIndex + 1 : 0;
    updateMainImage(currentIndex);
    isDragging = false;
  }
});

mainImage.addEventListener('touchend', () => {
  isDragging = false;
});
