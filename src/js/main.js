'use strict';

const htmlEl = document.querySelector('html');
const iframeEl = document.querySelector('iframe');

document.querySelector('img').addEventListener('click', function() {
    this.classList.toggle('lightbox');
    if(htmlEl.style.background == "") {
        htmlEl.style.background = "rgb(10, 10, 10)";
        iframeEl.style.display = "none";
    } else {
        htmlEl.style.background = "";
        iframeEl.style.display = "initial";
    }
});