const hamburger = document.getElementById('hamburger-btn');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});
const textArray = ["Full-Stack Developer", "Ethical Hacker", "Security Enthusiast", "System Administrator"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;
const typewriterElement = document.getElementById("typewriter-text");
function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typewriterElement.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}
function erase() {
    if (charIndex > 0) {
        typewriterElement.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}
document.addEventListener("DOMContentLoaded", () => {
    if(textArray.length) setTimeout(type, newTextDelay + 250);
});
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you shortly.');
    e.target.reset();
});
