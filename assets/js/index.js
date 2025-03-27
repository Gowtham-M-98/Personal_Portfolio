function toggleMenu() {
    let menuList = document.getElementById("menuList");

    // Toggle between "flex" and "none"
    menuList.style.display = (menuList.style.display === "flex") ? "none" : "flex";
}


document.addEventListener("DOMContentLoaded", function () {
    const typedTextElement = document.querySelector(".typed-text");
    const textArray = typedTextElement.textContent.split(", ");
    let textArrayIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentText = textArray[textArrayIndex];
        if (!isDeleting) {
            typedTextElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === currentText.length) {
                isDeleting = true;
                setTimeout(typeEffect, 1000); // Pause before deleting
                return;
            }
        } else {
            typedTextElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                textArrayIndex = (textArrayIndex + 1) % textArray.length; // Loop through texts
            }
        }
        setTimeout(typeEffect, isDeleting ? 50 : 100); // Typing speed
    }

    // Start Typing Effect
    typedTextElement.classList.remove("d-none"); // Make visible
    typeEffect();
});
