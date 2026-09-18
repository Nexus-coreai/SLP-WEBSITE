document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    if (menuToggle && nav) {

        menuToggle.addEventListener("click", function () {

            nav.classList.toggle("open");

            const isOpen = nav.classList.contains("open");

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation menu" : "Open navigation menu"
            );

        });

        // Close mobile menu when a navigation link is clicked
        const navLinks = nav.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {
                nav.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );
            });

        });

    }

});