const navToggle = document.getElementById("nav-toggle")
const nav = document.getElementById("nav")
const button = document.querySelector(".pedir")
const buttonTitle = button.querySelector('[data-title]')
const buttonText = button.querySelector('[data-text]')

navToggle.addEventListener('click', (e) => {
    e.preventDefault();

    navToggle.classList.toggle('active')
    nav.classList.toggle('active')
})

button.addEventListener('click', () => {
    const spinner = `<i class="spinner fas fa-spinner fa-3x"></i>`
    button.setAttribute('disabled', '')
    buttonTitle.remove()
    buttonText.remove()
    button.insertAdjacentHTML('beforeend', spinner);
})