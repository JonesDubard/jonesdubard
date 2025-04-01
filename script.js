document.addEventListener('DOMContentLoaded', () => {
    const text = "Hello, I am Dubard!";
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
document.addEventListener("DOMContentLoaded", () => {
    const languageSwitcher = document.getElementById("language-switcher");

    const translations = {
        en: {
            home: "Home",
            about: "About",
            work: "Work",
            skills: "Skills",
            contact: "Contact",
            introText: "I am a Front-End UX Engineer passionate about designing and building intuitive digital health solutions. I blend UX design with front-end development. Here, you will find some design projects and case studies. Let's connect!",
            workTitle: "Work",
            workText: "Some of my featured projects.",
            skillsTitle: "Skills",
            contactTitle: "Contact",
            contactText: "Feel free to reach out!"
        },
        de: {
            home: "Startseite",
            about: "Über mich",
            work: "Arbeit",
            skills: "Fähigkeiten",
            contact: "Kontakt",
            introText: "Ich bin ein Front-End UX-Ingenieur, der sich leidenschaftlich für die Gestaltung und Entwicklung intuitiver digitaler Gesundheitslösungen einsetzt. Ich kombiniere UX-Design mit Front-End-Entwicklung. Hier finden Sie einige Designprojekte und Fallstudien. Lassen Sie uns verbinden!",
            workTitle: "Arbeit",
            workText: "Einige meiner vorgestellten Projekte.",
            skillsTitle: "Fähigkeiten",
            contactTitle: "Kontakt",
            contactText: "Zögern Sie nicht, mich zu kontaktieren!"
        }
    };

    function switchLanguage(lang) {
        document.getElementById("home-link").textContent = translations[lang].home;
        document.getElementById("about-link").textContent = translations[lang].about;
        document.getElementById("work-link").textContent = translations[lang].work;
        document.getElementById("typing-text").textContent = translations[lang].introText;
        document.getElementById("work-title").textContent = translations[lang].workTitle;
        document.getElementById("work-text").textContent = translations[lang].workText;
        document.getElementById("skills-title").textContent = translations[lang].skillsTitle;
        document.getElementById("contact-title").textContent = translations[lang].contactTitle;
        document.getElementById("contact-text").textContent = translations[lang].contactText;
    }

    languageSwitcher.addEventListener("change", (event) => {
        switchLanguage(event.target.value);
    });

    // Ensure default language is set
    switchLanguage(languageSwitcher.value);
});
