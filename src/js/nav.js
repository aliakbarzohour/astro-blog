const navLinks = document.querySelectorAll(".navLink");

navLinks.forEach((link) => {
    if (link.getAttribute("href") === window.location.pathname) {
        link.classList.add("active-link");
    }
})