var gulp = require ("gulp");
var server = require("browser-sync").create();

var sass = require("gulp-sass");
var plumber  = require ("gulp-plumber");
var postcss = require ("gulp-postcss");
var autoprefixer = require("autoprefixer");
var inlinesvg = require("postcss-inline-svg");
var flexibility = require ("postcss-flexibility");
var mqpacker = require ("css-mqpacker");
var rigger = require("gulp-rigger");
var pug = require('gulp-pug');

/*
var minify = require ("gulp-csso");
var rename = require ("gulp-rename");
*/

gulp.task('style', function(){
  gulp.src("sass/style.scss")
  .pipe(plumber())
  .pipe(sass())
  .pipe(postcss([
    autoprefixer({browsers:[
      "last 3 versions"
    ]}),
    inlinesvg, flexibility,
    mqpacker({
      sort: true
    })
  ]))
  .pipe(gulp.dest("css"))
/*
  .pipe(minify())
  .pipe(rename("style.min.css"))
  */

  .pipe(server.stream());
});


gulp.task('js-concat', function(){
  gulp.src("js/main.js")
  .pipe(rigger())
  .pipe(gulp.dest("scripts"));
});


gulp.task('html', function() {
    return gulp.src('pug/*.pug')
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest(''));
});



gulp.task("serve", ["style", "js-concat"], function(){
  server.init({
    server:"."
  });
  gulp.watch("sass/**/*.scss", ["style"]);
  gulp.watch("*.html")
  gulp.watch("js/**/*.js", ["js-concat"])
  gulp.watch("pug/**/*.pug", ["html"])
  .on("change", server.reload);
});
