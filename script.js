const burgerMenu = document.getElementById("burgerMenu")
const navbarItems = document.getElementById("navbarItems")

const burgerMenuOpened = false
burgerMenu.addEventListener("click", (e) => {
    burgerMenuOpened = !burgerMenuOpened
    if(burgerMenuOpened) {
        navbarItems.style.display = "block"
    } else {
        navbarItems.style.display = "none"
    }
})

