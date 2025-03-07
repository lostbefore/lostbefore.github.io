document.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome to Shaojie SUN's portfolio!");

    // Add hover effect to tech stack items
    const techItems = document.querySelectorAll(".tech span");
    techItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
            item.style.color = "#333";
        });
        item.addEventListener("mouseleave", () => {
            item.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
            item.style.color = "white";
        });
    });
});
