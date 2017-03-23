var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');


// Basic Gulp task syntax
gulp.task('hello', function() {
  console.log('Hello Hill!');
})

// Development Tasks
// -----------------

// Start browserSync server
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    }
  })
})

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass().on('error', sass.logError)) // Sends it through a gulp plugin
    .pipe(gulp.dest('app/css')) // Outputs the file in the destination folder
    .pipe(browserSync.reload({
      stream: true
    }));
})

// Watchers
gulp.task('watch', function() {
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});




