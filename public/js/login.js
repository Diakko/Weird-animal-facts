var valikko = document.getElementById("valikko");

valikko.addEventListener('mouseenter', function(evt) {
    valikko.classList.remove('hide');
    valikko.classList.add('show');
});
valikko.addEventListener('mouseleave', function(evt) {
    valikko.classList.remove('show');
    valikko.classList.add('hide');
});