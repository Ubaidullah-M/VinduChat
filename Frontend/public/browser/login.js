let switchMode = document.querySelector('#switch')
let logo = document.querySelector('#image')
let form = document.querySelector('#form')
let formTxt = document.querySelector('#reg-txt')
let btn = document.querySelector('#btn')


switchMode.addEventListener("click", function() {
    if (this.className === "switch-mode-light") {
        this.className = 'switch-mode-dark'
        document.body.classList.add('bg')
        logo.src = "../images/dark-mode.svg"
        form.classList.remove('ligth')
        form.classList.add('dark')
        formTxt.classList.remove('txt-ligth')
        formTxt.classList.add('txt-dark')
        btn.classList.remove('btn-ligth')
        btn.classList.add('btn-dark')
    } else {
        this.className = 'switch-mode-light'
        document.body.classList.remove('bg')
        logo.src = "../images/light-mode.svg"
        form.classList.remove('dark')
        form.classList.add('light')
        formTxt.classList.remove('txt-dark')
        formTxt.classList.add('txt-light')
        btn.classList.remove('btn-dark')
        btn.classList.add('btn-light')
    }
})