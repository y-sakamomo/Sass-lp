const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('default', function () {
  return gulp.watch('sass/style.scss', function () {
    return gulp.src('sass/style.scss')
      .pipe(sass({
      outputStyle: 'expanded'
    })
    .on('error', sass.logError))
    .pipe(gulp.dest('css'));
  });
});