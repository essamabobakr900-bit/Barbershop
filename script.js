/*============ SHOW & CLOSE MENUU ==================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Show menu */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Hide  mene */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*============= REMOVE MOBILE MENU ==========*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we slick on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n =>n.addEventListener('click', linkAction))

/*============= CHANGE HEADER STYLES ===========*/


/*=================== SWIPER WORKS ============*/


/*=================== SWIPER TESTIMONIAL ==================*/


/*================ SHOW SCROLL UP ==========*/


/*========== SCROLL SECTIONS ACTIVE ACTIVE LINK ===========*/


/*============= GSAP ANIMATION =============*/