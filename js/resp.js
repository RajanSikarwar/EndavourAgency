burger = document.querySelector('.burger')
navList = document.querySelector('.nav-list')
navBar = document.querySelector('.navbar')
rightNav = document.querySelector('.rightNav')

burger.addEventListener('click', () => {
    rightNav.classList.toggle('visible-resp');
    navList.classList.toggle('visible-resp');
    navBar.classList.toggle('h-nav-resp');
})