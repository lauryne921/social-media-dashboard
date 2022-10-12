let body = document.querySelector('body'); 

let toggle = document.getElementById('toggle');

let grids = document.getElementsByClassName('grid');

let pattern = document.getElementById('pattern');

toggle.onclick = function () {
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    [...grids].forEach(element => element.classList.toggle('active')); 
    pattern.classList.toggle('active');
}
