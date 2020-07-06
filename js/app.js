window.sr =ScrollReveal();

sr.reveal('#drop-downInformation', {
    duration: 2000,
    origin: 'right',
    distance: '300px'
});

sr.reveal('#drop-downProyects', {
    duration: 2000,
    origin: 'bottom',
    distance: '300px'
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});