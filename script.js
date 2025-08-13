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
