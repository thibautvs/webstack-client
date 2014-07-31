var gulp = require('gulp');
var sass = require('gulp-sass');

var paths = {
  styles: {
    src: './app/styles',
    files: './app/styles/**/*.scss',
    dest: './app/styles/'
  }
};

// A display error function, to format and make custom errors more uniform.
// Could be combined with gulp-util or npm colors for nicer output.
var displayError = function(error) {
  var errorMsg = '[' + error.plugin + ']';
  errorMsg += ' ' + error.message.replace("\n",'');

  if (error.fileName)
    errorMsg += ' in ' + error.fileName;

  if(error.lineNumber)
    errorMsg += ' on line ' + error.lineNumber;

  // This will output an error like the following:
  // [gulp-sass] error message in file_name on line 1
  console.error(errorMsg);
}

gulp.task('sass', function () {
  gulp.src(paths.styles.files)
    .pipe(sass({
        outputStyle: 'compressed',
        includePaths : [paths.styles.src]
    }))
    .pipe(gulp.dest(paths.styles.dest));
});

// This is the default task - which is run when `gulp` is run
// The tasks passed in as an array are run before the tasks within the function
gulp.task('default', ['sass'], function() {
  // Watch the files in the paths object, and when there is a change, fun the functions in the array
  gulp.watch(paths.styles.files, ['sass'])
  // Also when there is a change, display what file was changed, only showing the path after the 'styles' folder
  .on('change', function(evt) {
    console.log(
      '[watcher] File ' + evt.path.replace(/.*(?=styles)/,'') + ' was ' + evt.type + ', compiling...'
      );
    });
});
