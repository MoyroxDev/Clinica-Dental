const navMenu = document.getElementById("nav-menu");
const botonNav = document.getElementById("btn-menu");


botonNav.addEventListener("click", () =>{
    navMenu.classList.toggle("nav-active")
})
