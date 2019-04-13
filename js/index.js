// My code is here:

// Animations

    // Shake animations

const slowShake = function(){

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

const fastShake = function(){
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

    // Spin animation

const batmanAnimation = function(){
    this.animate([
        {transform: 'scale(.25)', opacity: .5},
        {transform: 'scale(.5) rotate(900deg)', opacity: .75},
        {transform: 'scale(1) rotate(360deg)', opacity: 1},
        ], {
        duration: 2000,
        easing: 'ease-in-out',
        iterations: 1,
        direction: 'normal',
        })
}

const spinToWin = function(){
    this.animate([
        {transform: 'rotateY(180deg)'},
        {transform: 'rotateX(180deg)'},
        {transform: 'rotateY(180deg)'},
        {transform: 'rotateX(180deg)'},
        // {transform: 'rotateY(90deg)'},
        // {transform: 'rotateX(90deg)'},
        ], {
        duration: 250,
        easing: 'ease-in-out',
        iterations: 1,
        direction: 'alternate',
        })
}

// Navbar hover events

const navItems = document.querySelectorAll('a')

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

navItems.forEach((value) => {
    value.addEventListener('mouseover', slowShake)
})

navItems.forEach((value) => {
    value.addEventListener('mouseout', fastShake)
})

navItems.forEach((value) => {
    value.addEventListener('click', fastShake)
})

// Header image load event

const headerImage = document.querySelector('img')
const images = document.querySelectorAll('img')

headerImage.addEventListener('load', batmanAnimation)

// Image flip event

images.forEach((value) => {
    value.addEventListener('click', spinToWin)
})

// Button event

const btn = document.querySelectorAll('.btn')

btn.forEach((value) => {
    value.addEventListener('click', slowShake)
})

// btn.forEach((value) => {
//     value.addEventListener('click', function(event){
//         event.target.style.display = 'flex'
//     })
// })

// Sign up section

    // Element creators

const newSection = document.createElement('section')
const newHeading = document.createElement('h2')
const button = document.createElement('button')

const nameLabel = document.createElement('label')
const emailLabel = document.createElement('label')
const passwordLabel = document.createElement('label')
const repearPasswordLabel = document.createElement('label')

const nameInput = document.createElement('input')
const emailInput = document.createElement('input')
const passwordInput = document.createElement('input')
const repeatPasswordInput = document.createElement('input')

    // Attribute setters

nameLabel.setAttribute('for', 'name')
emailLabel.setAttribute('for', 'email')
passwordLabel.setAttribute('for', 'password')
repearPasswordLabel.setAttribute('for', 'password-repeat')

nameInput.setAttribute('type', 'text')
nameInput.setAttribute('placeholder', 'Your name goes here:')
nameInput.setAttribute('name', 'name')

emailInput.setAttribute('type', 'text')
emailInput.setAttribute('placeholder', 'Your email goes here:')
emailInput.setAttribute('name', 'email')

passwordInput.setAttribute('type', 'password')
passwordInput.setAttribute('placeholder', 'Your password goes here:')
passwordInput.setAttribute('name', 'password')

repeatPasswordInput.setAttribute('type', 'password')
repeatPasswordInput.setAttribute('placeholder', 'Please repeat your password:')
repeatPasswordInput.setAttribute('name', 'password')

    // Class adders

newSection.classList.add('content-section')
newSection.classList.add('sign-up-sheet')

    // Styles

newSection.style.height = '400px'
newSection.style.borderTop = '2px dashed #C0C0C0'
newSection.style.display = 'none'
newSection.style.flexDirection = 'column'
newSection.style.width = '80%'
newSection.style.margin = '30px auto'

newHeading.style.margin = '20px auto'

nameInput.style.height = '25px'
emailInput.style.height = '25px'
passwordInput.style.height = '25px'
repeatPasswordInput.style.height = '25px'

    // Inner HTML

newHeading.innerHTML = 'Sign Up Form'

nameLabel.innerHTML = '<p>Name</p>'
emailLabel.innerHTML = '<p>Email</p>'
passwordLabel.innerHTML = '<p>Password</p>'
repearPasswordLabel.innerHTML = '<p>Repeat Password</p>'

button.innerHTML = 'Submit'

// Sign up events

btn.forEach((value) => {
    value.addEventListener('click', function(){
        newSection.style.display = 'flex'
    })
})

button.addEventListener('click', fastShake)

nameInput.addEventListener('click', fastShake)
emailInput.addEventListener('click', fastShake)
passwordInput.addEventListener('click', fastShake)
repeatPasswordInput.addEventListener('click', fastShake)

nameInput.addEventListener('keydown', fastShake)

emailInput.addEventListener('keydown', fastShake)

passwordInput.addEventListener('keydown', fastShake)

repeatPasswordInput.addEventListener('keydown', fastShake)

// Adding sign up elements to the DOM

document.querySelector('.home').appendChild(newSection)
document.querySelector('.sign-up-sheet').appendChild(newHeading)
document.querySelector('.sign-up-sheet').appendChild(nameLabel)
document.querySelector('.sign-up-sheet').appendChild(nameInput)
document.querySelector('.sign-up-sheet').appendChild(emailLabel)
document.querySelector('.sign-up-sheet').appendChild(emailInput)
document.querySelector('.sign-up-sheet').appendChild(passwordLabel)
document.querySelector('.sign-up-sheet').appendChild(passwordInput)
document.querySelector('.sign-up-sheet').appendChild(repearPasswordLabel)
document.querySelector('.sign-up-sheet').appendChild(repeatPasswordInput)
document.querySelector('.sign-up-sheet').appendChild(button)

