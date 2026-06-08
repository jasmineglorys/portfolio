

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.display = "none";
    }, 800);
});


const words = [
    "Web Developer",
    "Java Developer",
    "Database Enthusiast",
    "Frontend Developer",
    "Problem Solver"
];

let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    currentWord = words[wordIndex];

    if (!isDeleting) {

        typing.textContent = currentWord.substring(0, letterIndex++);
    }
    else {

        typing.textContent = currentWord.substring(0, letterIndex--);
    }

    let speed = 120;

    if (!isDeleting && letterIndex === currentWord.length + 1) {

        speed = 1500;
        isDeleting = true;

    } else if (isDeleting && letterIndex === 0) {

        isDeleting = false;
        wordIndex++;

        if (wordIndex === words.length)
            wordIndex = 0;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ============================
// Mobile Menu
// ============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// ============================
// Close Menu After Clicking Link
// ============================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// ============================
// Back To Top Button
// ============================

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.documentElement.scrollTop > 300) {

        topBtn.style.display = "block";

    }
    else {

        topBtn.style.display = "none";

    }

};

topBtn.onclick = function () {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

};


// ============================
// Navbar Highlight
// ============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 100;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ============================
// Reveal Animation
// ============================

const revealElements = document.querySelectorAll(

    ".about-card, .card, .timeline-box, .skill"

);

function reveal() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "all 0.7s ease";

});

window.addEventListener("scroll", reveal);

reveal();


// ============================
// Contact Form Validation
// ============================

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const inputs = form.querySelectorAll("input, textarea");

    let valid = true;

    inputs.forEach(input => {

        if (input.value.trim() === "") {

            valid = false;

            input.style.border = "2px solid red";

        }
        else {

            input.style.border = "2px solid #00E5FF";

        }

    });

    if (valid) {

        alert("Message Sent Successfully!");

        form.reset();

    }

});


// ============================
// Button Ripple Effect
// ============================

const buttons = document.querySelectorAll(".btn, .btn2");

buttons.forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        const x = e.clientX - this.offsetLeft;
        const y = e.clientY - this.offsetTop;

        ripple.style.left = x + "px";
        ripple.style.top = y + "px";

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});



console.log("Portfolio Loaded Successfully 🚀");