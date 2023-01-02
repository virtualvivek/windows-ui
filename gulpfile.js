const { src, dest } = require("gulp");
const minifyJs = require("gulp-uglify");
const concat = require("gulp-concat");
// const sourceMaps = require("gulp-sourcemaps");

const bundleJs = () => {
  return src("./src/js/**/*.js")
  // .pipe(sourceMaps.init())
  .pipe(minifyJs())
  .pipe(concat("windows-ui.min.js"))
  // .pipe(sourceMaps.write())
  .pipe(dest("./dist/"));
}

exports.bundleJs = bundleJs;