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

   