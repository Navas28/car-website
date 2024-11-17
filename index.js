/*---------------------------------------------------------- SHOW MENU------------------------------------------------ */

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// ! When the navToggle button is clicked, the show-menu class is added to the navMenu element.
// ! This class  contains styles that make the menu visible ➡️ .show menu{ right : 0;} 

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// ! When the navClose button is clicked, the show-menu class is removed from the navMenu, hiding it again.

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })


}
/*------------------------------------------------------ REMOVE MENU MOBILE--------------------------------------------------------*/

const navLink = document.querySelectorAll('.nav__link')

// ! when click the menu link (home / about / sponsers etcc) Remove Menu 

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

