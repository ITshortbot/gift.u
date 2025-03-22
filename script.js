document.getElementById("heartButton").addEventListener("click", function() {
    for (let i = 0; i < 15; i++) {
        createHeart();
    }
});

function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");
    
    heart.style.left = Math.random() * 100 + "vw"; // Random horizontal position
    heart.style.top = "-10px"; // Start above the screen
    heart.style.fontSize = Math.random() * 30 + 10 + "px"; // Random size
    heart.style.animationDuration = Math.random() * 2 + 2 + "s"; // Different speeds

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 3000); // Remove hearts after animation ends
}
