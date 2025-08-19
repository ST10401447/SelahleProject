let people = ["Shonisani", "Kaizer", "Fortune", "Sbongile", "Sinnah"];
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("header nav a");
  let currentPath = window.location.pathname;

  currentPath = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  if (currentPath === "" || currentPath === "/") currentPath = "index.html";
  currentPath = currentPath.toLowerCase();

  navLinks.forEach(link => {
    const linkPath = link.getAttribute("href").toLowerCase();

    // Highlight exact match
    if (linkPath === currentPath) {
      link.classList.add("active-link");
    }

    // Highlight Services parent if child is active
    if (
       (currentPath === "environment.html" || 
       currentPath === "it.html") &&
      linkPath === "service.html"
    ) {
      link.classList.add("active-link");
    }
  });
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
