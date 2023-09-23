let menu = document.getElementById('menu')
let link_container = document.getElementsByClassName('link-container')[0];
menu.addEventListener('click', function() {
    let menu_bar = document.getElementById('hamburger')
    link_container.classList.toggle('active')

    
    // link_container.addEventListener('click', function (event) {
    //     event.stopPropagation();
    // })
    

    // if (menu_bar.classList.contains('fa-bars')) {
    //     menu_bar.classList.replace('fa-bars', 'fa-x')
    // } else {
    //     menu_bar.classList.replace('fa-x', 'fa-bars')
    // }

})


window.addEventListener('click', (event) => {
    if (!event.target.classList.contains('fa-solid')) {
        link_container.classList.remove('active')
    }
})

let dark_mode = document.getElementById('crescent')
dark_mode.addEventListener('click', function () {
    let icon = document.getElementById('moon');
    document.body.classList.toggle('dark-theme')
    if (icon.classList.contains('fa-moon')) {
        icon.classList.replace('fa-moon', 'fa-sun')
        icon.style.color = 'white'
    } else {
        icon.classList.replace('fa-sun', 'fa-moon')
        icon.style.color = 'black'
    }
})

let btn = document.getElementsByClassName('learn-btn');
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', (event) => {
            event.preventDefault() 
        })
        
    }
