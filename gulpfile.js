const { src, dest } = require("gulp");
const minifyJs = require("gulp-uglify");
const concat = require("gulp-concat");
const pug = require("gulp-pug");

const jsFiles = ["./src/js/api/**/*.js", "./src/js/components/**/*.js"]

const bundleJs = () => {
  return src(jsFiles)
  .pipe(minifyJs())
  .pipe(concat("windows-ui.min.js"))
  .pipe(dest("./dist/"));
}

const compilePug = () => {
  return src(['./docs/source/**/*.pug'])
    .pipe(pug({pretty: true}))
    .pipe(dest("./docs"));
}

exports.bundleJs = bundleJs;
exports.compilePug = compilePug;