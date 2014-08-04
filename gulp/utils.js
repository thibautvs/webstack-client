'use strict';

exports.regex = {
  trimCssPath: /.*(?=css[\\\/])/,
  trimJsPath: /.*(?=js[\\\/])/
};


// A display error function, to format and make custom errors more uniform.
// Could be combined with gulp-util or npm colors for nicer output.
var displayError = function (error) {
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
