'use strict';

document.querySelector('img').addEventListener('click', function() {
    this.classList.toggle('lightbox');
    if(document.querySelector('html').style.background == "") {
        document.querySelector('html').style.background = "rgb(30, 30, 30)";
    } else {
        document.querySelector('html').style.background = "";
    }
});