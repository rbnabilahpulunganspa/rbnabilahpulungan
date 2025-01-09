// Tab switching
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
    });
});

// Slider Logic
let slideIndex = 0;
function changeSlide(n) {
    const slides = document.querySelectorAll('.slides img');
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    slides.forEach(img => img.classList.remove('active'));
    slides[slideIndex].classList.add('active');
}
