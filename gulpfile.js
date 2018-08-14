const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

gulp.task('sass', () => {
    return gulp.src('assets/scss/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(browserSync.stream())
    .pipe(gulp.dest('assets/css'));
});

gulp.task('serve', ['sass'], () => {

    browserSync.init({
        server: './'
    });

    gulp.watch('assets/scss/*.scss', ['sass']);
    gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('default', ['serve'], () => {
    gulp.watch('assets/scss/*.scss', ['sass']);
});
