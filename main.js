const menuToggle = document.querySelector('.menu-toggle')
const mobileMenu = document.querySelector('.mobile-menu')
const closeMenu = document.querySelector('.close-menu')
const overflow = document.querySelector('.overflow')

menuToggle.addEventListener('click', () => {
    console.log('you clicked on toggle')
    mobileMenu.classList.add('open-menu')
    overflow.style.transform = 'translateX(0)'
})

closeMenu.addEventListener('click', () => {
    console.log('you clicked on close menu')
    mobileMenu.classList.remove('open-menu')
    overflow.style.transform = 'translateX(-150px)'
})
