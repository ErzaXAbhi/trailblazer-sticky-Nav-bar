const nav = document.querySelector('.nav');

window.addEventListener('scroll', fixNav);

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
};


$('.container').click(function() {
$('.show').slideToggle(2000)
})

//  $('#but').click(function() {
//     $('#wiki').fadeIn(5000)
//  })