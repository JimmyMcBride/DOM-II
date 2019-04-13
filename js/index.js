// My code is here:

const navItems = document.querySelectorAll('a')
const headerImage = document.querySelector('img')

// Navbar hover color function

navItems.forEach((value) => {
    value.addEventListener('mouseover', function(event){
        event.target.style.color = 'orange'
    })
})

navItems.forEach((value) => {
    value.addEventListener('mouseout', function(event){
        event.target.style.color = 'black'
    })
})

// Navbar hover animation functions

const shakeAnimation = function(){

    this.animate([
        {transform: 'translate(1px, 1px) rotate(0deg)'},
        {transform: 'translate(-1px, -2px) rotate(-1deg)'},
        {transform: 'translate(-3px, 0px) rotate(1deg)'},
        {transform: 'translate(3px, 2px) rotate(0deg)'},
        {transform: 'translate(1px, -1px) rotate(1deg)'},
        {transform: 'translate(-1px, 2px) rotate(-1deg)'},
        {transform: 'translate(-3px, 1px) rotate(0deg)'},
        {transform: 'translate(3px, 1px) rotate(-1deg)'},
        {transform: 'translate(-1px, -1px) rotate(1deg)'},
        {transform: 'translate(1px, 2px) rotate(0deg)'},
        {transform: 'translate(1px, -2px) rotate(-1deg)'}
        ], {
        duration: 500,
        easing: 'ease-in-out',
        direction: 'normal',
    })
}

const leaveShake = function(){
    this.animate([
        {transform: 'translate(1px, 1px) rotate(0deg)'},
        {transform: 'translate(-1px, -2px) rotate(-1deg)'},
        {transform: 'translate(-3px, 0px) rotate(1deg)'},
        {transform: 'translate(3px, 2px) rotate(0deg)'},
        {transform: 'translate(1px, -1px) rotate(1deg)'},
        ], {
        duration: 100,
        easing: 'ease-in-out',
        iterations: 1,
        direction: 'normal',
    })
}

navItems.forEach((value) => {
    value.addEventListener('mouseenter', shakeAnimation)
})

navItems.forEach((value) => {
    value.addEventListener('mouseleave', leaveShake)
})

// Header image load animation

const spinAnimation = function(){
    this.animate([
        {transform: 'scale(.25)', opacity: .5},
        {transform: 'scale(.5) rotate(900deg)', opacity: .75},
        {transform: 'scale(1) rotate(360deg)', opacity: 1},
        ], {
        duration: 2000,
        easing: 'ease-in-out',
        delay: 10,
        iterations: 1,
        direction: 'normal',
        })
}

headerImage.addEventListener('load', spinAnimation)
