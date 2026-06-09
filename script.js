const targetDate = new Date("2026-09-01T00:00:00-03:00");

function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        document.getElementById("countdown").textContent = "It's September!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const seconds = Math.floor(diff / 1000) % 60;

    document.getElementById("countdown").textContent =
        `♡ ${days}d ${hours}h ${minutes}m ${seconds}s ♡`;
}

updateCountdown();
setInterval(updateCountdown, 1000);


const sparkles = ["✨", "⭐", "★", "✦", "♡"];

document.addEventListener("mousemove", (e) => {
    const sparkle = document.createElement("div");

    sparkle.classList.add("sparkle");

    sparkle.innerHTML =
        sparkles[Math.floor(Math.random() * sparkles.length)];

    sparkle.style.left = e.pageX + "px";
    sparkle.style.top = e.pageY + "px";

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 1000);
});