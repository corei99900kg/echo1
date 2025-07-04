
function initGallery() {
  const galleryImages = document.querySelectorAll('.gallery img');
  const mainImage = document.getElementById('main-image');
  
  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      mainImage.src = img.src;
      
      mainImage.style.opacity = '0';
      setTimeout(() => {
        mainImage.style.opacity = '1';
        mainImage.style.transition = 'opacity 0.5s ease';
      }, 10);
    });
  });
}

document.addEventListener('DOMContentLoaded', initGallery);