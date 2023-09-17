let body = document.querySelector("body")
let logo = document.querySelector('.logo')
let header = document.querySelector("header")
let main = document.querySelector("main")
let switchMode = document.querySelector("#switch-light")
let divSwitch = document.querySelector("#switch")
let icon = document.querySelector(".icon")
let close = document.querySelector('#close')
let trashNav = document.querySelector('#trash-nav')
let menuElipse = document.querySelector('#chat .fa-ellipsis-vertical')
let backArrow = document.querySelector('#chat .fa-arrow-left')
let mobileMenu = document.querySelector('#menu')
let chatWindow = document.querySelector('#chat')

switchMode.addEventListener('click', function() {
    if (body.className === "") {
        main.classList.remove("main-light")
        header.classList.remove("header-light")
        body.classList.add('bg')
        switchMode.classList.remove("switch-light")
        logo.src = "../images/dark-mode.svg"
        divSwitch.classList.remove("switch-mode-light")
        main.classList.add("main-dark")
        header.classList.add("header-dark")
        divSwitch.classList.add("switch-mode-dark")
        switchMode.classList.add("switch-dark")
    } else {
        main.classList.add("main-light")
        header.classList.add("header-light")
        divSwitch.classList.add("switch-mode-light")
        body.classList.remove('bg')
        switchMode.classList.add("switch-light")
        logo.src = "../images/light-mode.svg"
        main.classList.remove("main-dark")
        header.classList.remove("header-dark")
        divSwitch.classList.remove("switch-mode-dark")
        switchMode.classList.remove("switch-dark")
    }
})


    
close.addEventListener("click", function() {
    trashNav.style.zIndex = -3
})

menuElipse.addEventListener("click", function() {
    trashNav.style.zIndex = 5
})


mobileMenu.addEventListener("click", function() {
    chatWindow.style.zIndex = "4"
})

backArrow.addEventListener("click", function() {
    chatWindow.style.zIndex = -3
})
    

