// JavaScript for Filtering Projects
document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectItems = document.querySelectorAll(".project-item");

    // Add click event listener to all filter buttons
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");

            // Remove 'active' class from all buttons and add it to the clicked button
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            // Show or hide projects based on filter
            projectItems.forEach(item => {
                if (filter === "all" || item.getAttribute("data-category") === filter) {
                    item.style.display = "block"; // Show project
                } else {
                    item.style.display = "none"; // Hide project
                }
            });
        });
    });
});
