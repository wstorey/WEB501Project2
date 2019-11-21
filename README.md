# WEB501Project2
## Project 2 for WEB501 - JavaScript IV

Website for the annual Cooper's Hill Cheese Rolling competition! It is a static website with an index, competition details, rules/about and past winner pages.

## Features

Cooper's Hill Cheese Rolling Competition is build with Nunjucks for templating, Markdown for the website content, Sass for styling and JavaScript to create a lightbox effect for images. The project will include a Gulp file to process the files into HTML &amp; CSS. Two templates are used in Nunjucks, one for home, *home.html* and one for the rest, *page.html*. Both are derived from the *layout.html* file. Layout builds the page from a separate header and footer file with the prior template in between. Once processed, gulp will compress the HTML, CSS, &amp; JS files. These new files can then be found in the __dist__ directory. Once launched, gulp will also watch for file changes from the __src__ directorey. Once saved, gulp will process those changes and refresh the browser. The Index page features a hero image and some general information about the competition. The Competition page features details about the competition as well as a legal notice. It has a picture of Cooper's Hill and a video of what the competition is like. The Rules page has more information about the event as well as some history. There is a general rules list and a photo of an MC with the fabled cheese wheel. The Hall of Fame features previous year's winners with some true and some fictious facts about previous year's competition.

## Getting Started

First, install [Node.js](https://nodejs.org/en/) if you haven't already. To launch the site, start by cloning it and `cd` into it. Next, run `npm install` to download all of the dependencies needed. You can view a full list by opening the `package.json` file. You made need to install gulp globally as well - `npm install gulp -g`. Finally, simply run `gulp` to launch the site! The processed site files will appear in a __dist__ directory. Feel free to adjust anything in the __src__ directory while the site is active to see browser refresh automatically with your changes.

## Attributions
All information &amp; most images taken from the Wikipedia article on [Cooper's Hill Cheese-Rolling and Wake](https://en.wikipedia.org/wiki/Cooper's_Hill_Cheese-Rolling_and_Wake) under the public domain.  
Cheese image provided by <a href="https://unsplash.com/@k_ti?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge">Katrin Leinfellner</a>
