function toggleNav() {
    navbar.classList.toggle('open');
    navbarToggle.classList.toggle('open');
}

let navbar = document.getElementById("navbar")

let navbarToggle = document.getElementById('navbar-toggler')

navbarToggle.addEventListener('click', toggleNav)

function activateSlide(number) {
    document.getElementById('slide-1').classList.remove('active')
    document.getElementById('slide-2').classList.remove('active')
    document.getElementById('slide-3').classList.remove('active')
    document.getElementById('slide-4').classList.remove('active')
    document.getElementById('slide-5').classList.remove('active')
    document.getElementById('slide-' + number).classList.add('active')
    document.getElementById('select-btn-1').classList.remove('active')
    document.getElementById('select-btn-2').classList.remove('active')
    document.getElementById('select-btn-3').classList.remove('active')
    document.getElementById('select-btn-4').classList.remove('active')
    document.getElementById('select-btn-5').classList.remove('active')
    document.getElementById('select-btn-' + number).classList.add('active')
}



