
const mainImage = document.getElementById('mainImage');
const thumbnails = document.querySelectorAll('.thumbnail');

let currentIndex = 0;
let startX = 0;
let isDragging = false;

function updateMainImage(index) {
  mainImage.src = thumbnails[index].src;
  thumbnails.forEach(thumb => thumb.classList.remove('active'));
  thumbnails[index].classList.add('active');
}

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    currentIndex = index;
    updateMainImage(currentIndex);
  });
});

// Mouse events
mainImage.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX;
  e.preventDefault(); // Prevenir seleção de texto durante arraste
});

mainImage.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  
  const currentX = e.clientX;
  const diff = startX - currentX; // Inverti a subtração para comportamento mais intuitivo

  // Limiar maior para evitar navegações acidentais
  if (Math.abs(diff) > 100) {
    if (diff > 0) {
        console.log('oie');
        
      // Arraste para a esquerda - próxima imagem
      currentIndex = currentIndex < thumbnails.length - 1 ? currentIndex + 1 : 0;
    } else {
      // Arraste para a direita - imagem anterior
      currentIndex = currentIndex > 0 ? currentIndex - 1 : thumbnails.length - 1;
    }
    updateMainImage(currentIndex);
    isDragging = false;
  }
});

mainImage.addEventListener('mouseup', () => {
  isDragging = false;
});

mainImage.addEventListener('mouseleave', () => {
  isDragging = false;
});

// Touch events
mainImage.addEventListener('touchstart', (e) => {
  isDragging = true;
  startX = e.touches[0].clientX;
  e.preventDefault(); // Prevenir scroll durante arraste
});

mainImage.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  
  const currentX = e.touches[0].clientX;
  const diff = startX - currentX;

  if (Math.abs(diff) > 100) {
    if (diff > 0) {
      currentIndex = currentIndex < thumbnails.length - 1 ? currentIndex + 1 : 0;
    } else {
      currentIndex = currentIndex > 0 ? currentIndex - 1 : thumbnails.length - 1;
    }
    updateMainImage(currentIndex);
    isDragging = false;
  }
});

mainImage.addEventListener('touchend', () => {
  isDragging = false;
});