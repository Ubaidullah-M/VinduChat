let ourContacts = [
    {
        firstName: "Ubaidullah",
        lastName: "Ahmad",
        userName: "Engr. Ubaidullah",
        pic: "../images/user.png",
        phone: "+234-8027867072",
        lastSeen: "5:35am"
    },
    {
        firstName: "Adegoju",
        lastName: "Dolapur",
        userName: "Dolapor",
        pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQAbwJ-ZCv2BgFsDzZbfYluzRdCmcVC9wQVSfMA51M&s",
        phone: "+234-00000000",
        lastSeen: "9:35pm"
    },
    {
        firstName: "Uloka",
        lastName: "Giffty",
        userName: "GifftyBabe",
        pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpPmy_FIZkQwYNs0dQ_irFTLq1EqlHf3EJFlJ8E1SW&s",
        phone: "+234-00000000",
        lastSeen: "12:05pm"
    },
    {
        firstName: "Vincent",
        lastName: "Ekezie",
        userName: "Vincent",
        pic: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80",
        phone: "+234-70100000",
        lastSeen: "2:39pm"
    }
]

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
let chatBody = document.querySelector('.chat-body')
let contacts = document.querySelector('.contacts')
let chatForm = document.querySelector('#form-chat')
let chatFormInput = document.querySelector('#add-me')
let logoutForm = document.querySelector('#logout')
let logoutFormClose = document.querySelector('.logout-times')
let friendPic = document.querySelector('#chat .card')

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

let users = ourContacts.map(function(person) {
    return `
    <li class="card">
    <div class="item">
        <div class="pic">
            <img src="${person.pic}">
        </div>
        <div class="user">
            <div class="info">
                <h3>${person.userName}</h3>
                <p>${person.phone}</p>
            </div>
        </div>
    </div>
    <span class="time">${person.lastSeen}</span>
</li>
    `
})

contacts.innerHTML = users

for(user in contacts) {
    this.addEventListener("click", function() {
        chatWindow.classList.add('chat-box-in')
    })
};

backArrow.addEventListener("click", function() {
    chatWindow.classList.remove('chat-box-in')
})
    
close.addEventListener("click", function() {
    trashNav.classList.remove("open") 
})

menuElipse.addEventListener("click", function() {
    trashNav.classList.add("open")
})


mobileMenu.addEventListener("click", function() {
    logoutForm.classList.add('logout-in')
})

logoutFormClose.addEventListener("click", function() {
    logoutForm.classList.remove("logout-in")
})
    
chatForm.addEventListener("submit", function(e) {
    e.preventDefault
    let message = `
        <div class="text-body">
            <p>${chatFormInput.value}<p>
            <span class="chat-time">${new Date().toLocaleTimeString()}</span>
        </div>
    `
    chatBody.innerHTML += message
    chatFormInput.value = ""
})
