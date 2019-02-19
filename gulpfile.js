const scssInput = ["assets/scss/style.scss"],
  scssOutput = "dist/css",
  vendorInput = ["assets/scripts/vendor/*.js"],
  jsInput = ["assets/scripts/domain/*.js"],
  jsOutput = "dist/scripts";

// Start everything up.
const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const babel = require("gulp-babel");
const concat = require("gulp-concat");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");
// const browserSync = require('browser-sync').create();
const plumber = require("gulp-plumber");

// Watch SASS.
gulp.task("sass", function() {
  return gulp
    .src(scssInput)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(scssOutput));
});

gulp.task("domainScripts", function() {
  return gulp
    .src(jsInput)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ["env"]
      })
    )
    .pipe(concat("scripts.js"))
    .pipe(gulp.dest(jsOutput))
    .pipe(rename("scripts.min.js"))
    .pipe(uglify())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(jsOutput));
});

gulp.task("vendorScripts", function() {
  return gulp
    .src(vendorInput)
    .pipe(plumber())
    .pipe(concat("vendor.js"))
    .pipe(gulp.dest(jsOutput));
});

gulp.task("html", function() {
  return gulp
    .src("./app/index.html")
    .pipe(concat("index.html"))
    .pipe(gulp.dest("dist/"));
});

// gulp.task('browserSync', function() {
//     browserSync.init({
//         server: {
//             baseDir: "./app"
//         }
//     });
// });

gulp.task("watch", ["sass", "domainScripts", "vendorScripts"], function() {
  gulp.watch("assets/scss/**/*.scss", ["sass"]);
  gulp.watch("app/**/*.html");
  gulp.watch("assets/scripts/domain/**/*.js", ["domainScripts"]);
  gulp.watch("assets/scripts/vendor/**/*.js", ["vendorScripts"]);
});

gulp.task("build", ["sass", "domainScripts", "vendorScripts", "html"]);
