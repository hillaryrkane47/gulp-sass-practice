var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('hello', function() {
  console.log('Hello Zell');
});

gulp.task('sass', function () {
  return gulp.src('scss/**/*.scss') // // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass()) // Sends it through a gulp plugin
    .pipe(gulp.dest('app/css')) // Outputs the file in the destination folder
})


// Most workflows with Gulp tend to only require 4 different globbing patterns:

// 1. *.scss: The * pattern is a wildcard that matches any pattern in the current directory. In this case, we’re matching any files ending with .scss in the root folder (project).
// 2. **/*.scss: This is a more extreme version of the * pattern that matches any file ending with .scss in the root folder and any child directories.
// 3. !not-me.scss: The ! indicates that Gulp should exclude the pattern from its matches, which is useful if you had to exclude a file from a matched pattern. In this case, not-me.scss would be excluded from the match.
// 4. *.+(scss|sass): The plus + and parentheses () allows Gulp to match multiple patterns, with different patterns separated by the pipe | character. In this case, Gulp will match any file ending with .scss or .sass in the root folder.
