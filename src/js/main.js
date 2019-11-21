'use strict';
// Variable declaration
// HTML elements that need to be hidden for lightbox
const h2El = document.querySelectorAll('h2');
const h3El = document.querySelectorAll('h3');
const olEl = document.querySelector('ol');
const thEl = document.querySelectorAll('th');
const trEl = document.querySelectorAll('tr');
const iframeEl = document.querySelector('iframe');

// Background to change to
const background = "rgb(10, 10, 10)";

// Event listener for when an image is clicked
document.querySelector('img').addEventListener('click', function() {
    // When clicked, toggle the lightbox class on the img clicked
    this.classList.toggle('lightbox');
    // If lightbox effect needs to be placed on page
    if(htmlEl.style.background == "") {
        // Img sizing
        this.style.width = "50%";
        // Set HTML element to a dark background, creating a lightbox effect
        document.querySelector('html').style.background = background;

        // So styles conflict and I want everything hidden besides header & footer
        // These if's will begin to check if any conflicting elements are on the current page
        // They check the variables which should be undefined (QuerySelectorAll) or null (QuerySelector) if theyre not on the page
        // If present, change the element's background to the same as the lightbox
        
        // Or in the iframe's case, display none
        if(iframeEl !== null) {
            iframeEl.classList.toggle('hidden');
        }

        // Change h2's background if on page
        if(h2El !== undefined) {
            h2El.forEach(el => {
               el.style.background = background;
            });
        }

        // Change h3's background if on page
        if(h3El !== undefined) {
            h3El.forEach(el => {
                el.style.background = background;
             });
        }

        // Change tr's background if on page
        if(trEl !== undefined) {
            trEl.forEach(el => {
                el.style.background = background;
             });
        }

        // Change th's background if on page
        if(thEl !== undefined) {
            thEl.forEach(el => {
                el.style.background = background;
                el.style.color = "black";
             });
        }

        // Change ol's background if on page
        if(olEl !== null) {
            olEl.style.background = background;
        }

    // If lightbox effect needs to be removed from the page
    } else {
        // Img to original size
        this.style.width = "";
        // Revery HTML background
        document.querySelector('html').style.background = "";

        // These if's will begin to check if any elements need to be changed back to their original state
        // They check the variables which should be undefined (QuerySelectorAll) or null (QuerySelector) if theyre not on the page
        // If present, change the element's background to their original

        // Or in the iframe's case, re-display
        if(iframeEl !== null) {
            iframeEl.classList.toggle('hidden');
        }

        // Revert h2's background if on page
        h2El.forEach(el => {
            el.style.background = "";
         });

        // Revert h3's background if on page
         h3El.forEach(el => {
            el.style.background = "";
         });

        // Revert tr's background if on page
         trEl.forEach(el => {
            el.style.background = "";
         });

        // Revert th's background if on page
        thEl.forEach(el => {
            el.style.background = "";
            el.style.color = "white";
        });

        // Revert ol's background if on page
        if(olEl !== null) {
            olEl.style.background = "";
        }
    }
});