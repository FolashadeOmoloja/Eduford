let nav = document.querySelector('.nav')
let showMenuIcon = document.querySelector('.show_menu_icon')
let navBar = document.querySelector('.nav-bar')

showMenuIcon.addEventListener('click', showNavMenu)

function showNavMenu () {
    if (nav.className === "nav") {
        nav.classList.add('new_height')
        showMenuIcon.classList.add('close_menu')
        navBar.style.display = 'flex'
      
      } else {
        nav.className = "nav";
        showMenuIcon.classList.remove('close_menu')
        navBar.style.display = 'none'
      }
}
