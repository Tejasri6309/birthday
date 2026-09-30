function openSurprise() {

    const home = document.getElementById("home");

    const surprise =
        document.getElementById("surprise");

    home.style.display = "none";

    surprise.style.display = "block";

    createBalloons();

    createConfetti();

    createHearts();

    surprise.scrollIntoView({
        behavior: "smooth"
    });
}


function createBalloons() {

    const colors = [
        "#ff4081",
        "#ff9800",
        "#9c27b0",
        "#2196f3",
        "#4caf50",
        "#f44336",
        "#e91e63"
    ];

    for (let i = 0; i < 25; i++) {

        const balloon =
            document.createElement("div");

        balloon.className = "balloon";

        balloon.style.left =
            Math.random() * 100 + "vw";

        balloon.style.background =
            colors[
                Math.floor(
                    Math.random() * colors.length
                )
            ];

        balloon.style.animationDuration =
            (5 + Math.random() * 5) + "s";

        balloon.style.animationDelay =
            Math.random() * 2 + "s";

        document.body.appendChild(balloon);

        setTimeout(() => {
            balloon.remove();
        }, 12000);
    }
}



function createConfetti() {

    const colors = [
        "#ff4081",
        "#ff9800",
        "#9c27b0",
        "#2196f3",
        "#4caf50",
        "#f44336"
    ];

    for (let i = 0; i < 150; i++) {

        const confetti =
            document.createElement("div");

        confetti.className = "confetti";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.background =
            colors[
                Math.floor(
                    Math.random() * colors.length
                )
            ];

        confetti.style.animationDuration =
            (2 + Math.random() * 4) + "s";

        confetti.style.animationDelay =
            Math.random() * 2 + "s";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 8000);
    }
}



function createHearts() {

    const emojis = [
        "❤️",
        "💕",
        "💖",
        "💗",
        "💓",
        "💞",
        "🌸",
        "✨",
        "🥰"
    ];

    setInterval(() => {

        const heart =
            document.createElement("div");

        heart.className = "heart";

        heart.innerHTML =
            emojis[
                Math.floor(
                    Math.random() * emojis.length
                )
            ];

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.fontSize =
            (18 + Math.random() * 25) + "px";

        heart.style.animationDuration =
            (5 + Math.random() * 5) + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 10000);

    }, 600);
}



function goToTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "🎂 Birthday page ready! ❤️"
        );

    }
);