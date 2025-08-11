document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.testimonials-container');
  const prevBtn = document.querySelector('.arrow.left');
  const nextBtn = document.querySelector('.arrow.right');
  const cards = document.querySelectorAll('.testimonial-card');
  let currentLargeIndex = 1; 

  // Function to update card sizes and carousel position
  function updateCarousel() {
   
    cards.forEach((card, index) => {
      card.classList.remove('large', 'small');
      card.classList.add(index === currentLargeIndex ? 'large' : 'small');
    });

    
    let translateX = 0;
    for (let i = 0; i < currentLargeIndex; i++) {
      translateX += cards[i].offsetWidth + 20; 
    }
    
    const testimonialsSection = document.querySelector('.testimonials');
    const sectionWidth = testimonialsSection.offsetWidth;
    const largeCardWidth = cards[currentLargeIndex].offsetWidth;
    translateX += (largeCardWidth / 2); 
    translateX -= (sectionWidth / 2); 
    container.style.transform = `translateX(-${translateX}px)`;

    
    prevBtn.disabled = currentLargeIndex === 0;
    nextBtn.disabled = currentLargeIndex === cards.length - 1;
  }

  // Event listeners for buttons
  prevBtn.addEventListener('click', () => {
    if (currentLargeIndex > 0) {
      currentLargeIndex--;
      updateCarousel();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentLargeIndex < cards.length - 1) {
      currentLargeIndex++;
      updateCarousel();
    }
  });

  
  updateCarousel();
});
