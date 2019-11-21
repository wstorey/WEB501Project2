'use strict';

const htmlEl = document.querySelector('html');
const h2El = document.querySelectorAll('h2');
const h3El = document.querySelectorAll('h3');
const olEl = document.querySelector('ol');
const thEl = document.querySelectorAll('th');
const trEl = document.querySelectorAll('tr');
const iframeEl = document.querySelector('iframe');

const background = "rgb(5, 5, 5)";

document.querySelector('img').addEventListener('click', function() {
    this.classList.toggle('lightbox');
    if(htmlEl.style.background == "") {
        this.style.width = "50%";
        document.querySelector('html').style.background = background;

        // document.querySelector('html').style.width = "100%";
        // document.querySelectorAll('h2').style.background = "rgb(10, 10, 10)";

        if(iframeEl !== null) {
            iframeEl.classList.toggle('hidden');
        }

        if(h2El !== undefined) {
            h2El.forEach(el => {
               el.style.background = background;
            });
        }

        if(h3El !== undefined) {
            h3El.forEach(el => {
                el.style.background = background;
             });
        }

        if(trEl !== undefined) {
            trEl.forEach(el => {
                el.style.background = background;
             });
        }

        if(thEl !== undefined) {
            thEl.forEach(el => {
                el.style.background = background;
                el.style.color = "black";
             });
        }

        if(olEl !== null) {
            olEl.style.background = background;
        }

    } else {
        this.style.width = "";
        document.querySelector('html').style.background = "";

        if(iframeEl !== null) {
            iframeEl.classList.toggle('hidden');
        }

        h2El.forEach(el => {
            el.style.background = "";
         });

         h3El.forEach(el => {
            el.style.background = "";
         });

         trEl.forEach(el => {
            el.style.background = "";
         });

        thEl.forEach(el => {
            el.style.background = "";
            el.style.color = "white";
            });

        if(olEl !== null) {
            olEl.style.background = "";
        }
    }
});