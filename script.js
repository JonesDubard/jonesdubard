document.addEventListener('DOMContentLoaded', () => {
    const text = "Hello, welcome to my website!";
    const typingText = document.getElementById('typing-text');

    let i = 0;
    const speed = 100; // Speed of typing in ms

    function typeWriter() {
        if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});

// Contrast Toggle
document.getElementById("contrast-toggle").addEventListener("click", function() {
    document.body.classList.toggle("high-contrast");
});

// Language Translations
const translations = {
    en: {
        welcome: "Welcome to My Portfolio",
        about: "About Me",
        projects: "Projects",
        contact: "Contact",
        downloadCV: "Download CV"
    },
    de: {
        welcome: "Willkommen in meinem Portfolio",
        about: "Über mich",
        projects: "Projekte",
        contact: "Kontakt",
        downloadCV: "Lebenslauf herunterladen"
    }
};

// Language Switcher
document.getElementById("language-switcher").addEventListener("change", function() {
    const lang = this.value;
    document.getElementById("welcome-text").innerText = translations[lang].welcome;
    document.getElementById("about-link").innerText = translations[lang].about;
    document.getElementById("projects-link").innerText = translations[lang].projects;
    document.getElementById("contact-link").innerText = translations[lang].contact;
    document.getElementById("downloadCV").innerText = translations[lang].downloadCV;
});
