const menuToggle = document.querySelector('.menu-toggle')
const mobileMenu = document.querySelector('.mobile-menu')
const closeMenu = document.querySelector('.close-menu')

menuToggle.addEventListener('click', () => {
    console.log('you clicked on toggle')
    mobileMenu.classList.add('open-menu')
})

closeMenu.addEventListener('click', () => {
    console.log('you clicked on close menu')
    mobileMenu.classList.remove('open-menu')
})
