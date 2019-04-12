// My code is here:

const navItems = document.querySelectorAll('a')

// button hover color function

navItems.forEach((value) => {
    value.addEventListener('mouseover', function(event){
        event.target.style.color = 'green'
    })
})

navItems.forEach((value) => {
    value.addEventListener('mouseout', function(event){
        event.target.style.color = 'black'
    })
})