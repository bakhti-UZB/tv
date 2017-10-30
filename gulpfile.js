var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var bs = require('browser-sync').create();

var paths = {
    html: ['index.html'],
    css: ['main.scss'],

};

gulp.task('sass', function() {
    return gulp.src('./scss/**/*.{scss,sass}')

    .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./css'));
        // .pipe(bs.reload({ stream: true }));
})

gulp.task('default', ['sass'], function() {
    // bs.init({ proxy: "stroy.t" });
    gulp.watch('./scss/{,*/}*.{scss,sass}', ['sass']);
});
