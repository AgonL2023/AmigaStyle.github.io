let menu = document.querySelector(".navbar");

document.querySelector('#menu-icon').onclick = () => {
    menu.classList.toggle("open-menu");
}


let header = document.querySelector("header")

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
})