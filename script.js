let burgerMenu = document.getElementById("burgerMenu")
let navbarItems = document.getElementById("navbarItems")

let burgerMenuOpened = false
burgerMenu.addEventListener("click", (e) => {
    burgerMenuOpened = !burgerMenuOpened
    if(burgerMenuOpened) {
        navbarItems.style.display = "block"
    } else {
        navbarItems.style.display = "none"
    }
})

const scrollToTopButton = document.getElementById("scrollToTopButton");

scrollToTopButton.addEventListener("click", () => {
  // 
  window.scrollTo({
    top: 0,
    behavior: "smooth" 
  });
});
