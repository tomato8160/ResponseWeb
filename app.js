const hambuerger_icon = document.querySelector('#nav-bar .nav-bar .nav-list .hamburger')
const nav_list = document.querySelector('#nav-bar .nav-bar .nav-list')

hambuerger_icon.addEventListener('click', () => {
    nav_list.classList.toggle('open')
    hambuerger_icon.classList.toggle('active')
})