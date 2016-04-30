var gulp = require('gulp');
var fs = require("fs");

gulp.task('dist', function() {
    
    try{fs.mkdirSync('./dist');}catch(e){}
    fs.writeFileSync("./dist/index.html",'<h1>Ok</h1>')
    return true;
});