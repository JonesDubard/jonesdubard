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
