document.addEventListener('DOMContentLoaded', () => {
    const menuOpen = document.getElementById("menu-open");
    const menuClose = document.getElementById("menu-close");
    menuOpen.addEventListener('click', () => {
        menuOpen.style.display = "none";
        menuClose.style.display = "block";
    })
    menuClose.addEventListener('click', () => {
        menuClose.style.display = "none";
        menuOpen.style.display = "block";
    })
})