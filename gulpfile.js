const { src, dest, watch, parallel, series } = require('gulp');
const fs = require('fs');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const del = require('delete');
const terser = require('gulp-terser');
const markdown = require('gulp-markdown');

const wrap = require('gulp-wrap');
const nunjucksRender = require('gulp-nunjucks-render');

const frontMatter = require('gulp-front-matter');
const minifyHtml = require('gulp-htmlmin');
const imageMin = require('gulp-imagemin');
const cache = require('gulp-cache');

function css() {
    return src('src/scss/**/*.scss')
    .pipe(sass( { outputStyle: 'compressed' } ))
    .pipe(dest('dist/ui'));
}

function image() {
    return src(['src/images/**/*.jpg', 'src/images/**/*.png'])
    .pipe(
        cache(
            imageMin()
        )
    )
    .pipe(dest('dist/ui/images'));
}

function md() {
    const templatePath = data => fs.readFileSync(`src/templates/${data.file.frontMatter.template}.html`).toString();
    return src('src/md/**/*.md')
    .pipe(frontMatter())
    .pipe(markdown())
    .pipe(wrap(
        data => fs.readFileSync(`src/templates/${data.file.frontMatter.template}.html`).toString()
        , null, { engine: 'nunjucks' }))
    // .pipe(nunjucksRender({
    //     path: 'src/templates/'}))
    .pipe(minifyHtml())
    .pipe(dest('dist/'));
}

function js() {
    return src('src/js/**/*.js')
    .pipe(terser())
    .pipe(dest('dist/ui'));
}

function sync(cb) {
    browserSync.init({
        server: { baseDir: 'dist' }
    });
    cb();
}

function reload(cb) {
    browserSync.reload();
    cb();
}

function watch_task() {
    watch('src/scss/**/*.scss', series(css, reload));
    watch('src/md/**/*.md', series(md, reload));
    watch('src/templates/**/*.html', series(md, reload));
    watch('src/js/**/*.js', series(js, reload));
    watch('src/images/**/*', series(image, reload));
}

function clean(cb) {
    del(['dist/**/*'], cb);
}

exports.default = series(clean, parallel(css, md, js, image), sync, watch_task);