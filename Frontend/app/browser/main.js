let body = document.querySelector("body");
let logo = document.querySelector(".logo");
let header = document.querySelector("header");
let main = document.querySelector("main");
let switchMode = document.querySelector("#switch-light");
let divSwitch = document.querySelector("#switch");
let icon = document.querySelector(".icon");
let close = document.querySelector("#close");
let trashNav = document.querySelector("#trash-nav");
let menuElipse = document.querySelector("#chat .fa-ellipsis-vertical");
let backArrow = document.querySelector("#chat .fa-arrow-left");
let mobileMenu = document.querySelector("#menu");
let chatWindow = document.querySelector("#chat");
let chatBody = document.querySelector(".chat-body");
let contacts = document.querySelector(".contacts");
let chatForm = document.querySelector("#form-chat");
let chatFormInput = document.querySelector("#add-me");
let logoutForm = document.querySelector("#logout");
let logoutFormClose = document.querySelector(".logout-times");
let friendPic = document.querySelector("#chat .card");

switchMode.addEventListener("click", function () {
  if (body.className === "") {
    main.classList.remove("main-light");
    header.classList.remove("header-light");
    body.classList.add("bg");
    switchMode.classList.remove("switch-light");
    logo.src = "../images/dark-mode.svg";
    divSwitch.classList.remove("switch-mode-light");
    main.classList.add("main-dark");
    header.classList.add("header-dark");
    divSwitch.classList.add("switch-mode-dark");
    switchMode.classList.add("switch-dark");
  } else {
    main.classList.add("main-light");
    header.classList.add("header-light");
    divSwitch.classList.add("switch-mode-light");
    body.classList.remove("bg");
    switchMode.classList.add("switch-light");
    logo.src = "../images/light-mode.svg";
    main.classList.remove("main-dark");
    header.classList.remove("header-dark");
    divSwitch.classList.remove("switch-mode-dark");
    switchMode.classList.remove("switch-dark");
  }
});

for (user in contacts) {
  this.addEventListener("click", function () {
    chatWindow.classList.add("chat-box-in");
  });
}

backArrow.addEventListener("click", function () {
  chatWindow.classList.remove("chat-box-in");
});

close.addEventListener("click", function () {
  trashNav.classList.remove("open");
});

menuElipse.addEventListener("click", function () {
  trashNav.classList.add("open");
});

mobileMenu.addEventListener("click", function () {
  logoutForm.classList.add("logout-in");
});

logoutFormClose.addEventListener("click", function () {
  logoutForm.classList.remove("logout-in");
});

chatForm.addEventListener("submit", function (e) {
  e.preventDefault;
  let message = `
        <div class="text-body">
            <p>${chatFormInput.value}<p>
            <span class="chat-time">${new Date().toLocaleTimeString()}</span>
        </div>
    `;
  chatBody.innerHTML += message;
  chatFormInput.value = "";
});
