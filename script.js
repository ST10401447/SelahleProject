document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("header nav a");
  const currentPath = window.location.pathname.split("/").pop(); // e.g. "index.html"

  navLinks.forEach(link => {
    const linkPath = link.getAttribute("href");
    if (linkPath === currentPath) {
      link.classList.add("active-link");
    }
  });
});

// Toggle mobile menu
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

//TESTIMONIALS CAROUSEL//

document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".testimonial-wrapper");
    const leftBtn = document.querySelector(".arrow.left");
    const rightBtn = document.querySelector(".arrow.right");

    const scrollAmount = 320; // px to scroll per click

    rightBtn.addEventListener("click", () => {
        wrapper.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });

    leftBtn.addEventListener("click", () => {
        wrapper.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });
});


//HOME PAGE MARQUEE//
const marqueeContent = document.querySelector('.marquee-content');
const clone = marqueeContent.cloneNode(true);
document.querySelector('.marquee').appendChild(clone);

let scrollAmount = 0;

function animateMarquee() {
  scrollAmount -= 3; // speed (lower = slower)
  marqueeContent.style.transform = `translateX(${scrollAmount}px)`;
  clone.style.transform = `translateX(${scrollAmount}px)`;

  if (Math.abs(scrollAmount) >= marqueeContent.scrollWidth) {
    scrollAmount = 0;
  }

  requestAnimationFrame(animateMarquee);
}

animateMarquee();

//TEAMS PAGE //
function scrollToProfile(profileId) {
        const profile = document.getElementById(profileId);
        if (profile) {
            // Smooth scroll to the profile
            profile.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    }

//CAROUSEL SLIDER//
   document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".carousel-slide");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  let index = 0;

  function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }

  function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  }

  // Auto slide every 5 seconds
  setInterval(nextSlide, 5000);
});


    //modal javascript
  
// Open modal function
let people = ["Shonisani", "Kaizer", "Fortune", "Sbongile", "Sinnah"];

function openModal(person) {
    var modal = document.getElementById(person + 'Modal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Close modal function
function closeModal(person) {
    var modal = document.getElementById(person + 'Modal');
    if (modal) {
        modal.style.display = ' none';
        document.body.style.overflow = 'block';
    }
}

// Add event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to all close buttons
    var closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.stopPropagation();
            closeModal();
        });
    });

    // Close modal when clicking outside the modal content
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});