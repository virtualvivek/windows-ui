const { src, dest } = require("gulp");
const minifyJs = require("gulp-uglify");
const concat = require("gulp-concat");
const pug = require("gulp-pug");
const formatHtml = require("gulp-format-html");

const jsFiles = [
  "./src/js/variables/**/*.js",
  "./src/js/api/**/*.js",
  "./src/js/components/**/*.js"
]

const bundleJs = () => {
  return src(jsFiles)
  .pipe(minifyJs())
  .pipe(concat("windows-ui.min.js"))
  .pipe(dest("./dist/"));
}

const compilePug = () => {
  return src(['./docs/source/**/*.pug', '!./docs/source/common/**/*.pug'])
    .pipe(pug())
    // .pipe(pug({pretty: true}))
    .pipe(formatHtml())
    .pipe(dest("./docs"));
}

exports.bundleJs = bundleJs;
exports.compilePug = compilePug;