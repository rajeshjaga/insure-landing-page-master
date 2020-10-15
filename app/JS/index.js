document.addEventListener('DOMContentLoaded', () => {
    const menuOpen = document.getElementById("menu-open");
    const menuClose = document.getElementById("menu-close");
    const navLists = document.querySelector('.nav-container');
    menuOpen.addEventListener('click', () => {
        navLists.classList.add('open')
    })
    menuClose.addEventListener('click', () => {
        navLists.classList.remove('open')
    })
})