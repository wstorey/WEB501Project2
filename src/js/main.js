'use strict';

const htmlEl = document.querySelector('html');
const iframeEl = document.querySelector('iframe');
const olEl = document.querySelector('ol');

document.querySelector('img').addEventListener('click', function() {
    this.classList.toggle('lightbox');
    if(htmlEl.style.background == "") {
        this.style.width = "50%";
        htmlEl.style.background = "rgb(10, 10, 10)";
        document.querySelectorAll('h2').style.background = "rgb(10, 10, 10)";
        iframeEl.style.display = "none";
    } else {
        this.style.width = "";
        htmlEl.style.background = "";
        iframeEl.style.display = "initial";
    }
});