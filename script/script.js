let menuicon = document.querySelector('div.menu')
    let menuhidden = document.querySelector('div#menu-hidden')

    menuicon.addEventListener('click', menu)

function menu() {
    if (menuhidden.style.display == 'none') {
        menuhidden.style.display = 'flex'
    } else {
        menuhidden.style.display = 'none'
    }
}